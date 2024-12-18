(function () {
    const start = performance.now();

    window.addEventListener('load', function() {
        let elem = document.getElementById("load");
        let loadTime = (performance.now() - start).toFixed(2);
        elem.innerText = `Время загрузки страницы: ${loadTime}ms`;
    }, false);
})();