// Surprise Button Animation
document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');
});

// Countdown Timer
function countdown() {
    const birthdayDate = new Date("2024-12-25T00:00:00Z"); // Set the actual birthday date here
    const now = new Date();
    const timeDiff = birthdayDate - now;

    if (timeDiff <= 0) {
        document.getElementById("countdownTimer").innerText = "It's your birthday! 🎂🎉";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("countdownTimer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(countdown, 1000);

// Particle JS for Background Animation
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 700
            }
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ff5d8f'
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Confetti Effect (Optional)
function startConfetti() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = function() {
        confetti();
    };
    document.body.appendChild(script);
}

// Trigger Confetti when the Surprise Button is clicked
document.getElementById('surpriseButton').addEventListener('click', startConfetti);
