const { Schema, model } = require("mongoose");

var categorySchema = new Schema([
    {
        id: { type: Number },
        name: { type: String },
        sort_by: { type: String },
        image_url: { type: String }
    }
]);

module.exports = model('category', categorySchema);