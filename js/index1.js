
//ТЕМНАЯ ТЕМА//
let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; 
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName)
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null || activeTheme === 'light') {
    applyTheme('light');
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}
//ИЗМЕНЕНИЕ ШРИФТА//
function fontchange(n){
    var paragraph = document.getElementById('para');
    paragraph.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}
