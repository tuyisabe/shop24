
// for checking the current uncompleted tasks
$(document).ready(function () {
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
    document.querySelector('.merge-data-search').addEventListener('click', () => {
        $.ajax({
            url: "/manageApplication/merge_searched_data/",
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
                swal({
                    title: "Merge table",
                    text: "Needs to have at least more than one items in the list. "
                ,
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

