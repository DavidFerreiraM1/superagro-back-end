export function response(data: any, success: boolean, errors: any ) {
  return {
    data,
    success,
    errors
  }
}