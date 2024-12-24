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

// Dynamic Calendar
function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const currentDate = new Date();
    const month = currentDate.getMonth(); // Current month (0-11)
    const year = currentDate.getFullYear();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in current month
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of week (0-6)
    
    calendarContainer.innerHTML = ''; // Clear previous calendar

    // Add empty spaces for days before the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarContainer.innerHTML += '<div class="calendar-day"></div>';
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.innerText = day;

        // Highlight birthday day (e.g., December 25th)
        if (day === 25) {
            dayElement.style.backgroundColor = '#ff5d8f';
            dayElement.style.color = 'white';
        }

        calendarContainer.appendChild(dayElement);
    }
}

generateCalendar();

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
