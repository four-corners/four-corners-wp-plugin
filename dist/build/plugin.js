!function(){const t=t=>{const e=t.getAttribute("data-src");fetch(e).then((()=>{t.querySelectorAll("img, amp-img").forEach((t=>{t.src=e})),new FourCorners({src:e,container:t,caption:!0,credit:!0,logo:!0,dark:!1,wasmSrc:"https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/assets/wasm/toolkit_bg.wasm",workerSrc:"https://cdn.jsdelivr.net/npm/@contentauth/sdk@0.8.12-alpha.10/dist/cai-sdk.worker.min.js"})}))};window.addEventListener("load",(async()=>{const e=document.querySelectorAll(".fc-embed");e.length<=0||(async()=>{const t=document.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href","/wp-content/plugins/four-corners-wp-plugin/assets/fourcorners.min.css"),document.head.appendChild(t),new Promise(((e,n)=>{t.addEventListener("load",e)}))})().then((()=>{e.forEach(t)}))}))}();