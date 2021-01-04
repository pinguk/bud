const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
            // console.log(index / 5 + 0.2);
        })
    //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();