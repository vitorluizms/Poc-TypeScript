export function notFound(message: string) {
  return {
    code: 404,
    message: `${message}`,
  };
}
