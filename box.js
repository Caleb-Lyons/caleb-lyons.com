let pos = { x: 0 };

const vhToPx = (vhValue) => {
  return (window.innerHeight * vhValue) / 100;
};

const boxWidthVH = 55;
const boxDepthVH = 27.5;

const boxWidth = vhToPx(boxWidthVH);
const boxDepth = vhToPx(boxDepthVH); 

gsap.set("#dragger", { opacity: 0 });

gsap.set(".right", { opacity: 0.7 });

gsap.set("#cube", { rotationY: -15 });

gsap.timeline()
    .set(".face", { 
      rotateY: (i) => i * 90,
      
      transformOrigin: (i) => {
        let originZ = (i % 2 === 0) ? -(boxDepth / 2) : -(boxWidth / 2);
        return `50% 50% ${originZ}px`;
      },
      
      z: (i) => {
        return (i % 2 === 0) ? (boxDepth / 2) : (boxWidth / 2);
      },
      
      backfaceVisibility: 'hidden'
    });


Draggable.create('#dragger', {
  
  onDragStart:(e)=>{ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    pos.x = Math.round(e.clientX);
  },
  
  onDrag:(e)=>{
    if (e.touches) e.clientX = e.touches[0].clientX;    
    
    gsap.to('#cube', {
      rotationY: '+=' +( (Math.round(e.clientX)-pos.x)%360 ),
      onUpdate: () => {
        gsap.set('.face', { 
          opacity: (i) => {
            let linearFade = 1 - gsap.utils.wrapYoyo(0, 90, Math.abs(gsap.getProperty('#cube', 'rotationY') + i * 90)) / 90;
            return Math.pow(linearFade, 0.2); 
          }
        });
      }
    });
    
    pos.x = Math.round(e.clientX);
  },
  
  onDragEnd:()=> gsap.set('#dragger', {x:0, y:0})
})

function setupBox() {
  const boxWidth = vhToPx(55);
  const boxDepth = vhToPx(27.5);

  gsap.set(".face", { 
    rotateY: (i) => i * 90,
    transformOrigin: (i) => (i % 2 === 0) ? `50% 50% ${-(boxDepth / 2)}px` : `50% 50% ${-(boxWidth / 2)}px`,
    z: (i) => (i % 2 === 0) ? (boxDepth / 2) : (boxWidth / 2)
  });
}

setupBox();

window.addEventListener('resize', setupBox);