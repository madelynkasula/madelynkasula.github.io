$(document).ready(() => {
  
  const duration = 500

  $(".menu--icon").click((event) => {
    $(".menu").toggleClass("menu--active")
    $(".menu--content").toggleClass("menu--content--active")
    $(".menu--icon").toggleClass("menu--icon--active")
  })

  scrollTo = (event, id) => {
    event.preventDefault()
    const scrollTop = $(id).position().top
    $('html, body').animate({ scrollTop }, duration)
  }
  
  $(".menu--link").click((event) => {
    const scrollTarget = event.target.hash
    scrollTo(event, scrollTarget)
  })
})
