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
    document.querySelector(".aboveTitanContext_moon").classList.add('activeAboveTitanContext');
})
elem_moon.addEventListener("mouseout",()=>{
    document.querySelector(".aboveTitanContext_moon").classList.remove('activeAboveTitanContext')
})
elem_mars.addEventListener("mouseover",()=>{
    document.querySelector(".aboveTitanContext_mars").classList.add('activeAboveTitanContext');
})
elem_mars.addEventListener("mouseout",()=>{
    document.querySelector(".aboveTitanContext_mars").classList.remove('activeAboveTitanContext');
})    
elem_europa.addEventListener("mouseover",()=>{
    document.querySelector(".aboveTitanContext_europa").classList.add('activeAboveTitanContext');
})
elem_europa.addEventListener("mouseout",()=>{
    document.querySelector(".aboveTitanContext_europa").classList.remove('activeAboveTitanContext')
})
// elem_titan.addEventListener("mouseover",()=>{
//     document.querySelector(".aboveTitanContext_titan").classList.add('activeAboveTitanContext');
// })
// elem_titan.addEventListener("mouseout",()=>{
//     document.querySelector(".aboveTitanContext_titan").classList.remove('activeAboveTitanContext')
// })
document.addEventListener("keydown",(event)=>{
    let text = document.querySelector("h1").textContent;
    if(event.key=='ArrowLeft' && text=='Titan'){
        document.getElementsByClassName("europa")[0].children[0].click()
    }
})