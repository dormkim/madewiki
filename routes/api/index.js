var express = require('express');
var router = express.Router();

const auth = require('./auth');
const check = require('./check');
const wiki = require('./wiki');

router.all('*', check.verify);

router.use('/auth', auth);
router.use('/wiki', wiki);

router.all('*', (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});

module.exports = router;
