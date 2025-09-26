// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error("Oops Something went wrong, make sure that ${selector} exists or is typed correctly.");
};
// NAV styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// open/close search form pop up
const formOpenBtn = selectElement('#search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchFormContainer = selectElement('#search-form-container')

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));


// -- Close the search from pop-up on ESC Keypress

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') searchFormContainer.classList.remove('activated')
})

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');

// Check system preference
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

// Get theme from localStorage or system
function getPreferredTheme() {
    const storedTheme = localStorage.getItem('currentTheme');
    if (storedTheme === 'light') return 'light';
    if (storedTheme === 'dark') return 'dark';
    return systemPrefersLight ? 'light' : 'dark';
}

// Apply theme
function applyTheme(theme) {
    if (theme === 'light') {
        bodyElement.classList.add('light-theme');
        bodyElement.classList.remove('dark-theme');
    } else {
        bodyElement.classList.add('dark-theme');
        bodyElement.classList.remove('light-theme');
    }
}

// Initial theme set
applyTheme(getPreferredTheme());

// Listen for system changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem('currentTheme')) {
        applyTheme(e.matches ? 'light' : 'dark');
    }
});

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    const isLight = bodyElement.classList.contains('light-theme');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('currentTheme', newTheme);
});


// Swiper
const Swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});