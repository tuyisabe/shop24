$("document").ready(function () {
    $("table #editApplicationReason").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (data) {
            $("#reason_id").val(data.id);
            $("#descriptionEnglish").val(data.descriptionEnglish);
            $("#descriptionFrench").val(data.descriptionFrench);
            $("#descriptionKinyarwanda").val(data.descriptionKinyarwanda);
        });
    });

    $("table #deleteReason").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $("#confirmDeleteReason").attr("href", href);
    });

    $("table #editProfession").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (profess) {
            $("#pro_id").val(profess.id);
            $("#descEnglish").val(profess.descriptionEnglish);
            $("#descFrench").val(profess.descriptionFrench);
            $("#descKinyarwanda").val(profess.descriptionKinyarwanda);
        });
    });

    $("table #editFileTypeButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (file) {
            $("#fileTypeId").val(file.id);
            $("#fileTypeNameEn").val(file.nameEnglish);
            $("#fileTypeNameFr").val(file.nameFrench);
            $("#fileTypeNameKn").val(file.nameKinyarwanda);
        });
    });
    $("table #deleteFileButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $("#confirmDeleteFile").attr("href", href);
    });
});

$("document").ready(function () {
    $("table #editOfficeButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (prosecutionOffice) {
            $("#officeId").val(prosecutionOffice.id);
            $("#officeNameEn").val(prosecutionOffice.nameEnglish);
            $("#officeNameFr").val(prosecutionOffice.nameFrench);
            $("#officeNameKn").val(prosecutionOffice.nameKinyarwanda);
            $("#ddlDistrictOfficeId").val(prosecutionOffice.district.id);
        });
    });

    $("table #deleteButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $("#confirmDeleteButton").attr("href", href);
    });

    $("#ddlProvinceAdd").on("change", function () {
        $("#ddlDistrictAdd").empty().append('<option value="null">-Select-</option>');
        $("#ddlSectorAdd").empty().append('<option value="null">-Select-</option>');
        $("#ddlCellAdd").empty().append('<option value="null">-Select-</option>');
        $("#addressTable").empty();
        var provincecode = $(this).val();

        var href = "/provinces/getbyid/" + provincecode;

        $.get(href, function (province) {
            var districts = province.districts;
            for (var i = 0; i <= districts.length - 1; i++) {
                $("#ddlDistrictAdd").append(
                    '<option value="' + districts[i].code + '">' + districts[i].name + "</option>"
                );
                $("#addressTable").append(
                    '<tr style="cursor: pointer" onClick="editDistrict(' +
                        districts[i].id +
                        ')"><th scope="row">' +
                        districts[i].code +
                        "</th><td>" +
                        districts[i].name +
                        "</td></tr>"
                );
            }
        });
    });
    $("#ddlDistrictAdd").on("change", function () {
        $("#ddlSectorAdd").empty().append('<option value="null">-Select-</option>');
        $("#addressTable").empty();
        var districtcode = $(this).val();

        var href = "/sectors/getbydistrict/" + districtcode;

        $.get(href, function (sectors) {
            for (var i = 0; i <= sectors.length - 1; i++) {
                $("#ddlSectorAdd").append('<option value="' + sectors[i].code + '">' + sectors[i].name + "</option>");
                $("#addressTable").append(
                    '<tr style="cursor: pointer" onClick="editSector(' +
                        sectors[i].id +
                        ')"><th scope="row">' +
                        sectors[i].code +
                        "</th><td>" +
                        sectors[i].name +
                        "</td></tr>"
                );
            }
        });
    });

    $("#ddlSectorAdd").on("change", function () {
        $("#ddlCellAdd").empty().append('<option value="null">-Select-</option>');
        $("#addressTable").empty();
        var sectorcode = $(this).val();

        var href = "/cells/getbysector/" + sectorcode;

        $.get(href, function (cells) {
            for (var i = 0; i <= cells.length - 1; i++) {
                $("#ddlCellAdd").append('<option value="' + cells[i].code + '">' + cells[i].name + "</option>");
                $("#addressTable").append(
                    '<tr style="cursor: pointer" onClick="editCell(' +
                        cells[i].id +
                        ')"><th scope="row">' +
                        cells[i].code +
                        "</th><td>" +
                        cells[i].name +
                        "</td></tr>"
                );
            }
        });
    });
    $("#ddlCellAdd").on("change", function () {
        $("#ddlVillageAdd").empty().append('<option value="null">-Select-</option>');
        $("#addressTable").empty();
        var cellcode = $(this).val();
        var href = "/villages/getbycell/" + cellcode;

        $.get(href, function (villages) {
            for (var i = 0; i <= villages.length - 1; i++) {
                $("#ddlVillageAdd").append(
                    '<option value="' + villages[i].code + '">' + villages[i].name + "</option>"
                );
                $("#addressTable").append(
                    '<tr style="cursor: pointer" onClick="editVillage(' +
                        villages[i].id +
                        ')"><th scope="row">' +
                        villages[i].code +
                        "</th><td>" +
                        villages[i].name +
                        "</td></tr>"
                );
            }
        });
    });

    $("table #editCourtTypeButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (courtType) {
            $("#courtTypeId").val(courtType.id);
            $("#courtTypeNameEn").val(courtType.nameEnglish);
            $("#courtTypeNameFr").val(courtType.nameFrench);
            $("#courtTypeNameKn").val(courtType.nameKinyarwanda);
        });
    });

    $("table #editCourtButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (court) {
            $("#courtId").val(court.id);
            $("#courtName").val(court.name);
            $("#courtType").val(court.courtType.id);
        });
    });
    $("table #editDrawerButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (drawer) {
            $("#drawerId").val(drawer.id);
            $("#drawerLabel").val(drawer.label);
            $("#drawerDetails").val(drawer.details);
        });
    });

    $("#ddlProvinceOffice").on("change", function () {
        $("#ddlDistrictOffice").empty().append('<option value="null">-Select-</option>');
        var provincecode = $(this).val();
        console.log("Prov id", provincecode);
        var href = "/provinces/getbyid/" + provincecode;

        $.get(href, function (province) {
            console.log("Prov obj", province);
            var districts = province.districts;
            for (var i = 0; i <= districts.length - 1; i++) {
                $("#ddlDistrictOffice").append(
                    '<option value="' + districts[i].id + '">' + districts[i].name + "</option>"
                );
            }
        });
    });

    $("table #editReleaseTypeButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (releaseType) {
            $("#releaseTypeId").val(releaseType.id);
            $("#releaseTypeNameEn").val(releaseType.nameEnglish);
            $("#releaseTypeNameFr").val(releaseType.nameFrench);
            $("#releaseTypeNameKn").val(releaseType.nameKinyarwanda);
        });
    });

    $("table #editGenderButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (gender) {
            $("#genderId").val(gender.id);
            $("#genderNameEn").val(gender.nameEnglish);
            $("#genderNameFr").val(gender.nameFrench);
            $("#genderNameKn").val(gender.nameKinyarwanda);
        });
    });

    $("table #editMaritalStatusButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (maritalStatus) {
            $("#maritalStatusId").val(maritalStatus.id);
            $("#maritalStatusNameEn").val(maritalStatus.nameEnglish);
            $("#maritalStatusNameFr").val(maritalStatus.nameFrench);
            $("#maritalStatusNameKn").val(maritalStatus.nameKinyarwanda);
        });
    });
    $("table #editLanguageButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (language) {
            $("#languageId").val(language.id);
            $("#languageNameEn").val(language.nameEnglish);
            $("#languageNameFr").val(language.nameFrench);
            $("#languageNameKn").val(language.nameKinyarwanda);
            $("#languageCode").val(language.code).attr("readOnly", true);
        });
    });

    $("table #editCountryButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (country) {
            $("#countryId").val(country.id);
            $("#countryNameEn").val(country.nameEnglish);
            $("#countryNameFr").val(country.nameFrench);
            $("#countryNameKn").val(country.nameKinyarwanda);
            $("#countryNumericCode").val(country.numericCode).attr("readOnly", true);
            $("#countryAlpha2Code").val(country.alpha2Code);
            $("#countryAlpha3Code").val(country.alpha3Code);
        });
    });

    $("table #editNationalityButton").on("click", function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $.get(href, function (nationality) {
            $("#nationalityId").val(nationality.id);
            $("#nationalityNameEn").val(nationality.nameEnglish);
            $("#nationalityNameFr").val(nationality.nameFrench);
            $("#nationalityNameKn").val(nationality.nameKinyarwanda);
            $("#nationalityCode").val(nationality.code).attr("readOnly", true);
            $("#nationalityCountry").val(nationality.country.id);
        });
    });
});
