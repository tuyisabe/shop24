// GETTING A BLACKLISTED
$(document).ready(function() {
    $('#residenceCountry').select2();                   
    $('#otherResidence').hide();	
    $("#loading").hide(); 
}); 
$(document).ready(function () { 
    $(".lists").click(function(e){
        e.preventDefault();
        $(".blackMore").hide();        
        $("#regBlacklist").show(); 
        $("#Blacklisted").hide(); 
        $(".newblacklist").hide();  
        $(".blacked-btn").hide();

    });

    $(".blacked").click(function(e){
        e.preventDefault();
        $(".blacklists").hide();        
        $("#Blacklisted").show();  
        $(".blacked-btn").hide(); 
        $("#regBlacklist").hide(); 
    });
    $("#close-editing").click(function(e){
        e.preventDefault();
        $(".blackMore").hide(); 
        $(".blacked-btn").show();
    });
    $(".close-reg").click(function(e){
        e.preventDefault();
        $("#regBlacklist").hide(); 
        $(".newblacklist").show();  
        $(".blacklists").show();
        $("#Blacklisted").hide(); 
        $(".blacked-btn").show();
    });

    $(".getBlack").click(function (e) {
        $("#loading").show(); 
        e.preventDefault();
        var blacked = $(this).attr("data-black-id");  
        $.ajax({
            url: "/blacklist/gettingBlacklisted/"+blacked,
            success: function(data) {  
                $("#loading").hide();
                $("#regBlacklist").hide();
                $(".blackMore").show();

                var blacklists = data.blacklist;                              
                
                $("#id-type-id").val(data.identity);              
                $("#identitity-id").val(blacklists.identityNumber);
                $("#firstName-id").val(blacklists.firstName);
                $("#middleName-id").val(blacklists.middleName);
                $("#lastName-id").val(blacklists.lastName);
                $("#fatherFirstName-id").val(blacklists.fatherFirstName);
                $("#fatherLastName-id").val(blacklists.fatherLastName);
                $("#motherFirstName-id").val(blacklists.motherFirstName);                
                $("#motherLastName-id").val(blacklists.motherLastName);
                $("#reasonBroke-id").val(blacklists.reasonBlacklisted);

                
            $(".residenceCountry").val(data.regCountry);
            $(".residenceProvince").val(data.resProvince);
            $(".otherResidentProvince").val(blacklists.otherResidentProvince);
            $(".residenceDistrict").val(data.resDistrict);
            $(".residenceSector").val(data.resSector);
            $(".residenceCell").val(data.resCell);
            -
            $(".registrationCountryId").val(data.regCountry);
            $(".registrationProvinceId").val(data.regProvince);
            $(".otherRegistration").val(blacklists.otherRegistrationProvince);
            $(".registrationDistrictId").val(data.regDistrict);
            $(".registrationSectorId").val(data.regSector);
            $(".registrationCellId").val(data.regCell);

            $(".birthCountryId").val(data.birthCountry);
            $(".birthProvinceId").val(data.birthProvince);
            $(".birthNation").val(blacklists.otherBirthProvince);
            $(".birthDistrictId").val(data.birthDistrict);
            $(".birthSectorId").val(data.birthSector);
            $(".birthCellId").val(data.birthCell); 
            
             
           
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});

// GETTING A BLACKLISTED

// UPDATING BLACKLIST
$(document).ready(function () {
$(".editblack").click(function (e) {
    $("#loading").show(); 
    e.preventDefault();
    var blacked = $(this).attr("data-black-id");  


    $.ajax({
        url: "/blacklist/gettingBlacklisted/"+blacked,
        success: function(data) {  
            $("#loading").hide();
            $(".blackMore").hide();
            $("#regBlacklist").show();
            console.log(data);

            var blacklists = data.blacklist;   
            var resCountry = data.resCountry;         

            $("#bla-id").val(blacklists.id);                
            $("#identityType").prepend("<option value=" + blacklists.identityType+ ">" + data.identity + "</option>");                
            $("#nidaNumber").val(blacklists.identityNumber);
            $("#firstName").val(blacklists.firstName);
            $("#middleName").val(blacklists.middleName);
            $("#lastName").val(blacklists.lastName);
            $("#fatherFirstName").val(blacklists.fatherFirstName);
            $("#fatherLastName").val(blacklists.fatherLastName);
            $("#motherFirstName").val(blacklists.motherFirstName);                
            $("#motherLastName").val(blacklists.motherLastName);
            $("#reasonBlacklisted").val(blacklists.reasonBlacklisted);


            $("#recntry").prepend("<option value=" + blacklists.residentCountryId+ ">" + data.resCountry + "</option>").attr('selected','selected');          
            $("#residenceCountry").prepend("<option value=" + blacklists.residentCountryId+ ">" + blacklists.residentCountryId +"</option>").attr('selected','selected');          
            $("#residenceProvince").prepend("<option value=" + blacklists.residentProvinceId+ ">" + data.resProvince + "</option>");
            $("#otherResidentProvince").val(blacklists.otherResidentProvince);
            $("#residenceDistrict").prepend("<option value=" + blacklists.residentDistrictId+ ">" + data.resDistrict + "</option>");
            $("#residenceSector").prepend("<option value=" + blacklists.residentSectorId+ ">" + data.resSector + "</option>");
            $("#residenceCell").prepend("<option value=" + blacklists.residentCellId+ ">" + data.resCell + "</option>");
            
            $("#registrationCountryId").prepend("<option value=" + blacklists.registrationCountryId+ ">" + data.regCountry + "</option>"); 
            $("#registrationProvinceId").prepend("<option value=" + blacklists.registrationProvinceId+ ">" + data.regProvince + "</option>"); 
            $("#otherRegistration").val(blacklists.otherRegistrationProvince);
            $("#registrationDistrictId").prepend("<option value=" + blacklists.registrationDistrictId+ ">" + data.regDistrict + "</option>"); 
            $("#registrationSectorId").prepend("<option value=" + blacklists.registrationSectorId+ ">" + data.regSector + "</option>"); 
            $("#registrationCellId").prepend("<option value=" + blacklists.residentCellId+ ">" + data.regCell + "</option>"); 

            $("#birthCountryId").prepend("<option value=" + blacklists.birthCountryId+ ">" + data.birthCountry + "</option>"); 
            $("#birthProvinceId").prepend("<option value=" + blacklists.birthProvinceId+ ">" + data.birthProvinc + "</option>");  
            $("#birthNation").val(blacklists.otherBirthProvince);
            $("#birthDistrictId").prepend("<option value=" + blacklists.birthDistrictId+ ">" + data.birthDistrict + "</option>"); 
            $("#birthSectorId").prepend("<option value=" + blacklists.birthSectorId+ ">" + data.birthSector + "</option>"); 
            $("#birthCellId").prepend("<option value=" + blacklists.birthCellId+ ">" + data.birthCell + "</option>");  
           
        },
        error: function (err) {
            console.log(err);
        },
    });
});
});

// UPDATING BLACKLIST




// UNBLACKLISTING
$(".unblacklist").click(function () {
    swal({
        title: "Are you sure??",
        text: "You want to remove this citizen in blacklist???!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            let citizen = $(this).attr("data-black-id"); 
            // alert(citizen); 
            $.ajax({
                url:"/blacklist/unblacklist/" + citizen,
                type: "POST",
                data: "id=" + citizen,
                success: function (data) { 
                    swal("Citizen has been Unblacklisted!!!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 
// UNBLACKLISTING


// REBLACKLISTING
$(".reblacklist").click(function () {
    swal({
        title: "Are you sure??",
        text: "You want to block again this citizen in blacklist???!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            let citizen = $(this).attr("data-black-id"); 
            // alert(citizen); 
            $.ajax({
                url:"/blacklist/reblacklist/" + citizen,
                type: "POST",
                data: "id=" + citizen,
                success: function (data) { 
                    swal("Citizen has been reblacklisted!!!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 
// REBLACKLISTING

// <!-- RESIDENT LOCATION --> 
  
                      
                        $(document).ready(function(){
                        $('.fav_clr').select2({
                            placeholder: ' --Select--', 
                            border: '1px solid #e4e5e7', 
                        });  
                        });
   
    
                $("#residenceCountry").change(function(){
                $('#residenceCountry').on("select2:select", function (e) { 
                          var data = e.params.data.text;
                          
                          if(data!='Rwanda'){ 
                               $('#otherResidence').show();	       
                               $('#residenceDistrict').empty();
                               $('#residenceSector').empty();
                               $('#residenceCell').empty();
                               $('#residenceVillage').empty();  
                         
                              $('#residenceProvince').hide();	
                                $('#residenceDistrict').attr('disabled',true);      	  
                                $('#residenceSector').attr('disabled',true);      	  
                                $('#residenceCell').attr('disabled',true);      	  
                          }
                          else{                           
                           $('#residenceProvince').attr('disabled',false);
                             $('#residenceDistrict').attr('disabled',false);
                             $('#residenceSector').attr('disabled',false);
                             $('#residenceCell').attr('disabled',false);                                                    
                           $('#residenceDistrict').empty();
                           $('#residenceSector').empty();
                           $('#residenceCell').empty();    
                           $('#residenceProvince').show();
                           $('#otherResidence').hide();	 
                          }
                    }); 
                   });
   
                    
                    $("#residenceProvince").change(function(){
                        $("#loading").show(); 
                         var selectedProvince = $(this).children("option:selected").val();
                         $('#residenceDistrict').empty();
                         $('#residenceSector').empty();
                         $('#residenceCell').empty();
                         $('#residenceVillage').empty();
                         console.log(selectedProvince);                        
                         $.ajax({
                               url : "/getResidentProvince/"+selectedProvince,                                
                               success : function(result) {
                                $("#loading").hide();
                                   var jsonData1 = result.provinceVO.districts;
                                    var appendDistrictdata = "";
                                   
                                       for (var i = 0; i < jsonData1.length; i++) {
                                           appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                                           
                                       }
                                       $('#residenceDistrict').append("<option>--Select--</option>")
                                       $("#residenceDistrict").append(appendDistrictdata);
                                       $('#residenceDistrict').show();
                               }, 
                               error : function(err) {
                                   console.log(err);
                               }
                           });
                       });
   
                       
                    $("#residenceDistrict").change(function(){
                        $("#loading").show(); 
                         var selectedDistrict = $(this).children("option:selected").val();
                         $('#residenceSector').empty();
                         $('#residenceCell').empty();
                         $('#residenceVillage').empty();
                         $.ajax({
                               url : "/getResidentDistrict/"+selectedDistrict,
                               success : function(result) {
                                $("#loading").hide();
                                   var jsonData1 = result.districtVO.sectors;
                                    var appendSectordata = "";
                                   
                                       for (var i = 0; i < jsonData1.length; i++) {
                                           appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                                       }
                                       $('#residenceSector').append("<option>--Select--</option>")
                                       $("#residenceSector").append(appendSectordata);
                                       $('#residenceSector').show();
                               }, 
                               error : function(err) {
                                   console.log(err);
                               }
                           });
                       });
                       $("#residenceSector").change(function(){
                        $("#loading").show(); 
                         var selectedSector = $(this).children("option:selected").val();
                         $('#residenceCell').empty();
                         $('#residenceVillage').empty();
                         $.ajax({
                               url : "/getResidentSector/"+selectedSector,
                               success : function(result) {
                                $("#loading").hide();
                                   var jsonData1 = result.sectorVO.cells;
                                    var appendCelldata = "";                                   
                                       for (var i = 0; i < jsonData1.length; i++) {
                                           appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                                       }
                                       $('#residenceCell').append("<option>--Select--</option>")
                                       $("#residenceCell").append(appendCelldata);
                                       $('#residenceCell').show();
                               }, 
                               error : function(err) {
                                   console.log(err);
                               }
                           });
                       });
   
//    RESIDENT LOCATION  

// <!-- REGISTRATION PLACE -->
    
$(document).ready(function(){
           $('.fav_clr').select2({
               placeholder: ' --Select--', 
               border: '1px solid #e4e5e7', 
           });  
});

$(document).ready(function() {
            $('#registrationCountryId').select2();
            $('#otherRegistration').hide();	
        });

        $("#registrationCountryId").change(function(){
        $('#registrationCountryId').on("select2:select", function (e) { 
                  var data = e.params.data.text;
                  
                  if(data!='Rwanda'){ 
                       $('#otherRegistration').show();	       
                       $('#registrationDistrictId').empty();
                       $('#registrationSectorId').empty();
                       $('#registrationCellId').empty();  
                 
                      $('#registrationProvinceId').hide();	
                        $('#registrationDistrictId').attr('disabled',true);      	  
                        $('#registrationSectorId').attr('disabled',true);      	  
                        $('#registrationCellId').attr('disabled',true);      	  
                  }else{                            
                     $('#registrationDistrictId').attr('disabled',false);
                     $('#registrationSectorId').attr('disabled',false);
                     $('#registrationCellId').attr('disabled',false);                                                    
                   $('#registrationDistrictId').empty();
                   $('#registrationSectorId').empty();
                   $('#registrationCellId').empty();    
                   $('#registrationProvinceId').show();
                   $('#otherRegistration').hide();	 
                  }
            }); 
           });

            
           $("#registrationProvinceId").change(function(){
            $("#loading").show(); 
            var selectedProvince = $(this).children("option:selected").val();
            $('#registrationDistrictId').empty();
            $('#registrationSectorId').empty();
            $('#registrationCellId').empty(); 
            $.ajax({
                  url : "/getResidentProvince/"+selectedProvince,
                  success : function(result) {
                    $("#loading").hide();
                      var jsonData1 = result.provinceVO.districts;
                       var appendDistrictdata = "";
                      
                          for (var i = 0; i < jsonData1.length; i++) {
                              appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                          }
                          $('#registrationDistrictId').append("<option>--Select--</option>")
                          $("#registrationDistrictId").append(appendDistrictdata);
                          $('#registrationDistrictId').show();
                  }, 
                  error : function(err) {
                      console.log(err);
                  }
              });
          });
          $("#registrationDistrictId").change(function(){
            $("#loading").show(); 
			  var selectedDistrict = $(this).children("option:selected").val();
			  $('#registrationSectorId').empty();
			  $('#registrationCellId').empty(); 
			  $.ajax({
		    		url : "/getResidentDistrict/"+selectedDistrict,
		    		success : function(result) {
                        $("#loading").hide();
		    			var jsonData1 = result.districtVO.sectors;
		    			 var appendSectordata = "";
		    			
		                    for (var i = 0; i < jsonData1.length; i++) {
		                        appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
		                    }
		                    $('#registrationSectorId').append("<option>--Select--</option>")
		                    $("#registrationSectorId").append(appendSectordata);
		                    $('#registrationSectorId').show();
		    		}, 
		    		error : function(err) {
		    			console.log(err);
		    		}
		    	});
			});
		 
		 $("#registrationSectorId").change(function(){
            $("#loading").show(); 
			  var selectedSector = $(this).children("option:selected").val();
			  $('#registrationCellId').empty(); 
			  $.ajax({
		    		url : "/getResidentSector/"+selectedSector,
		    		success : function(result) {
                        $("#loading").hide();
		    			var jsonData1 = result.sectorVO.cells;
		    			 var appendCelldata = "";
		    			
		                    for (var i = 0; i < jsonData1.length; i++) {
		                        appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
		                    }
		                    $('#registrationCellId').append("<option>--Select--</option>")
		                    $("#registrationCellId").append(appendCelldata);
		                    $('#registrationCellId').show();
		    		}, 
		    		error : function(err) {
		    			console.log(err);
		    		}
		    	});
			});
  
            
// <!-- REGISTRATION PLACE -->





// <!-- BIRTH PLACE -->
    
$(document).ready(function(){
    $('.fav_clr').select2({
        placeholder: ' --Select--', 
        with:'100%',
        border: '1px solid #e4e5e7', 
    });  
});

$(document).ready(function() {
     $('#birthCountryId').select2(); 
     $('#birthNation').hide();
 });

 $("#birthCountryId").change(function(){    
 $('#birthCountryId').on("select2:select", function (e) { 
           var data = e.params.data.text;
           
           if(data!='Rwanda'){ 
                $('#birthNation').show();	       
                $('#birthDistrictId').empty();
                $('#birthSectorId').empty();
                $('#birthCellId').empty();  
          
               $('#birthProvinceId').hide();	
                 $('#birthDistrictId').attr('disabled',true);      	  
                 $('#birthSectorId').attr('disabled',true);      	  
                 $('#birthCellId').attr('disabled',true);      	  
           }else{                            
              $('#birthDistrictId').attr('disabled',false);
              $('#birthSectorId').attr('disabled',false);
              $('#birthCellId').attr('disabled',false);                                                    
            $('#birthDistrictId').empty();
            $('#birthSectorId').empty();
            $('#birthCellId').empty();    
            $('#birthProvinceId').show();
            $('#birthNation').hide();	 
           }
     }); 
    });

     
    $("#birthProvinceId").change(function(){
     $("#loading").show(); 
     var selectedProvince = $(this).children("option:selected").val();
     $('#birthDistrictId').empty();
     $('#birthSectorId').empty();
     $('#birthCellId').empty(); 
     $.ajax({
           url : "/getResidentProvince/"+selectedProvince,
           success : function(result) {
            $("#loading").hide();
               var jsonData1 = result.provinceVO.districts;
                var appendDistrictdata = "";
               
                   for (var i = 0; i < jsonData1.length; i++) {
                       appendDistrictdata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                   }
                   $('#birthDistrictId').append("<option>--Select--</option>")
                   $("#birthDistrictId").append(appendDistrictdata);
                   $('#birthDistrictId').show();
           }, 
           error : function(err) {
               console.log(err);
           }
       });
   });
   $("#birthDistrictId").change(function(){
    $("#loading").show(); 
       var selectedDistrict = $(this).children("option:selected").val();
       $('#birthSectorId').empty();
       $('#birthCellId').empty(); 
       $.ajax({
             url : "/getResidentDistrict/"+selectedDistrict,
             success : function(result) {
                $("#loading").hide();
                 var jsonData1 = result.districtVO.sectors;
                  var appendSectordata = "";
                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendSectordata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('#birthSectorId').append("<option>--Select--</option>")
                     $("#birthSectorId").append(appendSectordata);
                     $('#birthSectorId').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });
  
  $("#birthSectorId").change(function(){
    $("#loading").show(); 
       var selectedSector = $(this).children("option:selected").val();
       $('#birthCellId').empty(); 
       $.ajax({
             url : "/getResidentSector/"+selectedSector,
             success : function(result) {
                $("#loading").hide();
                 var jsonData1 = result.sectorVO.cells;
                  var appendCelldata = "";
                 
                     for (var i = 0; i < jsonData1.length; i++) {
                         appendCelldata += "<option value = '" + jsonData1[i].code + " '>" + jsonData1[i].name + " </option>";
                     }
                     $('#birthCellId').append("<option>--Select--</option>")
                     $("#birthCellId").append(appendCelldata);
                     $('#birthCellId').show();
             }, 
             error : function(err) {
                 console.log(err);
             }
         });
     });

     
// <!-- BIRTH PLACE -->






$("document").ready(function() {    
    // REASON FOR APPLICATION  
    $(".editApplicationReason").click(function (e) {
        e.preventDefault();
        let reasonId = $(this).attr("data-reason-id");
        console.log(reasonId);
        $.ajax({  url: "/edit/" + reasonId, success: function (data) { 
                $(".editReason").modal("show");
                var reason = data.reasons;
                $("#reason_id").val(reason.id);
                $("#descriptionEnglish").val(reason.descriptionEnglish);
                $("#descriptionFrench").val(reason.descriptionFrench);
                $("#descriptionKinyarwanda").val(reason.descriptionKinyarwanda);
            },
            error: function (err) {  console.log(err);  },
        });   
    });
    $(".delete-reason").click(function () {
        swal({  title: "Are you sure?",  text: "The data will permanetly deleted !",
            icon: "warning",   buttons: true, dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                let reasonId = $(this).attr("data-reason-id");
                $.ajax({  url: "/deleteReason/" + reasonId,
                    type: "POST",  data: "id=" + reasonId,
                    success: function (data) {  swal("The Reason has been deleted Successful!", { icon: "success",
                        }).then((okey) => {  if (okey) location.reload();  });
                    },
                    error: function (err) {  console.log(err);   },
                });  } else { swal("Action cancelled !");  }  });
    });
    // REASON FOR APPLICATION                 
    // OFFENSE TYPES                 
        $(".danger-alert-offence").click(function () {
            swal({
                title: "Are you sure?",
                text: "The data will permanetly deleted !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    let offenceTypeId = $(this).attr("data-off-id");
                    $.ajax({
                        url: "/offenceType/deleteOffence/" + offenceTypeId,
                        type: "POST",
                        data: "id=" + offenceTypeId,
                        success: function (data) {
                            swal("Offense has been deleted!", {
                                icon: "success",
                            }).then((ok) => {
                                if (ok) location.reload();
                            });
                        },
                        error: function (err) {
                            console.log(err);
                        },
                    });
                } else {
                    swal("Action cancelled !");
                }
            });
        });
        $(".edit-offence-type-btn").click(function (e) {
            e.preventDefault();
            let offenceTypeId = $(this).attr("data-off-type-id");
            $.ajax({
                url: "/offenceType/edit/"+ offenceTypeId,
                success: function (data) {
                    $(".editOffenceType").modal("show");
                    var offenceType = data.offenceType;
                    $(".idType").val(offenceType.id);
                    $(".enType").val(offenceType.nameEnglish);
                    $(".frType").val(offenceType.nameFrench);
                    $(".rwType").val(offenceType.nameKinyarwanda);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        });

        $(".danger-offense-type").click(function () {
            swal({
                title: "Are you sure?",
                text: "This Offense type will be deleted permanetly!!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    let offenceTypeId = $(this).attr("data-off-type-id");
                    $.ajax({
                        url: "/offenceType/delete/" + offenceTypeId,
                        type: "POST",
                        data: "id=" + offenceTypeId,
                        success: function (data) {
                            swal("Offense Type has been deleted!", {
                                icon: "success",
                            }).then((okey) => {
                                if (okey) location.reload();
                            });
                        },
                        error: function (err) {
                            console.log(err);
                        },
                    });
                } else {
                    swal("Action cancelled !");
                }
            }); 
    });
     // OFFENSE TYPES 

     /// SENTENSES

     $(document).ready(function () {
        $(".edit-sentence-type-btn").click(function (e) {
            e.preventDefault();
            let sentenseType = $(this).attr("data-sentence-type-id"); 
            $.ajax({
                url: "/sentence/edit/"+sentenseType,
                success: function(data) { 
                    $(".editSentenceType").modal("show");
                    var sentenseTypes = data.sentenceType;
                    $(".idSentence").val(sentenseTypes.id);
                    $(".nameEng").val(sentenseTypes.nameEnglish);
                    $(".nameFr").val(sentenseTypes.nameFrench);
                    $(".nameRw").val(sentenseTypes.nameKinyarwanda);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        });
    });
   

    $(".danger-sentence-type").click(function () {
        swal({
            title: "Are you sure?",
            text: "This Sentence type will be deleted permanetly!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                let sentenceTypeId = $(this).attr("data-sentence-type-id");
                $.ajax({
                    url: "/sentence/delete/"+sentenceTypeId,
                    type: "POST",
                    data: "id=" + sentenceTypeId,
                    success: function (data) {
                        swal("Sentence Type has been deleted!", {
                            icon: "success",
                        }).then((okey) => {
                            if (okey) location.reload();
                        });
                    },
                    error: function (err) {
                        console.log(err);
                    },
                });
            } else {
                swal("Action cancelled !");
            }
        }); 
    }); 

    /// SENTENCESS

    /// RELEASE

    $(document).ready(function () {
        $(".edit-release-type-btn").click(function (e) {
            e.preventDefault();
            let seleaseType = $(this).attr("data-rel-type-id");  
            $.ajax({
                url: "/releaseType/getbyid/"+seleaseType,
                success: function(data) { 
                    $(".releaseTypeUpdate").modal("show");
                    var releaseType = data.realeseTypes;
                    console.log(releaseType);
                    $("#releaseTypeId").val(releaseType.id);
                    $("#releaseTypeNameEn").val(releaseType.nameEnglish);
                    $("#releaseTypeNameFr").val(releaseType.nameFrench);
                    $("#releaseTypeNameKn").val(releaseType.nameKinyarwanda);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        });
    });
   

    $(".danger-release-type").click(function () {
        swal({
            title: "Are you sure??",
            text: "This Release type will be deleted permanetly!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                let realeseType = $(this).attr("data-rel-type-id"); 
                $.ajax({
                    url: "/releaseType/delete/"+realeseType,
                    type: "POST",
                    data: "id="+realeseType,
                    success: function (data) { 
                        swal("Release Type has been deleted!", {
                            icon: "success",
                        }).then((okey) => {
                            if (okey) location.reload();
                        });
                    },
                    error: function (err) {                        
                        console.log(err);
                    },
                });
            } else {
                swal("Action cancelled !");
            }
        }); 
    }); 

    /// RELEASE

     /// OCCUPATION

     $(document).ready(function () {
        $(".edit-occupation-type-btn").click(function (e) {
            e.preventDefault();
            var occupation = $(this).attr("data-occupation-type-id");  
            $.ajax({
                url: "/editOccupation/"+occupation,
                success: function(data) { 
                    $(".edit-occupation-modal-lg").modal("show");
                    var occupations = data.occupation;
                    $("#occ-id").val(occupations.id);
                    $("#descriptionEng").val(occupations.descriptionEnglish);
                    $("#descriptionFren").val(occupations.descriptionFrench);
                    $("#descriptionKiny").val(occupations.descriptionKinyarwanda);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        });
    });
   

    $(".danger-alert-occupation").click(function () {
        swal({
            title: "Are you sure??",
            text: "This Occupation will be deleted permanetly!!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var accup = $(this).attr("data-occupation-type-id");  
                $.ajax({
                    url: "/deleteOccupation/"+accup,
                    type: "POST",
                    data: "id="+accup,
                    success: function (data) {
                        console.log(data);
                        swal("Occupation has been deleted!", {
                            icon: "success",
                        }).then((okey) => {
                            if (okey) location.reload();
                        });
                    },
                    error: function (err) {                        
                        console.log(err);
                    },
                });
            } else {
                swal("Action cancelled !");
            }
        }); 
    }); 

    /// OCCUPATION

    
     /// ATTACHMENT

     $(document).ready(function () {
        $(".edit-filetype-btn").click(function (e) {
            e.preventDefault();
            var occupation = $(this).attr("data-occupation-type-id");  
            $.ajax({
                url: "/editOccupation/"+occupation,
                success: function(data) { 
                    $(".edit-occupation-modal-lg").modal("show");
                    var occupations = data.occupation;
                    $("#occ-id").val(occupations.id);
                    $("#descriptionEng").val(occupations.descriptionEnglish);
                    $("#descriptionFren").val(occupations.descriptionFrench);
                    $("#descriptionKiny").val(occupations.descriptionKinyarwanda);
                },
                error: function (err) {
                    console.log(err);
                },
            });
        });
    });
   

    $(".danger-alert-file").click(function () {
        swal({
            title: "Are you sure??",
            text: "This Attachment Type will be deleted permanetly!!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var file = $(this).attr("data-file-type-id");  
                $.ajax({
                    url: "/delete/file/"+file,
                    type: "POST",
                    data: "id="+file,
                    success: function (data) { 
                        swal("Attachment has been deleted!", {
                            icon: "success",
                        }).then((okey) => {
                            if (okey) location.reload();
                        });
                    },
                    error: function (err) {                        
                        console.log(err);
                    },
                });
            } else {
                swal("Action cancelled !");
            }
        }); 
    }); 

    /// attachment
/// ALARM

$(document).ready(function () {
    $(".editAlarmType").click(function (e) {
        e.preventDefault();
        var alarm = $(this).attr("data-alarm-id");  
        $.ajax({
            url: "/editAlarmType/"+alarm,
            success: function(data) {  
                $(".edit-alarm-modal-lg").modal("show");
                var alarmT = data.alarmType;
                $("#alarm-id").val(alarmT.id);
                $("#codes").val(alarmT.code);
                $("#nameKinyarwandas").val(alarmT.nameKinyarwanda);
                $("#nameFrenchs").val(alarmT.nameFrench);
                $("#nameEnglishs").val(alarmT.nameEnglish);
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});


$(".deleteAlarmType").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Attachment Type will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var alarm = $(this).attr("data-alarm-id");  
            $.ajax({
                url: "/deleteAlarmType/"+alarm,
                type: "POST",
                data: "id="+alarm,
                success: function (data) { 
                    swal("Attachment has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 

/// ALARM

/// IDENTIFICATION TYPE

$(document).ready(function () {
    $(".editIdentType").click(function (e) {
        e.preventDefault();
        var identi = $(this).attr("data-ident-id");   
        $.ajax({
            url: "/editIdentication/"+identi,
            success: function(data) {  
                $(".edit-identi-modal-lg").modal("show");
                var identification = data.identificationType;
                $("#id-i").val(identification.id); 
                $("#code-i").val(identification.code); 
                $("#nameKiny-i").val(identification.nameKinyarwanda);
                $("#nameFrench-id").val(identification.nameFrench);
                $("#nameEnglish-id").val(identification.nameEnglish);
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});
 

$(".delete-identi").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Identification Type will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var ident = $(this).attr("data-ident-id"); 
            console.log(ident);
            $.ajax({
                url: "/deleteIdent/"+ident,
                type: "POST",
                data: "id="+ident,
                success: function (data) {
                    console.log(data);
                    swal("Identification has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 

/// IDENTIFICATION TYPE

/// PROSECUTION

$(document).ready(function () {
    $(".editProsecType").click(function (e) {
        e.preventDefault();
         $("#loading").show(); 
        var prosecution = $(this).attr("data-proc-id");
        
        $.ajax({
            url: "/editProsec/"+prosecution,            
            success: function(data) {  
                $("#loading").hide();
                $(".update-prosecution-modal-lg").modal("show");
                var pros = data.prosecutionOffice;
               // var is_active=
              var district = data.district;
            //    console.log(district.name); 
                $("#id-p").val(pros.id); 
                $("#code-p").val(pros.code); 
                $("#nameEng-p").val(pros.nameEnglish);
                $("#nameFranc-p").val(pros.nameFrench);
                $("#nameKiny-p").val(pros.nameKinyarwanda);
                $("#is-active").val(pros.isActive);
                $("#procDistrictOffice").prepend("<option value=" + pros.district.id + ">"+ pros.district.name + "</option>"); 
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});
 

$(".delete-Prosec").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Identification Type will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var prosecut = $(this).attr("data-proc-id"); 
            console.log(ident);
            $.ajax({
                url: "/deleteIdent/"+prosecut,
                type: "POST",
                data: "id="+prosecut,
                success: function (data) {
                    console.log(data);
                    swal("Identification has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 

/// PROSECUTION

/// Maj office
$(document).ready(function () {
    $(".editMaj").click(function (e) {
        e.preventDefault();
        var maj = $(this).attr("data-maj-id"); 
        console.log(maj);
        $.ajax({
            url: "/editMajOff/"+maj,
            success: function(data) {  
                console.log(data);
                $(".update-maj-office").modal("show");
                var majf = data.majOffice; 
               console.log(majf);
                $("#maj_id").val(majf.id);  
                $("#name-m").val(majf.name);
                $("#email-m").val(majf.email);
                $("#description-m").val(majf.description);
                $("#is-active-m").val(majf.isUsed); 
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
});
 

$(".delete-maj").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Maj Office  will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var maj = $(this).attr("data-maj-id"); 
            console.log(maj);
            $.ajax({
                url: "/deleteMajOff/"+maj,
                type: "POST",
                data: "id="+maj,
                success: function (data) { 
                    swal("Maj Office has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 

/// MajOffice


/// Dossier
$(document).ready(function () {
    $(".editDossier").click(function (e) {
        e.preventDefault();
        var dossier = $(this).attr("data-dossier-id"); 
        console.log(dossier);
        $.ajax({
            url: "/dossier/edit/"+dossier,
            success: function(data) {  
                $(".editDossierType").modal("show");
                var doss = data.dossierType;  
                $("#idd-d").val(doss.id);  
                $("#name-d").val(doss.name);
                $("#description-d").val(doss.description); 
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
    
$(".delete-dossier").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Dossier Type will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var dos = $(this).attr("data-dossier-id");  
            $.ajax({
                url: "/dossier/delete/"+dos,
                type: "POST",
                data: "id="+dos,
                success: function (data) { 
                    swal("Dossier Type has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
}); 
});
 


/// Dossier


/// Messages 
$(document).ready(function () {
    $(".editMessage").click(function (e) {
        e.preventDefault();
        var message = $(this).attr("data-message-id"); 
        console.log(message);
        $.ajax({
            url: "/editMessages/"+message,
            success: function(data) {  
                $(".editMessages").modal("show");
                var mess = data.messages;  
                $("#message_id").val(mess.id);  
                $("#message-e").val(mess.messageEnglish);
                $("#message-f").val(mess.messageFrench); 
                $("#message-k").val(mess.messageKinyarwanda); 
            },
            error: function (err) {
                console.log(err);
            },
        });
    });
        
    $(".delete-message").click(function () {
        swal({
            title: "Are you sure??",
            text: "This Message will be deleted permanetly!!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                var mes = $(this).attr("data-message-id");  
                $.ajax({
                    url: "/deleteMessages/"+mes,
                    type: "POST",
                    data: "id="+mes,
                    success: function (data) { 
                        swal("Message has been deleted!", {
                            icon: "success",
                        }).then((okey) => {
                            if (okey) location.reload();
                        });
                    },
                    error: function (err) {                        
                        console.log(err);
                    },
                });
            } else {
                swal("Action cancelled !");
            }
        }); 
    }); 
}); 
 
 

/// Messages 

/// APPLICANT TYPES 

$(".editApplicant").click(function (e) {
    e.preventDefault();
    var applicant = $(this).attr("data-applicant-id"); 
    console.log(applicant);
    $.ajax({
        url: "/editApplicantType/"+applicant,
        success: function(data) {   
            console.log(data);  
            $(".update-aplicant-modal-lg").modal("show");
            var applic = data.applicantType;  
            $("#appl-id").val(applic.id);  
            $("#desc-eng").val(applic.descriptionEnglish);
            $("#desc-fr").val(applic.descriptionFrench); 
            $("#desc-kiny").val(applic.descriptionKinyarwanda); 
        },
        error: function (err) {
            console.log(err);
        },
    });
});

$(".delete-applicant").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Applicant Type will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var app = $(this).attr("data-applicant-id");  
            $.ajax({
                url: "/deleteApplicantType/"+app,
                type: "POST",
                data: "id="+app,
                success: function (data) { 
                    swal("Applicant Type has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
});  
 /// APPLICANT TYPES    

 /// APPLICATION STATUS 

$(".editStatus").click(function (e) {
    e.preventDefault();
    var status = $(this).attr("data-status-id");  
    $("#loading").show(); 
    $.ajax({
        url: "/manageApplicationStatus/editApplionStatus/"+status,
        success: function(data) {   
            $("#loading").hide(); 
            $(".update-application-status").modal("show");
            var stat = data.applicationStatus;  
            $("#stat-id").val(stat.id);  
            $("#code-s").val(stat.code);
            $("#nameEnglish-s").val(stat.nameEnglish); 
            $("#nameFrench-s").val(stat.nameFrench); 
            $("#nameKinyarwanda-s").val(stat.nameKinyarwanda); 
            $("#is-used").val(stat.isUsed); 
        },
        error: function (err) {
            console.log(err);
        },
    });
});
 /// APPLICATION STATUS  



 ///PROFESSIONS

$(".editprofession").click(function (e) {
    e.preventDefault();
    var profession = $(this).attr("data-profession-id");      
    $.ajax({
        url: "/edit_profession/"+profession,
        success: function(data) {    
            $(".update-profession").modal("show");
            var prof = data.profession;  
            $("#pro_id").val(prof.id);  
            $("#descEnglish").val(prof.descriptionEnglish);
            $("#descFrench").val(prof.descriptionFrench); 
            $("#descKinyarwanda").val(prof.descriptionKinyarwanda); 
        },
        error: function (err) {
            console.log(err);
        },
    });
});

$(".delete-profession").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Profession will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var profession = $(this).attr("data-profession-id"); 
            $.ajax({
                url: "/delete_profession/"+profession,
                type: "POST",
                data: "id="+profession,
                success: function (data) { 
                    swal("Profession has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
});  
 /// PROFESSIONS

 ///COURTS

$(".editCourtTypeButton").click(function (e) {
    e.preventDefault();
    var courtType = $(this).attr("court-type-id");      
    $.ajax({
        url: "/courtType/getbyid/"+courtType,
        success: function(data) {    
            $(".bs-typeUpdateTable-modal-lg").modal("show");
            var courtT = data.courtType;  
            $("#courtTypeId").val(courtT.id);  
            $("#courtTypeNameEn").val(courtT.nameEnglish);
            $("#courtTypeNameFr").val(courtT.nameFrench); 
            $("#courtTypeNameKn").val(courtT.nameKinyarwanda); 
        },
        error: function (err) {
            console.log(err);
        },
    });
});

$(".delete-courtType").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Profession will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var courtTyp = $(this).attr("court-type-id"); 
            $.ajax({
                url: "/courtType/delete/"+courtTyp,
                type: "POST",
                data: "id="+courtTyp,
                success: function (data) { 
                    swal("Court Type has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
});  
 /// COURT

 ///COURT TYPE

$(".editCourt").click(function (e) {
    e.preventDefault();
    var court = $(this).attr("court-id");      
    $.ajax({
        url: "/court/getbyid/"+court,
        success: function(data) {    
            $(".bs-courtUpdate").modal("show"); 
            var courtt = data.court;  
            $("#court-Type").prepend("<option value=" + courtt.courtType.id + ">"+ courtt.courtType.nameEnglish + "</option>"); 
            $("#courtId").val(courtt.id);  
            $("#courtName").val(courtt.name);
          },
        error: function (err) {
            console.log(err);
        },
    });
});

$(".delete-court").click(function () {
    swal({
        title: "Are you sure??",
        text: "This Court will be deleted permanetly!!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            var court = $(this).attr("court-id"); 
            $.ajax({
                url: "/court/delete/"+court,
                type: "POST",
                data: "id="+court,
                success: function (data) { 
                    swal("Court has been deleted!", {
                        icon: "success",
                    }).then((okey) => {
                        if (okey) location.reload();
                    });
                },
                error: function (err) {                        
                    console.log(err);
                },
            });
        } else {
            swal("Action cancelled !");
        }
    }); 
});  
 /// COURT TYPE

});


