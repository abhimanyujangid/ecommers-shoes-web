const wrapper = document.querySelector(".slidewapper")
const menuitem = document.querySelectorAll(".menuitem")

menuitem.forEach((item , index)=>{
    item.addEventListener("click" , () => {
        wrapper.style.transform =  `translateX(${-100 * index}vw)`;
    });
});
