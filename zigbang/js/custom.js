
    function myFunction() {    
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
        console.log("evt ~~~ ", evt);
        console.log("cityName: ", cityName);

        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them

        for (i = 0; i < $(".tabcontent").length; i++) {
            tabcontent[i].css("display", "none");
        }
        

        // Get all elements with class="tablinks" and remove the class "active"
        for (i = 0; i < $(".tablinks").length; i++) {

            tablinks[i].className = tablinks[i].className.replace(" active", "");            
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
            $("#cityName").css("display", "block");
        evt.currentTarget.className += " active";
    }