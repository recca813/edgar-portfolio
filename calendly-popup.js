// Opens the "Book a call" link as a Calendly popup widget instead of a new
// tab, themed to match the site's dark palette. Falls back to the plain
// href (new tab) if the Calendly widget script hasn't loaded.
document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.querySelector('.calendly-trigger');
    if (!trigger || typeof Calendly === 'undefined') return;

    var baseUrl = trigger.getAttribute('href');
    var themedUrl = baseUrl
        + '?background_color=16130f&text_color=f5f1ea&primary_color=a78bfa';

    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        Calendly.initPopupWidget({ url: themedUrl });
    });
});
