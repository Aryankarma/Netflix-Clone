const accordings = document.querySelectorAll('.ContentContainer')

for (let i = 0; i < accordings.length; i++) {
    accordings[i].addEventListener('click', function
    (){
        this.classList.toggle('active')
    })
    
}