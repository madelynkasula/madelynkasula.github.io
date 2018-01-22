$(document).ready(() => {

  // constants
  const duration = 500
  const background = {
    header: $("#background"),
    line: $(".background-line")
  }
  const skills = {
    header: $("#skills"),
    line: $(".skills-line")
  }
  const projects = {
    header: $("#projects"),
    line: $(".projects-line")
  }
  const community = {
    header: $("#community"),
    line: $(".community-line")
  }
  const sections = [background, skills, projects, community]

  // for feather icons
  feather.replace()

  // toggle menu classes to open/close
  $(".menu--icon").click((event) => {
    $(".menu").toggleClass("menu--active")
    $(".menu--content").toggleClass("menu--content--active")
    $(".menu--icon").toggleClass("menu--icon--active")
  })

  // scroll to section on click
  scrollTo = (event, id) => {
    event.preventDefault()
    const scrollTop = $(id).position().top
    $('html, body').animate({ scrollTop }, duration)
  }

  closeMenu = () => {
    $(".menu").removeClass("menu--active")
    $(".menu--content").removeClass("menu--content--active")
    $(".menu--icon").removeClass("menu--icon--active")
  }
  
  $(".menu--link").click((event) => {
    const scrollTarget = event.target.hash
    closeMenu()
    scrollTo(event, scrollTarget)
  })

  // detect if element is in viewport
  isInView = (el) => {
    var elementTop = $(el).offset().top - 100
    var elementBottom = elementTop + $(el).outerHeight()
    var viewportTop = $(window).scrollTop()
    var viewportBottom = viewportTop + $(window).height()

    return viewportTop > elementTop && viewportBottom > elementBottom
  }

  $(window).scroll(() => {
    sections.forEach((section) => {
      if (isInView(section.header)) {
        section.line.addClass("line--active")
      }
    })
  })

})
