
$(function() {
    // let ellipse = $('ellipse');
    // console.log(ellipse);
    let ellipses =[$("div>svg>ellipse")];
    let myBody = $("body");
    let div1 = $("div:nth-child(1)");
    let div2 = $("div:nth-child(2)");

 window.addEventListener('load', (event) => {
     pageLoad();
 })

    function  preLoad () {
        myVar = setTimeout(pageLoad, 3000);
    }
    
    function pageLoad() {
        let pageload = gsap.timeline({ id:"pageload"
    });
        myBody.load(pageLoad());

        // console.log(ellipse);


        ellipses.forEach((x) => {
            gsap.fromTo(x,{
            opacity: 0
    
            },
            {
            opacity: 0.35,
            duration: 2,
            stagger: 0.1,
            ease: "power4.Out",
            delay: 2
            })
        });
      
    }//closes the array of ellipses displayed in the svg in the HTML
function fadeElems() {
    let fadeelems = gsap.timeline({
        id: "fadeElems"
    });
    fadeElems.fromTo(div1, {
        autoAlpha: 1
    }, {
        autoAlpha: 0, duration: 2
    })
}

let master = gsap.timeline();
master
.add(pageload())
.add(fadeElems())

// div1.css("display", "none");
// div2.css("display", "flex");
});



//------Global Timeline added to bottom of HTML for viewing a timeline for animations.
GSDevTools.create();
