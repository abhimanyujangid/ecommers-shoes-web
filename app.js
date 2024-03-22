const wrapper = document.querySelector(".slidewapper")
const menuitem = document.querySelectorAll(".menuitem")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 25000,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 13000,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 8000,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 19000,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 32000,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  let choosenproduct = products[0]
  const currntproductimg = document.querySelector(".productimg")
  const currntproducttitle = document.querySelector(".producttitle")
  const currntproductprice = document.querySelector(".productprice")
  const currntproductcolor = document.querySelectorAll(".color")
  const currntproductsize = document.querySelectorAll(".size")

  menuitem.forEach((item , index)=>{
    item.addEventListener("click" , () => {
        //change the current slide
        wrapper.style.transform =  `translateX(${-100 * index}vw)`;
        //change the choose product
        choosenproduct = products[index]

        //change text of currentproduct
        currntproducttitle.textContent = choosenproduct.title
        currntproductprice.textContent = "₹ " + choosenproduct.price
        currntproductimg.src = choosenproduct.colors[0].img


    });
});