$(document).ready(() => {
  
  const duration = 500

  $(".menu-icon").click((event) => {
    $(".menu-content").toggleClass("menu-content--active")
  })

  scrollTo = (event, id) => {
    event.preventDefault()
    const scrollTop = $(id).position().top
    $('html, body').animate({ scrollTop }, duration)
  }
  
  $(".scroll-link").click((event) => {
    const scrollTarget = event.target.hash
    scrollTo(event, scrollTarget)
  })
})
