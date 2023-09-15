export function conflict(message: string) {
  return {
    code: 409,
    message: `${message}`,
  };
}
