export default function (server, request) {
  const headerKey = server.config().get('hhrr.proxy_user_header');
  if (headerKey in request.headers) {
    return request.headers[headerKey];
  } else {
    return null;
  }
}
