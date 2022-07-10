const rangeInput = document.getElementById('range')
const container = document.getElementsByClassName('container')

rangeInput.addEventListener('change', () => {
    container[0].style.filter = 'brightness(' + rangeInput.value + '%)'
})