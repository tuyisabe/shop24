$(document).ready(function () { 
    var IdentificationType;
    var identificationNumber;
    var placeOfIssue;
    var dateOfIssue;
    var  dateOfExpiry;
    $("#identity_type1").change(function(){ 
         IdentificationType= document.getElementById("identity_type1").value;
         if(IdentificationType == 'passport') {  $(".chosen_passport1").show();  $(".chosen_id1").hide();   }
         else {  $(".chosen_id1").show();   $(".chosen_passport1").hide(); }
        });
            $(function () {
                $(".citizen_living_rwanda").click(function(){
                    if(IdentificationType == 'passport') { 
                        if($(".passport-class").val() == "" || $(".place-issued-1").val() == "" || $(".date-issued-1").val() == "" || $(".date-expiry-1").val() == "") 
                         { alert("All data is required!"); } 
                        else{ 
                           IdentificationType="passport";
                            identificationNumber=$(".passport-class").val();
                            placeOfIssue = $(".place-issued-1").val();
                          dateOfIssue = $(".date-issued-1").val();
                          dateOfExpiry = $(".date-expiry-1").val();
                            //  egewfwefewfewfewfewf
                            $(".send-email-form").hide();
                            $(".verification-sent-form").hide();
                            $(".identification-type-form").hide();
                            $(".identification-step").hide();
                            $(".email-step").hide();
                            
                            $(".personal_information-form").show();
                            $(".personal_information-step").show(); 
                        $(".identity_type").val(IdentificationType);
                        $(".identity_number").val(identificationNumber);
                        $(".place_of_issued").val(placeOfIssue);
                        $(".date_of_issued").val(dateOfIssue);
                        $(".date_of_expiration").val(dateOfExpiry);
                        }  
                    }
                    else {   if ($(".nida-class").val() == "") { alert("National Identity is required!");  } 
                        else{ 
                            $(".send-email-form").hide();
                            $(".verification-sent-form").hide();
                            $(".identification-type-form").hide();
                            $(".identification-step").hide();
                            $(".email-step").hide();
                            $(".personal_information-form").show();
                            $(".personal_information-step").show();
                            identificationNumber = $(".nida-class").val();             
                            get_citizen_living_rwanda(identificationNumber);
                        }
                    }
                    
                });
            });

            $("#identity_type2").change(function(){ 
                IdentificationType= document.getElementById("identity_type2").value;
                 if(IdentificationType == 'passport') {  $(".chosen_passport").show();  $(".chosen_id").hide();   }
                 else {  $(".chosen_id").show();   $(".chosen_passport").hide(); }
                });
                    $(function () {
                        $(".citizen_living_abroad").click(function(){
                            if(IdentificationType == 'passport') { 
                                if($(".passport-class").val() == "" || $(".place-issued-2").val() == "" || $(".date-issued-2").val() == "" || $(".date-expiry-2").val() == "") 
                                 { alert("All data is required!"); } 
                                else{ 
                                   IdentificationType ="passport";
                                   identificationNumber=$(".passport-class").val();
                                   placeOfIssue = $(".place-issued-2").val();
                                   dateOfIssue = $(".date-issued-2").val();
                                   dateOfExpiry = $(".date-expiry-2").val();
                                    $(".send-email-form").hide();
                                    $(".verification-sent-form").hide();
                                    $(".identification-type-form").hide();
                                    $(".identification-step").hide();
                                    $(".email-step").hide();
                                    $(".personal_information-form").show();
                                    $(".personal_information-step").show();
                                $(".identity_type").val(IdentificationType);
                                $(".identity_number").val(identificationNumber);
                                $(".place_of_issued").val(placeOfIssue);
                                $(".date_of_issued").val(dateOfIssue);
                                $(".date_of_expiration").val(dateOfExpiry);
                                }  }
                            else {   if ($(".nida-class-2").val() == "") { alert("National Identity is required!");  } 
                                else{  identificationNumber=$(".nida-class-2").val();
                                $(".send-email-form").hide();
                                $(".verification-sent-form").hide();
                                $(".identification-type-form").hide();
                                $(".identification-step").hide();
                                $(".email-step").hide();
                                $(".personal_information-form").show();
                                $(".personal_information-step").show();
                                    console.log(identificationNumber);
                                    get_citizen_living_rwanda(identificationNumber);

                                 }
                            }
                            
                        });
                    });




            function get_citizen_living_rwanda(nida_number) {
                // var nida_number = $(".nida-class").val();             
                $.ajax({
                    url: "/getNidaResponse/" + nida_number,
                    success: function (result) {
                        console.log(result);
                        var defaultSelected = false;
                        var nowSelected = true;
                        //console.log(result)
                        $(".identity_number").val(nida_number).attr('disabled',true);
                        $('#inputImage').css('background-image', 'url(' + 'data:image/jpeg;base64,' + result.photo + ')');

                        $('#blah').attr("src", "data:image/jpeg;base64," + result.photo);
                        $('#fileName').val(result.photo);
                        var image = result.photo;
                        // console.log(image);
                        // $(".input-Image").val(image);

                        $(".firstName").val(result.foreName).attr('disabled',true);
                        $(".lastName").val(result.surnames).attr('disabled',true); 
                        var gender = result.sex;
                        if (gender == 'F') {
                            var female = "Female";
                            var fCode = "F";
                            $('.gender').append(new Option(female, fCode, defaultSelected, nowSelected)).attr('disabled',true); 
                        } else if (gender == 'M') {
                            var male = "Male";
                            var mCode = "F";
                            $('.gender').append(new Option(male, mCode, defaultSelected, nowSelected)).attr('disabled',true);
                        } else {
                            var unknown = "Unknown";
                            var uCode = "U";
                            $('.gender').append(new Option(unknown, uCode, defaultSelected, nowSelected)).attr('disabled',true);
                        }
                        $(".identity_type").val("Citizen Living In Rwanda").attr('disabled',true);
                       $(".dateOfBirth").val(result.dateOfBirth).attr('disabled',true);
                        $('.maritalStatus').append(new Option(result.maritalStatus, result.civilStatus, defaultSelected, nowSelected));
                        $(".fatherFirstName").val(result.fatherNames);
                        $(".motherFirstName").val(result.motherNames);
                        $(".place_of_issued").val(result.placeOfIssue);
                        $(".date_of_issued").val(result.dateOfIssue);
                        $(".date_of_expiration").val(result.dateOfExpiry);
                        // $("#spouseName").val(result.spouse);
                        $('.birthCountryId').append(new Option(result.birthCountry, result.countryOfBirth, defaultSelected, nowSelected)).attr('disabled',true);
                        $("#placeBirth").val(result.placeOfBirth);
                        
                        // $('.nationality_id').append(new Option(result.countryOfDomicile, result.countryOfDomicileCode, defaultSelected, nowSelected));
                        
                        var code=result.villageId;
                        get_village_data(code);

                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }

            function get_village_data(code) {
                // var code = $("#idCellNumber").val();
                $.ajax({
                    url: "/getVillageByCode/" + code,
                    success: function (result) {
                        console.log(result);
                        var defaultSelected = false;
                        var nowSelected = true;

                        $('.birthProvinceId').append(new Option(result.provinceVO.name, result.provinceVO.code, defaultSelected, nowSelected)).attr('disabled',true);
                        $('.birthDistrictId').append(new Option(result.districtVO.name, result.districtVO.code, defaultSelected, nowSelected)).attr('disabled',true);
                        $('.birthSectorId').append(new Option(result.sectorVO.name, result.sectorVO.code, defaultSelected, nowSelected)).attr('disabled',true);
                        $('.birthCellId').append(new Option(result.cellVO.name, result.cellVO.code, defaultSelected, nowSelected)).attr('disabled',true);
                       
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
            

                    $(function () {
                        $(".refugees").click(function(){
                                if($(".proof-registration").val() == "" || $(".place-issued-3").val() == "" || $(".date-issued-3").val() == "" || $(".date-expiry-3").val() == "") 
                                 { alert("All data is required!"); } 
                                else{ 
                                   IdentificationType ="refugee";
                                   identificationNumber=$(".proof-registration").val();
                                    placeOfIssue = $(".place-issued-3").val();
                                    dateOfIssue = $(".date-issued-3").val();
                                     dateOfExpiry = $(".date-expiry-3").val();
                                     $(".send-email-form").hide();
                                     $(".verification-sent-form").hide();
                                     $(".identification-type-form").hide();
                                     $(".identification-step").hide();
                                     $(".email-step").hide();
                                     $(".personal_information-form").show();
                                     $(".personal_information-step").show();
                            $(".identity_type").val(IdentificationType);
                            $(".identity_number").val(identificationNumber);
                            $(".place_of_issued").val(placeOfIssue);
                            $(".date_of_issued").val(dateOfIssue);
                            $(".date_of_expiration").val(dateOfExpiry);
                                 }  
                            
                        });
                    });

                    $(function () {
                        $(".foreigner_living_rwanda").click(function(){
                                if($(".current-passport").val() == "" || $(".place-issued-4").val() == "" || $(".date-issued-4").val() == "" || $(".date-expiry-4").val() == "") 
                                 { alert("All data is required!"); } 
                                else{ 
                                    IdentificationType ="foreigner living in rwanda";
                                    identificationNumber=$(".current-passport").val();
                                    placeOfIssue = $(".place-issued-3").val();
                                    dateOfIssue = $(".date-issued-3").val();
                                    dateOfExpiry = $(".date-expiry-3").val();
                                     $(".send-email-form").hide();
                                     $(".verification-sent-form").hide();
                                     $(".identification-type-form").hide();
                                     $(".identification-step").hide();
                                     $(".email-step").hide();
                                     $(".personal_information-form").show();
                                     $(".personal_information-step").show(); 
                                $(".identity_type").val(IdentificationType);
                                $(".identity_number").val(identificationNumber);
                                $(".place_of_issued").val(placeOfIssue);
                                $(".date_of_issued").val(dateOfIssue);
                                $(".date_of_expiration").val(dateOfExpiry);

                                 }  
                            
                        });
                    });

});

       $(document).ready(function () { 
            $(".verification-sent-form").hide();
            $(".identification-step").hide();
            //  $(".identification-type-form").hide();
            $(".personal_information-form").hide();
            $(".personal_information-step").hide();
                  $(".send-email-btn").click(function () {  
                        var email= document.getElementById("input-email").value; 
                        $.ajax({
                url:"/verify_email/"+email,
                type: "POST",  data: "id=" + email,
                success: function (data) {  $(".email-sent").modal("show");
                    console.log("Email sent successfully!!!", {  icon: "success",
                    }).then((okey) => {                        
                        if (okey) window.location='/confirm_email';
                    }); },
                error: function (err) {   console.log(err);   },
            }); });  });
                    $(document).ready(function () { 
            $(".email-verification").click(function(){                
                $(".email-sent").modal("hide");
                $(".send-email-form").hide();
                $(".verification-sent-form").show();
            }); });

            //   VERIFY EMAIL
      $(document).ready(function () {                 
        
        $(".Confirmation-btn").click(function (e) { 
                    e.preventDefault();
                    var code= document.getElementById("confirm_code").value; 
                    $.ajax({
            url:"/get_verification_code/"+code,
                        success: function(data) { 
                            if(data.verificationRegistration ==null){alert("Nothing Found");}                                 
                            else {
                                $(".verification-sent-modal").modal("show");
                            console.log(data.verificationRegistration); }                                 
                               },
                        error: function (err) {
                            console.log(err);
                        },
                    });
                }); 
    });
    $(document).ready(function () { 
            $(".next-to-personal-auth").click(function(){                
                $(".verification-sent-modal").modal("hide");
                $(".send-email-form").hide();
                $(".verification-sent-form").hide();
                $(".identification-type-form").show();
                $(".identification-step").show();
                $(".email-step").hide();
            }); });
     //   VERIFY EMAIL

// PERSONAL INFORMATION REGISTRATION

$(document).ready(function () { 
    $(".next-to-personal-info").click(function(){
        $(".send-email-form").hide();
            $(".verification-sent-form").hide();
            $(".identification-type-form").hide();
            $(".identification-step").hide();
            $(".email-step").hide();
            $(".personal_information-form").show();
            $(".personal_information-step").show();

    });

});

// PERSONAL INFORMATION REGISTRATION
     
               
 
    $(document).ready(function () {
        $(".fav_clr").select2({
            placeholder: " Select Role(s)",
            width: "100%",
            border: "1px solid #e4e5e7",
        });
    });

    $(".fav_clr").on("select2:select", function (e) {
        var data = e.params.data.text;
        if (data == "all") {
            $(".fav_clr > option").prop("selected", "selected");
            $(".fav_clr").trigger("change");
        }
    });


    // <!-- BIRTH PLACE -->
    
$(document).ready(function(){
    $('.fav_clr').select2({
        placeholder: ' --Select--', 
        with:'100%',
        border: '1px solid #e4e5e7', 
    });  
});

$(document).ready(function() {
     $('.birthCountryId').select2(); 
     $('.otherbirthProvince').hide();
     $('.otherRegProvince').hide();
     $('.resProvince').hide();
 });

 $(".birthCountryId").change(function(){    
 $('.birthCountryId').on("select2:select", function (e) { 
           var data = e.params.data.text;
           
           if(data!='Rwanda'){ 
                $('.otherbirthProvince').show();	       
                $('.birthDistrictId').empty();
                $('.birthSectorId').empty();
                $('.birthCellId').empty();  
          
               $('.birthProvinceId').hide();	
                 $('.birthDistrictId').attr('disabled',true);      	  
                 $('.birthSectorId').attr('disabled',true);      	  
                 $('.birthCellId').attr('disabled',true);      	  
           }else{                            
              $('.birthDistrictId').attr('disabled',false);
              $('.birthSectorId').attr('disabled',false);
              $('.birthCellId').attr('disabled',false);                                                    
            $('.birthDistrictId').empty();
            $('.birthSectorId').empty();
            $('.birthCellId').empty();    
            $('.birthProvinceId').show();
            $('.otherbirthProvince').hide();	 
           }
     }); 
    });

     
    $(".birthProvinceId").change(function(){
    //  $(".loading").show(); 
     var selectedProvince = $(this).children("option:selected").val();
     $('.birthDistrictId').empty();
     $('.birthSectorId').empty();
     $('.birthCellId').empty(); 
     $.ajax({
           url : "/getResidentProvince/"+selectedProvince,
           success : function(result) {
            $(".loading").hide();
               var jsonData1 = result.provinceVO.districts;
                var appendDistrictdata = "";
               
                   for (var i = 0; i < jsonData1.length; i++) {
                       appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                   }
                   $('.birthDistrictId').append("<option>--Select--</option>")
                   $(".birthDistrictId").append(appendDistrictdata);
                   $('.birthDistrictId').show();
           }, 
           error : function(err) {
               console.log(err);
           }
       });
   });
   $(".birthDistrictId").change(function(){
    $(".loading").show(); 
       var selectedDistrict = $(this).children("option:selected").val();
       $('.birthSectorId').empty();
       $('.birthCellId').empty(); 
       $.ajax({
             url : "/getResidentDistrict/"+selectedDistrict,
             success : function(result) {
                $(".loading").hide();
                 var jsonData1 = result.districtVO.sectors;
                  var appendSectordata = "";
                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('.birthSectorId').append("<option>--Select--</option>")
                     $(".birthSectorId").append(appendSectordata);
                     $('.birthSectorId').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });
  
  $(".birthSectorId").change(function(){
    $(".loading").show(); 
       var selectedSector = $(this).children("option:selected").val();
       $('.birthCellId').empty(); 
       $.ajax({
             url : "/getResidentSector/"+selectedSector,
             success : function(result) {
                $(".loading").hide();
                 var jsonData1 = result.sectorVO.cells;
                  var appendCelldata = "";
                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('.birthCellId').append("<option>--Select--</option>")
                     $(".birthCellId").append(appendCelldata);
                     $('.birthCellId').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });

     
// <!-- BIRTH PLACE --> 

// <!-- RESIDENT PLACE -->
    

 
 $(".resCountryId").change(function(){    
 $('.resCountryId').on("select2:select", function (e) { 
           var data = e.params.data.text;
           
           if(data!='Rwanda'){ 
                $('.resProvince').show();	       
                $('.resDistrict').empty();
                $('.resSector').empty();
                $('.resident_cell').empty();  
          
               $('.resProvinceId').hide();	
                 $('.resDistrict').attr('disabled',true);      	  
                 $('.resSector').attr('disabled',true);      	  
                 $('.resident_cell').attr('disabled',true);      	  
           }else{                            
              $('.resDistrict').attr('disabled',false);
              $('.resSector').attr('disabled',false);
              $('.resident_cell').attr('disabled',false);                                                    
            $('.resDistrict').empty();
            $('.resSector').empty();
            $('.resident_cell').empty();    
            $('.resProvinceId').show();
            $('.resProvince').hide();	 
           }
     }); 
    });

     
    $(".resProvinceId").change(function(){
    //  $(".loading").show(); 
     var selectedProvince = $(this).children("option:selected").val();
     $('.resDistrict').empty();
     $('.resSector').empty();
     $('.resident_cell').empty(); 
     $.ajax({
           url : "/getResidentProvince/"+selectedProvince,
           success : function(result) {
            $(".loading").hide();
               var jsonData1 = result.provinceVO.districts;
                var appendDistrictdata = "";               
                   for (var i = 0; i < jsonData1.length; i++) {
                       appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                   }
                   $('.resDistrict').append("<option>--Select--</option>")
                   $(".resDistrict").append(appendDistrictdata);
                   $('.resDistrict').show();
           }, 
           error : function(err) {
               console.log(err);
           }
       });
   });
   $(".resDistrict").change(function(){
    $(".loading").show(); 
       var selectedDistrict = $(this).children("option:selected").val();
       $('.resSector').empty();
       $('.resident_cell').empty(); 
       $.ajax({
             url : "/getResidentDistrict/"+selectedDistrict,
             success : function(result) {
                $(".loading").hide();
                 var jsonData1 = result.districtVO.sectors;
                  var appendSectordata = "";                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('.resSector').append("<option>--Select--</option>")
                     $(".resSector").append(appendSectordata);
                     $('.resSector').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });
  
  $(".resSector").change(function(){
    $(".loading").show(); 
       var selectedSector = $(this).children("option:selected").val();
       $('.resident_cell').empty(); 
       $.ajax({
             url : "/getResidentSector/"+selectedSector,
             success : function(result) {
                $(".loading").hide();
                 var jsonData1 = result.sectorVO.cells;
                  var appendCelldata = "";
                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('.resident_cell').append("<option>--Select--</option>")
                     $(".resident_cell").append(appendCelldata);
                     $('.resident_cell').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });

     
// <!-- RESIDENT PLACE --> 

 // <!-- REGISTRATION PLACE --> 
    

 
$(".regCountryId").change(function(){    
    $('.regCountryId').on("select2:select", function (e) { 
              var data = e.params.data.text;
              
              if(data!='Rwanda'){ 
                   $('.otherRegProvince').show();	       
                   $('.regDistrict').empty();
                   $('.regSector').empty();
                   $('.registration_cell').empty();  
             
                  $('.regProvinceId').hide();	
                    $('.regDistrict').attr('disabled',true);      	  
                    $('.regSector').attr('disabled',true);      	  
                    $('.registration_cell').attr('disabled',true);      	  
              }else{                            
                 $('.regDistrict').attr('disabled',false);
                 $('.regSector').attr('disabled',false);
                 $('.registration_cell').attr('disabled',false);                                                    
               $('.regDistrict').empty();
               $('.regSector').empty();
               $('.registration_cell').empty();    
               $('.regProvinceId').show();
               $('.otherRegProvince').hide();	 
              }
        }); 
       });
   
        
       $(".regProvinceId").change(function(){
       //  $(".loading").show(); 
        var selectedProvince = $(this).children("option:selected").val();
        $('.regDistrict').empty();
        $('.regSector').empty();
        $('.registration_cell').empty(); 
        $.ajax({
              url : "/getResidentProvince/"+selectedProvince,
              success : function(result) {
               $(".loading").hide();
                  var jsonData1 = result.provinceVO.districts;
                   var appendDistrictdata = "";               
                      for (var i = 0; i < jsonData1.length; i++) {
                          appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                      }
                      $('.regDistrict').append("<option>--Select--</option>")
                      $(".regDistrict").append(appendDistrictdata);
                      $('.regDistrict').show();
              }, 
              error : function(err) {
                  console.log(err);
              }
          });
      });
      $(".regDistrict").change(function(){
       $(".loading").show(); 
          var selectedDistrict = $(this).children("option:selected").val();
          $('.regSector').empty();
          $('.registration_cell').empty(); 
          $.ajax({
                url : "/getResidentDistrict/"+selectedDistrict,
                success : function(result) {
                   $(".loading").hide();
                    var jsonData1 = result.districtVO.sectors;
                     var appendSectordata = "";                 
                        for (var i = 0; i < jsonData1.length; i++) {
                            appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                        }
                        $('.regSector').append("<option>--Select--</option>")
                        $(".regSector").append(appendSectordata);
                        $('.regSector').show();
                }, 
                error : function(err) {
                    console.log(err);
                }
            });
        });
     
     $(".regSector").change(function(){
       $(".loading").show(); 
          var selectedSector = $(this).children("option:selected").val();
          $('.registration_cell').empty(); 
          $.ajax({
                url : "/getResidentSector/"+selectedSector,
                success : function(result) {
                   $(".loading").hide();
                    var jsonData1 = result.sectorVO.cells;
                     var appendCelldata = "";
                    
                        for (var i = 0; i < jsonData1.length; i++) {
                            appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                        }
                        $('.registration_cell').append("<option>--Select--</option>")
                        $(".registration_cell").append(appendCelldata);
                        $('.registration_cell').show();
                }, 
                error : function(err) {
                    console.log(err);
                }
            });
        });  
        
   // <!-- REGISTRATION PLACE --> 



//    BROWSING IMAGE

inputImage.onchange = evt => {
    const [file] = inputImage.files9;
    if (file) {
      blah.src = URL.createObjectURL(file);
      $("#fileName").val(URL.createObjectURL(file));
    }
  } 
// BROWSING IMAGE

$(document).ready(function () { 
    // if($("#save_user_btn").click(function(){

    // }));
    $("#save_user_btn").click(function(){
        var identity_type= $("#identity_type").val();
        var identity_number= $("#identity_number").val();
        var place_of_issued= $("#place_of_issued").val();
        var date_of_expiration= $("#date_of_expiration").val();
        var date_of_issued= $("#date_of_issued").val();
         if ($(".password").val() == "") {
            alert("Password is required!");
            
        } 
        else if ($(".password").val().length<6) {
            alert("Password must be greater than ten characters!");
        } 
        else if ($(".re_password").val() == "") {
            alert("please retype Password!");
        } 
        else if ($(".password").val() != $(".re_password").val()) {
            alert("Password are not matching!");
        } 
        else{

    var Nationality = [];
    $(".nationality_id option:selected").each(function () {
        Nationality.push($(this).val());
    });
    var Profession = [];
    $(".profession_id option:selected").each(function () {
        Profession.push($(this).val());
    });
    var Occupation = [];
    $(".occupation_id option:selected").each(function () {
        Occupation.push($(this).val());
    });
    var Occupation = [];
    $(".occupation_id option:selected").each(function () {
        Occupation.push($(this).val());
    });
   
    console.log("heee");
    console.log(identity_type);
    console.log(identity_number);
    console.log(date_of_expiration);
    console.log("heee");

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url:"/add_public_users",
        datatype: "json",
            data: JSON.stringify({
                profilePicture : $('#fileName').val(),
                email: $("#input-email").val(),
                firstName :$(".firstName").val(),
                middleName: $(".middleName").val(),
                lastName: $(".lastName").val(),
                gender: $(".gender").val(),
                dateOfBirth: $(".dateOfBirth").val(),
                language: $(".language").val(),  
                maritalStatus: $(".maritalStatus").val(), 
                password: $(".password").val(),                
                fatherFirstName: $(".fatherFirstName").val(),
                fatherLastName: $(".fatherLastName").val(),
                motherFirstName:$(".motherFirstName").val(),
                motherLastName:$(".motherLastName").val(),
                identificationType:document.getElementById("identity_type").value,
                phoneNumber: $(".phoneNumber").val(),
                IdentificationNumber:document.getElementById("identity_number").value,
                PlaceOfIssue: place_of_issued,
                DateOfExpiry: date_of_expiration,
                DateOfIssue:date_of_issued, 
                birthCountryId: $(".birthCountryId").val(),
                otherBirthProvince: $(".otherbirthProvince").val(),
                birthProvinceId:$(".birthProvinceId").val(),
                birthDistrictId:$(".birthDistrictId").val(),
                birthSectorId:$(".birthSectorId").val(),
                birthCellId:$(".birthCellId").val(),
                registrationCountryId:$(".regCountryId").val(),
                registrationProvinceId:$(".regProvinceId").val(),
                otherRegistrationProvince: $(".otherRegProvince").val(),
                registrationDistrictId :$(".regDistrict").val(),
                registrationSectorId:$(".regSector").val(),
                registrationCellId:$(".registration_cell").val(),
                residentCountryId:$(".resCountryId").val(),
                otherResidentProvince:$(".resProvince").val(),
                residentProvinceId: $(".resProvinceId").val(),
                residentDistrictId :$(".resDistrict").val(),
                residentSectorId:$(".resSector").val(),
                residentCellId:$(".resident_cell").val(),
                occupation: Occupation,
                profession: Profession,
                nationality: Nationality,
            }),

            cache: false,
            traditional: true,
            timeout: 600000,
            success: function (data) {
                console.log(data)
                alert("Record saved successfully!")
                // window.location='/complete'
            //location.reload();
            },
            error: function (err) {
                console.log(err);
            },
        }); 
    }
    });
}); 