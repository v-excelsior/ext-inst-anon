console.log('Injected')

let isScrollLocked = false

async function deleteLoginOverlay() {
    console.log('Try delete')
    let RolePresentationList = document.querySelectorAll(
        '[role="presentation"]'
    )
    console.log(document.querySelectorAll('[role="presentation"]'))
    RolePresentationList.forEach((el) => {
        if (el.children.length > 1) {
            el.remove()
            console.log('Delete')
            console.log(el)
        }
    })
}

// overflow controll
const overflowObserveHadler = () => {
    document.body.style.overflow = isScrollLocked ? 'hidden' : 'scroll'
    console.log('overflow changed')
}

function loginOverlayObserveHadler() {
    console.log('Catch')
    deleteLoginOverlay()
    loginOverlayObserver.disconnect()
    setTimeout(() => {
        loginOverlayObserver.observe(document.body, { childList: true })
        console.log('Recreated observer')
    }, 0)
}

const overflowObserver = new MutationObserver(overflowObserveHadler)
overflowObserver.observe(document.body, { attributes: true })

const loginOverlayObserver = new MutationObserver(loginOverlayObserveHadler)
loginOverlayObserver.observe(document.body, { childList: true })

let posts = document.querySelector('article')

async function clickOnPostHandler(e) {
    await deleteLoginOverlay()
    let link = e.target.closest('a').href
    let postNode = document.createElement('iframe')
    postNode.src = link
    postNode.style.cssText = S_PostInNewFrame
    document.body.append(postNode)

    console.log('From click')

    console.log(document.body.children[document.body.children.length - 1])

    // postNode.onload = function () {
    //     console.log('Frame loaded')
    //     const post = postNode.contentWindow.document
    //     post.querySelector('main').style.backgroundColor = 'green'
    // }
}

if (posts) posts.addEventListener('click', clickOnPostHandler)
