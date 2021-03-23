//"Navigate to" event listeners

let links = document.getElementById("navigation").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");

let landing = links[0].getElementsByTagName("a");
let about = links[1].getElementsByTagName("a");
let projects = links[2].getElementsByTagName("a");
let magic = links[3].getElementsByTagName("a");
let contact = links[4].getElementsByTagName("a");
let bottom = links[5].getElementsByTagName("a");

landing[0].addEventListener("click", function(event){
    
    window.scrollTo({
    
        top: 0,
        left: 0,
        behavior: 'smooth'
    
    });;

      menuToggle();

});

about[0].addEventListener("click", function(){
    
    window.scrollTo({
    
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    
    });

      menuToggle();

});

projects[0].addEventListener("click", function(){

    window.scrollTo({
    
        top: 2 * window.innerHeight,
        left: 0,
        behavior: 'smooth'
    
    });

      menuToggle();
    
});

magic[0].addEventListener("click", function(){

    window.scrollTo({
    
        top: 3 * window.innerHeight,
        left: 0,
        behavior: 'smooth'
    
    });

      menuToggle();

});

contact[0].addEventListener("click", function(){

    window.scrollTo({
    
        top: 4 * window.innerHeight,
        left: 0,
        behavior: 'smooth'
     
    });

      menuToggle();
});

bottom[0].addEventListener("click", function(){
    
    window.scrollTo({

        top: 4 * window.innerHeight  + window.innerHeight / 5, 
        left: 0,
        behavior: 'smooth'

    });

    menuToggle();

});

//Setting up DarkLightModes event listener
let DarkLighToggler = document.getElementById("DarkLightToggler");

DarkLighToggler.addEventListener("click", lightDarkToggle);

//Media Querry to Determine Wether the Screen is Big Enough to Add Smoke Animation
window.addEventListener("resize", function(){
    
    const isSmokable = window.matchMedia("(min-width:810px)");

    if(isSmokable.matches) split();

});


//Split Header Text to Letters
function split(){
    
    const text = document.getElementById("intro");
    const headline = text.getElementsByTagName("h1")[0];

    headline.innerHTML = headline.textContent.replace(/\S/g, "<span>$&</span>");

    //Hover for span items
    const letters = document.querySelectorAll("span");

    for(let index = 0 ; index < letters.length; index++){   

        letters[index].addEventListener("mouseover", function(){

            letters[index].classList.add("toSmoke");
        
        });

        letters[index].addEventListener("mouseout", function(){

            setTimeout(() => {letters[index].classList.remove("toSmoke")}, 4000);
        
        });

    }

}


// Toggle Between Light and Dark Mode
function lightDarkToggle(){

    let head = document.head;
    
    let ogLink = head.querySelector("link");
    let themeOld= ogLink.getAttribute("href");
    
    let ogImage = document.getElementById("menuImage");
    let imageOld = ogImage.getAttribute("src");

    let newTheme = "DarkMode.css";
    let newImage = "./Images/DarkMode/DarkMode.jpg";

    if(themeOld == "DarkMode.css") newTheme = "LightMode.css";
    
    if(imageOld == "./Images/DarkMode/DarkMode.jpg") newImage = "./Images/LightMode/LightMode.jpg";
    
    ogLink.setAttribute("href", newTheme);
    ogImage.setAttribute("src", newImage);

}

//Navigation Toggle
function menuToggle(){

    let nav = document.getElementById("navigation");
    let toggle = document.getElementById("toggle");

    nav.classList.toggle("active")
    toggle.classList.toggle("active")

}