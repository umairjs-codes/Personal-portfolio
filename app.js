//  JavaScript to dynamically generate content
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Dynamically load skills
// const skillsSection = document.querySelector('#skills');
// const skillsList = document.createElement('ul');

// skills.forEach(skill => {
//     const listItem = document.createElement('li');
//     listItem.textContent = skill;
//     skillsList.appendChild(listItem);
// });

// skillsSection.appendChild(skillsList);

// JavaScript snippet to fine-tune the behavior:
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

//interactive elements, like a "Back to Top" button 
// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

//  OOP to manage different sections of your portfolio dynamically.
class Section {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    render() {
        const section = document.createElement('section');
        section.id = this.id;
        const heading = document.createElement('h2');
        heading.textContent = this.title;
        section.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = this.content;
        section.appendChild(para);

        document.body.appendChild(section);
    }
}


// animations for when the user scrolls to a specific section. 
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

