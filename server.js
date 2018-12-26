const express = require('express');

const app = express();

// const router = express().Router();

// router.get('', function(req, res) {
// 	res.json({
//     error: 0,
//     data: 'aaaddd'
//   })
// })
// router.get('', function (req, res) {
//   res.json({
//     error: 0,
//     data: 'aaaddd'
//   })
// })
// router.get('', function (req, res) {
//   res.json({
//     error: 0,
//     data: 'aaaddd'
//   })
// })
app.use(express.static('./dist'));
const port = 8900;

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening at http:111.231.99.181:' + port + '\n');
});
