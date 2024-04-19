const modifiers = {
  siteHeadrerCartModalOpen: `site-header__cart-modal--open`,
  imgThumbnailActive: `img-shomcase__thumbnail--active`,
  lightboxOpen: `lightbox--open`
};
// Shopping cart modal
// Savatchani ustiga bosilsa pastida hariq qilish sonlari chiqadi
const elSiteHeaderCartLink = document.querySelector(`.js-site-header-cart-link`);
const elSiteHeaderCartModal = document.querySelector(`.site-header__cart-modal`);

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeadrerCartModalOpen)
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


// Lightbox
const elLightbox = document.querySelector(`.lightbox`);
const elLightboxToggler = document.querySelector(`.js-lightbox-toggler`);
const elLightboxClose = document.querySelector(`.js-lightbox-close`);


if (elLightboxToggler) {
  elLightboxToggler.addEventListener(`click`, function() {
    elLightbox.classList.add(modifiers.lightboxOpen)
  });
}

if (elLightboxClose) {
  elLightboxClose.addEventListener(`click`, function() {
    elLightbox.classList.remove(modifiers.lightboxOpen)
  });
}
