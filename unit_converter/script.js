let cel=document.getElementById('c')
let fer=document.getElementById('f')

cel.addEventListener('input',()=>{
    let c=cel.value
    let f=(c * 9/5) + 32 
    fer.value=f

})
fer.addEventListener('input',()=>{
    let f=fer.value
    let c=(f -32) * 5/9; 
   
    if(!Number.isInteger(c)){
        c=c.toFixed(2)
    };
    cel.value=c

})