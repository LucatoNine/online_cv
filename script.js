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

function openModal(imageSrc, title, description) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalCaption.innerHTML = '<h2>' + title + '</h2><p>' + description + '</p>';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

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