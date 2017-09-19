// obtener el código del video y los parametros adicionales
const getYouTubeVideoCode = url => {
 let inicio = url.indexOf('?') + 3,
    final = url.indexOf('&',inicio),
    code = final === -1 ? url.slice(inicio): url.slice(inicio, final),
    params = url.slice(final + 1);
return final === -1 ? `${code}?` : `${code}?${params}&`;
    //console.log(code, params);
};

// Dibujar el Modal

const printYouTubeModal = youTubeVideoCode => {
    const modal = document.createElement('div');
    modal.id = "modalYouTube";
    modal.classList.add('er-modal');
    modal.innerHTML =`
    <div class="modalContent">
        <div id="closeModal" class="er-closeModal"></div>
        <div class="video">
            <iframe src="https://www.youtube.com/embed/${youTubeVideoCode}autoplay=1" frameborder="0"
            allowfullscreen></iframe>
        </div>
    </div>
    `;
    console.log(modal.innerHTML);
    document.body.appendChild(modal);
    closeModal(modal);
};

// Cerrar el Modal
const closeModal = modalElement => {
    modalElement.querySelector('#closeModal').addEventListener('click', () => {
        document.body.removeChild(modalElement);
    });
    window.addEventListener('keyup', e => {
        if(e.key === 'Escape' ) modalElement.querySelector('#closeModal').click();
    });
};

// Evento para abrir los modales en todos los links

const openYouTubeModal = selector => {
    let linksElements = [...document.querySelectorAll(selector)],
        links = linksElements.map(link => link.href);
    linksElements.forEach((el, i) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            printYouTubeModal(getYouTubeVideoCode(links[i]));
        })
    })
};


openYouTubeModal('.modal-youtube');

// console.log(getYouTubeVideoCode("https://www.youtube.com/watch?v=2kSZNsNcVc0&t=3m22s"));

// Estructura de youtube
// https://www.youtube.com/embed/code?params (embed)
// https://www.youtube.com/watch?v=code?params (web)
// <iframe src="https://www.youtube.com/embed/code?params&autoplay=1"></iframe> (con parametros extra)
// <iframe src="https://www.youtube.com/embed/code?autoplay=1"></iframe> (sin parametros extra)