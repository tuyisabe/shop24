$('document').ready(function() {

	$('table #editButton').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$.get(href, function(province) {
			$('#id').val(province.id);
			$('#code').val(province.code);
			$('#name').val(province.name);
			$('#updateButton').attr('value', 'Update');
			$('#editForm').attr('method', 'put');
			$('#editForm').attr('action', '/provinces/update');
		});
	});

	$('#ddlProvinceAdd').on('change', function() {

		$('#ddlDistrictAdd').empty().append('<option value="null">-Select-</option>');
		var provincecode = $(this).val();

		var href = "http://localhost:8080/districts/getbyprovince/" + provincecode

		$.get(href, function(districts) {
			for (var i = 0; i <= districts.length - 1; i++) {
				$('#ddlDistrictAdd').append('<option value="' + districts[i].code + '">' + districts[i].name + '</option>');
			}
		});
	});
	$('#ddlDistrictAdd').on('change', function() {

		$('#ddlSectorAdd').empty().append('<option value="null">-Select-</option>');
		var districtcode = $(this).val();

		var href = "http://localhost:8080/sectors/getbydistrict/" + districtcode

		$.get(href, function(sectors) {
			for (var i = 0; i <= sectors.length - 1; i++) {
				$('#ddlSectorAdd').append('<option value="' + sectors[i].code + '">' + sectors[i].name + '</option>');
			}
		});
	});

	$('#ddlSectorAdd').on('change', function() {

		$('#ddlCellAdd').empty().append('<option value="null">-Select-</option>');
		var sectorcode = $(this).val();

		var href = "http://localhost:8080/cells/getbysector/" + sectorcode

		$.get(href, function(cells) {
			for (var i = 0; i <= cells.length - 1; i++) {
				$('#ddlCellAdd').append('<option value="' + cells[i].id + '">' + cells[i].name + '</option>');
			}
		});
	});


});











$( document ).ready(function() {
	
	// GET REQUEST
	$("#getAllJusticiable").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "/merging/"+salo,
			success: function(result){
					$('#getJustiaciable').empty();
					var custList = "";
					$.each(result.data, function(i, Justiciable){
						var Justiciable = "- No = " + i + ", firstname = " + Justiciable.firstName + ",
						 lastName = " + Justiciable.lastName + "<br>";
						$('#getJustiaciable').append(customer)
			        });
					console.log("Success: ", result);
			},
			error : function(e) {
				$("#getJustiaciable").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})