let group = document.querySelector('.group');
// setTimeout(function() {
//     group.classList.add('stop');
// }, 6000)

// setTimeout(function() {
//     group.classList.remove('stop');
// }, 7000)

group.addEventListener("animationstart", function(event) {
    console.log(event);
}, false)
group.addEventListener("animationcancel", function(event) {
    console.log(event);
}, false)
group.addEventListener("animationend", function(event) {
    console.log(event);
}, false)