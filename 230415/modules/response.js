export default function response (res, type, page) {
  res.writeHead(200, { "Content-Type": type });
  res.write(page);
  res.end();
};