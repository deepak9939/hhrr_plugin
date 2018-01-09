import generateReply from './generate_reply';
import getLdapGroups from './ldap/get_groups';
import getLocalGroups from './local/get_groups';

export default function (server, request, remoteUser, callback) {

  const config = server.config();

  let groups = [];

  if (config.get('hhrr.local.enabled')) {
    Array.prototype.push.apply(groups, getLocalGroups(server));
  }

  if (config.get('hhrr.ldap.enabled')) {
    getLdapGroups(server, request, remoteUser, groups, callback);
  } else {
    server.log(['plugin:hhrr', 'debug'], 'Found groups: ' + groups.toString());
    callback(generateReply(server, request, remoteUser, groups));
  }
};
