const https = require("https");
const fs = require("fs");
// var mkdirp = require('mkdirp');

var categories = [
    {
        "id": 14,
        "name": "Latest",
        "sort_by": "newest",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1568384055_medal.png"
    },
    {
        "id": 13,
        "name": "Popular",
        "sort_by": "popular",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1568383127_trending.png"
    },
    {
        "id": 1,
        "name": "Birthday",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556953953_birthday_cake.png"
    },
    {
        "id": 2,
        "name": "News",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556954243_journalism.png"
    },
    {
        "id": 32,
        "name": "Reels",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1626853765_reel_logo.png"
    },
    {
        "id": 6,
        "name": "Love",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556954641_like.png"
    },
    {
        "id": 58,
        "name": "3D",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1631857646_3d__2_.png"
    },
    {
        "id": 5,
        "name": "Annivarsary",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556954570_gift.png"
    },
    {
        "id": 25,
        "name": "Wedding",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1587374786_bride.png"
    },
    {
        "id": 59,
        "name": "Glow",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1631857980_clean__1_.png"
    },
    {
        "id": 7,
        "name": "Mahadev",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1564561254_shiva.png"
    },
    {
        "id": 3,
        "name": "Magical",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556954379_magic_wand.png"
    },
    {
        "id": 30,
        "name": "Monsoon",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1624690009_monsoon__1_.png"
    },
    {
        "id": 52,
        "name": "Hanuman Jayanti",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1631257514_hanuman.png"
    },
    {
        "id": 34,
        "name": "Lo-Fi",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1628056575_listening.png"
    },
    {
        "id": 33,
        "name": "Spactrum",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1627703213_sound_waves__2_.png"
    },
    {
        "id": 16,
        "name": "Particle",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1570432863_icons8_particle_96.png"
    },
    {
        "id": 21,
        "name": "Lyrical",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1579089089_music.png"
    },
    {
        "id": 28,
        "name": "Born Baby",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1623061530_2021_06_07.png"
    },
    {
        "id": 4,
        "name": "Dialogue",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1556954463_files_and_folders.png"
    },
    {
        "id": 8,
        "name": "Friendship",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1564742950_friends.png"
    },
    {
        "id": 31,
        "name": "Monthly Baby",
        "sort_by": "random",
        "image_url": "https://booapp.b-cdn.net/images/categories/thumb/1626424031_born__2_.png"
    }
]

let jsonData = require('./categories.json');

// console.log("jsonData .....", jsonData);

// const fs = require('fs');

// let student = {
//     name: 'Mike',
//     age: 23,
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda'
// };

// let data = JSON.stringify(student, null, 2);
// fs.writeFileSync('student-2.json', data);
// // console.log("data .....", data);
var main_dir = './categories_template';


async function bk() {

    for (let index = 0; index < categories.length; index++) {
        // const element = array[index];
        console.log("index: .......", index)
        await download_folder_wise(categories[index]);

        console.log("jsonData[index] ...........", categories[index]);

        // console.log('data',jsonData[index]);

    }

    //   fs.mkdirSync(`/bk`, { recursive: true });

}

// mkdirp('/tmp/some/path/foo', function(err) { 

//     // path exists unless there was an error

// });

// {
//     "id": 6,
//     "title": "Crystal Balls",
//     "height": 960,
//     "width": 540,
//     "zip": "2_crystal_balls_v11.zip",
//     "is_hot": false,
//     "video_url": "https://booapp.b-cdn.net/videos/original/1551973614_output.mp4",
//     "thumb_url": "https://booapp.b-cdn.net/images/thumbnails/thumb/1551973623_thumbnail.jpg",
//     "zip_url": "https://booapp.b-cdn.net/files/zip/2_crystal_balls_v11.zip",
//     "is_new": false
// },


//console.log('name ',filename);

function download_folder_wise(data) {

    // fs.mkdirSync(data.id);

    return new Promise((resolve, reject) => {
        //img download
        // var filename = url.split('/').pop();
        var make_folder_url = main_dir + '/' + data.id;

        if (!fs.existsSync(make_folder_url)) {
            fs.mkdirSync(make_folder_url, { recursive: true });
        }
        //fs.mkdirSync(`/${data.id}`, { recursive: true });
        console.log(make_folder_url);

        // var img = download_file(`${make_folder_url}/${data.thumb_url.split('/').pop()}`,data.thumb_url).then((data)=>{
        //    download_file(`${make_folder_url}/${data.thumb_url.split('/').pop()}`,data.thumb_url).then(()=>{
        //         download_file(`${make_folder_url}/${data.thumb_url.split('/').pop()}`,data.thumb_url).then(()=>{
        //             resolve('done');
        //         })
        //     });
        // });

        Promise.all([
            download_file(`${make_folder_url}/${data.thumb_url.split('/').pop()}`, data.image_url),
            // download_file(`${make_folder_url}/${data.video_url.split('/').pop()}`, data.video_url),
            // download_file(`${make_folder_url}/${data.zip_url.split('/').pop()}`, data.zip_url)
        ]).then(res => {
            resolve('done')
        }).catch(err => {
            reject('err')
        })
    });
}


function download_file(path, url) {
    return new Promise((resolve, reject) => {

        https.get(url, (res) => {
            // const path = path+"1551689194_thumbnail.jpg";
            const writeStream = fs.createWriteStream(path);

            res.pipe(writeStream);

            writeStream.on("finish", () => {
                writeStream.close();
                console.log("Download Completed");
                resolve('done');
            });
        });
    });
}