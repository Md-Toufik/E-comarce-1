let Menu = document.querySelector(".menu-bar");
let Nav = document.querySelector("#menu");
const Xmark = document.querySelector("#hidden-x")
Menu.addEventListener("click",()=>{
    if(Nav.className ==='visibility'){
        Nav.classList.remove('visibility');
    }else{
        null
    }
    Xmark.style.display ='block';
    Menu.style.display = 'none';
})
Xmark.addEventListener("click",()=>{
    if(Nav.className ==='visibility'){
        null
    }else{
        Nav.classList.add('visibility')
    }
    Xmark.style.display ='none';
    Menu.style.display = 'block';
})
// Menu.addEventListener("click",()=>{
//     if(Xmark.className === 'x-mark' ){
//         Xmark.style.display ='block';
//         Menu.style.display = 'none';
//     }
// })