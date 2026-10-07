const WAITLIST_URL="https://docs.google.com/forms/d/e/1FAIpQLSd46xMNUl24eneWQD7mHaOeVypTG3iFNl2sf6CvDNopho0LCQ/viewform?usp=publish-editor";
document.querySelectorAll(".js-waitlist").forEach(a=>a.href=WAITLIST_URL);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll(".reveal,.image-intro").forEach(el=>obs.observe(el));
if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&matchMedia("(pointer:fine)").matches){
 const items=document.querySelectorAll(".parallax");
 addEventListener("pointermove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;items.forEach(el=>{const d=Number(el.dataset.depth||.02);el.style.transform=`translate3d(${x*d*650}px,${y*d*450}px,0) scale(1.02)`})},{passive:true});
}