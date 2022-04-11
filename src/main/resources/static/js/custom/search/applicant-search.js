
    
    window.onload = function () {
        getRequsetCount();
    };
    function getRequsetCount() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var requestSize = JSON.parse(xhr.responseText);
                //console.log(requestSize)
                if (requestSize.listPendingApplication != 0) {
                    document.getElementById("pendingRequest").innerHTML =
                        '<span class="badge badge-pill badge-primary float-right" >' +
                        requestSize.listPendingApplication +
                        "</span>";
                }
                if (requestSize.listDraftApplication != 0) {
                    document.getElementById("draftRequest").innerHTML =
                        '<span class="badge badge-pill badge-warning float-right" >' +
                        requestSize.listDraftApplication +
                        "</span>";
                }
                if (requestSize.listProgress != 0) {
                    document.getElementById("listRequestInTrack").innerHTML =
                        '<span class="badge badge-success badge-pill float-right" >' +
                        requestSize.listProgress +
                        "</span>";
                }
            }
        };

        xhr.open("GET", "/requestNotification");
        xhr.send();
        //alert("message");
    }


    $(document).ready(function () {
        $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
            localStorage.setItem("activeTab", $(e.target).attr("href"));
        });
        var activeTab = localStorage.getItem("activeTab");
        if (activeTab) {
            $('#criminalRecords a[href="' + activeTab + '"]').tab("show");
        }

        $(".view-crc").click(function (e) {
            $(".tab2con-h-btn").click();
        });

        $(".btn-back").click(function () {
            $("#tab2-5").click();
        });
    });


    $(document).ready(function () {
        var table = $("#mergedTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#mergedTable_filter");
        // });

        // $(document).ready(function () {
        var table = $("#offenseTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#offenseTable_filter");
        // });

        // $(document).ready(function () {
        var table = $("#setenceTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#setenceTable_filter");
        // });

        // $(document).ready(function () {
        var table = $("#releaseTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#releaseTable_filter");
        // });

        // $(document).ready(function () {
        var table = $("#extractTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#extractTable_filter");
        // });

        // $(document).ready(function () {
        var table = $("#documentTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#documentTable_filter");
    });



    let searchBTN = document.querySelector(".search-btn");
    function checkAll(o) {
        var boxes = document.getElementsByTagName("input");
        if (boxes.length > 0) {
            for (var x = 0; x < boxes.length; x++) {
                var obj = boxes[x];
                if (obj.type == "checkbox") {
                    if (obj.name != "check") obj.checked = o.checked;
                }
            }
        } else {
            alert("Remember to check a field!");
        }
    }

    // searchBTN.addEventListener("click", function(){
    //     alert("Answer");
    // });

    let nidOrPassport,
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        gender,
        maritalStatus,
        fatherName,
        motherName,
        nationality,
        spouseName;

    const searchFn = () => {
        let boxes = document.querySelectorAll(".checkBox");
        let count = 0;
        var text = "";
        for (var x = 0; x < boxes.length; x++) {
            if (boxes[x].checked) {
                text = "" + boxes[x].value;
                if (!text.endsWith(".::.")) {
                    count++;
                    assignValue(x);
                }
            }
        }
        if (count > 0) {
            nidOrPassport = document.querySelector("#nidOrPassport").value;
            firstName = document.querySelector("#firstName").value;
            middleName = document.querySelector("#middleName").value;
            lastName = document.querySelector("#lastName").value;
            dateOfBirth = document.querySelector("#datepicker-birthday").value;
            gender = document.getElementById("gender").value;
            maritalStatus = document.getElementById("maritalStatus").value;
            fatherName = document.querySelector("#fatherName").value;
            motherName = document.querySelector("#motherName").value;
            nationality = document.getElementById("nationality").value;
            maritalStatus = document.querySelector("#maritalStatus").value;
            spouseName = document.querySelector("#spouseName").value;
            searchWordx = document.querySelector("#searchWord").value

            getMatchedData(
                nidOrPassport,
                firstName,
                middleName,
                lastName,
                dateOfBirth,
                gender,
                fatherName,
                motherName,
                nationality,
                maritalStatus,
                spouseName
            );

            // scroll down
            let matches_found = document.querySelector('.matches-found');

            matches_found.style.marginTop = "200";

            matches_found.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const assignValue = (i) => {
        let inputs = document.querySelectorAll(".data-input");
        if (!inputs[i].value.includes("~")) {
            inputs[i].value += "~";
            // alert(inputs[i].value);
            // console.log(inputs[i]);
        }
    };

    const replace = () => {
        let inputs = document.querySelectorAll(".data-input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.includes("~")) {
                inputs[i].value = inputs[i].value.replace("~", "");
                //  console.log(inputs[i].value);
            }
        }
    };

    const getMatchedData = (
        nidOrPassport,
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        gender,
        fatherName,
        motherName,
        nationality,
        maritalStatus,
        spouseName
    ) => {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                let counter = data.count;
                let tableBody = (document.querySelector("#mergeMatchTable tbody").innerHTML = "");
                document.querySelector('.counter').textContent = "";
                if (counter > 0) {
                    document.querySelector('.counter').textContent = "[ " + counter + " ]";
                    for (let i = 0; i < counter; i++) { addDataToTable(data.justiciable[i]); }
                    $(function () {
                        let viewBTNs = document.querySelectorAll('.view-btn');
                        for (let i = 0; i < viewBTNs.length; i++) {
                            viewBTNs[i].addEventListener("click", (e) => {
                                e.preventDefault();
                                $(".search-result-child").css("display", "block");
                                $(".search-result").css("background", "white");
                                $("body,html").animate(
                                    {
                                        scrollTop: 0,
                                    },
                                    1000
                                );
                                return false;
                            });
                        }
                    });

                }
            }
        };
        xmlhttp.open(
            "GET",
            "/manageApplication/searchMatches?nidOrPassport=" +
            nidOrPassport +
            "&firstName=" +
            firstName +
            "&middleName=" +
            middleName +
            "&lastName=" +
            lastName +
            "&dateOfBirth=" +
            dateOfBirth +
            "&gender=" +
            gender +
            "&fatherName=" +
            fatherName +
            "&motherName=" +
            motherName +
            "&nationality=" +
            nationality +
            "&maritalStatus=" +
            maritalStatus +
            "&spouseName=" +
            spouseName 
        );
        xmlhttp.send();
        replace();
    };

    const addDataToTable = (justiciable) => {
        let tableBody = document.querySelector("#addDataToTableBody");
        // console.log(justiciable);

        let tr = "";
        tr +=
            "<tr>" +
            "<td><a><span>" +
            justiciable.nidOrPassport +
            "</span> </a> </td>" +
            "<td><span>" +
            justiciable.fullName +
            "</span></td>" +
            "<td><span>" +
            justiciable.fatherName +
            "</span></td>" +
            "<td><span>" +
            justiciable.motherName +
            "</span></td>" +
            "<td><span>" +
            justiciable.spouseName +
            "</span></td>" +
            "<td> <span>" +
            justiciable.dataSource +
            "</span></td>" +
            '<td> <div class="btn-group" role="group" aria-label="Button group with nested dropdown">' +
            '<div class="btn-group" role="group">' +
            '<button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            ' Actions' +
            '</button>' +
            '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
            '<a href="#" onclick="seletedJusticiableInfo(' +
            $(".applicationId").val() +
            "," +
            justiciable.id + ')" class="dropdown-item view-btn"> <i class="fa fa-eye"></i> <span>View </span></a>' +
            '<a class="dropdown-item" href="#"><span class="fa fa-plus"></span> Add To Merge</a>' +
            '</td>' +

            '</div>' +
            '</div>' +
            '</div>' +
            "</tr>";

        $(tr).appendTo("#mergeMatchTable tbody");

        // tableBody.row.add([justiciable.id.innerHTML,justiciable.id.innerHTML,justiciable.id.innerHTML,justiciable.id.innerHTML,justiciable.id.innerHTML,justiciable.id.innerHTML,justiciable.id.innerHTML] );
    };

    const seletedJusticiableInfo = (appId, justiciableId) => {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                let applicant = data.applicant;
                let justiciable = data.justiciable;
                console.log(justiciable);
                // console.log(applicant);
                document.querySelector(".nidOrPassport").textContent = justiciable.nidOrPassport;
                document.querySelector(".firstName").textContent = justiciable.firstName;
                document.querySelector(".lastName").textContent = justiciable.lastName;
                document.querySelector(".gender").textContent = justiciable.gender.nameEnglish;
                // document.querySelector(".identificationType").textContent = justiciable.identificationType.nameEnglish;
                document.querySelector(".maritalStatus").textContent = justiciable.maritalStatus.nameEnglish;
                document.querySelector(".fatherName").textContent = justiciable.fatherName;
                document.querySelector(".motherName").textContent = justiciable.motherName;
                document.querySelector(".spouseName").textContent = justiciable.spouseName;
                justiciable.photoPathUri != null
                    ? (document.querySelector(".photoPathUri").src = justiciable.photoPathUri)
                    : (document.querySelector(".photoPathUri").src = "/images/noimage.jpg");
            }
        };
        xmlhttp.open("GET", "/manageApplication/appId/" + appId + "/justId/" + justiciableId);
        xmlhttp.send();
    };

    $(document).ready(function () {
        var table = $("#mergeMatchTable").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ["10 rows", "25 rows", "50 rows", "100 rows", "Show all"],
            ],
            lengthChange: true,
            /*  buttons: [ 'copy', 'excel','csv','pdf', 'colvis' ], */
            responsive: {
                details: {
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.hidden
                                ? '<tr data-dt-row="' +
                                col.rowIndex +
                                '" data-dt-column="' +
                                col.columnIndex +
                                '">' +
                                "<td>" +
                                col.title +
                                ":" +
                                "</td> " +
                                "<td>" +
                                col.data +
                                "</td>" +
                                "</tr>"
                                : "";
                        }).join("");

                        return data ? $("<table/>").append(data) : false;
                    },
                },
            },
        });

        table.buttons().container().insertBefore("#mergedTable_filter");
    });

