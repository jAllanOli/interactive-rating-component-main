const btn = document.querySelector('#submit-btn')

btn.addEventListener('click', () => {
    const firstDiv = document.querySelector('.rating')
    const SecDiv = document.querySelector('.thanks')

    firstDiv.style.display = 'none'
    SecDiv.style.display = 'flex'
})

const ratings = document.querySelectorAll('li button')

ratings.forEach(e => {
    e.addEventListener('click', () => {
            const rate = document.querySelector('span')
            rate.innerHTML = e.innerHTML
    })
})