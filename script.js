function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive();






function currsoreffect(){
    var cursor = document.querySelector(".cursor");
    var container = document.querySelector(".page1-content");

    container.addEventListener("mousemove", function(dets){
        gsap.to(".cursor",{
            x:dets.x,
            y:dets.y,
        });
        
    });
    
    container.addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            scale:0,
            opacity:0,
        });
        
    });
    
    container.addEventListener("mouseenter", function(){
        gsap.to(".cursor",{
            scale:1,
            opacity:1,
        });
        
    });


}
currsoreffect()

function page2animation(){
    gsap.from(".page2 .maintxt p",{
        y:120,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".page2 .maintxt p",
            scroller:".main",
            start:"top 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:1,
            toggleActions:"play pause resume reset"
            
        }
    });
}
page2animation();

function page2head(){
    gsap.from(".page2 .headings",{
        y:120,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".page2 .headings",
            scroller:".main",
            start:"top 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:3,
            toggleActions:"play pause resume reset"
            
        }
    });
}

page2head();


function page4animation(){
    gsap.from(".page4 .maintxt p",{
        y:120,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".page4 .maintxt p",
            scroller:".main",
            start:"top 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:1,
            toggleActions:"play pause resume reset"
            
        }
    });
   
}
page4animation();   


function page4head(){
    gsap.from(".page4 .headings",{
        y:120,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".page4 .headings",
            scroller:".main",
            start:"top 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:1,
            toggleActions:"play pause resume reset"
            
        }
    });
}

page4head();


function swipeanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
swipeanimation();

function loadinganimation(){
    var tl = gsap.timeline();

tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:.2,
});
tl.to(".loader h3",{
    x:-80,
    opacity:0,
    duration:1,
    stagger:.2,
});

tl.to(".loader",{
  opacity:0,  
});
tl.to(".loader",{
    display:"none",  
});

tl.to(".page1 .cursor",{
    scale:1,
})

tl.from(".page1 .heading h1 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:.2,
});
    
}

loadinganimation();

gsap.from(".footer .heading h1 span",{
  y:100,
  opacity:0,
  duration:1,
  stagger:.2,
  delay:.2,
  scrollTrigger:{
    trigger:".footer .heading h1 span",
    scroller:".main",
    start:"top 80%",
    end:"top 160%",
    // markers:true,
    scrub:1,
    toggleActions:"play pause resume reset"
      
  }
});
