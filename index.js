document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-item');
    const animateSkill = (skill) => {
        const circle = skill.querySelector('.progress');
        const percent = skill.dataset.percent;
        const percentText = skill.querySelector('.skill-percent');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        let count = 0;
        const timer = setInterval(() => {
            if (count >= percent) {
                clearInterval(timer);
            } else {
                count++;
                percentText.textContent = count + '%';
            }
        }, 15);
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                animateSkill(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    skills.forEach(skill => observer.observe(skill));
});

let navbar = document.querySelector('.navbar');
let menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuBar.contains(event.target)) {
        navbar.classList.remove('active');
    }
});





var swiper = new Swiper(".projects-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  

