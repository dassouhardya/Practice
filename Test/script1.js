/*document.querySelector('.message').textContent='Correct Number'
document.querySelector('.score').textContent=17
document.querySelector('.guess').value=16*/
const number = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore=0


document.querySelector('.again').addEventListener
    ('click', function () {
        const number = Math.trunc(Math.random() * 20) + 1
        let score = 20
        document.querySelector('.message').textContent='StartGuessing...'
        document.querySelector('.score').textContent=score
        document.querySelector('.number').textContent='?'
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor='white'
        

    })

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = document.querySelector('.guess').value

        if (!guess) {
            document.querySelector('.message').textContent = 'Wrong Input'
            document.querySelector('body').style.backgroundColor='#FF5733'
        }

        else if (guess == number) {
            document.querySelector('.message').textContent = 'Correct Answer '
            document.querySelector('.number').textContent = number
            document.querySelector('body').style.backgroundColor='#57FE4D'
            if(score>highscore){
                highscore=score
                document.querySelector('.highscore').textContent=highscore
            }
        }

        else if (guess > number) {
            document.querySelector('.message').textContent = 'Lower your guess'
            {
                score--
                document.querySelector('.score').textCotent = score
            }
        }
       
        else if (guess < number) {
            document.querySelector('.message').textContent = 'Higher your guess'
            score--
       
        }
        {
            document.querySelector('.score').textContent = score;
        }
        


    })

    
