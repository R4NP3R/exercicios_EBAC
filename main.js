const form = document.getElementById('form-maior')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let numeroA = document.getElementById('numeroA')
    let numeroB = document.getElementById('numeroB')
    let numeroMaior = parseFloat(numeroA.value) < parseFloat(numeroB.value);

        if (numeroMaior){
            document.querySelector('.number-error').style.display = 'none'
            document.querySelector('.number-sucess').style.display = 'flex'            
        } else {
            document.querySelector('.number-sucess').style.display = 'none'
            document.querySelector('.number-error').style.display = 'flex'
        }
})





