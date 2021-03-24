//"Navigate to" onclicks

let links = document.getElementById("navigation").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");

let landing = links[0].getElementsByTagName("a");
let about = links[1].getElementsByTagName("a");
let projects = links[2].getElementsByTagName("a");
let magic = links[3].getElementsByTagName("a");
let contact = links[4].getElementsByTagName("a");
let bottom = links[5].getElementsByTagName("a");

landing[0].addEventListener("click", function(event){

    event.preventDefault();

    window.scrollTo({

        top: 0,
        left: 0,
        behavior: 'smooth'
    
    });

      
    menuToggle();

});

about[0].onclick = function(){
         
    let section = document.getElementById("about");
    let rect = section.getBoundingClientRect();

    window.scrollTo({

        top: rect.top,
        left: 0,
        behavior: 'smooth'
    
    });

    menuToggle();

}

projects[0].onclick = function(){

    let section = document.getElementById("Projects");
    let rect = section.getBoundingClientRect();

    window.scrollTo({
    
        top: rect.top,
        left: 0,
        behavior: 'smooth'
    
    });

      menuToggle();
    
}

magic[0].onclick = function(){

    let section = document.getElementById("Magic");
    let rect = section.getBoundingClientRect();

    window.scrollTo({
    
        top: rect.top,
        left: 0,
        behavior: 'smooth'
    
    });

      menuToggle();

}

contact[0].onclick = function(){

    let section = document.getElementById("Contact");
    let rect = section.getBoundingClientRect();

    window.scrollTo({
    
        top: rect.top,
        left: 0,
        behavior: 'smooth'
     
    });

      menuToggle();
}

bottom[0].onclick = function(){

    let section = document.getElementsByTagName("footer")[0];
    let rect = section.getBoundingClientRect();
    
    window.scrollTo({

        top:rect.top, 
        left: 0,
        behavior: 'smooth'

    });

    menuToggle();

}

//Setting up DarkLightModes event listener
let DarkLighToggler = document.getElementById("DarkLightToggler");

DarkLighToggler.addEventListener("click", lightDarkToggle);

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

//Turn Letters back to header text
function unsplit(){

    const text = document.getElementById("intro");
    const headline = text.getElementsByTagName("h1")[0];

    //Turn span back to h1
    const letters = document.querySelectorAll("span");

    if(letters.length > 1){
        
        let helper = "";

        for(let index = 0 ; index < letters.length; index++){   

            helper += letters[index].innerHTML;

        }

        helper = helper.slice(0,7) + " " + helper.slice(7,14) + " " + helper.slice(14,18) + " " + helper.slice(18,20) + " " + helper.slice(20,25);

        headline.innerText = helper;

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

//Media Querry to Determine Wether the Screen is Big Enough to Add Smoke Animation
function querryIsSmokable(){
    
    const isSmokable = window.matchMedia("(min-width:810px)");

    if(isSmokable.matches) split();

    else unsplit();

}

//First Querry for Original Page Size
querryIsSmokable();

//Event Listener to Run Media Querry on Resize
window.addEventListener("resize", querryIsSmokable);