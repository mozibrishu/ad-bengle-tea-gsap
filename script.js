gsap.to(".ingredients", { scale: 1.1, yoyo: true, duration: 1, repeat: -1, stagger: .2 })

function ingredientMove(element,fromTop,fromLeft,boundWidth,boundHeight,transX,transY) {
    Draggable.create(element, {
        type: "x,y", edgeResistance: 0.65, bounds: {
            top: fromTop, left: fromLeft, width: boundWidth, height: boundHeight,
        }, onDragEnd: function () {
            document.querySelector(element).classList.add("moved");
            console.log(elementsCheck());
            gsap.to(element, {
                opacity: 0,
                duration: 1,
                x: transX,
                y: transY,
                display: "none",
                onComplete: completeOperation
    
            })
        }
    })
}
ingredientMove('.element_2',120,5,200,120,90,-10);
ingredientMove('.element_3',80,140,150,100,-90,20);
ingredientMove('.element_4',60,100,150,150,0,90);
ingredientMove('.element_5',80,30,150,150,70,60);
ingredientMove('.element_6',140,150,150,150,-90,-10);

function elementsCheck() {
    return document.querySelectorAll(".moved").length
}

function completeOperation() {
    if (elementsCheck() == 5) {
        gsap.timeline()
            .to(".element_9", {duration: 1,display:'none',opacity:0})
            .to(".element_10", {duration: 1,display:'block',opacity:1},"<")
            .to(".element_7", {duration: 1,display:'none',opacity:0},"<")
            .fromTo(".element_11", {display:'none', x:250},{duration:1,display:'block',x:0},">")
            .to(".element_10",{duration: 1,x:70,y:0},"<")
            .to(".element_11",{duration: 1, scale:0,display:"none"},">")
            .to(".element_10",{duration: 1, scale:0,display:"none"},"<")
            .to(".element_8",{duration: 1, scale:0,display:"none"},"<")
            .fromTo(".element_12",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<.3")
            .fromTo(".element_13",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<")
            .fromTo(".element_14",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<")
            .to(".element_14", {scale:1.1,yoyo:true, repeat:-1})

    }
}