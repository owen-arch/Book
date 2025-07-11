/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Menu show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Menu hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginhClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Menu show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Menu hidden */
if(loginhClose){
    loginhClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('shadow-header')
					   : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper',{
	loop: true,
	spaceBetween: -24,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
	
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		1220: {
			spaceBetween: -32,
		}
	},
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper',{
	loop: true,
	spaceBetween: 16,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		1150: {
			slidesPerView: 4,
			centeredSlides: false,
			
		}
	},
})

/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line' // sun icon for dark mode

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')

// Apply previously saved theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme)
}

// Get current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// Get correct icon for current theme
const getCurrentIcon = () =>
  document.body.classList.contains(darkTheme) ? 'ri-sun-line' : 'ri-moon-line'

// Toggle theme
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)

  // Toggle icon class (sun when dark, moon when light)
  if (document.body.classList.contains(darkTheme)) {
    themeButton.classList.add(iconTheme) // sun icon
  } else {
    themeButton.classList.remove(iconTheme) // moon icon
  }

  // Save to localStorage
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/







// Select all Add to Cart buttons
const cartButtons = document.querySelectorAll('.add')
// Select the input field in the login modal
const orderInput = document.getElementById('login-email')

// Loop through all buttons
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const article = button.closest('.home__article')
    const title = article.querySelector('.book-title').textContent

    // Put the book title into the order input
    orderInput.value = title

    // Optional: Open the login modal
    document.getElementById('login-content').classList.add('show-login')
  })
})









