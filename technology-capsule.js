let elem_home = document.querySelector("nav div ul li.home")
let elem_dest = document.querySelector("nav div ul li.dest")
let elem_crew = document.querySelector("nav div ul li.crew")
let elem_tech = document.querySelector("nav div ul li.tech")
elem_home.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineHome").classList.add('activeEffectLine');
})
elem_home.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineHome").classList.remove('activeEffectLine')
})
elem_dest.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineDest").classList.add('activeEffectLine');
})
elem_dest.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineDest").classList.remove('activeEffectLine')
})
elem_crew.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineCrew").classList.add('activeEffectLine');
})
elem_crew.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineCrew").classList.remove('activeEffectLine')
})
// elem_tech.addEventListener("mouseover",()=>{
//     document.querySelector(".effectLineTech").classList.add('activeEffectLine');
// })
// elem_tech.addEventListener("mouseout",()=>{
//     document.querySelector(".effectLineTech").classList.remove('activeEffectLine')
// })

document.addEventListener("keydown",(event)=>{
    let visibilityVehicleTech = getComputedStyle(document.getElementById("vehicleTech"))['visibility'];
    let visibilitySpaceportTech = getComputedStyle(document.getElementById("spaceportTech"))['visibility'];
    let visibilityCapsuleTech = getComputedStyle(document.getElementById("capsuleTech"))['visibility'];
    if(event.key=='ArrowDown' && visibilityVehicleTech=='visible'){
        document.getElementById("vehicleTech").style.visibility = 'hidden';
        document.getElementById("spaceportTech").style.visibility = 'visible';
    } else if(event.key=='ArrowDown' && visibilitySpaceportTech=='visible'){
        document.getElementById("spaceportTech").style.visibility = 'hidden';
        document.getElementById("capsuleTech").style.visibility = 'visible';
    } else if(event.key=='ArrowUp' && visibilityCapsuleTech=='visible'){
        document.getElementById("capsuleTech").style.visibility = 'hidden';
        document.getElementById("spaceportTech").style.visibility = 'visible';
    } else if(event.key=='ArrowUp' && visibilitySpaceportTech=='visible'){
        document.getElementById("spaceportTech").style.visibility = 'hidden';
        document.getElementById("vehicleTech").style.visibility = 'visible';
    }
})