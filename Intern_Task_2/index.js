// var triggerTabList = [].slice.call(document.querySelectorAll('home-tab button'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })


// var triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
// bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

// var triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
// bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab

var hbtn=document.querySelector(".col3 .trh")
var home=document.querySelector(".col3 .trh")
hbtn.addEventListener("click",function(){
    home.textContent="Nothing in Appearance";
})
var pbtn=document.querySelector(".tright #pills-profile-tab")
var profile=document.querySelector("#pills-profile")
pbtn.addEventListener("click",function(){
    profile.textContent="Nothing in Option";
})
var cbtn=document.querySelector(".tright #pills-contact-tab")
var contact=document.querySelector(" #pills-contact")
cbtn.addEventListener("click",function(){
    contact.textContent="Nothing in Animation";
})