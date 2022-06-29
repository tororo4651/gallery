// AOS
AOS.init({
  duration: 1000
});




// Luminous
var options = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
}

var luminousTrigger = document.querySelectorAll('.photoList__link');

//LuminousGalleryで第二引数galleryOptsを特に指定しない場合は {} でOK。
new LuminousGallery(luminousTrigger, {}, options);
