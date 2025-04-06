const chooses = ['Rock', 'Paper', 'Scissor'];
function playGame(){
let comcos =chooses[Math.floor(Math.random() * chooses.length)]
document.getElementById("comcos").value =comcos ;

let usercos =document.querySelector('input[name="dis"]').value;

if (!usercos) {
    document.getElementById("result").value = 'Please make a choice!';
    return;
}

if(usercos === comcos){
    document.getElementById("result").value='Game tie!';
}
else if(
    (usercos ==='Rock' && comcos ==='Scissor') || (usercos === 'Paper' && comcos ==='Rock') || (usercos === 'Scissor' && comcos === 'Paper') ){
        document.getElementById("result").value='You win,Congrats!';
    }
    else {
        document.getElementById("result").value='Computer win,try again!';
    }
}