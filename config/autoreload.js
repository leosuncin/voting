/**
 * Just lift your app as normal, and when you add / change / remove a model,
 * controller or service file, all controllers, models, and services will be
 * reloaded without having to lower / relift the app. This includes all
 * blueprint routes.
 *
 * Parameter   Type        Details
 * active      {{boolean}} Whether or not the hook should watch for controller
 *                         / model / service changes. Defaults to true.
 * usePolling  {{boolean}} Whether or not to use the polling feature. Slower
 *                         but necessary for certain environments.
 *                         Defaults to false.
 * dirs        {{array}}   Array of strings indicating which folders should be
 *                         watched. Defaults to the api/models, api/controllers,
 *                         and api/services folders. Note that this won't
 *                         change the set of files being reloaded, but the set
 *                         of files being watched for changes. As for now, it's
 *                         not possible to add new directories to be reloaded.
 */
var path = require('path');

module.exports.autoreload = {
  active: true,
  usePolling: true,
  dirs: [
    path.resolve('api/controllers'),
    path.resolve('api/models'),
    path.resolve('api/responses'),
    path.resolve('api/services')
  ]
}
