const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const cfg = require('../../../../cfg/cfg');
const User = require('../../../../models/users');

exports.in = (req, res) => {
  const body = req.body;

  if (body.id === undefined) return res.send({ success: false, msg: 'param err id' });
  if (body.pwd === undefined) return res.send({ success: false, msg: 'param err pwd' });

  User.findOne()
    .where('id').equals(body.id)
    .then((r) => {
      if (!r) throw new Error('id not exists');
      let decipher = crypto.createDecipher('aes192', 'key');
      decipher.update(r.pwd, 'base64', 'utf8');
      let decipheredOutput = decipher.final('utf8');

      if (body.pwd !== decipheredOutput) throw new Error('password diff');

      const secret = req.app.get('jwt-secret');
      const p = new Promise((resolve, reject) => {
        jwt.sign(
          {
            _id: r._id,
            id: r.id,
            email: r.email
          },
          secret,
          {
            expiresIn: '2m',
            issuer: cfg.web.host,
            subject: 'user-token'
          }, (err, token) => {
            if (err) reject(err);
            resolve(token);
          })
        })
        return p;
    })
    .then((tk) => {
    res.send({ success: true, token: tk });
  })
};

exports.out = (req, res) => {
  res.send({ success: true });
};
