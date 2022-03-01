const coin = document.querySelector('#coin');
const button = document.querySelector('#toss-button');
const message = document.querySelector('.alert_message');
const sound = document.querySelector('#coin_flip');

button.addEventListener('click', function(){
    sound.play();
    let num = Math.floor(Math.random() * 2);
    coin.style.animation = "none"
    if(num % 2 == 0){
        setTimeout(function(){
            coin.style.animation = "spin-heads 6s forwards";
        }, 100);
        setTimeout(function(){
            message.style.display = "block"
            message.textContent = "IT'S A HEAD!";
        }, 6000)
    } else {
        setTimeout(function(){
            coin.style.animation = "spin-tails 6s forwards";
        }, 100);
        setTimeout(function(){
            message.style.display = "block"
            message.textContent = "IT'S A TAIL!";
        }, 6000)
    };
    message.textContent = '';
});