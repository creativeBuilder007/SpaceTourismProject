let elem_home = document.querySelector("nav div ul li.home")
let elem_dest = document.querySelector("nav div ul li.dest")
let elem_crew = document.querySelector("nav div ul li.crew")
let elem_tech = document.querySelector("nav div ul li.tech")
// elem_home.addEventListener("mouseover",()=>{
//     document.querySelector(".effectLineHome").classList.add('activeEffectLine');
// })
// elem_home.addEventListener("mouseout",()=>{
//     document.querySelector(".effectLineHome").classList.remove('activeEffectLine')
// })
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
elem_tech.addEventListener("mouseover",()=>{
    document.querySelector(".effectLineTech").classList.add('activeEffectLine');
})
elem_tech.addEventListener("mouseout",()=>{
    document.querySelector(".effectLineTech").classList.remove('activeEffectLine')
})