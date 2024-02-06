// Script JavaScript pour ajouter des animations

// Animation pour le survol des expériences professionnelles
const experiencesListItems = document.querySelectorAll('#experiences-list li');
experiencesListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f0f0';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#fff';
    });
});

// Animation pour le survol des formations
const formationsListItems = document.querySelectorAll('#formations-list li');
formationsListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f0f0';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#fff';
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('.experience-more a').forEach(item => {
    item.addEventListener('click', event => {
        const experience = item.closest('.experience');
        const description = experience.querySelector('.description');
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            item.innerText = 'En savoir plus';
        } else {
            description.style.maxHeight = description.scrollHeight + "px";
            item.innerText = 'Réduire';
        } 
    });
});

document.querySelectorAll('.formation-more a').forEach(item => {
    item.addEventListener('click', event => {
        const formation = item.closest('.formation');
        const description = formation.querySelector('.description');
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            item.innerText = 'En savoir plus';
        } else {
            description.style.maxHeight = description.scrollHeight + "px";
            item.innerText = 'Réduire';
        } 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const experienceSections = document.querySelectorAll('.experience-section');

    experienceSections.forEach(section => {
        section.addEventListener('click', () => {
            // Masquer les éléments affichés précédemment
            const visibleDetails = document.querySelector('.experience-section .details.show');
            if (visibleDetails) {
                visibleDetails.classList.remove('show');
            }
            const visibleImage = document.querySelector('.experience-section .image-container.show');
            if (visibleImage) {
                visibleImage.classList.remove('show');
            }

            // Afficher les éléments de cette section
            const details = section.querySelector('.experience-details .details');
            const image = section.querySelector('.image-container');
            details.classList.add('show');
            image.classList.add('show');
        });
    });
});