 $(document).ready(function(){
$("#shipping_address").hide();
})
/* Fields that can be marked as optional in Settings > Checkout */

function justHide(field){
	$("#shipping_address_" + field).hide();
}

$(document).ready(function(){

	// Postal Code
justHide("postal");

// Municipality
justHide("municipality");

});


/* Mandatory fields that require simple autocomplete and hide */

function autoHide(field){
	$("#order_shipping_address_" + field).val("Autocompleted " + field);
	$("#shipping_address_" + field).hide();
}

$(document).ready(function(){

// Name
autoHide("name");

// Surname
autoHide("surname");

// Full Street Address
autoHide("address");

// City
autoHide("city");

});

/* Special Cases: Country and Regions need to wait for the list to load before autocompleting */
// Selects and hides the Country

country_selected = false
function selectHideCountry(){
	$("#shipping_address_country").hide()
	var interval_c = setInterval(function(){
		if($("#order_shipping_address_country").val() == ""){
			$("#order_shipping_address_country option:last").attr("selected", "selected"); 
			var sortBySelect = document.querySelector("#order_shipping_address_country"); 
			sortBySelect.dispatchEvent(new Event("change"));
		}else{
			clearInterval(interval_c)
			country_selected = true
			
		}
	},500);
}
// Selects and hides the Region
region_selected = false
function selectHideRegion(){
	$("#shipping_address_region").hide()
	var interval_r = setInterval(function(){
		if($("#order_shipping_address_region").val() == "" && country_selected ){
			$("#order_shipping_address_region option:last").attr("selected", "selected");
		}else{
			clearInterval(interval_r)
			region_selected = true
			
		}
	},500);
}
$(document).ready(function(){
selectHideCountry()
selectHideRegion()
});
