
/**
* Pproject : Criminal Record System
* Author: Claude Kabayiza
* Email: claudekabayiza@gmail.com
* Date picker
*/

$(document).ready(function () {

    // Date Picker
    jQuery('#datepicker').datepicker();
    jQuery('#datepicker-start').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    
    jQuery('#datepicker').datepicker();
    jQuery('#datepicker-end').datepicker({
        autoclose: true,
        todayHighlight: true
    });

jQuery('#datepicker').datepicker();
    jQuery('#datepicker-birthday').datepicker({
        autoclose: true,
        todayHighlight: true
    });


jQuery('#datepicker').datepicker();
    jQuery('#offenceselectdate').datepicker({
        autoclose: true,
        todayHighlight: true,
        endDate: "today"
    });
    
    jQuery('#datepicker').datepicker();
    jQuery('#sentenceselectdate').datepicker({
        autoclose: true,
        todayHighlight: true,
        endDate: "today"
    });
  
   jQuery('#datepicker').datepicker();
    jQuery('#sentenceReleaselectdate').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    
    jQuery('#datepicker').datepicker();
    jQuery('#birthDate').datepicker({
        autoclose: true,
        todayHighlight: true,
        endDate: "today"
    });
      


});