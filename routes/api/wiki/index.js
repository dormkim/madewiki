const router = require('express').Router();
const ctrl = require('./ctrls');

router.get('/', ctrl.list);
router.get('/:_id', ctrl.read);
router.post('/', ctrl.add);
router.put('/', ctrl.mod);
router.delete('/:_id', ctrl.del);

router.all('*', (req, res) => {
    res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});

module.exports = router;
