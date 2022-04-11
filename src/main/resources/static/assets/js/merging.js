
            $(document).ready(function() {

                // SUBMIT FORM
                $("#justiciableForm").submit(function(event) {
                    // Prevent the form from submitting via the browser.
                    event.preventDefault();
                    ajaxPost();
                });


               function ajaxPost() {

                    // PREPARE FORM DATA
                    var formData = {
                        keyword: $("#keyword").val()
                    }

                    // DO POST
                    $.ajax({
                        type: "POST",
                        contentType: "application/json",
                        url: window.location +"/merge"?+keyword,
                        data: {keyword:keyword},
                        dataType: 'json',
                        success: function(result) {
                                $("#postResultDiv").html("" +
                                    "Post Successfully! " +
                                    "---> Customer's Info: FirstName = " +
                                    result.data.firstName + " ,LastName = " + result.data.lastName + "");
                            }
                            console.log(result);
                        },
                        error: function(e) {
                            alert("Error!")
                            console.log("ERROR: ", e);
                        }
                    });

                    // Reset FormData after Posting
                    resetData();

                }

                function resetData() {
                    $("#keyword").val("");
                }
            })


