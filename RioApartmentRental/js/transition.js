// window.getBrowser().webNavigation.loadURI (msg, 0, null, null, null );
let options = {
    url: window.location.pathname + window.location.search,
    method: 'GET',
    data: null,
    header: {},
};
const swup = new Swup(options);


// {
//     window.history.pushState(
//         {url:t||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},
//         document.getElementsByTagName("title")[0].innerText,
//         t||window.location.href.split(window.location.hostname)[1])||window.location.pathname.split(/.*[\/|\\]/)[1]}