if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
        console.log("Succesfully Registered Service Worker ",registration);
    })
    .catch((error) => {
        console.log("Register failed:",error)
    });
}
else{
    console.log("service worker doesnot support");
}