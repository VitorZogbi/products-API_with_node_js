const express = require('express');
const router = express.Router();
const sku = require('../controllers/sku-controller');
const idValidation = require('../validation/id-validation');
const skuValidation = require('../validation/sku-validation');

router.post('/create', skuValidation.skuValidation(), sku.createSku);

router.get('/list', sku.listSku);

router.get('/findbyid/:id', idValidation.validateId(), sku.findSkuById);

router.get('/findbyproductid/:id', idValidation.validateId(), sku.findProductById);

router.put('/update/:id', idValidation.validateId(), sku.updateSku);

router.delete('/delete/:id', idValidation.validateId(), sku.deleteSku);

module.exports = router;