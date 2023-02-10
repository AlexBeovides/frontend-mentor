const dicebutton=document.querySelector(".dice-container");
const adviceid=document.querySelector(".advice-id");
const advicetext=document.querySelector(".advice-text");

dicebutton.addEventListener("click",() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data=>{
        let newid=data.slip.id;
        let newadvice=data.slip.advice; 
        adviceid.firstChild.innerHTML="ADVICE #"+newid;
        advicetext.firstChild.innerHTML=newadvice;
    })
});
 