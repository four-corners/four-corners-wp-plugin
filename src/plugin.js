const PLUGIN_PATH = "/wp-content/plugins/four-corners-wp-plugin";
const CSS_PATH = `${PLUGIN_PATH}/assets/fourcorners.min.css`;

const initPlugin = async () => {
	const fcElems = document.querySelectorAll(".fc-embed");
	if(fcElems.length <= 0) return;
	addCss().then(() => {
		fcElems.forEach(initElem);
	});
}

const addCss = async () => {
	const cssLink = document.createElement("link");
	cssLink.setAttribute("rel", "stylesheet");
	cssLink.setAttribute("href", CSS_PATH);
	document.head.appendChild(cssLink);
	return new Promise((resolve, reject) => {
		cssLink.addEventListener("load", resolve)
	});
}

const initElem = (elem) => {
	const imgSrc = elem.getAttribute("data-src");
	fetch(imgSrc).then(() => {
		elem.querySelectorAll("img, amp-img").forEach(img => {
			img.src = imgSrc;
		});
		new FourCorners({
			src: imgSrc,
			container: elem,
			caption: true,
			credit: true,
			logo: true,
			dark: false,
			wasmSrc: "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/assets/wasm/toolkit_bg.wasm",
			workerSrc: "https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/cai-sdk.worker.min.js"
		});
	});
}

var ua = navigator.userAgent.toLowerCase();
function loadFourcornersElement(fourcorners, fourcornersObserver) {
    initElem(fourcorners);
    fourcorners.classList.remove(".fc-embed");
    fourcorners.classList.remove(".fc-click-load")
    fourcornersObserver.unobserve(fourcorners);
}
if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1) {
    window.addEventListener("load", addCss);
    document.addEventListener("DOMContentLoaded", function () {
        var lazyloadFourcorners;

        if ("IntersectionObserver" in window) {

            var fourcornersObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        loadFourcornersElement(entry.target, fourcornersObserver);
                    }

                });

            });

            lazyloadFourcorners = document.querySelectorAll(".fc-embed");
            lazyloadFourcorners.forEach(function (lazyForcornersImage) {
                fourcornersObserver.observe(lazyForcornersImage);
                lazyForcornersImage.classList.add(".fc-click-load")

            });
        }
    });

} else {
    window.addEventListener("load", initPlugin);
}

