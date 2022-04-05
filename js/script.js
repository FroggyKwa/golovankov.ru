function smoothScroll(id_name, nav_button) {
    document.getElementById(id_name).scrollIntoView({
      behavior: 'smooth'
    });
    console.log(document.getElementById(id_name));
}
