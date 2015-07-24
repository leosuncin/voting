/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  vote: function(req, res) {
    var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
    var postId     = actionUtil.requirePk(req); // Get post identifier
    var action     = req.param('action'); // Get action parameter (`positive` or `negative`)
    var ip         = req.ip; // Get client IP

    Post.findOne({id: postId}).then(function(post) {
      if (!post) {
        // Send 404 response if not found a post
        return res.notFound({
          message: 'Not found post for the given id: ' + postId
        });
      }
      if (req.isSocket) {
        Post.subscribe(req.socket, post); // Subcribe the socket
        ip = req.socket.handshake.address; // Get client IP from webSocket
      }

      // Find if client already make a vote for the post
      return Vote.findOne({ip: ip, post: post.id}).then(function(vote) {
        if (vote) {
          // If already vote do nothing
          return res.ok({update: false});
        } else {
          // If not create a vote for the post
          return Vote.create({ip: ip, post: post.id}).then(function(vote) {
            // Update counter according to action
            if (action === 'positive') {
              post.positive = post.positive + 1;
            }
            if (action === 'negative') {
              post.negative = post.negative + 1;
            }
            // Sumarize total votes
            post.total = post.positive - post.negative;
            // Save changes
            return post.save().then(function(update) {
              // Publish update to socket clients
              Post.publishUpdate(update.id, {
                positive: update.positive,
                negative: update.negative,
                total: update.total
              });
              // Send changes back to client
              return res.ok({
                update: true,
                result: {
                  positive: update.positive,
                  negative: update.negative,
                  total: update.total
                }
              });
            });
          });
        }
      });
    })
    .fail(function(err) {
      // Catch any error and send to client
      return res.negotiate(err);
    });
  }
};
