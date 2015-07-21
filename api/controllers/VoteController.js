/**
 * VoteController
 *
 * @description :: Server-side logic for managing votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = {
  _config: {
    actions: false,
    rest: false,
    shortcuts: false
  },
	vote: function (req, res) {
    var postId = actionUtil.requirePk(req);
    var action = req.param('action');
    var ip     = req.ip;

    Post.findOne({id: postId}).then(function(post){
      if (!post) {
        return res.notFound({message: 'Not found post for the given id: ' + postId});
      }
      if (req.isSocket) {
        Post.subscribe(req.socket, post);
        ip = req.socket.handshake.address;
      }
      return Vote.findOne({ip: ip, post: post.id}).then(function(vote) {
        if (vote) {
          return res.ok(post);
        } else {
          return Vote.create({ip: ip, post: post.id}).then(function(vote) {
            if (action === 'positive') {
              post.positive = post.positive + 1;
            }
            if (action === 'negative') {
              post.negative = post.negative + 1;
            }
            post.total = post.positive - post.negative;

            return post.save().then(function(update) {
              Post.publishUpdate(update.id, {positive: update.positive, negative: update.negative, total: update.total});
              return res.ok(update);
            });
          })
        }
      });
    })
    .fail(function(err) {
      return res.negotiate(err);
    });
  }
};

