const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
//console.log(buttons)
buttons.forEach(function(button){
    //console.log(button);
    //apply event listner -->which tracks every events happening on webpage as mouse  click,cursior move,page load
    button.addEventListener('click',function(e){
        // console.log(e)
        //  console.log(e.target)
         switch(e.target.id){
            case "grey":
                body.style.backgroundColor=e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id;
                break; 
            case "white":
                body.style.backgroundColor=e.target.id;
                break;
            case "purple":
                body.style.backgroundColor=e.target.id;
                break;  
            case "blue":
                body.style.backgroundColor=e.target.id;
                break;               
         }

    })
});
/*ere is a quick, bite-sized summary of why we use e.target.id:
• e is the Event Object: It is a massive package of data about the click itself (like mouse position or click time). The package itself does not have an ID, so e.id does not exist.
• e.target is the HTML Element: This points to the actual button that the user clicked on the screen.
• e.target.id is the Button's ID: This opens up the package, looks at the clicked button, and grabs its ID name (like "grey" or "yellow").
*/
