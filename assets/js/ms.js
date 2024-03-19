let carrinho = document.querySelector(".carrinho");

document.querySelector("#cart").onclick = () => {
    carrinho.classList.toggle('active');

    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector("#login").onclick = () => {
    login.classList.toggle('active');

    carrinho.classList.remove('active');
}

window.onscroll = () => {
    carrinho.classList.remove('active');
    login.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {

    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var swiper = new Swiper(".menu-slider", {
    grapCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetwwen:20,
    pagination: {
    el: '.swiper-pagination',
    clickable:true,
    },

});




/** JENELA MODAL  */
let verModalCorpo = document.querySelector(".menu-modal-container");
let verModalBox = verModalCorpo.querySelector(".menu-modal");

document.querySelectorAll(".menu .box").forEach(menu => {

    menu.onclick = () => {
        verModalCorpo.style.display = 'flex';
        let nome = menu.getAttribute('data-name');

        verModalBox.forEach(visualizar => {
            let chamada = cisualizar.getAttribute("dara-target");
            if(nome == chamada) {
                visualizar.classList.add('active');
            }
        });


    };

});

verModalCorpo.querySelector("#fechar").onclick = () => {
    verModalCorpo.style.display = 'none';
    verModalBox.forEach(fechar => {
        fechar.classList.remove('active');
    });
};