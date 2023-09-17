let elem_home = document.querySelector("nav.header div ul li.home")
let elem_dest = document.querySelector("nav.header div ul li.dest")
let elem_crew = document.querySelector("nav.header div ul li.crew")
let elem_tech = document.querySelector("nav.header div ul li.tech")
elem_home.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineHome").classList.add('activeEffectLine');
})
elem_home.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineHome").classList.remove('activeEffectLine')
})
// elem_dest.addEventListener("mouseover",()=>{
//     document.querySelector(".effectLineDest").classList.add('activeEffectLine');
// })
// elem_dest.addEventListener("mouseout",()=>{
//     document.querySelector(".effectLineDest").classList.remove('activeEffectLine')
// })
elem_crew.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineCrew").classList.add('activeEffectLine');
})
elem_crew.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineCrew").classList.remove('activeEffectLine')
})
elem_tech.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineTech").classList.add('activeEffectLine');
})
elem_tech.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineTech").classList.remove('activeEffectLine')
})

let elem_moon = document.querySelector('.moon')
let elem_mars = document.querySelector('.mars')
let elem_europa = document.querySelector('.europa')
let elem_titan = document.querySelector('.titan')

elem_moon.addEventListener("mouseover",()=>{
    document.querySelector(".aboveEuropaContext_moon").classList.add('activeAboveEuropaContext');
})
elem_moon.addEventListener("mouseout",()=>{
    document.querySelector(".aboveEuropaContext_moon").classList.remove('activeAboveEuropaContext')
})
elem_mars.addEventListener("mouseover",()=>{
    document.querySelector(".aboveEuropaContext_mars").classList.add('activeAboveEuropaContext');
})
elem_mars.addEventListener("mouseout",()=>{
    document.querySelector(".aboveEuropaContext_mars").classList.remove('activeAboveEuropaContext')
})
// elem_europa.addEventListener("mouseover",()=>{
//     document.querySelector(".aboveEuropaContext_europa").classList.add('activeAboveEuropaContext');
// })
// elem_europa.addEventListener("mouseout",()=>{
//     document.querySelector(".aboveEuropaContext_europa").classList.remove('activeAboveEuropaContext')
// })
elem_titan.addEventListener("mouseover",()=>{
    document.querySelector(".aboveEuropaContext_titan").classList.add('activeAboveEuropaContext');
})
elem_titan.addEventListener("mouseout",()=>{
    document.querySelector(".aboveEuropaContext_titan").classList.remove('activeAboveEuropaContext')
})

document.addEventListener("keydown",(event)=>{
    let text = document.querySelector("h1").textContent;
    if(event.key=='ArrowRight' && text=='Europa'){
        document.getElementsByClassName("titan")[0].children[0].click()
    } else if(event.key=='ArrowLeft' && text=='Europa'){
        document.getElementsByClassName("mars")[0].children[0].click()
    }
})