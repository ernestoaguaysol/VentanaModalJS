// obtener el codigo del video y los parametros adicionales
const getYouTubeVideoCode = url => {
 let inicio = url.indexOf('?') + 3,
    final = url.indexOf('&',inicio),
    code = final === -1 ? url.slice(inicio): url.slice(inicio, final);
    console.log(code);
};

getYouTubeVideoCode("https://www.youtube.com/watch?v=2kSZNsNcVc0");