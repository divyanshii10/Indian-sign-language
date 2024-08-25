function loadGif() {
    const gifName = document.getElementById('gifInput').value.trim(); 

    if (gifName) {
        const gifElement = document.getElementById('gif');
        gifElement.src = `/ISL_Gifs/gifs/${gifName}.gif`; // Construct the path to the GIF

        gifElement.onload = () => {
            console.log('GIF loaded successfully');
        };

        gifElement.onerror = () => {
            alert('GIF not found. Please check the filename and try again.');
        };
    } else {
        console.error('No GIF name provided.');
        alert('Please enter a GIF filename.');
    }
}
