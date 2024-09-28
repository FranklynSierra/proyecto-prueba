
const menu = document.querySelector(".head");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuinfo = document.querySelector(".infoTop");

const cerrar1=document.querySelector('.cerrar-1')
const cerrar2=document.querySelector('.cerrar-2')
const cerrar3=document.querySelector('.cerrar-3')
const cerrar4=document.querySelector('.cerrar-4')

function toggleMenu() {
  menu.classList.toggle("menu_opened");
  menuinfo.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
cerrar1.addEventListener("click", toggleMenu);
cerrar2.addEventListener("click", toggleMenu);
cerrar3.addEventListener("click", toggleMenu);
cerrar4.addEventListener("click", toggleMenu);


addEventListener('scroll', (e) => {

console.log(e)
    var header = document.querySelector('header')
    var head = document.querySelector('ul')
    var top = document.querySelector('.infoTop')
    var topContent = document.querySelector('.head-0')
    var topContent1 = document.querySelector('.head-1')
    var topContent2 = document.querySelector('.head-2')
    var topContent3 = document.querySelector('.head-3')
    var topContent4 = document.querySelector('.head-4')
    var topContent5 = document.querySelector('.head-5')
    var topContent6 = document.querySelector('.head-6')

    if (window.scrollY > 0) {
        header.classList.add('scrolled')
        head.classList.add('content')
        top.style.backgroundColor = '#fff'
        topContent.style.color = '#02557C'
        topContent1.style.color = '#02557C'
        topContent2.style.color = '#02557C'
        topContent3.style.color = '#02557C'
        topContent4.style.color = '#02557C'
        topContent5.style.color = '#02557C'
        topContent6.style.color = '#02557C'
       
    } else {
        header.classList.remove('scrolled')
        head.classList.remove('content')
        top.style.backgroundColor = '#02557C'
        topContent.style.color = '#fff'
        topContent1.style.color = '#fff'
        topContent2.style.color = '#fff'
        topContent3.style.color = '#fff'
        topContent4.style.color = '#fff'
        topContent5.style.color = '#fff'
        topContent6.style.color = '#fff'
     

    }
})



Element.prototype.watch = function(){
    const self = this;
    self.dataset.src = self.src;
    self.removeAttribute("src");
    self.srcdoc = ``;
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        if(self.dataset.loaded != "ok"){
          self.src = self.dataset.src;
          self.removeAttribute("srcdoc");
          self.dataset.loaded = 'ok';
        }
      }
    });
    observer.observe(self);
  }
  document.querySelectorAll("iframe").forEach(iframe =>iframe.watch());