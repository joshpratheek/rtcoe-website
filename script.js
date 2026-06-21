// RTCOE site script — nav toggle, hero slider, contact form
document.addEventListener('DOMContentLoaded', function () {

  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // hero image slider (home page)
  var slides = document.querySelectorAll('.hero-slider img');
  var dots = document.querySelectorAll('.slider-dots span');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('show');
      if (dots[current]) dots[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('show');
      if (dots[current]) dots[current].classList.add('active');
    }, 4000);
  }

  // contact / admission forms — front-end only confirmation
  var forms = document.querySelectorAll('form[data-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successEl = form.parentElement.querySelector('.form-success');
      if (successEl) {
        successEl.classList.add('show');
      }
      form.reset();
    });
  });

});
