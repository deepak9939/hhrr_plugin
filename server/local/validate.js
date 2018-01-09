export default function (server, kibanaIndexSuffix) {
  return server.config().get('hhrr.local.groups').indexOf(kibanaIndexSuffix) >= 0;
}
