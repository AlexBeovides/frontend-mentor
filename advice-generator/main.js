const dicebutton=document.querySelector(".dice-container");
const adviceid=document.querySelector(".advice-id");
const advicetext=document.querySelector(".advice-text");
const apiurl="https://api.adviceslip.com/advice";

dicebutton.addEventListener("click",() => {
    fetch(apiurl,{cache: "no-cache"})
    .then(res=>res.json())
    .then(res=>{
        let data=res.slip;
        let newid=data.id;
        let newadvice=data.advice; 

        adviceid.firstChild.innerHTML=`ADVICE # ${newid}`;
        advicetext.firstChild.innerHTML=newadvice;
    })
});
 