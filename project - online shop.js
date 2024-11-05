//toggle button for dark mode and light mode
let changeThemeBtn = document.querySelectorAll('.theme');
let html = document.querySelector("html");
let changeThemeText = document.querySelector("#changeThemeText")
let overlay1 = document.querySelector("#overlay1")
let overlay2 = document.querySelector("#overlay2")
let mobileNav = document.querySelector("#mobileNav")
let btnsForToggleMobileNav = document.querySelectorAll(".mobileNavToggle")
let subMenuBtnMobile = document.querySelector("#subMenuOpenMobile")
let subMenuMobile = document.querySelector("#subMenuMobile")
let mobileCartMenu = document.querySelector("#mobileCartMenu")
let btnsForToggleMobileCartMenu = document.querySelectorAll(".mobileCartToggle")
//dark mode function


changeThemeBtn.forEach(function(theme){
    if (localStorage.getItem("status") === 'light') {
        html.className = "light"
        changeThemeText.innerHTML = "تم لایت"
    } else if (localStorage.getItem("status")=== 'dark'){
        html.className = "dark"
        changeThemeText.innerHTML = "تم دارک"
}
    theme.addEventListener("click",function(event){
    
    if (html.classList.contains("dark")) {
        html.className = ""
        localStorage.setItem("status","light")
        changeThemeText.innerHTML = "تم لایت"

    } else {
        
        html.className = "dark"
        localStorage.setItem("status","dark")
        changeThemeText.innerHTML = "تم دارک"
    }
})
})

//set overlay and mobile menu toggle (nav)


console.log(btnsForToggleMobileNav);
btnsForToggleMobileNav.forEach(function(btn){

btn.addEventListener("click",function(){
    mobileNav.classList.toggle("right-0")
    mobileNav.classList.toggle("-right-64")
    
   
    overlay2.classList.toggle("invisible")
    overlay2.classList.toggle("opacity-0")
})
})

//opening the mobile submenu in nav

subMenuBtnMobile.addEventListener("click",function(e){

console.log(e.currentTarget.parentElement.parentElement);
subMenuBtnMobile.classList.toggle("-rotate-90")
subMenuBtnMobile.parentElement.classList.toggle("text-orange-300")
subMenuMobile.classList.toggle("hidden")
subMenuMobile.classList.toggle("flex")

})

//opening the mobile menu (nav)
console.log(btnsForToggleMobileCartMenu);
btnsForToggleMobileCartMenu.forEach(function(btn){

btn.addEventListener("click",function(){

        mobileCartMenu.classList.toggle("left-0")
        mobileCartMenu.classList.toggle("-left-64")
        overlay1.classList.toggle("invisible")
        overlay1.classList.toggle("opacity-0")
        
})
})

let stars = document.querySelectorAll(".star")
let starsCount = stars.length
console.log(stars)
console.log(starsCount)

stars.forEach(function(star){
    star.addEventListener("click",function(){

        if (star.classList.contains("text-yellow-400")) {
            console.log("we did")
            star.classList.add("text-[#9CA3AF]")
            star.classList.remove("text-yellow-400")
            
        } else {
            star.classList.remove("text-[#9CA3AF]")
            star.classList.add("text-yellow-400")        
            
        }
    })
})

let scrollUp = document.querySelectorAll("#scrollUp")
let scrollDown = document.querySelectorAll("#scrollDown")

console.log(scrollDown)
console.log(scrollUp)

scrollDown.scro