const router = require('express').Router({ mergeParams: true });

const customerRouter = require('./customers.js');
const packageRouter = require('./packages.js');

router.use('/customers', customerRouter);
router.use('/packages', packageRouter);

module.exports = router;