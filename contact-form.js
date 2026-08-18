// Submits the contact form via fetch to Formspree so the page never
// leaves — a full-page redirect on a one-page action feels broken here.
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.textContent = 'Sending...';
        status.className = 'form-status';

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                form.reset();
                status.textContent = "Sent — I'll get back to you soon.";
                status.className = 'form-status form-status--success';
            } else {
                status.textContent = "Something went wrong — email me directly instead.";
                status.className = 'form-status form-status--error';
            }
        }).catch(function () {
            status.textContent = "Something went wrong — email me directly instead.";
            status.className = 'form-status form-status--error';
        });
    });
});
