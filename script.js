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



document.addEventListener('DOMContentLoaded', function() {
    const experienceSections = document.querySelectorAll('.experience-section');

    experienceSections.forEach(section => {
        section.addEventListener('click', () => {
            // Masquer les détails de toutes les autres sections
            experienceSections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.querySelector('.details').classList.remove('show');
                }
            });

            // Afficher les détails de cette section
            const details = section.querySelector('.details');
            details.classList.toggle('show');
            image.classList.toggle('show');
        });
    });
});

// Afficher et cacher le numéro de téléphone & email
function showNumber() {
    document.getElementById("phone-number").style.display = "block";
}

function hideNumber() {
    document.getElementById("phone-number").style.display = "none";
}

function showEmail() {
    document.getElementById("email-contact").style.display = "block";
}

function hideEmail() {
    document.getElementById("email-contact").style.display = "none";
}