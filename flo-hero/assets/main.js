const WAITLIST_URL = "https://forms.google.com/REPLACE-WITH-YOUR-FORM";
document.querySelectorAll('[data-waitlist]').forEach(a=>a.href=WAITLIST_URL);
requestAnimationFrame(()=>document.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('is-visible'),180+i*180)));
const visual=document.querySelector('[data-parallax]');
if(visual && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  window.addEventListener('pointermove',e=>{
    const x=(e.clientX/innerWidth-.5)*14, y=(e.clientY/innerHeight-.5)*14;
    visual.style.transform=`translate3d(${x}px,${y}px,0)`;
  },{passive:true});
}
document.querySelectorAll('.magnetic').forEach(btn=>{
  if(!matchMedia('(pointer:fine)').matches)return;
  btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});
  btn.addEventListener('pointerleave',()=>btn.style.transform='translate(0,0)');
});
