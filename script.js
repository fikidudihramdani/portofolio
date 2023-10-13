function typeText(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function() {
            typeText(element, text, index, speed);
        }, speed);
    }
}

function eraseText(element, speed) {
    let text = element.textContent;
    if (text.length > 0) {
        text = text.slice(0, -1);
        element.textContent = text;
        setTimeout(function() {
            eraseText(element, speed);
        }, speed);
    }
}



function changeTextToUIUX() {
    const textContainer = document.querySelector('.efek');
    const newText = "UI UX DESIGNER";
    textContainer.textContent = "";
    typeText(textContainer, newText, 0, 100);
}

function changeTextToFreelancer() {
    const textContainer = document.querySelector('.efek');
    const newText = "Freelancer";
    textContainer.textContent = ""; // Mengosongkan konten sebelum mengetik lagi
    typeText(textContainer, newText, 0, 100);
}

function resetText() {
    const textContainer = document.querySelector('.efek');
    const newText = "Web Developer";
    textContainer.textContent = ""; // Mengosongkan konten sebelum mengetik lagi
    typeText(textContainer, newText, 0, 100);
}

setTimeout(changeTextToUIUX, 2000);
setTimeout(changeTextToFreelancer, 6000);
setTimeout(resetText, 10000);



document.querySelector('.burger-icon').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});


// efek scroll
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="#about"]');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Ganti jarak dari bagian atas halaman sesuai kebutuhan
        const targetOffset = document.querySelector('#about').offsetTop - 50;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});






