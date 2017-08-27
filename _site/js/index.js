$(document).ready(() => {
  const offset = 100
  const duration = 300

  $(window).scroll(() => {
    if ($(this).scrollTop() > offset) {
      $('#up-arrow').fadeIn(duration)
    } else {
      $('#up-arrow').fadeOut(duration)
    }
  })

  $('#up-arrow').click((event) => {
    $('html, body').animate({ scrollTop: 0 }, duration)
  })
})
