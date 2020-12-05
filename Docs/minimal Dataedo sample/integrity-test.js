// Check if dynamic content loading is supported,
// if not then redirect to the single data access point
// (used to support file:// protocol out of the box).

function requires(feature) {
    return document.querySelector('meta[name="x-app-requires"][content="'+ feature +'"]');
}

if(requires('dynamic-content-loading')) {
    var isFileProtocol = window.location.href.substr(0, 7) === 'file://';
    if (isFileProtocol) {
        window.location = window.location.href.replace('index.html', 'index.local.html');
    }
}
