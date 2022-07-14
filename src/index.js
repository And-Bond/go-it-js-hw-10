import menu from './data/menu.json';
import menuRenderFun from '../templates/menu.hbs';
const listRendered = menuRenderFun(menu)
console.log(listRendered);

const refs = {
    checkBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
    listRender: document.querySelector('.js-menu')
}

refs.listRender.insertAdjacentHTML('beforeend', listRendered)

if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', 'light-theme')
    refs.body.classList.add('light-theme')
}

const THEME = localStorage.getItem('theme')
if(THEME === 'light-theme'){
    refs.body.classList.add('light-theme')
    refs.checkBox.checked = false
}
if(THEME === 'dark-theme'){
    refs.body.classList.add('dark-theme')
    refs.checkBox.checked = true
}

refs.checkBox.addEventListener('change', themeToggleFun)

function themeToggleFun(evt){
    if(refs.body.classList.contains('light-theme')){
        refs.body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark-theme')
        refs.body.classList.remove('light-theme')
        return;
    }
    refs.body.classList.add('light-theme')
    refs.body.classList.remove('dark-theme')
    localStorage.setItem('theme', 'light-theme')
}

