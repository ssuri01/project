const router = require('express').Router({ mergeParams: true });

const { getPackages, getPackage, postPackage } = require('../controllers/packageController.js');


router.get('/', getPackages);
router.post('/', postPackage);

module.exports = router;