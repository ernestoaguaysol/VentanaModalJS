// obtener el codigo del video y los parametros adicionales
const getYouTubeVideoCode = url => {
 let inicio = url.indexOf('?') + 3,
    final = url.indexOf('&',inicio),
    code = final === -1 ? url.slice(inicio): url.slice(inicio, final),
    params = url.slice(final + 1);
return final === -1 ? `${code}` : `${code}?${params}&`
    //console.log(code, params);
};



console.log(getYouTubeVideoCode("https://www.youtube.com/watch?v=2kSZNsNcVc0&t=3m22s"));

// Estructura de youtube
// https://www.youtube.com/embed/code?params (embed)
// https://www.youtube.com/watch?v=code?params (web)
// <iframe src="https://www.youtube.com/embed/code?params&autoplay=1"></iframe> (con parametros extra)
// <iframe src="https://www.youtube.com/embed/code?autoplay=1"></iframe> (sin parametros extra)