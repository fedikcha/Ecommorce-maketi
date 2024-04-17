const modifiers = {
  imgThumbnailActive: `img-shomcase__thumbnail--active`
};
// Shopping cart modal
// Savatchani ustiga bosilsa pastida hariq qilish sonlari chiqadi
const elSiteHeaderCartLink = document.querySelector(`.js-site-header-cart-link`);
const elSiteHeaderCartModal = document.querySelector(`.site-header__cart-modal`);

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(`site-header__cart-modal--open`)
  })
}


// Imgshowcase
const elImgShovcaseActiveImg = document.querySelector(`.img-shomcase__active-img`);
const elsImgShowcaseThubnailButton = document.querySelectorAll(`.js-img-shovcase-thumbnail-button`);
const elsImgThumbnail = document.querySelectorAll(`.img-shomcase__thumbnail`);


elsImgShowcaseThubnailButton.forEach(function (elButton) {
  elButton.addEventListener(`click`, function (){
    // Remove active state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail){
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive)
    });

    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image accordingly
    elImgShovcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShovcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
  });
});
