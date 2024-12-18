document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu__item').forEach(link => {
        link.href === document.location.href
            ? link.classList.add('menu__item_active')
            : link.classList.remove('menu__item_active');
    });
});