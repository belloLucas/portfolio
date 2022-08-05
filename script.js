const btn = document.getElementById('btn');

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
    }

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    
    // document.onclick = function(e){
    //     if(e.type !== 'menu' && e.type !== 'nav') {
    //         nav.classList.toggle('active');
    //         nav.classList.remove('touchstart');
    //     }
    // }

}

btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    nav.classList.remove("active");
}))