// var temp2 = require("./templateV2");


// const mongoose = require("mongoose");



// //step1> get all data from database
// //step2> each data wise create link
// //step3> each object update data

// function get_all_data() {
//     temp2.find().then(async data=>{
//        // console.log('data>>',data);
//         if (data) {


//        // console.log(video_url,thumb_url);
//          for (let index = 0; index < data.length; index++) {
//             // const element = array[index];
//             console.log(index);
//              let url_obj =await get_our_url(data[index]);
//             await update_data(data[index],url_obj);

//          }
//         }

//     });
// }


// function get_our_url(data) {
//     return new Promise((resolve,reject)=>{
//         var video_url = `https://videomakerapp.itcodehelp.com/${data.id}/${data.video_url.split('/').pop()}`;
//         var thumb_url = `https://videomakerapp.itcodehelp.com/${data.id}/${data.thumb_url.split('/').pop()}`
//         var zip_url = `https://videomakerapp.itcodehelp.com/${data.id}/${data.zip_url.split('/').pop()}`;

//         resolve({
//             video_url:video_url,
//             thumb_url:thumb_url,
//             zip_url:zip_url
//         });
//      //   https://videomakerapp.itcodehelp.com/${data.id}/${data.video_url.split('/').pop()}
//      //https://videomakerapp.itcodehelp.com/${data.id}/${data.thumb_url.split('/').pop()}
//      //
//     });
// }


// function update_data(data,url_obj) {
//     return new Promise((resolve,reject)=>{
//         temp2.findByIdAndUpdate(data._id,{
//             video_url:url_obj.video_url,
//             thumb_url:url_obj.thumb_url,
//             zip_url:url_obj.zip_url
//         }).then(data=>{
//             resolve('done');
//         });
//     });
// }

// function start_server() {
//     mongoose.connect('mongodb+srv://admin:admin@clusterbooitcodehelp.bnqig.mongodb.net/test', (err, result) => {
//     if (err) {
//         console.log("Mongodb Connection Error : ", err);
//     }
//     else {
//         // app.listen(process.env.PORT || 1000, () => {
//         //   //  console.log("Server Started At : ", process.env.PORT || 1000);
//         // });
//     }
// });
// }
// start_server();
// get_all_data();