const ctx = document.querySelector('.row'); 
let currentHTML = ctx.innerHTML;

function init() {
    console.log("Initialization started...");
    selectAllImages();
}

function selectAllImages() {
    const allImages = document.querySelectorAll(".gallery-image");

    allImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            e.preventDefault();

            const imageUrl = e.currentTarget.src; 
            const imagePath = imageUrl.split("5500/")[1];

            console.log("Image URL:", imageUrl);
            console.log("Image Path:", imagePath);

    
            const htmlString = `
                <div class="fullscreen-gallery-wrapper">
                    <div class="fullscreen-gallery">
                        <div class="fullscreen-image">
                            <div class="close">
                                <p>x</p>
                            </div>
                            <img class="gallery-image fullscreen-img" src="${imagePath}" alt="Casa Perola room">
                        </div>
                    </div>
                </div>
            `;

            ctx.innerHTML += htmlString;

            const fullscreenImg = document.querySelector('.fullscreen-img');
            fullscreenImg.onload = () => {
                resizeImage(fullscreenImg);
                console.log(fullscreenImg);
            };

            closeButtons();
        });
    });
}


function resizeImage(imgElement) {
    let maxWidth = window.innerHeight;
    let maxHeight = window.innerWidth;

    if(window.innerWidth > 1024){
        maxWidth = window.innerWidth * 0.4;
        maxHeight = window.innerHeight * 0.6;
    }else {
        maxWidth = window.innerWidth * 0.95;
        maxHeight = window.innerHeight * 0.6;
    }
    console.log(window.innerHeight, window.innerWidth, maxHeight, maxWidth)
    if (window.innerWidth > 1024) {
        console.log("Window wider than 1024px, resizing image...", imgElement.width);
        if (imgElement.width > 2) {
            imgElement.style.width = `${maxWidth}px`;
        }
        if (imgElement.height > maxHeight) {
            imgElement.style.height = `${maxHeight}px`;
            imgElement.style.width= "";
        }
    } else if (window.innerWidth < 1024) {
        console.log("Window width below 1024px, applying different resizing...", maxWidth, maxHeight, imgElement.width, imgElement.height);
        if (imgElement.width > 2) {
            imgElement.style.width = `${maxWidth}px`;
        }
        if (imgElement.height > maxHeight) {
            console.log(imgElement.height)
            imgElement.style.height = `${maxHeight}px`;
        }
    }
}

// Function to close the fullscreen gallery
function closeButtons() {
    const closeBtn = document.querySelector('.close p'); // Close button inside the gallery
    const galleryWrapper = document.querySelector('.fullscreen-gallery-wrapper'); // Wrapper

    const closeGallery = () => {
        ctx.innerHTML = currentHTML; // Restore the original content
        selectAllImages(); // Reattach event listeners
    };

    // Add event listeners to close the gallery
    if (closeBtn) closeBtn.addEventListener('click', closeGallery);
    if (galleryWrapper) galleryWrapper.addEventListener('click', closeGallery);

    // Close the gallery on pressing the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGallery();
        }
    });
}

// Start the script
init();
