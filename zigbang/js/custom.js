
    function myFunction() {    
        console.log("dddd")
        var moreText = $(".more");        
        var btnText = $(".myBtn");


        if (btnText.html() === "less") {                    
            btnText.html("more");
            moreText.css("display", "none");
        } else {            
            btnText.html("less");
            moreText.css("display", "inline");
        }
    }

    function openCity(evt, cityName) {
        $(".tabcontent").each(function(index, item){
            $(item).css("display", "none");
        });

        $(".tablinks").each(function(index, item){
            if($(item).hasClass("active")){               
                $(item).removeClass("active");
            }
        });

        $("#" + cityName).css("display","block");
        evt.currentTarget.className += " active";
    }