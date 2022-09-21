const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        document.getElementByClassName('icon_switch').src="lune.png";

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        document.getElementByClassName('icon_switch').src="soleil.png";

    }

})