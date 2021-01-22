$(function(){

    $(document).ready(function (e) {
        try {
            $("body select").msDropDown();
        } catch (e) {
            alert(e.message);
        }
    });


    $(".navbar a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

    

})