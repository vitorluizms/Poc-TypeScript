export function notAccetable(message: string) {
  return {
    code: 406,
    message: `${message}`,
  };
}
