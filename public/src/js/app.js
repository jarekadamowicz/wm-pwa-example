if ("serviceWorker" in navigator) {
  console.log("serviceWorker is available");
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("serviceWorker is registered...");
  });
}
