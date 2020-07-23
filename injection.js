const target = document.querySelector('body')
const config = { attributes: true }

console.log('Injected')

let checker = function () {
    target.style.overflow = 'scroll'
    let presentations = document.querySelectorAll('[role=presentation]')
    presentations.forEach((elem) => {
        if (elem.children.length === 2) {
            elem.remove()
        }
    })
}

let posts = document.querySelector('article')

posts.addEventListener('click', clickOnPostHandler, false)

function clickOnPostHandler(e) {
    let link = e.target.closest('a')
    console.log('From handler:', link.href)
}

document.addEventListener('click', (e) => {
    console.log('Target: ', e.target)
})

const observer = new MutationObserver(checker)

observer.observe(target, config)
