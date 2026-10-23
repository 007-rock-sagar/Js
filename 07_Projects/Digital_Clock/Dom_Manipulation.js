const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock)
/*Because a clock needs to update every single second without the user
  refreshing the page, setInterval() acts like a repetitive heartbeat—it
  triggers a function again and again at a fixed time interval.*/
  
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);
