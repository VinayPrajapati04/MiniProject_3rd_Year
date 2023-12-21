
  
  
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

