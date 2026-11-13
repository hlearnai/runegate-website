(()=>{const c=document.getElementById('stars'),x=c.getContext('2d');let s=[],w,h;
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
function size(){w=c.width=innerWidth*devicePixelRatio;h=c.height=innerHeight*devicePixelRatio;
s=Array.from({length:Math.round(w*h/9000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4+.3,p:Math.random()*6.28,v:Math.random()*.02+.005}))}
function draw(){x.clearRect(0,0,w,h);for(const t of s){t.p+=t.v;x.globalAlpha=.35+.65*Math.abs(Math.sin(t.p));
x.fillStyle='#fff';x.beginPath();x.arc(t.x,t.y,t.r*devicePixelRatio,0,6.28);x.fill()}if(!still)requestAnimationFrame(draw)}
addEventListener('resize',size);size();draw()})();
