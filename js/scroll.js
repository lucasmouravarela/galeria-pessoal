const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target)

   scrollToPositon(to);
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPositon(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}