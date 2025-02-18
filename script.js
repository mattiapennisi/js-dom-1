let lightImage = document.getElementById('light-image')
let lightButton = document.getElementById('light-button')
let isLightOff = true

lightButton.addEventListener('click', function(){
    if (isLightOff == true) {
        
        lightImage.src='img/yellow_lamp.png'

        isLightOff = false

        lightButton.innerText = 'Spegni'

    } else if (isLightOff == false) {
        
        lightImage.src='img/white_lamp.png'

        isLightOff = true

        lightButton.innerText = 'Accendi'
    }
})