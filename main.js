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
const elProductPageGallery = document.querySelector(`.prodact-page__gallery`);
const elImgShovcaseActiveImg = elProductPageGallery.querySelector(`.img-shomcase__active-img`);
const elsImgShowcaseThubnailButton = elProductPageGallery.querySelectorAll(`.js-img-shovcase-thumbnail-button`);
const elsImgThumbnail = elProductPageGallery.querySelectorAll(`.img-shomcase__thumbnail`);


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


// Thumbnail click
const elImgLightboxActiveImg = elLightbox.querySelector(`.img-shomcase__active-img`);
const elsImgLightboxThubnailButton = elLightbox.querySelectorAll(`.js-img-lightbox-thumbnail-button`);
const elsLightboxImgThumbnail = elLightbox.querySelectorAll(`.img-shomcase__thumbnail`);


elsImgLightboxThubnailButton.forEach(function (elButton) {
  elButton.addEventListener(`click`, function (){
    // Remove active state from all buttons
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail){
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive)
    });


    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image accordingly
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
  });
});


// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector(`.js-lightbox-control-prev`);
const elLightboxControlNext = elLightbox.querySelector(`.js-lightbox-control-next`);

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener(`click`, function (){
    // Find active li element
    const elActivItem = elLightbox.querySelector(`.img-shomcase__thumbnail--active`);

    // Remove active li element's styles
    elActivItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActivItem;

    if (elActivItem.nextElementSibling === null) {
      elNextActivItem =elsLightboxImgThumbnail[0];
    } else {
      elNextActivItem = elActivItem.nextElementSibling;
    }

    elNextActivItem.classList.add(modifiers.imgThumbnailActive)
    // elsLightboxImgThumbnail[0].classList.add(modifiers.imgThumbnailActive);
    // elActivItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);

    // Update active image accordingly
    elImgLightboxActiveImg.src = elNextActivItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActivItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActivItem.children[0].dataset.imgShowcaseRetina} 2x`;
    });
}


if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener(`click`, function (){
    // Find active li element
    const elActivItem = elLightbox.querySelector(`.img-shomcase__thumbnail--active`);

    // Remove active li element's styles
    elActivItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActivItem;

    if (elActivItem.previousElementSibling === null) {
      elNextActivItem =elsLightboxImgThumbnail.length - 1;
    } else {
      elNextActivItem = elActivItem.previousElementSibling;
    }

    elNextActivItem.classList.add(modifiers.imgThumbnailActive)
    // elsLightboxImgThumbnail[0].classList.add(modifiers.imgThumbnailActive);
    // elActivItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);

    // Update active image accordingly
    elImgLightboxActiveImg.src = elNextActivItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActivItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActivItem.children[0].dataset.imgShowcaseRetina} 2x`;
    });
}
