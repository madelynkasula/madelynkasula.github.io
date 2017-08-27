$(document).ready(() => {
  const offset = 75
  const sectionOffset = 45
  const duration = 500

  $(window).scroll(() => {
    if ($(this).scrollTop() > offset) {
      $('#up-arrow').fadeIn(duration)
    } else {
      $('#up-arrow').fadeOut(0)
    }
  })

  $('#up-arrow').click((event) => {
    $('html, body').animate({ scrollTop: 0 }, duration)
  })

  scrollTo = (event, id) => {
    event.preventDefault()
    const scrollTop = $(id).position().top + sectionOffset
    $('html, body').animate({ scrollTop }, duration)
  }

  $('.links > a').click((event) => {
    const scrollTarget = event.target.hash
    scrollTo(event, scrollTarget)
  })
})
