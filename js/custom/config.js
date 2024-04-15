/**
 - config.js
 - App Configuration Values
 - Project: Corona website
 **/

 var posConfig = {
 	"response_code" : {
 		"ok" 			: 200,
 		"created" 		: 201,
 		"accepted"  	: 202,
 		"non-auth"  	: 203,
 		"bad_request" 	: 400,
 		"unauthorized"	: 401
 	},
 	"otp_timing_seconds" : 60,
 	"api_url" : "http://localhost/jamCovid19/public/api/",
 	"registed_reason" : {
 		"known_case" : 1,
 		"overseas_travel" : 2,
 		"occupational" : 3,
 		"symptoms" : 4
 	},
 	"immigrant_status" : {
 		"pending" : 1,
 		"request_for_additional" : 2,
 		"conditionally_approved" : 3,
 		"rejected" : 4,
 	},
 	"otp_timing_seconds_email" : 600,
 	"immigration_url" : "https://jamcovid19.moh.gov.jm/immigration.html?type=resident",
 	"country_id" : 110,
 	"map_api_key" : "AIzaSyAKU-zclpM5le9IG3DgTTrLQUopq5C-6BA",
    "nocapcha_sitekey" : "6LclhIcaAAAAALVFin6JVH3FudcBrK2lUCkN2AI1"
 }