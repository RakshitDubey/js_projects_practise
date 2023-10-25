var arr=[
    {
        dp:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&q=80&w=1934&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1515202913167-d9a698095ebf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },

]

var stories=document.getElementById("stories")
var clutter=""
arr.forEach((elem,index)=>{
    clutter+=`   <div id="story">
        
    <img src="${elem.dp}" alt="" id="${index}">

  
  </div>`

})
stories.innerHTML=clutter
stories.addEventListener('click',(dets)=>{
    document.getElementById('full-screen').style.display="block"
    document.getElementById('full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(()=>{
        document.getElementById('full-screen').style.display="none"

    },3000)

})
