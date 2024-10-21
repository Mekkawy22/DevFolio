var typed = new Typed(".animation-js", {
    strings: ["Designer", "Freelancer", "Photographer", "Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-end');
            const count = +counter.innerText;

            const increment = target / 200; // You can adjust the increment value for speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1); // Adjust the duration as needed
            } else {
                counter.innerText = target; // Ensure it ends at the target
            }
        };

        updateCount();
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});