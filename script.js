const yesBtn = document.querySelector('#yesBtn');
yesBtn.style.background = 'green';
yesBtn.addEventListener('click', function () {
    alert('Haz dieta :) <3') 
});

const noBtn = document.querySelector('#noBtn');
noBtn.style.background = 'Red';
noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.position = 'absolute'
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`)
})