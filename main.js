// Header
$('.nav__mobile__menu').click(function(e) {
    document.body.classList.toggle("_lock");
    $('.nav__mobile__menu').toggleClass('active-menu');
    $('.nav__wrapper').toggleClass('active-menu');
  });

  $('.header__dropdown__menu').click(function() {
      removeSelected(this);
      $(this).toggleClass('active');
  });

  function removeSelected(el) {
      $('.active').not(el).removeClass('active');
  }
// ==================================================

// Ефект плавного прояву блоків на сайті
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.2]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}
// ==================================================


// Паралакс ефект для срілки під банером
$(window).scroll(function () {
    var heightBtn = $(window).scrollTop();
    if (heightBtn > 100) {
        $('.global_banner_arrow').addClass('active');
    } else {
        $('.global_banner_arrow').removeClass('active');
    }
});
// ==================================================
