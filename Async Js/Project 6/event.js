//generate aa random color
 const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
 };
 let intervalid=null;
 const startchangingcolor=function(){
   function  changebgc(){document.body.style.backgroundColor=randomcolor()};
   if(intervalid===null)intervalid= setInterval(changebgc,1000);

    
 };
  const stopchangingcolor=function(){
    clearInterval(intervalid);
    intervalid=null;
  };

  document.querySelector('#start').addEventListener('click',startchangingcolor);
  
  document.querySelector('#stop').addEventListener('click',stopchangingcolor);
