document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Starfield Animation
    const starfield = document.getElementById('starfield');
    const numberOfStars = 250; // Increased from 100

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1; // Star size between 1px and 3px
        const delay = Math.random() * 5; // Random animation delay

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starfield.appendChild(star);
    }
    
    // 2. Typing Animation
    const roles = ["Data Analyst", "Tech Leader", "Problem Solver","Machine learning Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenRoles = 2000;

    function type() {
        if (!typingElement) return; // Stop if element not found
        const currentRole = roles[roleIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        typingElement.textContent = displayText;

        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = delayBetweenRoles;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});