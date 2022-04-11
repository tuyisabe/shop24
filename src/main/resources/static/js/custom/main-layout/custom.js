
$(document)
    .ajaxStart(function () {
        $("#loading").removeClass("hide");
    })
    .ajaxStop(function () {
        $("#loading").addClass("hide");
    });

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

$("#matches-found-table").DataTable({});
function loadData(dataSet) {
    $("#matches-found-table").DataTable({
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
                },
            },
            {
                data: "id",
                render: function (data, type) {
                    let div =
                        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">' +
                        '<div class="btn-group" role="group">' +
                        '<button id="btnGroupDrop1" type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        " Actions" +
                        "</button>" +
                        '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
                        '<a href="#" onclick="seletedJusticiableInfo(' +
                        $(".applicationId").val() +
                        "," +
                        data +
                        ');"  class="dropdown-item view-btn"> <i class="fa fa-eye"></i> <span>View </span></a>' +
                        '<a onclick="getJusticiableCriminalDetails(' +
                        data +
                        ');" class="dropdown-item view-criminal-btn" href="#"><span class="fa fa-gavel"></span> View Criminal</a>' +
                        '<a onclick="getJusticiableInfo(' +
                        data +
                        ');" class="dropdown-item" href="#"><span class="fa fa-long-arrow-down"></span> Add to Merge</a>' +
                        "</div>" +
                        "</div>" +
                        "</div>";
                    return div;
                    // }
                },
            },
            {
                data: "id",
                render: function (data, type, full) {
                    let div =
                        '<a onclick="viewMergedWith(' +
                        data +
                        ');" class="btn btn-secondary" href="#"><span class="fa fa-list"></span> View ( ' +
                        full.totalMerged +
                        " )</a>";
                    if (full.totalMerged > 0) return div;
                    else return "";
                    // }
                },
            },
        ],
    });
}

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

function searchFn() {
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
        document.querySelector("#spinnerDiv").style.display = "block";
        document.querySelector(".search-btn").style.display = "none";
        document.querySelector("#loader").style.display = "block";

        // setTimeout(()=>{

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
        searchWordx = document.querySelector("#searchWord").value;

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
        let matches_found = document.querySelector(".matches-found");
        matches_found.scrollIntoView({
            behavior: "smooth",
        });
    }

    // }, 2000);
}

const assignValue = (i) => {
    let inputs = document.querySelectorAll(".data-input");
    if (!inputs[i].value.includes("~")) {
        if($(inputs[i]).is("select")) {
            if($(inputs[i]).attr("class").split(' ')[2] == 'genders'){
                $(inputs[i]).val(inputs[i].value).change();
            $('#gender').val(inputs[i].value + "~");
            }else if ($(inputs[i]).attr("class").split(' ')[2] == 'marital-status'){
                $(inputs[i]).val(inputs[i].value).change();
            $('#maritalStatus').val(inputs[i].value + "~");
            }else if ($(inputs[i]).attr("class").split(' ')[2] == 'nationalities'){
                $(inputs[i]).val(inputs[i].value).change();
                $('#nationality').val(inputs[i].value + "~");
            }
            
        }else{
            inputs[i].value += "~";
        }
        
    }
};

const replace = () => {
    let inputs = document.querySelectorAll(".data-input");
    let gender = (document.querySelector("#gender").value.replace("~",""));
    document.querySelector("#gender").value = gender;

    let nationality = (document.querySelector("#nationality").value.replace("~",""));
    document.querySelector("#nationality").value = nationality;

    let maritalStatus = (document.querySelector("#maritalStatus").value.replace("~",""));
    document.querySelector("#maritalStatus").value = maritalStatus;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.includes("~")) {
            inputs[i].value = inputs[i].value.replace("~", "");
            //  console.log(inputs[i].value);
        }
    }
};

function getMatchedData(
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
) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = async function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = await JSON.parse(this.responseText);
            await loadData(data.justiciable);
            let counter = data.count;
            if (counter > 0) {
                $(function () {
                    let viewBTNs = document.querySelectorAll(".view-btn");
                    let viewCriminalBtn = document.querySelectorAll(".view-criminal-btn");
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

                        viewCriminalBtn[i].addEventListener("click", (e) => {
                            e.preventDefault();
                            $(".criminal-background").modal("show");
                        });
                    }
                });
                counterAnimation(counter);
            }

            document.querySelector(".search-btn").style.display = "block";
            document.querySelector("#spinnerDiv").style.display = "none";
            document.querySelector("#loader").style.display = "none";
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
}

const counterAnimation = (counterSIZE) => {
    $(".matches-found-count").text("[ " + counterSIZE + " ]");
};

const seletedJusticiableInfo = (appId, justiciableId) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = async function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let applicant = data.applicant;
            let justiciable = data.justiciable;
            console.log(justiciable);
            // console.log(applicant);
            document.querySelector(".nidOrPassport").value = justiciable.nidOrPassport;
            document.querySelector(".firstName").value = justiciable.firstName;
            document.querySelector(".lastName").value = justiciable.lastName;
            document.querySelector(".gender").value = justiciable.gender.code;
            // document.querySelector(".identificationType").value = justiciable.identificationType.nameEnglish;
            document.querySelector(".maritalStatus").value = justiciable.maritalStatus.nameEnglish;
            document.querySelector(".fatherName").value = justiciable.fatherName;
            document.querySelector(".motherName").value = justiciable.motherName;
            document.querySelector(".spouseName").value = justiciable.spouseName;
            let uri = await justiciable.photoPathUri;
            (await justiciable.photoPathUri) == null || justiciable.photoPathUri == " "
                ? (document.querySelector(".photoPathUri").src = "/images/noimage.jpg")
                : document.getElementsByClassName("photoPathUri").setAttribute("src", "" + uri);
        }
    };

    if ($(".applicationId").val() == 0) xmlhttp.open("GET", "/manageApplication/justId/" + justiciableId);
    else xmlhttp.open("GET", "/manageApplication/appId/" + appId + "/justId/" + justiciableId);

    xmlhttp.send();
};

const getJusticiableCriminalDetails = (justiciableId) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            viewOffences(data.offences);
            viewSentences(data.sentences);
            viewRelease(data.releases);
            viewAttachedDocuments(data.justiciableAttachments);
        }
    };
    xmlhttp.open("GET", "/manageApplication/justId/" + justiciableId);
    xmlhttp.send();
};

const getJusticiableInfo = (justiciableId) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = async function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = await JSON.parse(this.responseText);
            let justiciable = data.justiciable;
            let justiciables = data.justiciables;
            addToMergeTable(justiciables);
        }
    };

    xmlhttp.open("GET", "/manageApplication/justiciableId/" + justiciableId);
    xmlhttp.send();
};

function addToMergeTable(justiciableArray) {
    $("html, body").animate(
        {
            scrollTop: $("#to_merge_list").offset().top,
        },
        1000
    );


    $("#mergedTable").DataTable({
        fixedHeader: true,
        destroy: true,
        data: justiciableArray,
        select: {
            style: "os",
            items: "cell",
        },

        columns: [
            {
                data: "id",
                render: function (data, type, full) {
                    return (
                        '<label class="container">' +
                        '<input'+
                        ' onclick="updateFromTempManualMerge(' +
                        data +
                        ');" type="radio" name="radio">' +
                        '<span class="checkmark"></span>'
                    );
                },
            },
            { data: "nidOrPassport" },
            { data: "fullName" },
            { data: "fatherName" },
            { data: "motherName" },
            { data: "spouseName" },
            { data: "dataSource" },
            {
                data: "id",
                render: function (data, type, row, meta) {
                    let div =
                        '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">' +
                        '<div class="btn-group" role="group">' +
                        '<button id="btnGroupDrop1" type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                        " Actions" +
                        "</button>" +
                        '<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
                        '<a href="#" onclick="deleteFromTempManualMerge(' +
                        data +
                        ');"  class="dropdown-item view-btn"> <i class="fa fa-close"></i> <span>Delete </span></a>' +
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

const deleteFromTempManualMerge = (id) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            // console the results as data
        }
    };

    xmlhttp.open("DELETE", "/manageApplication/deleteFromTempMerge/" + id);
    xmlhttp.send();
};

const updateFromTempManualMerge = (id) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            // console the results as data
            console.log(data.tempManualMerged);
        }
    };

    xmlhttp.open("GET", "/manageApplication/updateFromTempMerge/" + id);
    xmlhttp.send();
};

const isRoot = (id) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            // console the results as data
            console.log(data);
            console.log(id);
            return data.root;
        }
    };

    xmlhttp.open("GET", "/manageApplication/is-root/" + id);
    xmlhttp.send();
};

const viewOffences = (offences) => {
    let tr = "";
    for (let i = 0; i < offences.length; i++) {
        tr +=
            "<tr>" +
            "<td><a><span>" +
            offences[i].dossier.title +
            "</span> </a> </td>" +
            "<td><span>" +
            offences[i].offenceType.nameEnglish +
            "</span></td>" +
            "<td><span>" +
            offences[i].offenceDate +
            "</span></td>" +
            "<td><span>" +
            offences[i].description +
            "</span></td>" +
            "</tr>";
    }
    document.querySelector("#offences-details tbody").innerHTML = "";
    $(tr).appendTo("#offences-details tbody");
};

const viewRelease = (release) => {
    console.log(release);
    let tr = "";
    for (let i = 0; i < release.length; i++) {
        tr +=
            "<tr>" +
            "<td><a><span>" +
            release[i].dossier.caseNumber +
            "</span> </a> </td>" +
            "<td><span>" +
            release[i].court.name +
            "</span></td>" +
            "<td><span>" +
            release[i].releaseDate +
            "</span></td>" +
            "<td><span>" +
            release[i].description +
            "</span></td>" +
            "</tr>";
    }

    document.querySelector("#releases-details tbody").innerHTML = "";
    $(tr).appendTo("#releases-details tbody");
};

const viewAttachedDocuments = (attachments) => {
    console.log(attachments);
    let tr = "";
    for (let i = 0; i < attachments.length; i++) {
        tr +=
            "<tr>" +
            "<td><a><span>" +
            attachments[i].title +
            "</span> </a> </td>" +
            "<td><span>" +
            attachments[i].contentType +
            "</span></td>" +
            "<td><span>" +
            attachments[i].contentType +
            "</span></td>" +
            "<td><span>" +
            attachments[i].fileName +
            "</span></td>" +
            "<td><span>" +
            attachments[i].description +
            "</span></td>" +
            "</tr>";
    }
    document.querySelector("#attachments-details tbody").innerHTML = "";
    $(tr).appendTo("#attachments-details tbody");
};

const viewSentences = (sentences) => {
    console.log(sentences);
    let tr = "";
    for (let i = 0; i < sentences.length; i++) {
        tr +=
            "<tr>" +
            "<td><a><span>" +
            sentences[i].dossier.caseNumber +
            "</span> </a> </td>" +
            "<td><span>" +
            sentences[i].court.name +
            "</span></td>" +
            "<td><span>" +
            sentences[i].sentenceType.nameEnglish +
            "</span></td>" +
            "<td><span>" +
            sentences[i].sentenceDate +
            "</span></td>" +
            "<td><span>" +
            sentences[i].description +
            "</span></td>" +
            "</tr>";
    }
    document.querySelector("#sentences-details tbody").innerHTML = "";
    $(tr).appendTo("#sentences-details tbody");
};