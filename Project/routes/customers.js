const router = require('express').Router({ mergeParams: true });

const { getCustomers, getCustomer, postCustomer } = require('../controllers/customerController.js');

router.get('/:id', getCustomer);
router.get('/', getCustomers);
router.post('/', postCustomer);

module.exports = router;