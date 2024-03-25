const pantalla = document.querySelector('.calculadora__pantalla');
const botones = document.querySelectorAll('.calculadora__btn');

botones.forEach( boton => {
    boton.addEventListener('click', () => {


        if(boton.textContent === 'C') {
            pantalla.textContent = '0';
            return;
        }

        if(boton.textContent === 'Borrar') {
            pantalla.textContent = pantalla.textContent.substring(0, pantalla.textContent.length - 1);
            if(pantalla.textContent === '') {
                pantalla.textContent = '0';
            }
            return;
        }

        if(boton.textContent === '=') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch {
                pantalla.textContent = 'Error'
            }
            return;
        }


        if(pantalla.textContent === '0' || pantalla.textContent === 'Error') {
            pantalla.textContent = boton.textContent;    
        } else {
            pantalla.textContent += boton.textContent;
        }

    })
})
