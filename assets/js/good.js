

  // --------------------------- JS Plugin -------------------------

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


  // --------------------------- JS Plugin end-------------------------






  // --------------------------- JQ Plugin end-------------------------

  $(document).ready(()=> {
    $('.backToTop').click(()=> {
        $('html, body').animate({scrollTop:0}, 500)
    })
    $(window).scroll(()=> {
      var scrollTop = $(this).scrollTop();

      if(scrollTop > 595) {
        $('.navbar').addClass('navbarBG')
      } else {
        $('.navbar').removeClass('navbarBG')
      }

      if(scrollTop > 400) {
        $('.backToTop').fadeIn(500)
      } else {
        $('.backToTop').fadeOut(500)
      }
    })

    $(window).load(()=> {
      $('.preloader').fadeOut(10000)
    })
  })

  // --------------------------- JQ Plugin -------------------------