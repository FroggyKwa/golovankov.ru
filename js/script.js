function smoothScroll(id_name, nav_button) {
    document.getElementById(id_name).scrollIntoView({
      behavior: 'smooth'
    });
    console.log(document.getElementById(id_name));
}

$(window).scroll(function() {
   var element_top = $('#anchor_to_projects_section').offset().top - 300,
       document_bot = $('#bot').offset().top,
       wH = $(window).height(),
       current_pos = $(this).scrollTop();
       if (current_pos > element_top) {

         $('#home-navitem')[0].classList.remove("active");
         $('#projects-navitem')[0].classList.add("active");
          }
       else {
         $('#projects-navitem')[0].classList.remove("active");
         $('#home-navitem')[0].classList.add("active");
       }
});

function openMailDialog()
{
  window.open('mailto:ilya.laguxa@gmail.com');
  document.getElementById('exampleInputEmail').value = "";
}
