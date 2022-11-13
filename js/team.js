  // Team carousel
  const nav = document.querySelectorAll(".navbar-nav li a")
  const brand = document.querySelector(".navbar-brand")
  nav.forEach((e)=>{
    e.addEventListener("click" , (z)=>{
        nav.forEach((x)=>{
            x.classList.remove("active")
        })
        z.target.classList.add("active")
    })
  })
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".up").style.display="flex"
    document.querySelector(".navbar-fixed-top").style.backgroundColor="rgba(0, 0, 0, 0.900)"
    } else {
        document.querySelector(".navbar-fixed-top").style.backgroundColor="transparent";
        document.querySelector(".up").style.display="none"
    }
  });
  document.querySelector(".up").addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  })
  let text = "Portofolio"
  let x = 1;
setInterval(() => {
    brand.innerHTML = text.slice(0, x);
  x++;
  if (x > text.length) {
  x=0
  }
  
}, 1000);
  $(".team-carousel").owlCarousel({
loop:true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    loop:true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});



