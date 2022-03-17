const A = document.querySelector.bind(document);
const AA = document.querySelectorAll.bind(document);

const icon = A('.header__top-icon');
const sideBar = A('.sideBar__container');
const headerClose = A('.ti-close')

icon.onclick = () => {
    Object.assign(sideBar.style, {
        transform: 'translateX(0%)',
    })
}

headerClose.onclick = () => {
    Object.assign(sideBar.style, {
        transform: 'translateX(120%)',

    })
}

