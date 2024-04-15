/**
 - field_rules.js
 - Rules for Form Inputs
 - Project: Corona Website
 **/

 var fieldRule = {
 	"self_report" : {
 		"name" : {
 			"max" : 64
 		},
 		"mobile_number" : {
 			"min" : 7,
 		},
 		"street_address" : {
 			"max" : 128
 		},
 		"town" : {
 			"max" : 64
 		},
 		"emergency_contact_name" : {
 			"max" : 128
 		},
 		"additional_details" : {
 			"max" : 256
 		},
 		"airline" : {
 			"max" : 64
 		},
 		"city_visited" : {
 			"max" : 64
 		},
 		"seat_number" : {
 			"max" : 64
 		},
 		"flight_number" : {
 			"max" : 4
 		},
 	},
 	"immigration" : {
 		"relationship_with" : {
 			"max" : 64
 		},
 		"relationship_name" : {
 			"max" : 64
 		},
 		"relationship_contact" : {
 			"max" : 64
 		},
 		"other_reason" : {
 			"max" : 128
 		},
 		"firstname" : {
 			"max" : 64
 		},
 		"lastname" : {
 			"max" : 64
 		},
 		"middlename" : {
 			"max" : 64
 		},
 		"address_in_jamaica" : {
 			"max" : 512
 		},
 		"city" : {
 			"max" : 128
 		},
 		"state" : {
 			"max" : 128
 		},
 		"passport_number" : {
 			"min" : 4,
 			"max" : 12,
 		},
 		"other_symptoms" : {
 			"max" : 64
 		},
 		"first_name" : {
 			"max" : 64
 		},
 		"last_name" : {
 			"max" : 64
 		},
 		"address" : {
 			"max" : 512
 		},
 		"zipcode" : {
 			"max" : 12
 		},
 		"house_no" : {
 			"max" : 20
 		},
 		"other_serious_illness" : {
 			"max" : 256
 		},
 		"notes" : {
 			"max" : 256
 		},
 		"name" : {
 			"max" : 128
 		},
 		"relation_name" : {
 			"max" : 128
 		},
 		"town" : {
 			"max" : 128
 		},
 		"mobile_number" : {
 			"min" : 7,
 		},
 		"other_reason" : {
 			"max" : 512
 		},
 		"other_purpose_of_visit" : {
 			"max" : 128
 		},
 		"contact_relationship" : {
 			"max" : 128
 		},
 	},
 	"login" : {
 		"mobile_number" : {
 			"min" : 7,
 		},
 		"otp" : {
 			"min" : 6,
 			"max" : 6
 		}
 	}
 }