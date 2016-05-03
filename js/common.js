$(document).ready(function() {

    // ------menu-contact header  index.html -------------

    $('header .menu_contact .menu_button i').click(function(){
        $(' header .menu_contact li').slideToggle();
    });
    // -------------------------------------------


    // --------------header hover shoppingbag time index.html--------

    $('header .shoppingbag').hover(

        function(){
            setTimeout(function() {
                $('header .miniCartModalFlyout').slideDown();
            }, 
                       50); 
        },

        function(){
            setTimeout(function() {
                $('header .miniCartModalFlyout').slideUp();
            }, 
                       50); 
        }
    );
    // ------------------------------------------------------------


    // ------menu-products header  index.html-------------

    $('header .menu_products .menu_button_bottom i').click(function(){
        $(' header .menu_products li').slideToggle();
    });

    // --------------------------------------------------

    // -------------slider   index.html---------------

    $('.bxslider').bxSlider({
        pause: 5000,
        auto: true
    });
    // ------------------------------------    


    // -------------высота блоков товара на главной странице
    //               wrapProducts            index.html  ---------

    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }
    $(document).ready(function() {
        setEqualHeight($(".wrapProducts  .productCell"));
    });
    // -----------------------------------------------------------



    // шопинг карта

    // $(".shoppingCartCheckout_Top button").on('click', function(){

    // 	var check = $('.pnlCartSummary').html();
    // 	$('.pnlCartSummary').prepend(check);

    // })
















});