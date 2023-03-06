function genrate(){
    let firstname=document.getElementById('name').value;
    let heading1=document.getElementById('heading1');
    heading1.innerHTML=firstname;

    document.getElementById('ad').innerHTML=document.getElementById('address').value;
    document.getElementById('ph').innerHTML=document.getElementById('phone').value;
    document.getElementById('em').innerHTML=document.getElementById('email').value;
    document.getElementById('s').innerHTML=document.getElementById('summary').value;

    let first=document.getElementById('first');
    let sk1=document.getElementById('sk1').value;
    first.innerHTML=sk1;
    document.getElementById('second').innerHTML=document.getElementById('sk2').value;
    document.getElementById('third').innerHTML=document.getElementById('sk3').value;
    document.getElementById('fourth').innerHTML=document.getElementById('sk4').value;
    document.getElementById('fifth').innerHTML=document.getElementById('sk5').value;
    document.getElementById('six').innerHTML=document.getElementById('sk6').value;

    document.getElementById('ex1').innerHTML=document.getElementById('Experiences').value;
    document.getElementById('ed1').innerHTML=document.getElementById('Education').value;
    document.getElementById('lang1').innerHTML=document.getElementById('Languages').value;
    document.getElementById('c1').innerHTML=document.getElementById('Certification').value;
  let builder=document.getElementById('builder');
  builder.classList.add('active');



}

let btn2=document.getElementById('btn2');
btn2.addEventListener('click',()=>{
    window.print()
})