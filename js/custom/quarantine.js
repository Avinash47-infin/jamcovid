var screening_rule = {
	case_myself : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	certified_at : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	cmo_certified_at : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	health_department_contact : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	health_department_contact_name : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	health_department_contact_number : {
		required : {
			value : true,
			message : "Required!"
		},
		integer : {
			value : true,
			message : "Invalid"
		},
		min: {
			value: 7,
			message: "7 Digits required"
		},
	},
	cmo_name : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	signature_updated : {
		required : {
			value : true,
			message : "Required!"
		},
	},
	residential_address : {
		required : {
			value : true,
			message : "Required!"
		},
	}
}

jQuery(document).ready(function($) {

	/**
	* Validate the input whenever the input value is changed
	*/
	$(document).on('blur', '.pos_validate', function() {
		var rule_type 		= $(this).data('rule');
		var rule 			= fieldRule[rule_type];
		var validation 		= getFormValidation();
		var input_name 		= $(this).attr('name');
		var name 			= "";
		var inputArray 		= input_name.match(/(.*?)\[(.*?)\]/);
		if(inputArray != null) {
			name = inputArray[1];
		}else {
			name = input_name;
		}

		var validator 		= validation[rule_type][name];
		var input_value 	= $(this).val();

		var error_message 	= formValidation.doValidate(input_value, validator);

		if($(this).next().hasClass('validation_error')) {
			if(error_message.length == 0) {
				$(this).next().html(error_message);
				$(this).removeClass('error_border');
			} else {
				$(this).next().html(error_message);
				$(this).addClass('error_border');
			}
		}
	});

	$('#btn-close-modal').click(function(){
		window.location.reload();
	});

});

/**
* Define immigration form validation rules and messages
*
* @return object validation
*/
function getFormValidation() {
	return validation = {
		"screening" : screening_rule
	};
}

var signatureBlob;
var wrapper       = document.getElementById("signature-pad");
var clearButton   = document.getElementById("sign-clear");
var savePNGButton = document.getElementById("save-png");
var canvas        = wrapper.querySelector("canvas");
canvas.width 	  = 450;
var signaturePad  = new SignaturePad(canvas, {
	backgroundColor: 'rgb(255, 255, 255)',
});


function resizeCanvas() {
	var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	canvas.width = 450;
	canvas.getContext("2d");
	signaturePad.clear();
}

window.onresize = resizeCanvas;

function download(dataURL, filename) {
	if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1) {
		window.open(dataURL);
	} else {
		var blob = dataURLToBlob(dataURL);
		var url = window.URL.createObjectURL(blob);

		var a = document.createElement("a");
		a.style = "display: none";
		a.href = url;
		a.download = filename;

		document.body.appendChild(a);
		a.click();

		window.URL.revokeObjectURL(url);
	}
}

function dataURLToBlob(dataURL) {
	var parts = dataURL.split(';base64,');
	var contentType = parts[0].split(":")[1];
	var raw = window.atob(parts[1]);
	var rawLength = raw.length;
	var uInt8Array = new Uint8Array(rawLength);

	for (var i = 0; i < rawLength; ++i) {
		uInt8Array[i] = raw.charCodeAt(i);
	}
	return new Blob([uInt8Array], { type: contentType });
}

savePNGButton.addEventListener("click", function (event) {
	if (signaturePad.isEmpty()) {
		dataTable.showNotificationMessage(2, "Please provide a signature");
	} else {
		var dataURL = signaturePad.toDataURL();
		signatureBlob = dataURLToBlob(dataURL);

		$('#signature-img-1').attr('src', dataURL);
		$('#signature-img-1').show();
		$('.signature_updated-1').removeClass('error_border');
		$('.signature_updated-1').next().html('');
		delete screening_rule['signature_updated'];
		$('#signature').modal('toggle');
	}
});

clearButton.addEventListener("click", function (event) {
	signaturePad.clear();
	var type = $('#quarantine-type').val();
	$('#signature-img-1').attr('src', '');
	$('#signature-img-1').hide();

	screening_rule['signature_updated'] = {
		"required": {
			"value": true,
			"message": "Required!"
		},
	};
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const reference_number = urlParams.get('reference_number');

var request  = {
	'url'  	   		  : "immigrants/"+reference_number+'/quarantine',
	'type' 	   		  : "GET",
	'data' 	   		  : {},
	'dataType' 		  : "json",
	'success_message' : false,
	'error_message'   : false,
	'ajax_loader'	  : true,
	'window_reload'	  : false
}
dataTable.makeRequest(request, processCurrentResponse);
function processCurrentResponse(response, status_code) {
	//console.log(response);
	if(status_code == posConfig.response_code.ok) {
		var responseData = response.data;
		var immigrant = responseData.immigrant;

		var purpose_of_visit = parseInt(immigrant.purpose_of_visit);
		if(purpose_of_visit == 4) {
			$('#qtn-order-form').hide();
			$('#qtn-order-transit-form').show();
		} else {
			$('#qtn-order-transit-form').hide();
			$('#qtn-order-form').show();

			var qo_cloned = "";
			$('#qobasic-content').empty();
			var qtnType = parseInt(immigrant.accommodation_type);
			if(purpose_of_visit == 3) {
				qo_cloned = $('#qtorder-bs-div').clone();
			} else if(qtnType == 5) {
				qo_cloned = $('#qtorder-home-div').clone();
			} else {
				qo_cloned = $('#qtorder-rc-div').clone();
			}

			$('#qobasic-content').append(qo_cloned);
			$('#qobasic-content').find('.div_hidden_clone').removeClass('div_hidden_clone');

			$('#immigration-id').val(immigrant.id);
			var qtn_date = moment().format('DD/MM/YYYY');
			$('.qo_date_field').val(qtn_date);

			var fullname = immigrant.first_name;
			if(immigrant.middle_name) {
				fullname += " "+immigrant.middle_name;
			}
			fullname += " "+immigrant.last_name;
			$('.case_myself').val(fullname);

			$('.stay_health_depart').val(immigrant.parish);
			var parish_id = parseInt(immigrant.parish_id);
			var parish_contact_list = {
				1 : "9569873",
				2 : "8281680",
				3 : "9522512",
				4 : "3128535",
				5 : "3128572",
				6 : "9869043",
				7 : "9610128",
				8 : "5425621",
				9 : "5481088",
				10: "5425621",
				12: "5879404",
				13: "9261550",
				14: "5492087",
			}
			var contact_no = parish_contact_list[parish_id];
			$('.health_depart_contact').val(contact_no);
			$('.residential_address').val(immigrant.intended_address);
			$('#app-qo-section').show();
			$('#application-notfound-section').hide();
		}
	} else {
		var error_message = response.message;
		$('#app-error-tag').html(error_message);
		$('#application-notfound-section').show();
		$('#app-qo-section').hide();
	}
}

/**
* Submit Quarantine Form
*/
$('#qtn-order-form').on('submit', function (e) {
	e.preventDefault();

	var isAgree = true;
	$("form#qtn-order-form :input[type=checkbox]").each(function(){
		var input_name = $(this).attr("name");
		if($('form#qtn-order-form input:checkbox[name="'+input_name+'"]:checked').length == 0){
			isAgree = false;
			return;
		}
	});

	if(!isAgree) {
		dataTable.showNotificationMessage(2, "Please confirm the agreement");
	} else {
		submitQuarantineOrderForm();
	}
});

function submitQuarantineOrderForm() {
	var form 		= 'qtn-order-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.screening;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		var immigrationFormData = new FormData();
		immigrationFormData.append('immigration_id', $('#immigration-id').val());
		immigrationFormData.append("quarantine_user_sign", signatureBlob, "sign.png");
		const elm = document.getElementById('quarantine-order-div');
		$('.corona-preloader-backdrop').show();
		domtoimage.toPng(elm,{
			filter:function(node){
				if (node.nodeType===1 && node.tagName==="INPUT" &&
					((""+node.type).toLowerCase() === "checkbox" || (""+node.type).toLowerCase() === "radio")) {
					if (node.checked) {
						node.setAttribute('checked', true);
					}
					else {
						node.removeAttribute('checked');
					}
				} else if(node.nodeType===1 && node.tagName==='SELECT' ){
					var options = node.getElementsByTagName('OPTION');
					var selectedIdx = node.selectedIndex;
					for(var i=0; i<options.length; i++){
						if(i === selectedIdx){
							options[i].setAttribute('selected', true);
						}else{
							options[i].removeAttribute('selected');
						}
					}
				}
				return true;
			}
		})
		.then(function (blob) {
			$(".corona-preloader-backdrop").hide();
			let pdfFile = dataURLToBlob(blob);
			immigrationFormData.append("quarantine_order", pdfFile, "quarantine_order.png");

			var request  = {
				'url'  	   		  : "immigrants/qo-upload",
				'type' 	   		  : "POST",
				'data' 	   		  : immigrationFormData,
				'dataType' 		  : "json",
				'process_data' 	  : true,
				'content_type' 	  : true,
				'success_message' : true,
				'error_message'   : true,
				'ajax_loader'	  : true,
				'window_reload'	  : false
			}
			dataTable.makeRequest(request, processCurrentResponse);
			function processCurrentResponse(response, status_code) {
				if(status_code == posConfig.response_code.ok) {
					var responseData = response.data;

					$('#appSubmittedModal').modal({
						backdrop: 'static',
						keyboard: false
					});
				} else if(status_code == posConfig.response_code.bad_request) {
					var errorMessages = response.error ? response.error : {};
					formValidation.renderFormErrorMessages('qtn-order-form', errorMessages);
				}
			}
		});

	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

