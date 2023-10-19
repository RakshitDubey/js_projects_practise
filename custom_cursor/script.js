let main=document.querySelector('#main')
let crsor=document.querySelector('.cursor')

main.addEventListener('mousemove',(dets)=>{
   crsor.style.left=dets.x+"px"
   crsor.style.top=dets.y+"px"
})
