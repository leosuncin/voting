/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'mongoLabHeroku'
  },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: process.env.PORT || 1337,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // },

  /***************************************************************************
   * Disable autoreload on production                                        *
   ***************************************************************************/
  autoreload: {
    active: false,
    usePolling: false
  },

  /***************************************************************************
   * Set the session connection in the production environment                *
   * (see config/session.js)                                                 *
   ***************************************************************************/

  session: {
    adapter: 'redis',
    url: process.env.REDISTOGO_URL || 'redis://localhost:6379/'
  },

  /***************************************************************************
   * Set the socket storage connection in the production environment         *
   * (see config/sockets.js)                                                 *
   ***************************************************************************/

  sockets: {
    adapter: 'socket.io-redis',
    url: process.env.REDISTOGO_URL || 'redis://localhost:6379/'
  },

  hookTimeout: 240000

};
