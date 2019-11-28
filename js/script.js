//jalankan even pada saat on.click

$('.page-scroll').on('click', function(e) {

//ambil semua href
    var tujuan = $(this).attr('href');
//tangkap elmn
    var elemenTujuan = $(tujuan);
//jalankan animasi scroll
    $('html, body').animate( {
        scrollTop: elemenTujuan.offset().top
    })

    e.preventDefault();

});


//paralax fx scroll

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    $('.banner .border.border-primary').css( {
        'tansform' : 'translate(opx, '+ wScroll +'% )'
    });

     //portfolio
     if(wScroll > $('.portfolio').offset().top - 100 ) {

        $('.portfolio .card-header').each(function(i) {
            setTimeout(function() {
                $('.portfolio .card-header').eq(i).addClass('muncul');
            }, 500 * i + 1);
        });
        
    }

    //kontak

    if(wScroll > $('.kontak').offset().top - 70 ) {
        $('.kontak').addClass('munculll');
    }

    //about

    if(wScroll > $('.prg').offset().top - 180 ) {
        $('.prg').addClass('muncull');
    }

});
