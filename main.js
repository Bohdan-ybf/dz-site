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
