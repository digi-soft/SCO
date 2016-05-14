/**
 * Created by PC on 30.04.2016.
 */



 $(document).ready(function(){

     $( document ).ready(function() {

     var winwidth  = $(window).width(); // pencere genişliği
     var winheight = $(window).height(); // pencere yüksekliği

     $(".kisimiki").css({'margin-top': winheight});

     });

     /* Parallax */


     $('.parallax-window').parallax({imageSrc: 'img/parallax.jpg'});

     /* Tab */


         $("ul#tab li:first").addClass("aktif");
         $("div.aktivite").hide();
         $("div.aktivite:first").show();

        $("ul#tab li").click(function(e){
           var index = $(this).index();
            $("ul#tab li").removeClass("aktif");
            $(this).addClass("aktif");
            $("div.aktivite").hide();
            $("div.aktivite:eq(" + index + ")").show();

            return false ;
        });


     /* Resimlerin tam ekran olarak gosterilmesi */

     baguetteBox.run('.odafoto', {
         animation: 'fadeIn',
     });


     /* Responsive Menu */

     $(function(){
         $('.responsive-menu').click(function(){
            $('#responsive-ac').toggle(600);
         });
     })


 });

