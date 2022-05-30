const { Schema, model } = require("mongoose");

var templateV2Schema = new Schema([
    {
        id: { type: Number },
        title: { type: String },
        height: { type: Number },
        width: { type: Number },
        zip: { type: String },
        is_hot: { type: Boolean },
        video_url: { type: String },
        thumb_url: { type: String },
        zip_url: { type: String },
        is_new: { type: Boolean },
        cat_id: { type: Number },
        sort_by: { type: String },
    },
]);

module.exports = model('templateV2', templateV2Schema);