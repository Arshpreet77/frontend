// JavaScript to handle camera access and file input
function capturePhoto() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
            .then(function(stream) {
                var video = document.createElement('video');
                video.srcObject = stream;
                video.play();
                // Additional code to capture the photo from the video stream
            })
            .catch(function(error) {
                console.error("Error accessing the camera: ", error);
            });
    } else {
        alert('Camera API not supported by your browser');
    }
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    // Handle the file, e.g., send it to a server or display a preview
});
