document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelector('.slides');
    let currentIndex = 0;

    // スライドを動的に生成
    slideData.forEach(slide => {
        const section = document.createElement('section');
        section.id = slide.id;
        section.innerHTML = `<h2>${slide.title}</h2>${slide.content}`;
        slides.appendChild(section);
    });

    const sections = document.querySelectorAll('.slides section');

    document.getElementById('prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sections.length - 1;
        }
        updateSlidePosition();
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    document.querySelectorAll('header nav a, footer nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            currentIndex = Array.from(sections).indexOf(target);
            updateSlidePosition();
        });
    });

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    // ページ読み込み時に最初のスライドを表示
    window.addEventListener('load', () => {
        updateSlidePosition();
    });
});