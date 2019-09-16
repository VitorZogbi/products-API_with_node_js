const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')

const sku = new mongoose.Schema({
     
    productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'SKUTProduct'
    },

    color: {
            type: String,
            list: true,
            required: true
    },

    size: {
            type: String,
            required: true        
    },

    price: {
            type: Number,
            required: true        
    },

    stockLevel: {
                type: Number,
                required: true        
    },

    active: {
            type: Boolean,
            required: true        
    }
});

sku.plugin(mongoosePaginate);

sku.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('SKU', sku);