export function parseJwt(token: any) {
  if (!token) {
    return;
  }
  return Buffer.from(token.toString(), 'base64').toString('ascii');
}
