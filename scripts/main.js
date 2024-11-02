function showModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'block';
}

function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'none';
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        // Scroll to the section smoothly
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-100px'; // Adjust this value based on your navbar height
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

window.onload = function() {
    // Scroll to the home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
};