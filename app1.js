const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const warning = document.querySelector('.warning')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    }

    if(fullCups === 5) {
        // remained.style.visibility = 'hidden'
        // remained.style.height = 0
        warning.style.display = 'block'
        warning.style.backgroundColor = 'orange'
        warning.style.width = '30%'
        warning.innerText = 'Easy, boy!'
    } else {
        warning.style.display = 'none'
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
        warning.style.display = 'block'
        warning.style.backgroundColor = 'red'
        warning.style.width = '70%'
        warning.innerText = 'You are going to have a heart attack!'
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${400 -(80 * fullCups)} mg`
        // warning.style.display = 'none'
    }
}