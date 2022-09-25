gsap.to(".ingredients", { scale: 1.1, yoyo: true, duration: 1, repeat: -1, stagger: .2 })

Draggable.create(".element_2", {
    type: "x,y", edgeResistance: 0.65, bounds: {
        top: 120, left: 5, width: 200, height: 120,

    }, onDragEnd: function () {
        document.querySelector(".element_2").classList.add("moved");
        console.log(elementsCheck());
        gsap.to(".element_2", {
            opacity: 0,
            duration: 1,
            y: -10,
            x: 90,
            display: "none",
            onComplete: completeOperation

        })
    }
})

Draggable.create(".element_3", {
    type: "x,y", edgeResistance: 0.65, bounds: {
        top: 80, left: 140, width: 150, height: 100,

    }, onDragEnd: function () {
        document.querySelector(".element_3").classList.add("moved");
        console.log(elementsCheck());
        gsap.to(".element_3", {
            opacity: 0,
            duration: 1,
            x: -90,
            y: 20,
            display: "none",
            onComplete: completeOperation

        })
    }
})

Draggable.create(".element_4", {
    type: "x,y", edgeResistance: 0.65, bounds: {
        top: 60, left: 100, width: 150, height: 150,

    }, onDragEnd: function () {
        document.querySelector(".element_4").classList.add("moved");
        console.log(elementsCheck());
        gsap.to(".element_4", {
            opacity: 0,
            duration: 1,
            x: 0,
            y: 90,
            display: "none",
            onComplete: completeOperation
        })
    }
})

Draggable.create(".element_5", {
    type: "x,y", edgeResistance: 0.65, bounds: {
        top: 80, left: 30, width: 150, height: 150,

    }, onDragEnd: function () {
        document.querySelector(".element_5").classList.add("moved");
        console.log(elementsCheck());
        gsap.to(".element_5", {
            opacity: 0,
            duration: 1,
            x: 70,
            y: 60,
            display: "none",
            onComplete: completeOperation
        })
    }
})

Draggable.create(".element_6", {
    type: "x,y", edgeResistance: 0.65, bounds: {
        top: 140, left: 150, width: 150, height: 150,

    }, onDragEnd: function () {
        document.querySelector(".element_6").classList.add("moved");
        console.log(elementsCheck());
        gsap.to(".element_6", {
            opacity: 0,
            duration: 1,
            x: -90,
            y: -10,
            display: "none",
            onComplete: completeOperation
        })
    }
})

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
            .to(".element_11",{duration: 1, scale:0,display:"none"},">-.2")
            .to(".element_10",{duration: 1, scale:0,display:"none"},"<")
            .to(".element_8",{duration: 1, scale:0,display:"none"},"<")
            .fromTo(".element_12",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<.3")
            .fromTo(".element_13",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<")
            .fromTo(".element_14",{scale:0,display:"none"},{duration: 1, scale:1,display:"block"},"<")
            .to(".element_14", {scale:1.1,yoyo:true, repeat:-1})

    }
}