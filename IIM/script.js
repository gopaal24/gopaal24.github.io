const canvas = document.querySelector('.canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


const context = canvas.getContext('2d')
const frameCount = 30;

const CurrentFrame = (index) => `./bulb-anim/1 (${(index + 1).toString()}).jpg`;
const images = []
const bulb = {frame:0}

for(let i=0;i<frameCount;i++){  
    const img = new Image();
    img.src = CurrentFrame(i);
    images.push(img);
}

gsap.to(bulb,{
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "100%",
    },
    onUpdate: render,
})

images[0].onload = render;

let width_ = images[0].naturalWidth/2;
let x = 0;
let y = 0;
let height_ = images[0].naturalHeight/2;


if((canvas.width/2)!= width_){
    x = width_ - canvas.width/2;
    y = (x*9)/16
}

function render(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log(x, y)
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(images[bulb.frame], -x, y , images[bulb.frame].naturalWidth, canvas.height+y)
}

window.addEventListener("resize", () => {
    console.log("resize")
    render()    
    
    if((canvas.width/2)!= width_){
        x = width_ - canvas.width/2;
        y = (x*9)/16
    }
    
  })