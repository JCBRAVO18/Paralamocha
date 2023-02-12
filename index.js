const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('jsjasj bueno, esto es lo que he podido hacer')
    alert('Espero que te haya gustado o al menos que te haya sacado una sonrisa :D')
    alert('Disfruta la música y de la peli con Ariana en la tarde u.u')
    alert('Psdt: no se vayan a besar, lecas JAJSJAJJAJA. AHORA SÍ PUEDES REGRESAR AL WHATSAPP.')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})