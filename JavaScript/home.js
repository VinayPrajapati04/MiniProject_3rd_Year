
  
  
  function slideShow() {


    const arr = [ "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9"

    ];
     let i= 0;
    let div = document.getElementById('slider');

    let img = document.createElement('img');
    img.src = arr[0];

    div.append(img);
    i = i+1;

    setInterval (function () {

      if( i==3){
        i=0;
      }
      img.src = arr[i];
      i= i+1;
      div.append(img);

    },2000)
  }
  slideShow();


//   const movies =[
//     {
//       name:"Thor",
//       release:2011,
//       img:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
//       rating:"7.0"
//     },
//     {
//       name:"Minions",
//       release:2015,
//       img:"https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg",
//       rating:"7.9"
//     },
//     {
//       name:"Race",
//       release:2016,
//       img:"https://m.media-amazon.com/images/M/MV5BMTQ3MDM1MDU2NF5BMl5BanBnXkFtZTgwMzM3OTIzNzE@._V1_SX300.jpg",
//       rating:"7.1",
//     },
//     {
//       name:"The Avengers",
//       release:2012,
//       img:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//       rating:"8.0"
//     },
//     {
//       name:"Captain America: The First Avenger",
//       release:2011,
//       img:"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
//       rating:"6.9"
//     },
//     {
//       name:"The Boss Baby",
//       release:2017,
//       img:"https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_SX300.jpg",
//       rating:"6.3"
//     },
//     {
//       name:"Need for Speed",
//       release:2014,
//       img:"https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg",
//       rating:"6.4",
//     },
//     {
//       name:"Rocky Mental",
//       release:2017,
//       img:"https://m.media-amazon.com/images/M/MV5BM2ZmYmNiYjAtZWI0OS00Y2ZkLWIxZTMtMDA2MjNiZDAxNjc4XkEyXkFqcGdeQXVyNDU0Mzg1NTg@._V1_SX300.jpg",
//       rating:"5.1",
//     },{
//       name:"Mumbai Diaries 26/11",
//       release:2021,
//       img:"https://m.media-amazon.com/images/M/MV5BMDQ4MDM0YjEtMTcwMC00YTFiLTlkZmYtYzhmODhjNDIwNzA3XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg",
//       rating:"8.8"
//     }
//   ];

//   localStorage.setItem('movies', JSON.stringify(movies));

//   let data = JSON.parse(localStorage.getItem('movies'));

//   function appendMovie(data) {

//     let data_div = document.getElementById('basic') 
    
//     data_div.innerHTML= null;

//     // data_div.id = 'movies';

//     data.forEach (function(el){
//       let div = document.createElement('div');

//       let name= document.createElement('p')
//       name.innerHTML=`Name: ${el.name}`;

//       let rating = document.createElement('p');
//       rating.innerHTML =`Rating: ${el.rating}`;

//       let img = document.createElement('img');
//       img.id = 'poster'
//       img.src = el.img;

//       div.append(img,name,rating);

//       data_div.append(div);


//     })
//   }

//   let mypromise = new Promise(function (resolve, reject){

//     setTimeout(function(){
//      let  data = movies;
//        if(data != null) {
//             resolve(data);

//        }else {
//         reject('issue from server')

//        }

//     },2000);
// })

// async function main() {
  
//   try{
//     let response = await mypromise;
//     appendMovie(response)
//   } catch(error){
//     console.log('error',error)
//   }
// }
 
// main();

// function sortLH () {
  
//   let data = JSON.parse(localStorage.getItem('movies'));

//    data = data.sort((a,b)=> a.rating - b.rating);

//   appendMovie(data);
// }

// function sortHL () {
  
//   let data = JSON.parse(localStorage.getItem('movies'));

//   data = data.sort((a,b)=> b.rating - a.rating);

//   appendMovie(data);
// }
