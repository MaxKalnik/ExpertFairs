$(document).ready(function () {
    var body = $('body');

});

(function(){

  var form = document.getElementById('contact__form'),
      returnForm = document.getElementById('return-contact-form');

  form.onsubmit = function(e){
    e.preventDefault();
    
    var _this = this;

    _this.style.display = 'none';
    _this.nextElementSibling.style.display = 'block';
    
    // ajax ..
    return false;
  };

  returnForm.onclick = function(e){
    this.parentNode.style.display = 'none';
    this.parentNode.previousElementSibling.style.display = 'block';
  }


})();
