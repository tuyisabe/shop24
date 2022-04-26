        $(document).ready(function () { 
            $(".verification-sent-form").hide();
            $(".identification-step").hide();
            $(".identification-type-form").hide();
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
    $(".next-to-personal-auth").click(function(){
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
    const [file] = inputImage.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  } 
// BROWSING IMAGE

$(document).ready(function () { 
    $("#save_user_btn").click(function(){

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
    console.log(Occupation);
    console.log($('.input-Image').val());
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url:"/add_public_users",
        datatype: "json",
            data: JSON.stringify({
                profilePicture : $('.input-Image').val(),
                nidaNumber: $("#nidaNumber").val(),
                email: $("#email").val(),
                firstName :$(".firstName").val(),
                middleName: $(".middleName").val(),
                lastName: $(".lastName").val(),
                gender: $(".gender").val(),
                dateOfBirth: $(".dateOfBirth").val(),
                language: $(".language").val(),  
                maritalStatus: $(".maritalStatus").val(), 
                majOffice: $(".majOffice").val(),                
                fatherFirstName: $(".fatherFirstName").val(),
                fatherLastName: $(".fatherLastName").val(),
                motherFirstName:$(".motherFirstName").val(),
                motherLastName:$(".motherLastName").val(),
                identificationType: "identificationType",
                phoneNumber: $(".phoneNumber").val(),
                IdentificationNumber: "IdentificationNumber",
                DateOfExpiry: "DateOfExpiry",
                DateOfIssue: "DateOfIssue", 
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
                residentCountryId:$(".residentCountryId").val(),
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
                // window.location.href = "/added_un_record/"+data.justiciable;
                //window.location()
            //location.reload();
            },
            error: function (err) {
                console.log(err);
            },
        }); 
    });
}); 