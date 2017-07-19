$(document).ready(function() {
  $('#info').click(function() {
    this.prepend('do it');
  });

  $(document).keypress(function(e) {
    var selectedEl = document.getElementsByClassName('select')[0];

    switch(e.key) {
      case 's':
        selectNext(selectedEl);
        break;
      case 'w':
        selectPrevious(selectedEl);
        break;
      case 'Enter':
        routeToPage(selectedEl.href);
        break;
    }
  });

  function selectNext(el) {
    let nextEl = $(el).next();
    toggleSelectClass(el, nextEl);
  }

  function selectPrevious(el) {
    let prevEl = $(el).prev();
    toggleSelectClass(el, prevEl);
  }

  function toggleSelectClass(oldEl, newEl) {
    if (newEl.length != 0) {
      $(oldEl).removeClass('select');
      $(newEl).addClass('select');
    }
  }

  function routeToPage(url) {
    window.location.href = url;
  }
});
