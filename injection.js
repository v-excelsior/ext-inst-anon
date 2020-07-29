console.log('Injected')

let isScrollLocked = false

function deleteLoginOverlay() {
    const last = document.body.children.length - 1
    document.body.children[last].remove()
}

const config = { attributes: true }
//deleting blocking overlay
const observerHandler = function () {
    document.body.style.overflow = isScrollLocked ? 'hidden' : 'scroll'
    deleteLoginOverlay()
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
        width:100%;
        height:100%;
    `
    document.body.prepend(postNode)
    postNode.onload = function () {
        console.log('Frame loaded')
        let post = postNode.contentWindow.document
        post.querySelector('main').style.backgroundColor = 'green'
    }

    //
}

posts.addEventListener('click', clickOnPostHandler)
