console.log('Injected')

const config = { attributes: true }

const observerHandler = function () {
    document.body.style.overflow = 'scroll'
    let presentations = document.querySelectorAll('[role=presentation]')
    //deleting blocking overlay
    presentations.forEach((elem) => {
        if (elem.children.length === 2) {
            elem.remove()
        }
    })
}
const observer = new MutationObserver(observerHandler)
observer.observe(document.body, config)

let posts = document.querySelector('article')
function clickOnPostHandler(e) {
    let link = e.target.closest('a')
    console.log('From handler:', link.href)
}
posts.addEventListener('click', clickOnPostHandler, false)

