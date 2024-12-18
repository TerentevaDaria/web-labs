document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu__item').forEach(link => {
        (link.href === document.location.href || link.href.endsWith("index.html") && document.location.href.endsWith("/"))
            ? link.classList.add('menu__item_active')
            : link.classList.remove('menu__item_active');
    });
});