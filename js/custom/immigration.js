var touristFormData;
var identificationFormKeys = [];
var countryOptions = ["232","60","143","30","171"];
var ukProtocolCountryOptions = {
	10 : "Argentina",
	30 : "Brazil",
	43 : "Chile",
	47 : "Colombia",
	173: "Paraguay",
	174: "Peru",
	100: "India",
	222: "Trinidad and Tobago"
}

var login_rule = {
	"email" : {
		"required": {
			"value": true,
			"message": "Please enter the email"
		},
		"email" : {
			"value": true,
			"message": "Please enter the valid email address"
		}
	},
	"otp" : {
		"required": {
			"value": true,
			"message": "Please enter the otp"
		},
		"integer" :{
			"value": true,
			"message": "Invalid otp"
		},
		"min": {
			"value": fieldRule.login.otp.min,
			"message": "Minimum length is "+fieldRule.login.otp.min
		},
		"max": {
			"value": fieldRule.login.otp.max,
			"message": "Maximum length is "+fieldRule.login.otp.max
		}
	}
};

var registration_rule = {
	"report_for" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"someone_for_radio" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"relationship_with" : {
		"required": {
			"value": true,
			"message": "Please enter the relationship"
		},
		"max": {
			"value": fieldRule.immigration.relationship_with.max,
			"message": "Maximum length is "+fieldRule.immigration.relationship_with.max
		}
	},
	"relationship_lastname" : {
		"required": {
			"value": true,
			"message": "Lastname is reqired"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"relationship_firstname" : {
		"required": {
			"value": true,
			"message": "Firstname is reqired"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"relationship_middlename" : {
		"max": {
			"value": fieldRule.immigration.middlename.max,
			"message": "Maximum length is "+fieldRule.immigration.middlename.max
		}
	},
	"relationship_address" : {
		"required": {
			"value": true,
			"message": "Address is required"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Maximum length is "+fieldRule.immigration.address_in_jamaica.max
		}
	},
	"relationship_phone_number" : {
		"min": {
			"value": fieldRule.immigration.mobile_number.min,
			"message": "Please enter "+fieldRule.immigration.mobile_number.min+" digits"
		},
	},
	"other_reason" : {
		"required": {
			"value": true,
			"message": "Reason is required"
		},
		"max": {
			"value": fieldRule.immigration.other_reason.max,
			"message": "Maximum length is "+fieldRule.immigration.other_reason.max
		}
	},
	"first_name" : {
		"required": {
			"value": true,
			"message": "Firstname is required"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"last_name" : {
		"required": {
			"value": true,
			"message": "Lastname is required"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"date_of_travel" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
	},
	"country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
};

var immigration_rule = {
	"firstname" : {
		"required": {
			"value": true,
			"message": "Firstname is required"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"lastname" : {
		"required": {
			"value": true,
			"message": "Lastname is required"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"middlename" : {
		"max": {
			"value": fieldRule.immigration.middlename.max,
			"message": "Maximum length is "+fieldRule.immigration.middlename.max
		}
	},
	"address_in_jamaica" : {
		"required": {
			"value": true,
			"message": "Please enter the address"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Address should have maximum of "+fieldRule.immigration.address_in_jamaica.max+" characters"
		}
	},
	"city" : {
		"required": {
			"value": true,
			"message": "City/Town is required"
		},
		"max": {
			"value": fieldRule.immigration.city.max,
			"message": "Maximum length is "+fieldRule.immigration.city.max
		}
	},
	"state" : {
		"required": {
			"value": true,
			"message": "State/Province/Region is required"
		},
		"max": {
			"value": fieldRule.immigration.state.max,
			"message": "Maximum length is "+fieldRule.immigration.state.max
		}
	},
	"zipcode" : {
		"max": {
			"value": fieldRule.immigration.zipcode.max,
			"message": "Maximum length is "+fieldRule.immigration.zipcode.max
		}
	},
	"occupation" : {
		"required": {
			"value": true,
			"message": "Occupation is required"
		},
	},
	"travel_to_jamaica" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
		"date" : {
			"value" : 'YYYY-MM-DD',
			"message" : "Invalid Date"
		}
	},
	"return_from_jamaica" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
		"date" : {
			"value" : 'YYYY-MM-DD',
			"message" : "Invalid Date"
		}
	},
	"dob" : {
		"required": {
			"value": true,
			"message": "Date Of Birth is required"
		},
		"date" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		},
		"dob" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		}
	},
	"gender" : {
		"required": {
			"value": true,
			"message": "Gender is required"
		},
	},
	"airport_code" : {
		"required": {
			"value": true,
			"message": "Required"
		},
	},
	"dialingcode_in_overseas" : {
		"required": {
			"value": true,
			"message": "Required"
		},
	},
	"mobile_number_in_overseas" : {
		"required": {
			"value": true,
			"message": "Mobile Number is required"
		},
		"min": {
			"value": fieldRule.immigration.mobile_number.min,
			"message": "Minimum length is "+fieldRule.immigration.mobile_number.min+" digits"
		},
	},
	"passport_number" : {
		"required": {
			"value": true,
			"message": "Please enter the passport number"
		},
		"max": {
			"value": fieldRule.immigration.passport_number.max,
			"message": "Maximum length is "+fieldRule.immigration.passport_number.max
		}
	},
	"country_of_issue" : {
		"required": {
			"value": true,
			"message": "Country of Issue is required"
		},
	},
	"total_family_members" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"family_relation_name" : {
		"required": {
			"value": true,
			"message": "First Name is required"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"family_relation_lastname" : {
		"required": {
			"value": true,
			"message": "Last Name is required"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"family_relation_middlename" : {
		"max": {
			"value": fieldRule.immigration.middlename.max,
			"message": "Maximum length is "+fieldRule.immigration.middlename.max
		}
	},
	"family_relation_contact_dob" : {
		"required": {
			"value": true,
			"message": "Date of Birth is required"
		},
		"date" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		},
		"dob" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		}
	},
	"family_relation_passport" : {
		"required": {
			"value": true,
			"message": "Passport Number is required"
		},
		"max": {
			"value": fieldRule.immigration.passport_number.max,
			"message": "Maximum length is "+fieldRule.immigration.passport_number.max
		}
	},
	"family_relation_relation" : {
		"required": {
			"value": true,
			"message": "Relation is required"
		},
		"max": {
			"value": fieldRule.immigration.relationship_name.max,
			"message": "Maximum length is "+fieldRule.immigration.relationship_name.max
		}
	},
	"family_relation_address" : {
		"required": {
			"value": true,
			"message": "Address is required"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Maximum length is "+fieldRule.immigration.address_in_jamaica.max
		}
	},
	"stay_purpose_of_visit" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"stay_other_purpose_of_visit" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"max": {
			"value": 55,
			"message": "Maximum length is "+55
		}
	},
	"next_of_kin_firstname" : {
		"required": {
			"value": true,
			"message": "Please enter the name"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"next_of_kin_address" : {
		"required": {
			"value": true,
			"message": "Please enter the address"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Maximum length is "+fieldRule.immigration.address_in_jamaica.max
		}
	},
	"dialing_code_nextofkin" : {
		"required": {
			"value": true,
			"message": "Required"
		},
	},
	"next_of_kin_mobile" : {
		"required": {
			"value": true,
			"message": "Required"
		},
		"min": {
			"value": fieldRule.immigration.mobile_number.min,
			"message": "Please enter "+fieldRule.immigration.mobile_number.min+" digits"
		},
	},
	"last_date_in_uk" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
		"date" : {
			"value" : 'YYYY-MM-DD',
			"message" : "Invalid Date"
		}
	},
	"on_land_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"on_land_city" : {
		"required": {
			"value": true,
			"message": "City is required"
		},
	},
	"on_land_state" : {
		"required": {
			"value": true,
			"message": "State is required"
		},
	},
	"f2_flight_name" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"f2_flight_number" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"integer" :{
			"value": true,
			"message": "Invalid Flight No"
		},
		"max": {
			"value": 4,
			"message": "Maximum length is "+4
		}
	},
	"vessel_name" : {
		"required": {
			"value": true,
			"message": "Vessel name is required"
		},
		"max": {
			"value": 64,
			"message": "Maximum length is "+64
		}
	},
	"vessel_type" : {
		"required": {
			"value": true,
			"message": "Vessel Type is required"
		},
	},
	"vessel_location" : {
		"required": {
			"value": true,
			"message": "Vessel location is required"
		},
	},
};

var questionnaire_rule = {
	"tested_date" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
	},
	"tested_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"tested_state" : {
		"required": {
			"value": true,
			"message": "State is required"
		},
	},
	"tested_city" : {
		"required": {
			"value": true,
			"message": "City is required"
		},
	},
	"retested_date" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
	},
	"retested_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"retested_city" : {
		"required": {
			"value": true,
			"message": "City is required"
		},
	},
	"main_occupation" : {
		"required": {
			"value": true,
			"message": "Please choose the occupation"
		},
	},
};
var contactinfo_rule = {
	"contact_lastname" : {
		"required": {
			"value": true,
			"message": "Lastname is required"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"contact_firstname" : {
		"required": {
			"value": true,
			"message": "Firstname is required"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"contact_middlename" : {
		"max": {
			"value": fieldRule.immigration.middlename.max,
			"message": "Maximum length is "+fieldRule.immigration.middlename.max
		}
	},
	"contact_relationship" : {
		"required": {
			"value": true,
			"message": "Relationship is required"
		},
		"max": {
			"value": fieldRule.immigration.contact_relationship.max,
			"message": "Maximum length is "+fieldRule.immigration.contact_relationship.max
		}
	},
	"contact_passport_number" : {
		"required": {
			"value": true,
			"message": "passport number is required"
		},
		"max": {
			"value": fieldRule.immigration.passport_number.max,
			"message": "Maximum length is "+fieldRule.immigration.passport_number.max
		}
	},
};
var traveldetails_rule = {
	"airline" : {
		"required": {
			"value": true,
			"message": "Airline is required"
		},
	},
	"arrival_date" : {
		"required": {
			"value": true,
			"message": "Arrival Date is required"
		},
	},
	"port_of_arrival" : {
		"required": {
			"value": true,
			"message": "Port of Arrival is required"
		},
	},
	"travel_flight_number" : {
		"required": {
			"value": true,
			"message": "Flight Number is required"
		},
	},
	// "vessel_name" : {
	// 	"required": {
	// 		"value": true,
	// 		"message": "Vessel Name is required"
	// 	},
	// 	"max": {
	// 		"value": fieldRule.immigration.vessel_name.max,
	// 		"message": "Maximum length is "+fieldRule.immigration.vessel_name.max
	// 	}
	// },
	"vessel_type" : {
		"required": {
			"value": true,
			"message": "Vessel Type is required"
		},
	},
};
var healthquestionnaire_rule = {
	"tested_date" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
	},
	"tested_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"tested_city" : {
		"required": {
			"value": true,
			"message": "City is required"
		},
	},
	"retested_date" : {
		"required": {
			"value": true,
			"message": "Date is required"
		},
	},
	"retested_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"retested_city" : {
		"required": {
			"value": true,
			"message": "City is required"
		},
	},
};
var customsform_rule = {
	"c5_firstname" : {
		"required": {
			"value": true,
			"message": "Firstname is required"
		},
		"max": {
			"value": fieldRule.immigration.firstname.max,
			"message": "Maximum length is "+fieldRule.immigration.firstname.max
		}
	},
	"c5_lastname" : {
		"required": {
			"value": true,
			"message": "Lastname is required"
		},
		"min": {
			"value": 2,
			"message": "Minimum length is 2"
		},
		"max": {
			"value": fieldRule.immigration.lastname.max,
			"message": "Maximum length is "+fieldRule.immigration.lastname.max
		}
	},
	"c5_middlename" : {
		"max": {
			"value": fieldRule.immigration.middlename.max,
			"message": "Maximum length is "+fieldRule.immigration.middlename.max
		}
	},
	"c5_dob" : {
		"required": {
			"value": true,
			"message": "Date Of Birth is required"
		},
		"date" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		},
		"dob" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		}
	},
	"c5_gender" : {
		"required": {
			"value": true,
			"message": "Gender is required"
		},
	},
	"no_of_family_members" : {
		"required": {
			"value": true,
			"message": "Field is required"
		},
	},
	"c5_street_address" : {
		"required": {
			"value": true,
			"message": "Street Address is required"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Maximum length is "+fieldRule.immigration.address_in_jamaica.max
		}
	},
	"c5_city" : {
		"required": {
			"value": true,
			"message": "City/Town is required"
		},
	},
	"c5_state" : {
		"required": {
			"value": true,
			"message": "State/Province/Region is required"
		},
	},
	"c5_zipcode" : {
		"required": {
			"value": true,
			"message": "Zip/Postal Code is required"
		},
		"max": {
			"value": fieldRule.immigration.zipcode.max,
			"message": "Maximum length is "+fieldRule.immigration.zipcode.max
		}
	},
	"c5_country" : {
		"required": {
			"value": true,
			"message": "Country is required"
		},
	},
	"c5_occupation" : {
		"required": {
			"value": true,
			"message": "Occupation is required"
		},
	},
	"c5_passport_number" : {
		"required": {
			"value": true,
			"message": "Please enter the passport number"
		},
		"max": {
			"value": fieldRule.immigration.passport_number.max,
			"message": "Maximum length is "+fieldRule.immigration.passport_number.max
		}
	},
	"c5_country_of_issue" : {
		"required": {
			"value": true,
			"message": "Country of Issue is required"
		},
	},
	"c5_intended_address_in_jamaica" : {
		"required": {
			"value": true,
			"message": "Address is required"
		},
		"max": {
			"value": fieldRule.immigration.address_in_jamaica.max,
			"message": "Maximum length is "+fieldRule.immigration.address_in_jamaica.max
		}
	},
	"flight_name" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"flight_number" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"integer" :{
			"value": true,
			"message": "Invalid Flight No"
		},
	},
	"departure_port" : {
		"required": {
			"value": true,
			"message": "Departure Port is required"
		},
	},
	"travel_date" : {
		"required": {
			"value": true,
			"message": "Travel Date is required"
		},
	},
	"length_of_stay" : {
		"required": {
			"value": true,
			"message": "Length of stay is required"
		},
		"integer": {
			"value": true,
			"message": "Invalid day"
		},
	},
	"accompanied_luggage" : {
		"required": {
			"value": true,
			"message": "Field is required"
		},
		"integer": {
			"value": true,
			"message": "Invalid value"
		},
	},
	"unaccompanied_luggage" : {
		"required": {
			"value": true,
			"message": "Field is required"
		},
		"integer": {
			"value": true,
			"message": "Invalid value"
		},
	},
	"relation_name" : {
		"max": {
			"value": fieldRule.immigration.relation_name.max,
			"message": "Maximum length is "+fieldRule.immigration.relation_name.max
		}
	},
	"relation_contact_dob" : {
		"date" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		},
		"dob" : {
			"value" : 'DD-MM-YYYY',
			"message" : "Invalid Date"
		}
	},
	// "payment_article" : {
	// 	"required": {
	// 		"value": true,
	// 		"message": "Field is required"
	// 	},
	// },
	// "payment_value" : {
	// 	"number": {
	// 		"value": true,
	// 		"message": "Value is invalid"
	// 	},
	// },
	// "payment_currency" : {
	// 	"required": {
	// 		"value": true,
	// 		"message": "Currency is required"
	// 	},
	// },
	"purpose_of_visit" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
	"other_purpose_of_visit" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"max": {
			"value": 55,
			"message": "Maximum length is "+55
		}
	},
	"c5_vessel_name" : {
		"required": {
			"value": true,
			"message": "Vessel name is required"
		},
		"max": {
			"value": 64,
			"message": "Maximum length is "+64
		}
	},
	"c5_vessel_type" : {
		"required": {
			"value": true,
			"message": "Vessel Type is required"
		},
	},
	"c5_vessel_location" : {
		"required": {
			"value": true,
			"message": "Vessel location is required"
		},
		"max": {
			"value": 128,
			"message": "Maximum length is "+128
		}
	},
	"c5_airport_code" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
	},
};

var additionaldocs_rule = {
	"notes" : {
		"required": {
			"value": true,
			"message": "Note is required"
		},
		"max": {
			"value": fieldRule.immigration.notes.max,
			"message": "Maximum length is "+fieldRule.immigration.notes.max
		}
	},
	"accommodation_type" : {
		"required": {
			"value": true,
			"message": "Accommodation type is required"
		},
	},
	"accomodation_name" : {
		"required": {
			"value": true,
			"message": "Required!"
		}
	},
	"house_no" : {
		"max": {
			"value": fieldRule.immigration.house_no.max,
			"message": "Maximum length is "+fieldRule.immigration.house_no.max
		}
	},
	"street_address" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"max": {
			"value": fieldRule.immigration.address.max,
			"message": "Maximum length is "+fieldRule.immigration.address.max
		}
	},
	"stay_town" : {
		"required": {
			"value": true,
			"message": "Required!"
		},
		"max": {
			"value": fieldRule.immigration.town.max,
			"message": "Maximum length is "+fieldRule.immigration.town.max
		}
	},
	"lat": {
		"required": {
			"value": true,
			"message": "Please select the location"
		},
	},
	"stay_parish" : {
		"required": {
			"value": true,
			"message": "Required!"
		}
	},
	"covid_tested_date" : {
		"required": {
			"value": true,
			"message": "Tested Date is required"
		},
		"date" : {
			"value" : 'YYYY-MM-DD',
			"message" : "Invalid Date"
		}
	},
};

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

	renderCountryOptions();
	renderAccommodationsOptions();
	renderDialingCodeOptions();
	renderParishOptions();


	/* Toastr Notification Start */
	if(applicationSession.checkCookie('notification')) {
		dataTable.showNotificationMessage(1, applicationSession.getCookie('notification'));
		applicationSession.setCookie('notification',0,1)
	}

	if(applicationSession.checkCookie('Authorization')) {
		$('#immigration-non-resident').show();
		$('#immigration-landing').hide();
		$('#immigration-login').hide();
		renderSubmittedApplications();
	} else {
		const queryString 	= window.location.search;
		const urlParams 	= new URLSearchParams(queryString);
		const resident_param= urlParams.get('type');

		if(resident_param == 'non-resident') {
			$('#immigration-landing').hide();
			$('#immigration-non-resident').show();
			window.history.pushState({}, "", ".");
		} else {
			$('#immigration-landing').show();
			$('#immigration-non-resident').hide();
		}
	}

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

	/**
	* remove dialing code from mobile number
	* @param string mobile no
	* @return string mobile no
	*/
	function formatMobileNumber(input_value) {
		var updated_value = input_value.replace(/[+_)(-\s]/g, '');
		return updated_value.substring(4, updated_value.length);
	}


	$('body').on('input','input[data-float]',function(e) {
		var input = parseFloat($(this).attr('data-float'));
		var regexp = (/[^\.0-9]|^0+(?=[0-9]+)|\.(?=\.|.+\.)/g);
		var regexp = (input % 1 === 0) ? integer : regexp;
		if (regexp.test(this.value)) {
			this.value = this.value.replace(regexp, '');
		}
	});

	$(document).on('click', '#btn-immig-logout', function() {
		swal({
			title: "Are you sure?",
			text: "",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willLogout) => {
			if (willLogout) {
				applicationSession.setCookie('touristSessionUser',0,1);
				applicationSession.setCookie('Authorization',0,1);
				window.location.reload();
			}
		});
	});

	/**
    * restrict special characters
    */
    $(document).on('keypress paste', '.special_char_input', function(event) {
    	var regex = new RegExp("^[a-zA-Z0-9]+$");
    	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    	if (!regex.test(key)) {
    		event.preventDefault();
    		return false;
    	}
    });

});

/**
* Define immigration form validation rules and messages
*
* @return object validation
*/
function getFormValidation() {
	return validation = {
		"registration": registration_rule,
		"immigration" : immigration_rule,
		"login" : login_rule,
		"questionnaire" : questionnaire_rule,
		"travelcontact" : contactinfo_rule,
		"traveldetails" : traveldetails_rule,
		"healthquestionnaire" : healthquestionnaire_rule,
		"customsform" : customsform_rule,
		"additionaldocs" : additionaldocs_rule,
		"screening" : screening_rule
	};
}

/**
* Restrict mobile no by allowing only numbers
*/
function restrictMobileNumber(evt){
	var e = event || evt;
	var charCode = e.which || e.keyCode;
	if (charCode == 43)
		return true
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function submitLoginForm() {
	var form 		= 'login-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.login;
	formValidation.clearFormInputs(form, data);

	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		var request  = {
			'url'  	   		  : "otp",
			'type' 	   		  : "POST",
			'data' 	   		  : data,
			'dataType' 		  : "json",
			'success_message' : true,
			'error_message'   : true,
			'ajax_loader'	  : true,
			'window_reload'	  : false
		}
		dataTable.makeRequest(request, processCurrentResponse);
		function processCurrentResponse(response, status_code) {
			if(status_code == posConfig.response_code.ok) {
				var responseData = response.data;
				if(responseData.otp) {
					dataTable.showNotificationMessage(1, responseData.otp);
					$('#input-otp').val(responseData.otp);
				}
				var email = $('#login-email').val();
				$('.span_email').html(email);
				$('#otp-email').val(email);
				$('#verify-otp-form').show();
				$('#login-form').hide();
				$('#verify-otp').show();
				$('#resend-otp').hide();
				initiateTimer();
			} else if(status_code == posConfig.response_code.bad_request) {
				var errorMessages = response.error ? response.error : {};
				formValidation.renderFormErrorMessages(form, errorMessages);
			}
		}
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

/**
* Start OTP timer
*/
function initiateTimer() {
	var counter = posConfig.otp_timing_seconds_email;
	var interval = setInterval(function() {
		counter--;
		$('.otp_seconds').text(counter);
		if (counter <= 0) {
			$('#verify-otp').hide();
			$('#resend-otp').show();
			clearInterval(interval);
			return;
		}
	}, 1000);
}

function submitVerifyOtpForm() {
	var form 		= 'verify-otp-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.login;
	formValidation.clearFormInputs(form, data);

	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		var request  = {
			'url'  	   		  : "otp",
			'type' 	   		  : "PUT",
			'data' 	   		  : data,
			'dataType' 		  : "json",
			'success_message' : true,
			'error_message'   : true,
			'ajax_loader'	  : true,
			'window_reload'	  : false
		}
		dataTable.makeRequest(request, processCurrentResponse);
		function processCurrentResponse(response, status_code) {
			if(status_code == posConfig.response_code.ok) {
				var responseData = response.data;

				var email = responseData.email ? responseData.email : $('#login-email').val();
				var sessionUser = {
					id : '',
					email :  email
				};
				if(responseData.user_id) {
					$('.updated-user-id').val(responseData.user_id);
					sessionUser.id = responseData.user_id;
				}
				applicationSession.setCookie('touristSessionUser', sessionUser, 1);
				$('.updated-user-email').val(email);
				$('#immigration-login').hide();

				renderSubmittedApplications();

			} else if(status_code == posConfig.response_code.bad_request) {
				var errorMessages = response.error ? response.error : {};
				formValidation.renderFormErrorMessages(form, errorMessages);
			}
		}
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function renderSubmittedApplications() {
	if(applicationSession.checkCookie('touristSessionUser')) {
		var user = applicationSession.getCookie('touristSessionUser');
		if(!user.id) {
			$('#immigration-registration').show();
			return false;
		}
		var requestList = '';
		var requestData = {
			user_id : user.id,
			type 	: 2
		}
		var request  = {
			'url'  	   		  : "immigrants/applications-list",
			'type' 	   		  : "POST",
			'data' 	   		  : requestData,
			'dataType' 		  : "json",
			'success_message' : false,
			'error_message'   : true,
			'ajax_loader'	  : true,
			'window_reload'	  : false,
			'auth_required'   : true
		}
		dataTable.makeRequest(request, processCurrentResponse);
		function processCurrentResponse(response, status_code) {
			if(status_code == posConfig.response_code.ok) {
				var responseData = response.data;
				var immigrants = responseData.immigrants;

				for (var i = 0; i < immigrants.length; i++) {
					var certificate_expired_at = immigrants[i].certificate_expired_at ? immigrants[i].certificate_expired_at : '';
					requestList += '<tr>'+
					'<td>'+immigrants[i].first_name+'</td>'+
					'<td>'+immigrants[i].last_name+'</td>'+
					'<td>'+immigrants[i].reference_number+'</td>'+
					'<td>'+immigrants[i].created_at+'</td>'+
					'<td>'+certificate_expired_at+'</td>'+
					'<td>'+immigrants[i].status+'</td>';

					if(immigrants[i].status_id == posConfig.immigrant_status.conditionally_approved) {
						requestList += '<td> Please make your travel arrangements and submit the travel information at least 72 hours before departure.</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 5) {
						requestList += '<td>You have been approved to travel to Jamaica. Please download and save the travel authorization confirmation</td>';
						requestList += '<td><a href="immigration_certificate.html?reference_number='+immigrants[i].encrypted_reference+'" target="_blank" data-toggle="tooltip" class="btn btn-sm btn-primary" data-application_id='+immigrants[i].id+' title="Download Certificate" data-original-title="Edit"><i class="fa fa-download"></i></a>';
						requestList += '</td>';
					} else if(immigrants[i].status_id == 2) {
						requestList += '<td>Please provide further information to facilitate an assessment by the health authorities of whether your home is a suitable location for you to be quarantined for COVID19 in Jamaica.</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 1) {
						requestList += '<td>Your application have been submitted</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 4) {
						requestList += '<td>Your Application for permit to enter Jamaica has been denied as a result of COVID-19 related health risks. You may re-submit an application after one day.</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 8) {
						requestList += '<td>Your application for permit to enter Jamaica has been denied as a result of not meeting residence requirements. You may reapply when Jamaica’s COVID-19 related travel restrictions have been lifted.</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 6) {
						requestList += '<td>Your application is being processed for a final approval.</td>';
						requestList += '<td></td>';
					} else if(immigrants[i].status_id == 11) {
						requestList += '<td>'+immigrants[i].request_information_detail+'</td>';
						requestList += '<td><button type="button" data-toggle="tooltip" class="btn btn-sm btn-primary link_upload_additional" data-application_id='+immigrants[i].encrypted_reference+' data-req_doc_type='+immigrants[i].requested_document_type+' title="Upload Additional Documents">'+
						'<i class="fa fa-upload"></i>'+
						'</button></td>';
					} else if(immigrants[i].status_id == 12) {
						requestList += '<td>Your application have been expired</td>';
						requestList += '<td></td>';
					} else {
						requestList += '<td></td>';
						requestList += '<td></td>';
					}
				}
				$('#tb-submitted-applications > tbody').empty();
				$('#tb-submitted-applications > tbody').append(requestList);
			} else if(status_code == posConfig.response_code.bad_request) {
				requestList += '<tr>'+
				'<td colspan="8">No Applications found</td>'+
				'</tr>';
				$('#tb-submitted-applications > tbody').empty();
				$('#tb-submitted-applications > tbody').append(requestList);
			}
		}
		$('#immigration-request-lists').show();
	} else {
		var email = $('.updated-user-email').val();
		if(!email) {
			applicationSession.setCookie('touristSessionUser',0,1);
			applicationSession.setCookie('Authorization',0,1);
			window.location.reload();
		}
		$('#immigration-registration').show();
	}
}


/**
* render and populate country options
*/
function renderCountryOptions() {
	var request  = {
		'url'  	   		  : "countries",
		'type' 	   		  : "GET",
		'data' 	   		  : {},
		'dataType' 		  : "json",
		'success_message' : false,
		'error_message'   : true,
		'ajax_loader'	  : true,
		'window_reload'	  : false
	}
	dataTable.makeRequest(request, processCurrentResponse);
	function processCurrentResponse(response, status_code) {
		if(status_code == posConfig.response_code.ok) {
			var data = response.data;
			var countries_list = data.countries;

			updateMultyCountryOptions('',countries_list, "countries-travelled");
			updateMultyCountryOptions('',countries_list, "c5-countries-travelled");

			var country_without_jamaica = '<option value="">Select</option>'+
			'<option value="232" visa-required="0">United States</option>'+
			'<option value="231" visa-required="0">United Kingdom</option>'+
			'<option value="38" visa-required="0">Canada</option>';

			var country_with_jamaica = '<option value="">Select</option>'+
			'<option value="232" visa-required="0">United States</option>'+
			'<option value="231" visa-required="0">United Kingdom</option>'+
			'<option value="38" visa-required="0">Canada</option>'+
			'<option value="110" visa-required="0">Jamaica</option>';

			for(var i in countries_list) {
				if(countries_list[i].id != 110) {
					country_without_jamaica += '<option value='+countries_list[i].id+' visa-required='+countries_list[i].visa_required+'>'+countries_list[i].name+'</option>';
				}
				country_with_jamaica += '<option value='+countries_list[i].id+' visa-required='+countries_list[i].visa_required+'>'+countries_list[i].name+'</option>';
			}

			//updateCountryOptions(intital_option,countries_list, "select_country");
			var selectWithJamaica = ["identi-country", "c5-select-country"];
			var selectWithoutJamaica = ["identi-country_of_issue", "on-land-country", "c5-select-issuecountry", "select-tested-country","select-tested-country-cert", "select-retested-country"];
			updateSingleCountryOptions(selectWithJamaica, country_without_jamaica);
			updateSingleCountryOptions(selectWithoutJamaica, country_with_jamaica);
		} else if(status_code == posConfig.response_code.bad_request) {
			var errorMessages = response.error ? response.error : {};
			formValidation.renderFormErrorMessages(form, errorMessages);
		}
	}
}

function renderAccommodationsOptions() {
	var request  = {
		'url'  	   		  : "accommodations",
		'type' 	   		  : "GET",
		'data' 	   		  : {},
		'dataType' 		  : "json",
		'success_message' : false,
		'error_message'   : true,
		'ajax_loader'	  : true,
		'window_reload'	  : false
	}
	dataTable.makeRequest(request, processCurrentResponse);
	function processCurrentResponse(response, status_code) {
		if(status_code == posConfig.response_code.ok) {
			var data = response.data;
			var accommodations = data.accommodations;

			var villaOptions = '<option value="">Select</option>';
			var hotelOptions = '<option value="">Select</option>';
			var guestOptions = '<option value="">Select</option>';
			var apartOptions = '<option value="">Select</option>';

			for(var i in accommodations) {
				var option = "<option value="+accommodations[i].id+" town='"+accommodations[i].town+"' address='"+accommodations[i].street+"' parish='"+accommodations[i].parish_id+"' lat='"+accommodations[i].lat+"' lng='"+accommodations[i].lng+"'>"+accommodations[i].name+"</option>";
				if(accommodations[i].type == 1) {
					villaOptions +=option;
				} else if(accommodations[i].type == 2) {
					hotelOptions +=option;
				} else if(accommodations[i].type == 3) {
					guestOptions +=option;
				} else if(accommodations[i].type == 4) {
					apartOptions +=option;
				}
			}

			$('#select-villa-details').html(villaOptions);
			$('#select-hotel-details').html(hotelOptions);
			$('#select-ghouse-details').html(guestOptions);
			$('#select-apartment-details').html(apartOptions);
		}
	}
}

/**
* render and populate dialing code options
*/
function renderDialingCodeOptions() {
	var request  = {
		'url'  	   		  : "dialing-codes",
		'type' 	   		  : "GET",
		'data' 	   		  : {},
		'dataType' 		  : "json",
		'success_message' : false,
		'error_message'   : true,
		'ajax_loader'	  : true,
		'window_reload'	  : false
	}
	dataTable.makeRequest(request, processCurrentResponse);
	function processCurrentResponse(response, status_code) {
		if(status_code == posConfig.response_code.ok) {
			var data = response.data;
			var options = '<option value="">Dialing Code</option>';
			data.top_codes.forEach(function (code) {
				options += '<option value="'+code.id+'">'+code.dialing_code+'</option>';
			});
			data.dialing_codes.forEach(function (code) {
				options += '<option value="'+code.id+'">'+code.dialing_code+'</option>';
			});
			$('.select-dialingcode').empty();
			$('.select-dialingcode').append(options);
		}
	}
}

function updateSingleCountryOptions(element_ids, options) {
	for(var j = 0; j < element_ids.length; j++ ) {
		$('#'+element_ids[j]).html(options);
	}
}

/**
* render and populate parish options
*/
function renderParishOptions() {
	var request  = {
		'url'  	   		  : "parishes",
		'type' 	   		  : "GET",
		'data' 	   		  : {},
		'dataType' 		  : "json",
		'success_message' : false,
		'error_message'   : true,
		'ajax_loader'	  : true,
		'window_reload'	  : false
	}
	dataTable.makeRequest(request, processCurrentResponse);
	function processCurrentResponse(response, status_code) {
		if(status_code == posConfig.response_code.ok) {
			var data = response.data;
			var options = '<option value="">Select</option>';
			var parishes_list = data.parishes;
			for(i in parishes_list) {
				options += '<option value='+parishes_list[i].id+'>'+parishes_list[i].name+'</option>';
			}

			$('.select-parish').empty();
			$('.select-parish').append(options);
		} else if(status_code == posConfig.response_code.bad_request) {
			var errorMessages = response.error ? response.error : {};
			formValidation.renderFormErrorMessages(form, errorMessages);
		}
	}
}


function updateMultyCountryOptions(intital_option,countries, element_id) {
	var options = intital_option;
	for(i in countries) {
		options += '<option value='+countries[i].id+'>'+countries[i].name+'</option>';
	}
	$('#'+element_id).empty();
	$('#'+element_id).append(options);
	enableSelectMultiple(element_id);
}

function updateCountryOptions(intital_option,countries, element_id) {
	var options = intital_option;
	for(i in countries) {
		if(countries[i].id != 110) {
			options += '<option value='+countries[i].id+' visa-required='+countries[i].visa_required+'>'+countries[i].name+'</option>';
		}
	}
	$('.'+element_id).empty();
	$('.'+element_id).append(options);
}

/**
* initiate datepicker
*/
function initiateDatePicker(class_name) {
	$("."+class_name).datepicker({
		format: 'yyyy-mm-dd',
		autoHide: true,
		endDate: new Date()
	}).on('change', function() {
		$(this).next().html('');
		$(this).removeClass('error_border');
	});
}

function initiateReturnDate(arrival_date) {
	var existingDate = $('.date_of_return').val();
	var arrivalDate = new Date(arrival_date);
	arrivalDate.setDate(arrivalDate.getDate() + 1);
	if(existingDate != '') {
		$('#date-of-return').val('');
		$('#date-of-return').datepicker('setStartDate', arrivalDate);
	} else {
		$("#date-of-return").datepicker({
			format: 'yyyy-mm-dd',
			autoHide: true,
			startDate: arrivalDate,
			setDate: null
		}).on('change', function() {
			$(this).next().html('');
			$(this).removeClass('error_border');
		});
	}
}

/**
* initiate datepicker
*/
function initiateDatePickerNotRestrict(class_name) {
	$("."+class_name).datepicker({
		format: 'yyyy-mm-dd',
		autoHide: true,
	}).on('change', function() {
		$(this).next().html('');
		$(this).removeClass('error_border');
	});
}

/**
* Submit Registration / Set up entry process
*/
function submitRegistrationForm() {
	var form 		= 'registration-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.registration;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {

		var isValid = validateRegistrationQuestions();
		if(isValid) {
			confirmRegistrationForm();
		} else {
			dataTable.showNotificationMessage(2, "Please answer the required fields");
		}
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function confirmRegistrationForm() {
	var formData = $('#registration-form')[0];
	touristFormData = new FormData(formData);
	$('#immigration-registration').hide();
	$('#immigration-identification').show();
	scrollToTopPage();
	populateIdentificationDetails({
		lastname : $('.reg_lastname').val(),
		firstname : $('.reg_firstname').val(),
		date_of_travel : $('.reg_date_of_travel').val(),
		country : $( "#identi-country option:selected" ).text()
	});
	initiateReturnDate($('.reg_date_of_travel').val());
}

function populateIdentificationDetails(data) {
	$('.identi_lastname').val(data.lastname);
	$('.identi_firstname').val(data.firstname);
	$('.identi_date_of_travel').val(data.date_of_travel);
	//$('.identi_date_of_travel').datepicker('setDate',data.date_of_travel);
	$('.span_country_name').html(data.country);

	/** Passport confirmation **/
	$('#c5ppt-lastname').val(data.lastname);
	$('#c5ppt-firstname').val(data.firstname);
}

function cloneUKTravelDate(data) {
	if(data.exist) {
		var countries = data.countries;
		var label = "";
		if(countries.length > 1) {
			label = 'Date of your last visit to "'+countries.join(" | ")+'" [ If you traveled to more than one of these countries then please indicate the last visited date ]';
		} else {
			label = 'Date of your last visit to '+countries[0];
		}
		$('.last_date_in_uk_label').html(label);
		var cloned = $('#uktraveldate-clone').clone();
		if(!$('#uktraveldate-div').html()) {
			$('#uktraveldate-div').append(cloned);
			$('#uktraveldate-div').find('.div_hidden_clone').removeClass('div_hidden_clone');
			$('.pov_ukdate_row').removeClass('col-md-12');
			$('.pov_ukdate_row').addClass('col-md-6');
			initiateDatePicker('last_date_in_uk');
		}
	} else {
		$('#uktraveldate-div').empty();
		$('.pov_ukdate_row').removeClass('col-md-6');
		$('.pov_ukdate_row').addClass('col-md-12');
	}
}

function checkUKProtocolExist() {
	var existed_coutries 	= [];
	var countries_travelled = $('#countries-travelled').val();
	var ukProtocolCountries = Object.keys(ukProtocolCountryOptions);
	for(c in countries_travelled) {
		if(ukProtocolCountries.indexOf(countries_travelled[c]) >= 0) {
			existed_coutries.push(ukProtocolCountryOptions[countries_travelled[c]]);
		}
	}
	return {
		'exist' : existed_coutries.length > 0 ? true : false,
		'countries' : existed_coutries
	}
}

/**
* Submit user identification form
*/
function submitIdentificationForm() {
	var form 		= 'identification-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.immigration;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		openModal('passportConfirmModal');
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function validateRegistrationQuestions() {
	var isValid = true;
	$("form#registration-form :input[type=radio]").each(function(){
		var name = $(this).attr("name");
		if($("input:radio[name="+name+"]:checked").length == 0){
			isValid = false;
			return;
		}
	});
	return isValid;

}

function validateIdentiQuestions() {
	var isValid = true;
	$("form#identification-form :input[type=radio]").each(function(){
		var name = $(this).attr("name");
		if($("input:radio[name="+name+"]:checked").length == 0){
			isValid = false;
			return;
		}
	});
	return isValid;

}

function scrollToTopPage() {
	$("html, body").animate({ scrollTop: $("#immigration-login").offset().top }, 2000);
}

function submitC5Confirmation() {
	var form 	= 'customs-c5-passport-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.customsform;
	formValidation.clearFormInputs(form, data);

	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		closeModal('passportConfirmModal');

		$('#select-dob-day').val($('#select-dob-day-c5-pass').val());
		$('#select-dob-month').val($('#select-dob-month-c5-pass').val());
		$('#select-dob-year').val($('#select-dob-year-c5-pass').val());
		$('#my-dob').val($('#c5-my-dob-pass').val());
		$('#my-dob').next().html('');
		$('#identi-lastname').val($('#c5ppt-lastname').val());
		$('#identi-firstname').val($('#c5ppt-firstname').val());
		$('#identi-passport').val($('#c5ppt-passport').val());

		for(var fk in identificationFormKeys) {
			touristFormData.delete(identificationFormKeys[fk]);
		}

		let identificationData = new FormData($("#identification-form")[0]);
		for (var qpair of identificationData.entries()) {
			touristFormData.append(qpair[0], qpair[1]);
			identificationFormKeys.push(qpair[0]);
		}

		$('#immigration-identification').hide();
		$('#immigration-questions').show();
		scrollToTopPage();
		enableNegativeCertificateInput();
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function enableNegativeCertificateInput() {
	$('#question-two-div').empty();
	$('#li-tested-cloned').empty();
	$('#tested-confirmed').empty();
	$('#retested-confirmed').empty();

	var countryId = $('#identi-country').val();
	var dob = moment($('#my-dob').val(), "DD-MM-YYYY");
	var age = moment().diff(dob, 'years');
	// if(countryOptions.indexOf(countryId) >= 0 && parseInt(age) > 12) {
	// 	$('.ques_lrc_section').hide();
	// 	$('.ques_hrc_section').show();
	// } else {
	// 	var cloned = $('#question-two-clone').clone();
	// 	$('#question-two-div').append(cloned);
	// 	$('#question-two-div').find('.div_hidden_clone').removeClass('div_hidden_clone');
	// 	$('.ques_lrc_section').show();
	// 	$('.ques_hrc_section').hide();
	// }

	if(parseInt(age) < 12) {
		var cloned = $('#question-two-clone').clone();
		$('#question-two-div').append(cloned);
		$('#question-two-div').find('.div_hidden_clone').removeClass('div_hidden_clone');
		$('.ques_lrc_section').show();
		$('.ques_hrc_section').hide();
	} else {
		$('.ques_lrc_section').hide();
		$('.ques_hrc_section').show();
	}
}

/**
* Submit questionnaire form
*/
function submitQuestionnaireForm() {
	var form 	= 'questionnaire-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.questionnaire;
	formValidation.clearFormInputs(form, data);

	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		var isValid = validateQuestionnaire();
		if(isValid) {
			var questionaire_inputs = ["question_one","other_symptoms","question_two","tested_date","tested_country","tested_city","question_two_1","question_two_2","retested_date","retested_country","retested_city","question_two_3","question_three","question_four","question_five","question_six","question_seven","negative_certificate","tested_state","negative_certificate_2"];
			for(var q = 0; q < questionaire_inputs.length; q++) {
				touristFormData.delete(questionaire_inputs[q]);
			}

			let questionnaireData = new FormData($("#questionnaire-form")[0]);
			for (var qpair of questionnaireData.entries()) {
				touristFormData.append(qpair[0], qpair[1]);
			}

			// if($('form#questionnaire-form #nagative-cert-file').length == 1) {
			// 	var tested_date = moment($('#covid-neg-tested-date').val(), "YYYY-MM-DD");
			// 	var travel_date = moment($('.identi_date_of_travel').val(), "YYYY-MM-DD");
			// 	var days = travel_date.diff(tested_date, 'days');
			// 	console.log(days);
			// 	if(days > 10) {
			// 		openModal('testdateExpiryModal');
			// 	} else {
			// 		$('#immigration-questions').hide();
			// 		$('#immigration-qtn-assessment').show();
			// 		scrollToTopPage();
			// 	}
			// } else {
			// 	$('#immigration-questions').hide();
			// 	$('#immigration-qtn-assessment').show();
			// 	scrollToTopPage();
			// }

			var quarantine_inputs = ["accommodation_type","house_no","street_address","stay_town","stay_parish","autocomplete","lat","lng","private_home_option","accomodation_name"];
			for(var s = 0; s < quarantine_inputs.length; s++) {
				touristFormData.delete(quarantine_inputs[s]);
			}

			$('#immigration-questions').hide();

			var purpose_of_visit = $('#stay-purpose-visit').val();
			if(purpose_of_visit == 4) {
				$('#immigration-terms').show();
			} else {
				$('#immigration-qtn-assessment').show();
			}

			scrollToTopPage();
		} else {
			dataTable.showNotificationMessage(2, "Please answer the question");
		}
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function validateQuestionnaire() {
	var isValid = true;
	$("form#questionnaire-form :input[type=radio]").each(function(){
		var input_name = $(this).attr("name");
		if($('input:radio[name="'+input_name+'"]:checked').length == 0){
			isValid = false;
			return;
		}
	});
	return isValid;

}

function openModal(element_id) {
	$('#'+element_id).modal({
		backdrop: 'static',
		keyboard: false
	})
}

/**
* close modal
*/
function closeModal(element_id) {
	$('#'+element_id).modal('hide');
}

function submitQuarantineAssessmentForm() {
	var form 		= 'immigrant-qtn-assessment-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.additionaldocs;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		let formData = new FormData($("#"+form)[0]);
		for (var pair of formData.entries()) {
			touristFormData.append(pair[0], pair[1]);
		}

		var purpose_of_visit = $('#stay-purpose-visit').val();
		var accommodation_type = $('#accommodation-type').val();
		changeConsentContent(purpose_of_visit, accommodation_type);

		$("#immigration-qtn-assessment").hide();
		$("#immigration-terms").show();
		scrollToTopPage();
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function changeConsentContent(purpose_of_visit, accommodation_type) {
	if(purpose_of_visit == 2) {
		$('.travelboard_consent').show();
		$('.otherpurpose_consent').hide();
		$('.businesspurpose_consent').hide();
	} else if(purpose_of_visit == 3) {
		$('.businesspurpose_consent').show();
		$('.travelboard_consent').hide();
		$('.otherpurpose_consent').hide();
	}  else {
		$('.otherpurpose_consent').show();
		$('.travelboard_consent').hide();
		$('.businesspurpose_consent').hide();
	}
}

/**
* Submit agreement form
*/
function submitAgreementForm() {
	var travelDate = moment($('.identi_date_of_travel').val());
	var returnDate = moment($('.date_of_return').val());
	var duration = moment.duration(returnDate.diff(travelDate));
	var length_of_stay = duration.asDays();

	var purpose_of_visit = $('#stay-purpose-visit').val();
	if(purpose_of_visit == 5) {
		length_of_stay = 0;
		$('#length-of-stay').attr('readonly', true);
	} else {
		$('#length-of-stay').removeAttr('readonly');
	}

	var daysInUK = 0;
	var lastDateUK = $('.last_date_in_uk').val();
	if(lastDateUK != '') {
		var lastDateInUK = moment(lastDateUK, 'YYYY-MM-DD');
		var currentDate = moment(new Date());
		daysInUK = currentDate.diff(lastDateInUK, 'days');
	}

	var ukProtocolResponse = checkUKProtocolExist();
	if(ukProtocolResponse.exist && daysInUK <= 14) {
		$('#qtn-order-transit-form').hide();
		$('#qtn-order-form').show();

		$('#qobasic-content').empty();
		var qo_cloned = $('#qtorder-facility-div').clone();
		cloneQuarantineOrderData(qo_cloned);
	} else if(purpose_of_visit == 4) {
		touristFormData.delete('quarantine_user_sign');
		touristFormData.delete('quarantine_order');

		$('#qtn-order-form').hide();
		$('#qtn-order-transit-form').show();
	} else {
		$('#qtn-order-transit-form').hide();
		$('#qtn-order-form').show();

		var qo_cloned = "";
		$('#qobasic-content').empty();
		var qtnType = $('#accommodation-type').val();
		if(purpose_of_visit == 3) {
			qo_cloned = $('#qtorder-bs-div').clone();
		} else if(qtnType == 5) {
			qo_cloned = $('#qtorder-home-div').clone();
		} else {
			qo_cloned = $('#qtorder-rc-div').clone();
		}

		cloneQuarantineOrderData(qo_cloned);
	}

	$('#immigration-terms').hide();
	$('#immigration-qtn-order').show();
	populateC5FormDetails({
		lastname : $('.identi_lastname').val(),
		firstname : $('.identi_firstname').val(),
		middlename : $('.identi_middlename').val(),
		date_of_travel : $('.identi_date_of_travel').val(),
		dob: $('#my-dob').val(),
		gender: $('.identi_gender').val(),
		street_address : $('.identi_street_address').val(),
		city : $('.identi_city').val(),
		state : $('.identi_state').val(),
		zipcode : $('.identi_zipcode').val(),
		country : $('.identi_country').val(),
		occupation : $('.identi_occupation').val(),
		passport_number : $('.identi_passport_number').val(),
		country_of_issue : $('.identi_country_of_issue').val(),
		intended_address : getIntendedAddress(),
		travelled_countries : $('#countries-travelled').val(),
		purpose_of_visit : $("#stay-purpose-visit").val(),
		other_purpose_of_visit : $('.stay_other_purpose_of_visit').val(),
		length_of_stay : length_of_stay,
		departure_port : $('.identi_city').val(),
		no_of_family_members : $('#select-familymembers').val(),
		airport_code : $('form#identification-form #identi-airport-code').val(),
		flight_name : $('#identi-flight-name').val(),
		flight_number : $('#identi-flight-number').val(),
		vessel_name : $('#identi-vessel-name').val(),
		vessel_type : $('#identi-vessel-type').val(),
		vessel_location : $('#identi-vessel-location').val()
	});
	scrollToTopPage();
}

function cloneQuarantineOrderData(clonedData) {
	$('#qobasic-content').append(clonedData);
	$('#qobasic-content').find('.div_hidden_clone').removeClass('div_hidden_clone');

	var intended_address = getIntendedAddress();
	$('.residential_address').val(intended_address);

	var middlename = $('#identi-middlename').val();
	var fullname = $('#identi-firstname').val()+" "+(middlename ? middlename : "")+" "+$('#identi-lastname').val();
	$('.case_myself').val(fullname);
}

function getIntendedAddress() {
	var address = '';

	var acctype = $('#accommodation-type').val();
	if(acctype == 1 || acctype == 3 || acctype == 4 || acctype == 7) {
		address += $('form#immigrant-qtn-assessment-form .stay_hotel_villa option:selected').text();
	}

	if($('.stay_street_address').val().length > 0) {
		address += (address.length > 0) ? ", "+$('.stay_street_address').val() : $('.stay_street_address').val();
	}

	if($('.stay_town').val().length > 0) {
		address += (address.length > 0) ? ", "+$('.stay_town').val() : $('.stay_town').val();
	}

	if(acctype == 5) {
		if($('#map-parish').val() != '') {
			address += (address.length > 0) ? ", "+$( "#map-parish option:selected" ).text() : $( "#map-parish option:selected" ).text();
		}
	}

	return address;
}

function populateC5FormDetails(data) {
	var travel_mode = $("input:radio[name=currently_located]:checked").val();
	var travel_mode_cloned = $('#div-c5-travelinfo-'+travel_mode).clone();
	$('#c5-travelinfo-cloned').html(travel_mode_cloned);
	$('#c5-travelinfo-cloned').find('.div_hidden_clone').removeClass('div_hidden_clone');

	var dob = data.dob.split("-");
	for (var i=0; i<data.travelled_countries.length; i++) {
		$("#c5-countries-travelled").find("option[value="+data.travelled_countries[i]+"]").prop("selected", "selected");
	}

	if(data.purpose_of_visit == 8) {
		var cloned = $('#div-other-purpose-visit').clone();
		$('#purpose-visit-cloned').html(cloned);
		$('#purpose-visit-cloned').find('.div_hidden_clone').removeClass('div_hidden_clone');
	}

	$('.c5_inp_lastname').val(data.lastname);
	$('.c5_inp_firstname').val(data.firstname);
	$('.c5_inp_middlename').val(data.middlename);
	$('#select-dob-day-c5-1').val(dob[0]);
	$('#select-dob-month-c5-1').val(dob[1]);
	$('#select-dob-year-c5-1').val(dob[2]);
	$('#c5-my-dob').val(data.dob);
	$('.c5_inp_gender').val(data.gender);
	$('.c5_inp_streetaddress').val(data.street_address);
	$('.c5_inp_state').val(data.state);
	$('.c5_inp_zipcode').val(data.zipcode);
	$('.c5_inp_city').val(data.city);
	$('.c5_select_country').val(data.country);
	$('.c5_inp_occupation').val(data.occupation);
	$('.c5_select_issuecountry').val(data.country_of_issue);
	$('.c5_inp_passportno').val(data.passport_number);
	$('.c5_inp_intendaddress').val(data.intended_address);
	$('#c5-countries-travelled').multiselect('reload');
	$('#select-purpose-visit').val(data.purpose_of_visit);
	$('.other_purpose_of_visit').val(data.other_purpose_of_visit);
	$('#length-of-stay').val(data.length_of_stay);
	$('.c5_date_travel').val(data.date_of_travel);
	$('.c5_date_travel').datepicker('setDate',data.date_of_travel);
	$('.c5_inp_departureport').val(data.departure_port);
	$('#c5-select-familymembers').val(data.no_of_family_members);
	$('form#customs-c5-form #c5-airport-code').val(data.airport_code);
	$('.c5_select_airline').val(data.flight_name);
	$('.c5_inp_flightno').val(data.flight_number);
	$('#c5-vessel-name').val(data.vessel_name);
	$('#c5-vessel-type').val(data.vessel_type);
	$('#c5-vessel-location').val(data.vessel_location);
	populateC5FamilyMembers();
}

function populateC5FamilyMembers() {
	var no_of_family_members = $('#select-familymembers').val();
	if(no_of_family_members > 0) {
		$('#c5-relation-panel').show();
		customsform_rule['relation_name'] = {
			"required": {
				"value": true,
				"message": "First Name is required"
			},
			"max": {
				"value": fieldRule.immigration.firstname.max,
				"message": "Maximum length is "+fieldRule.immigration.firstname.max
			}
		};
		customsform_rule['relation_lastname'] = {
			"required": {
				"value": true,
				"message": "Last Name is required"
			},
			"max": {
				"value": fieldRule.immigration.lastname.max,
				"message": "Maximum length is "+fieldRule.immigration.lastname.max
			}
		};
		customsform_rule['relation_middlename'] = {
			"max": {
				"value": fieldRule.immigration.middlename.max,
				"message": "Maximum length is "+fieldRule.immigration.middlename.max
			}
		};
		customsform_rule['relation_contact_dob'] = {
			"required": {
				"value": true,
				"message": "Date of Birth is required"
			},
			"date" : {
				"value" : 'DD-MM-YYYY',
				"message" : "Invalid Date"
			},
			"dob" : {
				"value" : 'DD-MM-YYYY',
				"message" : "Invalid Date"
			}
		};
		customsform_rule['relation_relation'] = {
			"required": {
				"value": true,
				"message": "Relation is required"
			},
			"max": {
				"value": fieldRule.immigration.relationship_name.max,
				"message": "Maximum length is "+fieldRule.immigration.relationship_name.max
			}
		};
	}
	var incremental_id = $('#family-relation-clone-id').val();

	for(var i = 0; i <= incremental_id; i++) {
		var name = $('#family-relation-name-'+i).val();
		var lastname = $('#family-relation-lastname-'+i).val();
		var middlename = $('#family-relation-middlename-'+i).val();
		var dob = $('#family-my-dob-rel-'+i).val();
		var relation_name = $('#family-relation-relation-'+i).val();

		if(i != 0 && name != undefined) {
			$('#c5-relation-clone-id').val(i);
			var contact = '<div class="row travel_contact_div" id="c5-relation-clone-'+i+'">'+
			'<div class="col-md-4">'+
			'<div class="form-group">'+
			'<label>Last Name<span class="text-danger"> *</span></label>'+
			'<input type="text" class="form-control pos_validate" id="c5-relation-lastname-'+i+'" name="relation_lastname['+i+']" value="" data-rule="customsform" />'+
			'<span class="validation_error"></span>'+
			'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
			'<div class="form-group">'+
			'<label>First Name<span class="text-danger"> *</span></label>'+
			'<input type="text" class="form-control pos_validate" id="c5-relation-name-'+i+'" name="relation_name['+i+']" value="" data-rule="customsform" />'+
			'<span class="validation_error"></span>'+
			'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
			'<div class="form-group">'+
			'<label>Middle Name</label>'+
			'<input type="text" class="form-control pos_validate" id="c5-relation-middlename-'+i+'" name="relation_middlename['+i+']" value="" data-rule="customsform" />'+
			'<span class="validation_error"></span>'+
			'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
			'<label>Date Of Birth<span class="text-danger"> *</span></label>'+
			'<div class="form-group custom_dob_container">'+
			'<div id="c5-relation-dob-container-'+i+'" class="form-control text-center"></div>'+
			'<input type="hidden" id="c5-my-dob-rel-'+i+'" name="relation_contact_dob['+i+']" value="" data-rule="customsform" />'+
			'<span class="validation_error"></span>'+
			'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
			'<div class="form-group">'+
			'<label>Relation<span class="text-danger"> *</span></label>'+
			'<input type="text" class="form-control pos_validate" id="c5-relation-relation-'+i+'" name="relation_relation['+i+']" value="" data-rule="customsform" placeholder="Son, Wife, etc..." />'+
			'<span class="validation_error"></span>'+
			'</div>'+
			'</div>'+
			'<div class="col-md-4">'+
			'<div class="form-group">'+
			'<button type="button" class="btn btn-sm btn-danger remove-c5-relation-clone" data-clone_id="'+i+'" style="margin-top: 9%;">'+
			'REMOVE&nbsp;&nbsp;<i class="fa fa-minus"></i>'+
			'</button>'+
			'</div>'+
			'</div>'+
			'</div>';
			$('#c5-relation-div').append(contact);
			appDateOfBirth.createField({
				containerId : 'c5-relation-dob-container-'+i,
				inputId: 'c5-my-dob-rel-'+i,
				dayId: 'select-dob-day-c5-rel-'+i,
				monthId: 'select-dob-month-c5-rel-'+i,
				yearId: 'select-dob-year-c5-rel-'+i
			});
		}

		if(name != undefined) {
			var dob_array = dob.split("-");
			$('#c5-relation-name-'+i).val(name);
			$('#c5-relation-lastname-'+i).val(lastname);
			$('#c5-relation-middlename-'+i).val(middlename);
			$('#select-dob-day-c5-rel-'+i).val(dob_array[0]);
			$('#select-dob-month-c5-rel-'+i).val(dob_array[1]);
			$('#select-dob-year-c5-rel-'+i).val(dob_array[2]);
			$('#c5-my-dob-rel-'+i).val(dob);
			$('#c5-relation-relation-'+i).val(relation_name);
		}
	}
}

function submitQuarantineOrderForm() {
	var form 		= 'qtn-order-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.screening;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {

		var qtn_inputs = ["cmo_name","cmo_certified_at","quarantine_ord_agreement","case_myself","certified_at","signature_updated","risk_classify_rc","high_risk_checkbox","residential_address","risk_classify_bs","risk_classify_home","health_department_contact","health_department_contact_name","health_department_contact_number","quarantine_user_sign"];
		for(var q = 0; q < qtn_inputs.length; q++) {
			touristFormData.delete(qtn_inputs[q]);
		}

		let qtnData = new FormData($("#"+form)[0]);
		for (var qpair of qtnData.entries()) {
			touristFormData.append(qpair[0], qpair[1]);
		}
		touristFormData.append("quarantine_user_sign", signatureBlob, "sign.png");

		$('#immigration-qtn-order').hide();
		$('#immigration-customs-c5').show();
		scrollToTopPage();

	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function enableSelectMultiple(element_id) {
	$('#'+element_id).multiselect({
		columns: 1,
		placeholder: 'Select',
		search: true,
		selectAll: false
	});
}

function renderCityOptions(param) {
	var option = '<input type="text" class="form-control pos_validate" name="'+param.fieldName+'" value="" data-rule="'+param.rule+'" />'+
	'<span class="validation_error"></span>';
	var value = parseInt(param.value);
	var defaultCountries = [38,231,232];
	if(defaultCountries.includes(value)) {
		option = '<select class="form-control pos_validate" name="'+param.fieldName+'" data-rule="'+param.rule+'">'+
		'<option value="">Select</option>'+
		'<option value="City1">City1</option>'+
		'<option value="City2">City2</option>'+
		'</select>'+
		'<span class="validation_error"></span>';
	}
	$('#'+param.containerId).html(option);
}

function backToPage(currentPage, movePage) {
	$('#'+currentPage).hide();
	if(currentPage == "immigration-terms") {
		var purpose_of_visit = $('#stay-purpose-visit').val();
		if(purpose_of_visit == 4) {
			$('#immigration-questions').show();
			return;
		}
	}

	$('#'+movePage).show();
	scrollToTopPage();
}

/**
* Submit C5 form
*/
function submitC5Form() {
	var form 	= 'customs-c5-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.customsform;
	formValidation.clearFormInputs(form, data);

	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {

		var isValid = validateC5Questionnaire();
		if(!isValid) {
			dataTable.showNotificationMessage(2, "Please confirm the questions");
			return false;
		}

		var countries_travelled = $('#c5-countries-travelled').val();
		if(parseInt(countries_travelled.length) == 0) {
			dataTable.showNotificationMessage(2, "Please choose the travelled countries");
			return false;
		}

		var question_one = $("#customs-c5-form input[name='c5_agreement_question_one']:checked").val();
		if(parseInt(question_one) == 1) {
			var c5_inputs = ["c5_lastname","c5_firstname","c5_middlename","c5_dob","c5_gender","no_of_family_members","c5_street_address","c5_city","c5_state","c5_zipcode","c5_country","c5_cccupation","c5_passport_number","c5_country_of_issue","c5_intended_address_in_jamaica","c5_countries_travelled","departure_port","travel_date","other_purpose_of_visit","flight_name","flight_number","c5_vessel_name","c5_vessel_type","c5_vessel_location","c5_airport_code","purpose_of_visit","length_of_stay","accompanied_luggage","unaccompanied_luggage","relation_lastname","relation_name","relation_middlename","relation_contact_dob","relation_relation","payment_article","payment_value"];
			for(var q = 0; q < c5_inputs.length; q++) {
				touristFormData.delete(c5_inputs[q]);
			}

			let formData = new FormData($("#customs-c5-form")[0]);
			for (var pair of formData.entries()) {
				touristFormData.append(pair[0], pair[1]);
			}

			var request  = {
				'url'  	   		  : "tourists",
				'type' 	   		  : "POST",
				'data' 	   		  : touristFormData,
				'dataType' 		  : "json",
				'process_data' 	  : true,
				'content_type' 	  : true,
				'success_message' : true,
				'error_message'   : true,
				'ajax_loader'	  : true,
				'window_reload'	  : false,
				'auth_required'   : true
			}
			dataTable.makeRequest(request, processCurrentResponse);
			function processCurrentResponse(response, status_code) {
				if(status_code == posConfig.response_code.ok) {
					var responseData = response.data;
					if(responseData.reference_no) {
						$('.reference_code').html(responseData.reference_no);

						var sessionUser = {
							id : responseData.user_id,
							email :  $('.updated-user-email').val()
						};
						applicationSession.setCookie('touristSessionUser', sessionUser, 1);
						applicationSession.setCookie('Authorization', responseData.token, 1);
						$('.submitted_user_email').html(responseData.original_email);

						if(responseData.is_approved == 1) {
							$('.popup_approved_content').hide();
							$('.popup_pending_content').show();
						} else {
							$('.popup_pending_content').hide();
							$('.popup_approved_content').show();
						}

						var countryId = $('#identi-country').val();
						var dob = moment($('#my-dob').val(), "DD-MM-YYYY");
						var age = moment().diff(dob, 'years');

						if (parseInt(age) >= 12) {
							$('.popup_hrc_content').show();
						}

						openModal('appSubmittedModal');
					}

				} else if(status_code == posConfig.response_code.bad_request) {
					var errorMessages = response.error ? response.error : {};

					var form_reg_inputs = ["report_for","someone_for","relationship_with","relationship_lastname","relationship_firstname","relationship_middlename","relationship_address","relationship_phone_number","last_name","first_name","date_of_travel"];
					for(name in errorMessages) {
						if($.inArray(name, form_reg_inputs) >= 0) {
							formValidation.renderFormErrorMessages('registration-form', errorMessages);
							$('#immigration-registration').show();
							$('#immigration-customs-c5').hide();
							scrollToTopPage();
							return false;
						}
					}

					var form_one_inputs = ["email","lastname","firstname","middlename","address_in_jamaica","city","state","zipcode","country","occupation","travel_to_jamaica","dob","gender","mobile_number_in_overseas","passport_number","country_of_issue","countries_travelled","return_from_jamaica","stay_purpose_of_visit","stay_other_purpose_of_visit","on_land_country","on_land_city","on_land_state","f2_flight_name","f2_flight_number","vessel_name","vessel_type","vessel_location"];
					for(name in errorMessages) {
						if($.inArray(name, form_one_inputs) >= 0) {
							formValidation.renderFormErrorMessages('identification-form', errorMessages);
							$('#immigration-identification').show();
							$('#immigration-customs-c5').hide();
							scrollToTopPage();
							return false;
						}
					}

					var form_two_inputs = ["question_one","other_symptoms","question_two","tested_date","tested_country","tested_city","question_two_1","question_two_2","retested_date","retested_country","retested_city","question_two_3","question_three","question_four","question_five","question_six","question_seven","negative_certificate","tested_state","negative_certificate_2"];
					for(name in errorMessages) {
						if($.inArray(name, form_two_inputs) >= 0) {
							formValidation.renderFormErrorMessages('questionnaire-form', errorMessages);
							$('#immigration-questions').show();
							$('#immigration-customs-c5').hide();
							scrollToTopPage();
							return false;
						}
					}

					var form_three_inputs = ["accommodation_type","accomodation_name","private_home_option","house_no","street_address","stay_town","stay_parish","autocomplete","lat", "lng"];
					for(name in errorMessages) {
						if($.inArray(name, form_three_inputs) >= 0) {
							formValidation.renderFormErrorMessages('immigrant-qtn-address-form', errorMessages);
							$('#immigration-qtn-assessment').show();
							$('#immigration-customs-c5').hide();
							scrollToTopPage();
							return false;
						}
					}

					formValidation.renderFormErrorMessages('customs-c5-form', errorMessages);
					for(formKeyName in errorMessages) {
						if(formKeyName == "g-recaptcha-response"){
							dataTable.showNotificationMessage(2,errorMessages[formKeyName]);
							$('.recaptcha_validation_error').html(errorMessages[formKeyName]);
						}
					}
				}
			}
		} else {
			dataTable.showNotificationMessage(2, "Please confirm the agreement");
		}
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function validateC5Questionnaire() {
	var isValid = true;
	$("form#customs-c5-form :input[type=radio]").each(function(){
		var name = $(this).attr("name");
		if($("input:radio[name="+name+"]:checked").length == 0){
			isValid = false;
			return;
		}
	});
	return isValid;

}


function submitQuarantineAddressForm() {
	var form 		= 'immigrant-qtn-address-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.additionaldocs;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		$("#quarantine-address-div").hide();
		$("#quarantine-consent-div").show();
		$('#appDocumentLabel').html('Consent');
	} else {
		formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
	}
}

function backToPageInQtn(currentPage, movePage, title) {
	$('#'+currentPage).hide();
	$('#'+movePage).show();
	$('#appDocumentLabel').html(title);
}

function submitImmigDocumentsForm() {
	var form 		= 'immigrant-addln-documents-form';
	var validation 	= getFormValidation();
	var data 		= $('#'+form).serializeArray();
	var validator 	= validation.additionaldocs;
	formValidation.clearFormInputs(form, data);
	var formResponse = formValidation.doFormValidation(data, validator);
	if(formResponse.valid) {
		var formData = $('#'+form)[0];
		var fdata = new FormData(formData);
		var immigrant_id = $('.document-immigrant-id').val();
		var request  = {
			'url'  	   		  : "immigrants/additional-documents",
			'type' 	   		  : "POST",
			'data' 	   		  : fdata,
			'dataType' 		  : "json",
			'process_data' 	  : true,
			'content_type' 	  : true,
			'success_message' : true,
			'error_message'   : true,
			'ajax_loader'	  : true,
			'window_reload'	  : false,
			'auth_required'   : true
		}
		dataTable.makeRequest(request, processCurrentResponse);
		function processCurrentResponse(response, status_code) {
			if(status_code == posConfig.response_code.ok) {
				applicationSession.setCookie('notification',response.message,1);
				window.location.reload();
			} else if(status_code == posConfig.response_code.bad_request) {
				var errorMessages = response.error ? response.error : {};
				formValidation.renderFormErrorMessages(form, errorMessages);

				for(name in errorMessages) {
					if(name == "document") {
						var message = errorMessages[name];
						if($.isArray(message) || typeof message === 'object') {
							var errMsgHtml = '';
							for(m in message) {
								errMsgHtml += message[m]+"<br>";
							}
							if(errMsgHtml) {
								$('#immig-doc-files').next().html(errMsgHtml);
							}
						}
					}
				}

			} else {
				formValidation.renderFormErrorMessages(form, formResponse.errorMessages);
			}
		}
	}
}