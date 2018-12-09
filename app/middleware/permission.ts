export default function hq() {
  return async function hqCheck(ctx, next) {
    console.log('hq permission check!', ctx)
    await next()
    console.log('hq permission after check!')
  }
}
