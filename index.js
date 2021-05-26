var b = document.querySelector(".container");
var blue = document.querySelector(".blue")
var orange = document.querySelector(".orange")
var red = document.querySelector(".red")
var black = document.querySelector(".black")
orange.addEventListener("mouseenter", e=>{
 
    orange.style.transform = "translateZ(50px) scale(1.02)"
   
    var s = document.querySelectorAll("svg path")
        for(let i=0; i<s.length; i++){
            if(s[i].attributes.fill.value == "#6C63FF")
            {
            s[i].style.fill = "tomato"
        }
    }

  
})
orange.addEventListener("mouseout",e =>{
   
  
    orange.style.transform = "translateZ(0px) scale(1)"
    
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "#6c63ff"
    }
    
}


})

blue.addEventListener("mouseenter", e=>{
   
    blue.style.transform = "translateZ(50px) scale(1.02)"
   
    orange.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "blue"
    }
}

    
})
blue.addEventListener("mouseout",e =>{
    blue.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "#6c63ff"
    }
}

})

black.addEventListener("mouseenter", e=>{
    

    black.style.transform = "translateZ(50px) scale(1.02)"
   
    blue.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "black"
    }

}
    
})
black.addEventListener("mouseout",e =>{
    blue.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "#6c63ff"
    }
}

})

red.addEventListener("mouseenter", e=>{
    
   
    red.style.transform = "translateZ(50px) scale(1.02)"
 
    blue.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "red"
    }
}
  
})
red.addEventListener("mouseout",e =>{
    blue.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    var s = document.querySelectorAll("svg path")
    for(let i=0; i<s.length; i++){
        if(s[i].attributes.fill.value == "#6C63FF")
        {
        s[i].style.fill = "#6c63ff"
    }
}

})
b.addEventListener("mousemove",e =>{
   
    var inn = document.querySelector(".inner");
    var bike = document.querySelector("svg");
    bike.style.transform = "rotateZ(-35deg) translateZ(70px) scale(1.1)"
  
   var x = ((window.innerWidth)/2-e.pageX)/10;
   var y = ((window.innerHeight)/2-e.pageY)/10;
   console.log(e.pageY,e.pageX)
    inn.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
    
   
    var heading =  document.querySelector("h1");
    var btn1 =  document.querySelector(".purchase");
    var btn2 =  document.querySelector(".info");
    var d =  document.querySelector(".des");
    var wh = document.querySelector(".backwheel")
    wh.style.transform = " scale(1.02) rotate(720deg)"
    d.style.transform = "translateZ(50px) scale(1.02)"
    btn2.style.transform = "translateZ(50px) scale(1.02)"
    btn1.style.transform = "translateZ(50px) scale(1.02)"
    heading.style.transform = "translateZ(50px) scale(1.02)"
   
  
    
   
  
    
})

b.addEventListener("mouseout",e =>{
    var heading =  document.querySelector("h1");
    var btn1 =  document.querySelector(".purchase");
    var btn2 =  document.querySelector(".info");
    var inn = document.querySelector(".inner");
    var bike = document.querySelector("svg");
    bike.style.transform = "rotateZ(0deg) translateZ(0px) scale(1)"
    inn.style.transform = `rotateX(0deg) rotateY(0deg)`;
    var d =  document.querySelector(".des");
    d.style.transform = "translateZ(0px) scale(1)"
    btn2.style.transform = "translateZ(0px) scale(1)"
    btn1.style.transform = "translateZ(0px) scale(1)"
    heading.style.transform = "translateZ(0px) scale(1)"
    blue.style.transform = "translateZ(0px) scale(1)"
    orange.style.transform = "translateZ(0px) scale(1)"
    red.style.transform = "translateZ(0px) scale(1)"
    black.style.transform = "translateZ(0px) scale(1)"
    var wh = document.querySelector(".backwheel")
    wh.style.transform = " scale(1) rotate(0deg)"
  
})