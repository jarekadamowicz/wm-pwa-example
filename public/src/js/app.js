var deferredPrompt;

if ("serviceWorker" in navigator) {
  console.log("serviceWorker is available");

  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("serviceWorker is registered...");
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt fired");

  event.preventDefault();
  deferredPrompt = event;
  return false;
});
