exports.handler = (event, context, callback) => {
  callback("ERROR", {
    statusCode: 200,
    body: "WORKS!",
  })
  //console.log(event)
}
