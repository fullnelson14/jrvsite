exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "WORKS!",
  })
  //console.log(event)
}
