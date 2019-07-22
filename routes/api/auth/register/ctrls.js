const User = require('../../../../models/users');
const crypto = require('crypto');

exports.add = (req, res) => {
  const body = req.body;

  if (body.id === undefined) return res.send({ success: false, msg: 'param err id' });
  if (body.email === undefined) return res.send({ success: false, msg: 'param err email' });
  if (body.pwd === undefined) return res.send({ success: false, msg: 'param err pwd' });

  let cipher = crypto.createCipher('aes192', 'key');
  cipher.update(body.pwd, 'utf8', 'base64');
  let cipheredOutput = cipher.final('base64');
  body.pwd = cipheredOutput;

  const u = new User({
    id: body.id,
    email: body.email,
    pwd: body.pwd
  });

  u.save()
    .then(() => {
      res.send({ success: true });
    })
    .catch((err) => {
      res.send({ success: false, msg : err.message });
    });
};
