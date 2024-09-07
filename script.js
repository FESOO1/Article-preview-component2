const shareBtn = document.querySelector('.share-button');
const shareLinksContainer = document.querySelector('.share-container');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('share-btn-js');
    shareLinksContainer.classList.toggle('share-links-container-js');
});