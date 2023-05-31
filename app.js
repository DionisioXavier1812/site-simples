'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    var classname = document.body.className;
    if (classname === "light-theme") {
        switcher.textContent = "dark";
        console.log('current class name: ' + classname);
    } else {
        switcher.textContent = "light";
    }
});