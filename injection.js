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
        position:fixed;
        top:0;
        left:0;
        z-index:1;
        width:100vw;
        height:100vh;
    `
    document.body.prepend(postNode)
    let frame = document.querySelector('iframe')
    frame.onload = function () {
        console.log('Frame loaded')
    }
    console.log(frame.contentWindow.document)

    // frame.contentWindow.document.body.style.backgroundColor = 'green'
}

posts.addEventListener('click', clickOnPostHandler, false)
