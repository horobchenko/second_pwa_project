if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('src/js/sw.js')
        .then(function () {
            console.log("Service worker ���������������!");
        })
}
var deferredPrompt;
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("src/js/sw.js").then(function () {
        console.log("Service worker ���������������!");
    });
}
window.addEventListener("beforeinstallprompt", function (event) {
    console.log("beforeinstallprompt �������");
    event.preventDefault();
    deferredPrompt = event;
    return false;
});
