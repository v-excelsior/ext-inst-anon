console.log('Injected')

const config = { attributes: true }
//deleting blocking overlay
const observerHandler = function () {
    document.body.style.overflow = 'scroll'
    let presentations = document.querySelectorAll('[role=presentation]')
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
    let link = e.target.closest('a').href
    console.log('From handler:', link)

    let postNode = document.createElement('iframe')
    postNode.src = link
    postNode.style.cssText = `
        position:absolute;
        z-index:1;
        width:800px;
        height:400px;
    `
    document.body.prepend(postNode)
}
posts.addEventListener('click', clickOnPostHandler, false)
