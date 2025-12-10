gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.fade-in-gsap').forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.slide-left').forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.slide-right').forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.slide-top').forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.slide-bottom').forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
    });
});

document.querySelector('.cta-button').addEventListener('click', function() {
    alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
});