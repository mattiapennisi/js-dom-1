let lightImage = document.getElementById('light-image')
let lightButton = document.getElementById('light-button')
let isLightOff = true

lightButton.addEventListener('click', function() {
    if (isLightOff) {
        
        lightImage.src='img/yellow_lamp.png'

        lightImage.classList.add("mirrored");

        isLightOff = false

        lightButton.innerText = 'Spegni'

    } else {
        
        lightImage.src='img/white_lamp.png'

        lightImage.classList.remove("mirrored");

        isLightOff = true

        lightButton.innerText = 'Accendi'
    }
})