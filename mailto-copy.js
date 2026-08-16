// Copies the address to the clipboard on click and shows brief confirmation
// text next to the link, since mailto: alone is a no-op for anyone without
// a desktop mail client configured as their OS default.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
        link.addEventListener('click', function () {
            var email = link.getAttribute('href').replace('mailto:', '').split('?')[0];
            if (!navigator.clipboard) return;

            navigator.clipboard.writeText(email).then(function () {
                var original = link.dataset.originalText || link.textContent;
                link.dataset.originalText = original;
                link.textContent = 'Copied ' + email;
                clearTimeout(link._copyTimeout);
                link._copyTimeout = setTimeout(function () {
                    link.textContent = original;
                }, 2000);
            });
        });
    });
});
