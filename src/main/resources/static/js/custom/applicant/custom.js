                function automaticSearch() {
                    let xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            let data = JSON.parse(this.responseText);
                            let applicationID = data.applicationID;
                            let appJusts = data.appJusts;
                            let counter = data.count;
                            if (counter > 0) {
                                loadData(data.justiciables);
                                swal({
                                    title: counter + " match(es) found !",
                                    text: "Do you want to merge automatically ?",
                                    icon: "info",
                                    type: "info",
                                    showCancelButton: true
                                }).then(function () {
                                    // window.location = "/manageApplication/view/1";
                                    // window.open("/manageApplication/view/1", "_blank");

                                });


                            } else {
                                swal({
                                    text: "Do you want to issue the certificate ?",
                                    title: "There is no criminal background found!",
                                    icon: "info",
                                    type: "warning",
                                    closeOnClickOutside: false,
                                    // buttons: true
                                    buttons: ["Search Manual", "Issue it!"],
                                }).then(function (isTrue) {
                                    if(isTrue){
                                        window.open("/manageApplication/view/" + applicationID, "_blank");
                                    }else{
                                        swal("Search manually is selected !", {
                                            buttons: false,
                                            timer: 2500,
                                          });
                                    }
                                });
                            }
                        }
                    };
                    xmlhttp.open(
                        "GET",
                        "/manageApplication/searchMatches/nid");
                    xmlhttp.send();
                    replace();
                }
                // for checking the current uncompleted tasks
                $(document).ready(function () {
                    automaticSearch();
                    $.ajax({
                        type: "GET",
                        contentType: "application/json",
                        url: "/manageApplication/pendingListToMerge",
                        datatype: "json",
                        success: function (data) {
                            let tempJusticiables = data.tempJusticiables;
                            if (data.count > 0) {
                                swal({
                                    title: "Continue where left !",
                                    text: "There is pending data to merge.",
                                    icon: "info",
                                    buttons: true,
                                })

                                $('html, body').animate({
                                    scrollTop: $("#to_merge_list").offset().top
                                }, 2000);
                                addToMergeTable(tempJusticiables);
                            }
                        },
                        error: function (err) {
                        },
                    });

                    $('.clear-temp').click(function () {

                        swal({
                            title: "Are you sure?",
                            text: "All data will cleaned from  the table !",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    $.ajax({
                                        url: "/manageApplication/deleteFromTempMerge/all",
                                        type: "DELETE",
                                        success: function (data) {
                                            swal("To be merged table cleaned.", {
                                                icon: "success",
                                            }).then((ok) => {
                                                if (ok)
                                                    location.reload();
                                            });
                                        },
                                        error: function (err) {
                                            swal("To be merged table cleaned.", {
                                                icon: "success",
                                            }).then((ok) => {
                                                if (ok)
                                                    location.reload();
                                            });
                                        }
                                    });
                                } else {
                                    swal("Action Cancelled !");
                                }
                            });
                    });

                    // Merge Function 

                    document.querySelector('.merge-data').addEventListener('click', () => {

                        $.ajax({
                            url: "/manageApplication/mergeData/",
                            type: "GET",
                            success: function (data) {
                                if (data.counter > 0) {
                                    console.log(data);
                                    swal("Merge completed", {
                                        icon: "success",
                                    }).then((ok) => {
                                        location.reload();
                                    });
                                } else {
                                    swal("Merge action needs more than one record !", {
                                        icon: "warning",
                                        title: "Merge",
                                    }).then((ok) => {
                                    });
                                }
                            },
                            error: function (err) {
                                swal("ERROR: " + err, {
                                    icon: "warning",
                                }).then((ok) => {
                                    if (ok)
                                        location.reload();
                                });
                            }
                        });
                    });
                });

                const viewMergedWith = (justiciableRootId) => {
                    $.ajax({
                        url: "/merge_and_restore/view/" + justiciableRootId,
                        type: "GET",
                        success: async function (data) {
                            console.log(data);
                            await loadJusticiableDependancies(data.justiciableDependancies);
                            await $(".justiciable-dependancies").modal("show");
                        },
                        error: function (err) {

                        }
                    });

                }

                function loadJusticiableDependancies(dataSet) {
                    $("#justiciables-dependancies-table").DataTable({
                        destroy: true,
                        data: dataSet,
                        columns: [
                            { data: "nidOrPassport" },
                            { data: "fullName" },
                            { data: "fatherName" },
                            { data: "motherName" },
                            { data: "spouseName" },
                            {
                                data: "dataSource",
                                render: function (data, type) {
                                    if (data === "CSJ00") return "CRS";
                                    else return data;

                                }
                            },
                            {
                                data: "id",
                                render: function (data, type, full) {
                                    let div =
                                        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">' +
                                        '<div class="btn-group" role="group">' +
                                        '<button id="btnGroupDrop1" type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                                        " Actions" +
                                        "</button>" +
                                        '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
                                        '<a href="#" onclick="restoreJusticiable(' +
                                        data +
                                        ');"  class="dropdown-item view-btn"> <i class="fa fa-refresh"></i> <span> Restore Now  </span></a>' +
                                        "</div>" +
                                        "</div>" +
                                        "</div>";
                                    return div;
                                    // }
                                },
                            },
                        ],
                    });
                }

                const restoreJusticiable = (justiciableDependanceId) => {
                    $.ajax({
                        url: "/merge_and_restore/restore/one/" + justiciableDependanceId,
                        type: "GET",
                        success: async function (data) {
                            let justiciable = data.justiciable;
                            swal({
                                title: " Restored !",
                                text: "All details for " + justiciable.fullName + " are restored !",
                                icon: "success",
                                type: "info",
                                showCancelButton: true
                            }).then(function () {
                                window.location.reload();

                            });
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });

                }

