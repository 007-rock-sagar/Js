const body=document.querySelector('body')
const contain=document.querySelector('.container')
const form=document.querySelector('form')
//console.log(button)
form.addEventListener('submit',function(e){
    e.preventDefault()
    //body.style.backgroundColor="blue"
   // console.log("BMI")
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results');

   if(height<0 || height===''|| isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;
   }
   else  if(weight<0 || weight===''|| isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
   }
   else{
    const bmi=(weight/((height * height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
    const remarks=document.querySelector('#remarks')
    body.className = '';//this is to stop activwe blinking
    remarks.classList='';//this is to stop activwe blinking
    if(bmi<=18.6){
        remarks.innerHTML=`<h3>"You are under weight"</h3>`;
        body.style.backgroundColor="Red"
        contain.style.backgroundColor="blue"
          remarks.classList.add('blink-red'); // Adds blinking red effect
          contain.classList.add('blink-red');
    }
    else if(bmi>=18.6 && bmi<=24.9){
          remarks.innerHTML=`<h3>"Great...you are fit!! "</h3>`;
           body.style.backgroundColor="Green"
           contain.style.backgroundColor="blue"
    }
    else{
       remarks.innerHTML=`<h3>"You are overweight"</h3>`;
        body.style.backgroundColor="Red"
        contain.style.backgroundColor="blue"
         remarks.classList.add('blink-red'); // Adds blinking red effect
         body.classList.add('blink-red');
    }
    
   }
});
