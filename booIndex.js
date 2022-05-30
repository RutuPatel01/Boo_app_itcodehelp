const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const templatesData = require("./template.json");
const temp = require("./template");
const categoryData = require("./categories.json");
const category = require("./category");
const temp2 = require("./templateV2");
let axios = require("axios");
const templateV2 = require("./tempv3")
// const { insertMany } = require("./template");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Boo App!!");
});

app.get("/templates", async (req, res) => {
    let sortBy = req.query.sort_by;
    let catId = req.query.cat_id;

    // if (sortBy) {
    //     let getData = await temp2.find({ sort_by: sortBy });
    //     // console.log("getData ......", getData);
    //     res.send({ status: true, message: 'Templates',lenght: getData.length, data: { templates: getData, categories: categoryData } });
    // } if (catId) {
    //     let getData = await temp2.find({ cat_id: catId });
    //     // console.log("getData ......", getData);
    //     res.send({ status: true, message: 'Templates',lenght: getData.length, data: { templates: getData, categories: categoryData } });
    // } if (sortBy && catId) {
    //     let getData = await temp2.find({ cat_id: catId, sort_by: sortBy });
    //     // console.log("getData ......", getData);
    //     res.send({ status: true, message: 'Templates',lenght: getData.length, data: { templates: getData, categories: categoryData } });
    // } else {
    //     let getData = await temp2.find();
    //     // console.log("getData ......", getData);
    //     res.send({ status: true, message: 'Templates',length: getData.length, data: { templates: getData, categories: categoryData } });
    // }

    // let newData = await temp2.aggregate([
    //     {
    //         $match: qry
    //     }
    // ]);
    if (sortBy && catId) {
        let newData = await temp2.find({ cat_id: catId, sort_by: sortBy });
        res.send({ status: true, message: 'Templates', lenght: newData.length, templates: newData, categories: categoryData });
    }
    else if (catId && !sortBy) {
        let newData = await temp2.find({ cat_id: catId });
        res.send({ status: true, message: 'Templates', lenght: newData.length, templates: newData, categories: categoryData });
    }
    else if (!catId && sortBy) {
        let newData = await temp2.find({ sort_by: sortBy });
        res.send({ status: true, message: 'Templates', lenght: newData.length, templates: newData, categories: categoryData });
    }
    else {
        let newData = await temp2.find();
        res.send({ status: true, message: 'Templates', lenght: newData.length, templates: newData, categories: categoryData });
    }

});
// localhost:1000/templates

app.get("/categories", (req, res) => {
    res.send({ status: true, message: 'Categories', data: { categories: categoryData } });
});
//localhost:1000/categories

// app.get("/getData", async (req, res) => {
//     try {
//         let Data = [];
//         let abc = [];
//         const children = [];
//         var len = abc.length;
//         var newArray = [];
//         var q = -1;
//         let cat_id = req.query.cat_id;
//         let sort_by = req.query.sort_by;
//         Promise.all([

//             axios.post(`https://api.superherowall.in/api/v3/get-cat-templates?cat_id=${cat_id}&sort_by=${sort_by}`)
//                 .then(async response => {
//                     Data.push({ sort_by: `${sort_by}`, cat_id: `${cat_id}` });
//                     for (let i = 0; i < response.data.data.templates.length; i++) {
//                         for (let j = 0; j < Data.length; j++) {
//                             abc.push(response.data.data.templates[i], Data[j]);
//                             // children = response.data.data.templates[i].concat(Data[j]);
//                             // children = Array.from({ length: abc.length / 2 }, (_, i) => abc[2 * i] + abc[2 * i + 1]);
//                             // for (var k = 0; k < abc.length; k = k + 2) {
//                             //     children.push(abc[k] + abc[k + 1]);
//                             // }
//                             // for (var p = 0; p < abc.length; p++) {
//                             //     if (p % 2 == 0) {
//                             //         newArray[p] = abc[p];
//                             //     } else {
//                             //         newArray[q] += abc[p];
//                             //     }
//                             //     q++;
//                             // }
//                         }
//                     }
//                     console.log("4523");
//                     for (let a = 0; a < abc.length; a = a + 2) {
//                         console.log("34624645 ......", a);
//                         newArray.push({ ...abc[a], ...abc[a + 1] });
//                     }
//                     // res.send({ status: true, message: 'Templates', data: { templates: abc } });
//                     await templateV2.insertMany(newArray);
//                     console.log("data stored!!");
//                     res.send(abc);
//                 })
//                 .catch(error => {
//                     console.log("error .....", error);
//                 })
//         ])
//     }
//     catch (err) {
//         res.status(500).send(err);

//     }
// });
// localhost:1000/getData?cat_id=14&sort_by=newest

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
