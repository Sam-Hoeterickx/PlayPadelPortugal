const currentHTML = document.querySelector('.row').innerHTML;
const ctx = document.querySelector('.row');

function init(){
    console.log("Get started");
    selectAllImages();
    console.log(currentHTML);
}

function selectAllImages(){
    const allImages = document.querySelectorAll(".gallery-image");

    allImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            e.preventDefault();

            const imageUrl = e.currentTarget.src;
            const imagePath = imageUrl.split("https://sam-hoeterickx.github.io/PlayPadelPortugal/")[1];
            console.log(imagePath);

            
            const htmlString = `
                <div class="fullscreen-gallery-wrapper">
                    <div class="fullscreen-gallery">
                        <div class="fullscreen-image">
                            <div class="close">
                                <p>x</p>
                            </div>
                            <img class="gallery-image" src="${imagePath}" style="max-width:700px;"  alt="Casa Perola room">
                        </div>
                    </div>
                </div>
            `
            
            ctx.innerHTML += htmlString;
            
            closeButtons(); 
        })
    })
}

function closeButtons(){
    const closeBtn = document.querySelector('.close');
    const secondCloseBtn = document.querySelector('.fullscreen-gallery-wrapper');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeImage();
    })
    secondCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeImage();
    })
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeImage();
        }
    });
}

function closeImage(){
    ctx.innerHTML = currentHTML;
    selectAllImages();
}

init();