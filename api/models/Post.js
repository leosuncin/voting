/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    positive: {
      type: 'integer',
      defaultsTo: 0
    },
    negative: {
      type: 'integer',
      defaultsTo: 0
    },
    total: {
      type: 'integer',
      defaultsTo: function() {
        return this.positive - this.negative;
      }
    },
    votes: {
      collection: 'vote',
      via: 'post'
    },
    toJSON: function() {
      var _self = this.toObject();
      delete _self.votes;
      return _self;
    }
  }
};

