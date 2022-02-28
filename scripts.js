var elements = document.querySelectorAll('.player-options div > img')
var playerOpt = "";
var enemyOpt = "";

    function validWinner() {

        let vencedor = document.querySelector('.vencedor')

        if (playerOpt == 'pedra') {
            if (enemyOpt == 'pedra') {
                vencedor.innerHTML = "O jogo ficou empatado";
            }else if (enemyOpt == 'papel') {
                vencedor.innerHTML = "Você perdeu o jogo";
            }else if (enemyOpt == 'tesoura') {
                vencedor.innerHTML = "Você ganhou o jogo";
            }
        }

        if (playerOpt == 'papel') {
            if (enemyOpt == 'papel') {
                vencedor.innerHTML = "O jogo ficou empatado";
            }else if (enemyOpt == 'tesoura') {
                vencedor.innerHTML = "Você perdeu o jogo";
            }else if (enemyOpt == 'pedra') {
                vencedor.innerHTML = "Você ganhou o jogo";
            }
        }

        if (playerOpt == 'tesoura') {
            if (enemyOpt == 'tesoura') {
                vencedor.innerHTML = "O jogo ficou empatado";
            }else if (enemyOpt == 'pedra') {
                vencedor.innerHTML = "Você perdeu o jogo";
            }else if (enemyOpt == 'papel') {
                vencedor.innerHTML = "Você ganhou o jogo";
            }
        }
    }

    function resetEnemy() {
        const enemyOptions = document.querySelectorAll('.enemy-options div');

        for(var i = 0 ; i < enemyOptions.length ; i++) {
            enemyOptions[i].childNodes[0].style.opacity = 0.3;
        }
    }

    function enemyPlay() {
        let rand = Math.floor(Math.random()*3);

        const enemyOptions = document.querySelectorAll('.enemy-options div');
        resetEnemy()
        for(var i = 0 ; i < enemyOptions.length ; i++) {
            if (i == rand){
                enemyOptions[i].childNodes[0].style.opacity = 1;
                enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
            }
        }

        validWinner()

    }

    function resetOpacity() {
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0.3;
        }
    }

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (t)=> {
            resetOpacity();
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt')

            enemyPlay()
        })
    }

    
    