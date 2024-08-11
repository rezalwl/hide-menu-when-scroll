const navabar = document.querySelector('#navabar')
window.addEventListener('scroll', () => {
    let nowScrollTop = document.documentElement.scrollTop
    if (nowScrollTop > 0) {
        navabar.style.top = '-80px'
    } else {
        navabar.style.top = '0px'
    }

    lastScrollTop = nowScrollTop
})