const author = document.querySelector('.rate-test__title')
const text = document.querySelector('.rate-test__text')
const menu = document.querySelectorAll('.menu__link')
const sections = document.querySelectorAll('section')
const next = document.querySelector('.next-arrow')
const prev = document.querySelector('.prev-arrow')
const sub = document.querySelectorAll('button')
const inp = document.querySelector('input')

let count = 0

function validate() {
    var form = document.querySelector("form");
    var email = document.querySelector("input").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            menu.forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
            })
        }
    })
}, {
    threshold: 0.7
})

const iW = document.querySelector('.item-product__img').offsetWidth
const item = document.querySelectorAll('.item-product__info')

sections.forEach(
    (section) => observer.observe(section)
)

menu.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        for (let i = 0; i < sections.length; i++) {
            if (e.target.innerText.split(' ')[0].toLowerCase() === sections[i].classList[0]) {
                sections[i].scrollIntoView({
                    block: 'start',
                    inline: 'nearest',
                    behavior: 'smooth'
                })
            }
        }
    })
})

const texts = [
    {
        name: 'Williams Johon',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."'
    },
    {
        name: 'Will John',
        text: '"Lorem ipsum a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."'
    },
    {
        name: 'onU maks',
        text: '"Lorem ipsu veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."'
    },
    {
        name: 'Victor Petr',
        text: '"Lorem ipsum a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. Duis aute irure dolor."'
    }
]

next.addEventListener('click', (e) => {
    count++
    text.innerText = texts[count].text
    author.innerText = texts[count].name
    if (count >= texts.length - 1) {
        count = 0
    }
})

prev.addEventListener('click', (e) => {
    if (count !== 0) {
        count--
        text.innerText = texts[count].text
        author.innerText = texts[count].name
    }
})

function res() {
    for (let i = 0; i < item.length; i++) {
        item[i].style.width = iW + 'px'
    }
}

res()

document.addEventListener('resize', (e) => {
    res()
})

$('.icon-menu').click(function (ev) {
    $('.icon-menu, .menu__body').toggleClass('_active');
    $('body').toggleClass('_active');
});

window.onscroll = (e) => {
    document.querySelector('header').style.backgroundColor = '#CCCCCC'
}