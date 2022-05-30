const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const json2xls = require("json2xls");
// const cors = require("cors");
const path = require("path");
// const v1 = require("./router/v1");
// require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
const templatesData = require("./template.json");
const temp = require("./template");
const categoryData = require("./categories.json");
const category = require("./category");
let axios = require("axios");
const https = require("https");
const fs = require("fs");
let request = require('request');
const templateV2 = require("./templateV2");

var templates = [
    {
        "id": 6,
        "title": "Crystal Balls",
        "height": 960,
        "width": 540,
        "zip": "2_crystal_balls_v11.zip",
        "is_hot": false,
        "video_url": "https://booapp.b-cdn.net/videos/original/1551973614_output.mp4",
        "thumb_url": "https://booapp.b-cdn.net/images/thumbnails/thumb/1551973623_thumbnail.jpg",
        "zip_url": "https://booapp.b-cdn.net/files/zip/2_crystal_balls_v11.zip",
        "is_new": false
    },
    {
        "id": 7,
        "title": "Birthday",
        "height": 960,
        "width": 540,
        "zip": "3_birthday.zip",
        "is_hot": false,
        "video_url": "https://booapp.b-cdn.net/videos/original/1578297814_output12.mp4",
        "thumb_url": "https://booapp.b-cdn.net/images/thumbnails/thumb/1551689194_thumbnail.jpg",
        "zip_url": "https://booapp.b-cdn.net/files/zip/3_birthday.zip",
        "is_new": false
    }
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(json2xls.middleware);

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Initial Route for fracasset" });
});
// app.use("/v1", v1);

app.get("/templates", (req, res) => {

    // {
    //     "status": true,
    //     "message": "Templates",
    //     "data": {
    //         "templates":
    res.send({ status: true, message: 'Templates', data: { templates: templateV2, categories: categoryData } });
});
// localhost:1000/templates

app.get("/categories", (req, res) => {
    res.send(categoryData);
});
//localhost:1000/categories

app.get("/getData", async (req, res) => {
    try {
        let cat_id = req.query.cat_id;
        let sort_by = req.query.sort_by;
        // console.log("ID .....", req.query.id);
        // // let result = await category.find({ id: id })
        // // res.send(result);
        // let qry = {};
        // if (sort_by) {
        //     qry['sort_by'] = req.query.sort_by;
        // }
        // // if (id) {
        // //     qry['id'] = req.query.id;
        // // }
        // category.aggregate([
        //     // {
        //     //     $match:
        //     //     {
        //     //         id: req.query.id,
        //     //         sort_by: req.query.sort_by
        //     //     }
        //     // },
        //     { $match: qry },
        //     // {
        //     //     $lookup: {
        //     //         from: 'temps',
        //     //         localField: '',
        //     //         foreignField: '',
        //     //         as: '',
        //     //     }
        //     // },
        // ])
        //     .then((result) => { res.send({ status: true, message: 'Templates', data: result }) })
        //     .catch((err) => { console.log(err) })

        const sort_data = ['popular', 'random', 'newest', 'oldest'];

        // for (i = 0; i < categoryData.length; i++) {
        //     for (j = 0; j < sort_data.length; j++) {
        // console.log("response .........", categoryData);
        Promise.all([

            axios.post(`https://api.superherowall.in/api/v3/get-cat-templates?sort_by=${sort_by}&cat_id=${cat_id}`)
                .then(response => {
                    res.send(response.data);
                    // let json = JSON.stringify(response.data);
                    // fs.writeFileSync(make_folder_url1, json);
                    //    fs.writeFileSync(make_folder_url1, JSON.stringify(response.data));
                    // console.log(response);
                })
                .catch(error => {
                    console.log("error .....", error);
                })
        ])
        //     }
        // }
    }
    catch (err) {
        res.status(500).send(err);

    }
});
// localhost:1000/getData?id=14&sort_by=newest

mongoose.connect('mongodb+srv://admin:admin@clusterbooitcodehelp.bnqig.mongodb.net/test', (err, result) => {
    if (err) {
        console.log("Mongodb Connection Error : ", err);
    }
    else {
        app.listen(process.env.PORT || 1000, () => {
            console.log("Server Started At : ", process.env.PORT || 1000);
        });
    }
});
