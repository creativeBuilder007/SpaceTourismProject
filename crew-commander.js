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
// elem_crew.addEventListener("mouseover",()=>{
//     document.querySelector(".effectLineCrew").classList.add('activeEffectLine');
// })
// elem_crew.addEventListener("mouseout",()=>{
//     document.querySelector(".effectLineCrew").classList.remove('activeEffectLine')
// })
elem_tech.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineTech").classList.add('activeEffectLine');
})
elem_tech.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineTech").classList.remove('activeEffectLine')
})

let elementCommander = document.getElementById('commander');
let elementEngineer = document.getElementById('engineer');
let elementPilot = document.getElementById('pilot');
let elementSpecialist = document.getElementById('specialist');

let buttonCommander = document.getElementsByClassName("commander")[0];
let buttonEngineer = document.getElementsByClassName("engineer")[0];
let buttonPilot = document.getElementsByClassName("pilot")[0];
let buttonSpecialist = document.getElementsByClassName("specialist")[0];

buttonCommander.addEventListener('click',()=>{
    elementCommander.style.visibility = 'visible';
    elementEngineer.style.visibility = 'hidden';
    elementPilot.style.visibility = 'hidden';
    elementSpecialist.style.visibility = 'hidden';
    document.getElementsByClassName("engineer")[0].style.opacity = "0.25";
    document.getElementsByClassName("pilot")[0].style.opacity = "0.25";
    document.getElementsByClassName("specialist")[0].style.opacity = "0.25";
    document.getElementsByClassName("commander")[0].style.opacity = "1";
})
buttonEngineer.addEventListener('click',()=>{
    elementCommander.style.visibility = 'hidden';
    elementEngineer.style.visibility = 'visible';
    elementPilot.style.visibility = 'hidden';
    elementSpecialist.style.visibility = 'hidden';
    document.getElementsByClassName("commander")[0].style.opacity = "0.25";
    document.getElementsByClassName("engineer")[0].style.opacity = "1";
    document.getElementsByClassName("pilot")[0].style.opacity = "0.25";
    document.getElementsByClassName("specialist")[0].style.opacity = "0.25";
})
buttonPilot.addEventListener('click',()=>{
    elementCommander.style.visibility = 'hidden';
    elementEngineer.style.visibility = 'hidden';
    elementPilot.style.visibility = 'visible';
    elementSpecialist.style.visibility = 'hidden';
    document.getElementsByClassName("commander")[0].style.opacity = "0.25";
    document.getElementsByClassName("engineer")[0].style.opacity = "0.25";
    document.getElementsByClassName("pilot")[0].style.opacity = "1";
    document.getElementsByClassName("specialist")[0].style.opacity = "0.25";
})
buttonSpecialist.addEventListener('click',()=>{
    elementCommander.style.visibility = 'hidden';
    elementEngineer.style.visibility = 'hidden';
    elementPilot.style.visibility = 'hidden';
    elementSpecialist.style.visibility = 'visible';
    document.getElementsByClassName("commander")[0].style.opacity = "0.25";
    document.getElementsByClassName("engineer")[0].style.opacity = "0.25";
    document.getElementsByClassName("pilot")[0].style.opacity = "0.25";
    document.getElementsByClassName("specialist")[0].style.opacity = "1";
})

document.addEventListener("keydown",function(event) {
    let visibilityCommander = getComputedStyle(document.getElementById('commander'))['visibility'];
    let visibilityEngineer = getComputedStyle(document.getElementById('engineer'))['visibility'];
    let visibilityPilot = getComputedStyle(document.getElementById('pilot'))['visibility'];
    let visibilitySpecialist = getComputedStyle(document.getElementById('specialist'))['visibility'];
    if(event.key=='ArrowRight' && visibilityCommander=='visible'){
        buttonEngineer.click();
    } else if(event.key=='ArrowRight' && visibilityEngineer=='visible'){
        buttonPilot.click();
    } else if(event.key=='ArrowRight' && visibilityPilot=='visible'){
        buttonSpecialist.click();
    } else if(event.key=='ArrowLeft' && visibilitySpecialist=='visible'){
        buttonPilot.click();
    } else if(event.key=='ArrowLeft' && visibilityPilot=='visible'){
        buttonEngineer.click();
    } else if(event.key=='ArrowLeft' && visibilityEngineer=='visible'){
        buttonCommander.click();
    }
});