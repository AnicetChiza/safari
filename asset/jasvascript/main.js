document.addEventListener('DOMContentLoaded', () => {
    const homeImage = document.querySelectorAll('.home-bg');
    const circles = document.querySelectorAll('.circle');
    let currentIndex = 0;

    function showItem(index) {
        homeImage[currentIndex].style.display = 'none';
        circles[currentIndex].classList.remove('act');
        homeImage[index].style.display = 'block';
        circles[index].classList.add('act');
        currentIndex = index;
    }

    function showNextItem() {
        const nextIndex = (currentIndex + 1) % homeImage.length;
        showItem(nextIndex);
    }

    function showPreviousItem() {
        const prevIndex = (currentIndex - 1 + homeImage.length) % homeImage.length;
        showItem(prevIndex);
    }

    function goToItem(index) {
        showItem(index);
    }

    // Initial display setup
    homeImage.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.display = 'none';
        }
    });

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            goToItem(index);
        });
    });

    // Auto-scroll functionality
    setInterval(showNextItem, 5000);
});

/*----------------------------------
#Menu
----------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.header-list ul');
    const exit = document.querySelector('.exit');
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.querySelector('.overlay');
    const menuItems = document.querySelectorAll('.header-list ul li a');

    // if (!list) console.error('List element not found');
    // if (!exit) console.error('Exit element not found');
    // if (!menuIcon) console.error('Menu icon element not found');
    // if (!overlay) console.error('Overlay element not found');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            list.classList.add('active');
            overlay.classList.add('active');
            menuIcon.style.display = 'none';
            exit.style.display = 'flex';
        });
    }

    if (exit) {
        exit.addEventListener('click', () => {
            list.classList.remove('active');
            overlay.classList.remove('active');
            exit.style.display = 'none';
            menuIcon.style.display = 'block';
        });
    }

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            list.classList.remove('active');
            overlay.classList.remove('active');
            exit.style.display = 'none';
            menuIcon.style.display = 'block';
        });
    });
});

/*------------------------------
#For the header
/-----------------------------*/
jQuery(function ($) {
    const $header = $('.header');
    $(window).scroll(function (event) {
        const $current = $(this).scrollTop();
        if ($current > 160) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});

/*------------------------------
#Up icon
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const scrollUps = document.querySelectorAll('.scrollUp');
    const homePageHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        scrollUps.forEach((scrollUp) => {
            if (window.scrollY > homePageHeight) {
                scrollUp.style.display = 'block';
            } else {
                scrollUp.style.display = 'none';
            }
        });
    });

    scrollUps.forEach((scrollUp) => {
        scrollUp.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});


/*------------------------------
#Faq
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.faq-answer');
    const rightIcons = document.querySelectorAll('.right');
    const downIcons = document.querySelectorAll('.down');

    answers.forEach((answer, i) => {
        const state = localStorage.getItem(`faq-answer-${i}`);
        if (state === 'open') {
            answer.style.display = 'block';
            rightIcons[i].style.display = 'none';
            downIcons[i].style.display = 'inline';
        } else {
            answer.style.display = 'none';
            rightIcons[i].style.display = 'inline';
            downIcons[i].style.display = 'none';
        }
    });
});

document.querySelectorAll('.faq-question').forEach((question, index) => {
    question.addEventListener('click', () => {
        const answers = document.querySelectorAll('.faq-answer');
        const rightIcons = document.querySelectorAll('.right');
        const downIcons = document.querySelectorAll('.down');

        answers.forEach((answer, i) => {
            if (i === index) {

                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    rightIcons[i].style.display = 'none';
                    downIcons[i].style.display = 'inline';
                    localStorage.setItem(`faq-answer-${i}`, 'open');
                } else {
                    answer.style.display = 'none';
                    rightIcons[i].style.display = 'inline';
                    downIcons[i].style.display = 'none';
                    localStorage.setItem(`faq-answer-${i}`, 'closed');
                }
            } else {
                answer.style.display = 'none';
                rightIcons[i].style.display = 'inline';
                downIcons[i].style.display = 'none';
                localStorage.setItem(`faq-answer-${i}`, 'closed');
            }
        });
    });
});

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

document.querySelectorAll('.down').forEach(downIcon => {
    downIcon.style.display = 'none';
});

document.querySelectorAll('.right').forEach(rightIcon => {
    rightIcon.style.display = 'inline';
});

/*------------------------------
#For Testimonials
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const circles = document.querySelectorAll('.circles');
    let currentIndex = 0;

    function showItem(index) {
        testimonials[currentIndex].style.display = 'none';
        circles[currentIndex].classList.remove('active');

        testimonials[index].style.display = 'block';
        circles[index].classList.add('active');
        currentIndex = index;
    }

    testimonials.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.display = 'none';
        }
    });

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            showItem(index);
        });
    });

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showItem(nextIndex);
    }, 9000);
});

/*------------------------------
#Visit
/-----------------------------*/

function createInfiniteScroll(containerId, direction) {
    const container = document.getElementById(containerId);
    const images = Array.from(container.children); // Collect all images
    let scrollSpeed = 1; // Speed of scroll
    const totalImages = images.length;

    // Function to clone images for seamless looping
    const cloneImages = () => {
        images.forEach(image => {
            const clone = image.cloneNode(true);
            container.appendChild(clone);
        });
    };

    cloneImages(); // Clone images for smooth infinite scrolling

    let currentPosition = 0;
    let containerWidth = container.scrollWidth / 2; // Total width of the original images

    function scrollImages() {
        if (direction === 'left') {
            currentPosition -= scrollSpeed;
            if (Math.abs(currentPosition) >= containerWidth) {
                currentPosition = 0; // Reset position when images scroll past
            }
        } else if (direction === 'right') {
            currentPosition += scrollSpeed;
            if (currentPosition >= containerWidth) {
                currentPosition = 0; // Reset position when images scroll past
            }
        }

        container.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollImages); // Continue the animation loop
    }

    scrollImages(); // Start scrolling
}

// Initialize the scrolling for both blocks
createInfiniteScroll('scroll-container1', 'left'); // For the first div (scroll left)
createInfiniteScroll('scroll-container2', 'right'); // For the second div (scroll right)