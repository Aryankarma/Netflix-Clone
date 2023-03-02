// document.querySelector(".learnJS").addEventListener("click",outlineGreen);


// function outlineGreen(){
//     var x = document.querySelector(".learnJS").value;
//     var lengthOfX = x.length;
//     var final = x.slice(lengthOfX-10,lengthOfX);
//     if(final == "@gmail.com"){
//         document.querySelector(".learnJS").classList.add("outlineGreen");  
//     }
// }


// if(final == "@gmail.com"){
//     document.querySelector(".learnJS").classList.add("outlineGreen");  
// }
// document.querySelector(".learnJS").addEventListener("focus",function(){
//     setInterval(function () {
//         var x = document.querySelector(".learnJS").value;
//         var lengthOfX = x.length;
//         var final = x.slice(lengthOfX-10,lengthOfX);
//         if(final === "@gmail.com"){
//             document.querySelector(".learnJS").classList.add("outlineGreen");  
//         }
//     },10000)

   
// });

// document.querySelector(".learnJS").addEventListener("focus",outlineGreen);



// function outlineGreen() {
//     for (let i=0; i<=0; i--) {
//         var x = document.querySelector(".learnJS").value;
//         var lengthOfX = x.length;
//         var final = x.slice(lengthOfX - 10, lengthOfX);
//         setInterval(function(){
//             if (final === "@gmail.com") {
//                 document.querySelector(".learnJS").classList.add("outlineGreen");
//             }
//         },1500);
//     }
// }


document.querySelector(".learnJS").addEventListener("click", function(){
    document.querySelector(".learnJS").classList.add("focusOutlineBlue");
});
document.querySelector(".learnJS").addEventListener("blur", function(){
    document.querySelector(".learnJS").classList.remove("focusOutlineBlue")
});


document.querySelector(".learnJS").addEventListener("change",abcd);

function abcd(){
    var x = document.querySelector(".learnJS").value;
    var lengthOfX = x.length;
    var final = x.slice(lengthOfX - 10, lengthOfX);
    if(x.length<=4){
        document.querySelector(".learnJS2").innerHTML = "Email is required.";
    }else if(x.length>4){
        document.querySelector(".learnJS2").innerHTML = "Please enter a valid email address.";
    }if(final === "@gmail.com"){
        document.querySelector(".learnJS").classList.add("outlineGreen");
        document.querySelector(".learnJS").classList.remove("bottomLineYellow");
        document.querySelector(".learnJS2").classList.add("emailRequired");
    }else if(final != "@gmail.com"){
        document.querySelector(".learnJS").classList.add("bottomLineYellow");
        document.querySelector(".learnJS").classList.remove("outlineGreen");
        document.querySelector(".learnJS2").classList.remove("emailRequired");
    }
}

// document.addEventListener("keypress",function (e){
//     if(e.key==="Enter"){
//         document.querySelector(".pressEnter").click();
//     }
// });

document.querySelector(".pressEnter").addEventListener("click", function(){
    if(final != "@gmail.com"){
        document.querySelector(".learnJS").classList.add("bottomLineYellow");
        document.querySelector(".learnJS").classList.remove("outlineGreen");
        document.querySelector(".learnJS2").classList.remove("emailRequired");
    }
})

// document.querySelector(".pressEnter").addEventListener("click", function(){
//     setInterval(function(){
//         document.querySelector(".pressEnter").classList.add(".pressEnterCSS");
//     },3000);
// })

