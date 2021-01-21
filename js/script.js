$(function(){

    $(document).ready(function (e) {
        try {
            $("body select").msDropDown();
        } catch (e) {
            alert(e.message);
        }
        $('.fnone').each(function () {     
            
            if($(this).attr('src') == "images\\united-kingdom.png"){

                $(this).attr('alt', 'choice of English language');
            }
            else{
                $(this).attr('alt', 'choix de la langue francaise');
            }
            
        });
    });


    $(".navbar a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

    

})