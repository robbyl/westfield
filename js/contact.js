jQuery(document).ready(function() {

    // ==== CONTACT FORM SECTION ==== //
    jQuery('#contact-form').submit(
            function slickcontactparse(e) {
                // EMAIL VALIDATION FUNCTION
                var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

                // EDIT THIS SECTION IF DIFFERENT FORM ELEMENTS
                // Values
                var successmessage = "Thank you for email, we will be in contact soon!";
                var failedmessage = "There was a problem, please try again!";
                var usersemail = jQuery('#email');
                var usersname = jQuery('#name');
                var userscompany = jQuery('#company');
                var userscomment = jQuery('#commentarea');
                var isvalid = 1;
                var url = 'contact.php';

                //Checking information is correct before sending data


                //CHECKING EMAIL IS PRESENT AND IS VALID
                if (usersemail.val() == "") {
                    jQuery(".contactmessage").html('Please Enter Your Email').fadeIn().delay(1800).fadeOut();
                    jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');
                    return false;
                }

                //CHECKING NAME IS PRESENT
                if (usersname.val() == "") {
                    jQuery(".contactmessage").html('Please Enter Your Name').fadeIn().delay(1800).fadeOut();
                    jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');
                    return false;
                }

                //CHECKING COMMENT IS PRESENT
                if (userscomment.val() == "") {
                    jQuery(".contactmessage").html('Please Enter Your Message').fadeIn().delay(1800).fadeOut();
                    jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');
                    return false;
                }

                var valid = emailReg.test(usersemail.val());

                if (!valid) {
                    jQuery(".contactmessage").html('Please Enter Your Valid Email').fadeIn().delay(1800).fadeOut();
                    jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');
                    return false;
                }
                //CHECKING EMAIL IS PRESENT AND IS VALID

                /* 
                 *
                 * POSTING DATA USING AJAX AND
                 * THEN RETREIVING DATA FROM PHP SCRIPT
                 *
                 */

                jQuery.post(url, {usersname: usersname.val(), userscomany: userscompany.val(), usersemail: usersemail.val(), userscomment: userscomment.val(), isvalid: isvalid}, function(data) {
                    if (data == 'success') {
                        jQuery("#email").val('');
                        jQuery("#commentarea").val('');
                        jQuery("#name").val('');
                        jQuery("#company").val('');
                        jQuery(".contactsuccess").html(successmessage).fadeIn().delay(1800).fadeOut();
                        jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');

                    } else {
                        jQuery(".contactmessage").html(failedmessage).fadeIn().delay(1800).fadeOut();
                        jQuery('input[type=submit]', jQuery("#contact-form")).removeAttr('disabled');
                        return false;

                    }

                });

                /* 
                 *
                 * POSTING DATA USING AJAX AND
                 * THEN RETREIVING DATA FROM PHP SCRIPT
                 *
                 */
                return false
            }

    );
    /*
     * AJAX Section
     * This function will handle the contact process through AJAX
     */
// ==== CONTACT FORM SECTION ==== //	

// ==== ACCORDION SECTION ==== //
    jQuery('.accordionwrap .accordioncontent').hide();
//	jQuery('.accordionwrap .accordiontitle:first-child').addClass('active').next().show();

    jQuery('.accordionwrap .accordiontitle').click(function() {
        if (jQuery(this).next().is(':hidden')) {
            jQuery(this).parent().find(".accordiontitle").removeClass('active').next().slideUp('fast');
            jQuery(this).toggleClass('active').next().slideDown('fast');
        }
        return false;
    });
    // ==== ACCORDION SECTION ==== //


});

// Google maps api settings //
jQuery(window).load(function() {

    /* Google Maps */
    loadGoogleMaps();

});

function initGoogleMaps() {
    /* Google Maps Init */
//	var myLatlng = new google.maps.LatLng(-37.817942, 144.964977);
    var myLatlng = new google.maps.LatLng(-6.772110, 39.234999);
    var myOptions = {
        zoom: 16,
        center: myLatlng,
        popup: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("googlewrap"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Our Company Location"
    });
    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(17);
    });
}

function loadGoogleMaps() {
    /* Google Maps Load */
    if (jQuery('#googlewrap').length != 0) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initGoogleMaps";
        document.body.appendChild(script);
    }
}