var progress=document.querySelector('.progress')
var progresslabel=document.querySelector('.progresslabel')
var startbutton=document.querySelector('.start')

const handleclick=()=>{
    let value=0
    let interval;
    interval=setInterval(()=>{
        if(value==90){
            clearInterval(interval)
        }
        value+=10
        progress.style.width=`${value}%`
        progresslabel.innerText=`${value}%`

    },1000)

}

startbutton.addEventListener('click',()=>{
    handleclick()
})