function locomotiveAnimations() {
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
}); 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
locomotiveAnimations();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0%",
          end: "top -5%",
          scrub: true,
          
      }
  })
  gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
      }
  })
}
navbarAnimation();

function videoconAnimation() {
  let videocon = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
          scale: 1,
          opacity: 1
      })
  })

  videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
          scale: 0,
          opacity: 0
      })
  })
  videocon.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
          left: dets.x-85,
          top: dets.y-80,
          
      })
  })
}
videoconAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
  
    y: 40,
    delay:0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.5
    
    
    
    
    // y: 30,
    //   opacity: 0,
    //   delay:0.5,
    //   duration: 0.9,
    //   stagger: 0.4
  })
  gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay:1.3,
      duration: 0.5,
  })
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function(dets){
      gsap.to("#cursor", {
          left: dets.x,
          top: dets.y,
      })
  })
  
  document.querySelectorAll(".child").forEach(function(elem) {
      elem.addEventListener("mouseenter", function() {
          const cursor = document.querySelector("#cursor");
          const bgColor = elem.getAttribute("data-color");
  
          gsap.to(cursor, {
              backgroundColor: bgColor,
              transform: 'translate(-50%,-50%) scale(1)'
          });
          
      });
      elem.addEventListener("mouseleave", function() {
          const cursor = document.querySelector("#cursor");
  
          gsap.to(cursor, {
              backgroundColor: 'transparent',
              transform: 'translate(-50%,-50%) scale(0)'
          });
      });
  })
}
cursorAnimation();