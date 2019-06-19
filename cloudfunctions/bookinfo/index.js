var rp = require('request-promise')

exports.main = (event, context) => {
  var res = rp('https://api.jisuapi.com/isbn/query?appkey=95fb5f2f8b2bae87&isbn=' + event.isbn).then(html => {
    return html;
  }).catch(err => {
    console.log(err);
  })
  return res
}