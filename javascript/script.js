const string=document.getElementById("string")

const test=document.getElementById('test')
const clear=document.getElementById('clear')
const uppercase=document.getElementById('UpperCase')
const lowercase=document.getElementById('LowerCase')
const Count=document.getElementById('Count')
const Words=document.getElementById('Words')
const undo=document.getElementById("undo")


test.addEventListener('click',()=>{
    console.log(string.value)
})

clear.addEventListener('click',()=>{
    string.value=""
})
uppercase.addEventListener('click',()=>{
    let upperstring=string.value.toUpperCase()
    string.value=upperstring
    
})
lowercase.addEventListener('click',()=>{
    let lowerstring=string.value.toLowerCase()
    string.value=lowerstring
    
})  
Count.addEventListener("click",()=>{
 const s = string.value;
let count = 0;

for (let i = 0; i < s.length; i++) {
  if (s[i] !== " ") {
    count++;
  }
}

console.log(count);
})

Words.addEventListener('click',()=>{
const s = string.value;
const words = s.split(" ");
let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].trim() !== "") {
    count++;
  }
}

console.log(count);

})
undo.addEventListener('click', () => {
    string.value = originalValue;
  });

  string.addEventListener('input', () => {
    originalValue = string.value;
  });

// same thing in jquery

// $(document).ready(function() {
//     const string = $("#string");
//     const test = $("#test");
//     const clear = $("#clear");
//     const uppercase = $("#UpperCase");
//     const lowercase = $("#LowerCase");
//     const Count = $("#Count");
//     const Words = $("#Words");
//     const undo = $("#undo");
    
//     let originalValue = "";

//     test.click(function() {
//       console.log(string.val());
//     });

//     clear.click(function() {
//       string.val("");
//       originalValue = "";
//     });

//     uppercase.click(function() {
//       let upperstring = string.val().toUpperCase();
//       string.val(upperstring);
//     });

//     lowercase.click(function() {
//       let lowerstring = string.val().toLowerCase();
//       string.val(lowerstring);
//     });

//     Count.click(function() {
//       const s = string.val();
//       let count = 0;

//       for (let i = 0; i < s.length; i++) {
//         if (s[i] !== " ") {
//           count++;
//         }
//       }

//       console.log(count);
//     });

//     Words.click(function() {
//       const s = string.val();
//       const words = s.split(" ");
//       let count = 0;

//       for (let i = 0; i < words.length; i++) {
//         if (words[i].trim() !== "") {
//           count++;
//         }
//       }

//       console.log(count);
//     });

//     undo.click(function() {
//       string.val(originalValue);
//     });

//     string.on('input', function() {
//       originalValue = string.val();
//     });
//   });