export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "blog.tonyghouse.com" && url.pathname === "/") {
    url.pathname = "/blog/";
    return context.env.ASSETS.fetch(url);
  }

  return context.next();
}
