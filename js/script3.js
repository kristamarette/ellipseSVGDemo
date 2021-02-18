$(function() {
    gsap.registerPlugin('GSDevTools');
    let ellipse = [$('ellipse')];
    // console.log(ellipse);
    let myBody = $('body');
    let content = $('#content');
    let div1 = $('#div1');
    let div2 = $('#div2');
    let mySvg = $('svg');
    // console.log(mySvg);
    let heading = $('h1');
    
    window.addEventListener('load', function(event) { 
        // $("#div1").css({'background-color': '#000'});
        
        event.preventDefault();
        pageLoad();
        console.log('ouch');
    })
    
    // window.addEventListener('load', function(event) { 
    //     console.log('ouch');

    // })

    function pageLoad() {
        const tl1 = gsap.timeline({id:'tl1'});


        tl1.to (content,{autoAlpha: 1, duration: 0.3});


        tl1.fromTo(mySvg, {autoAlpha: 0}, {autoAlpha: 1, duration: 0.3}, '-=0.3');
       

        ellipse.forEach((x) => {
            tl1.fromTo(x, {
                opacity: 0
            }, {
                opacity: 0.25, 
                duration: 2,
                stagger: 0.1,
                ease: "power4.Out"
            });
        });


        tl1.to(div1,{autoAlpha: 0, duration: 1});
        tl1.to(div2,{autoAlpha: 1, duration: 1});


        tl1.fromTo(heading,{
            autoAlpha: 0,
            y: '50vh',
            ease: 'bounce.out'
        }, {
            autoAlpha: 1, 
            duration: 1,
            y: 0
        });
       
    } 
    GSDevTools.create({id:'tl1'});
    //------Global Timeline added to bottom of HTML for viewing a timeline for animations.
});
  


