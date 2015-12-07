var needle = require('needle');
var Connect = require('./connect');

var times = 1000000;
var iteration = 100001;
var running = 0;

var output = '';

var sql = 'SELECT TOP 10 mlsarea, mlsnumber, price, CreateDate, SquareFeet, PropertyType, City, State, Zip, County, TotalBedrooms, TotalBaths, Age, AgentName, AgentPhone FROM MLSMASTER.dbo.AutoListings WHERE age IS NOT NULL';
var request = new Connect.Request(sql, function (err, rowCount) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(output);
	}
});

request.on('columnMetadata', function (columns) {

});

request.on('row', function (columns) {
	console.log(columns);
	//output += JSON.stringify(columns);
});

Connect.ExecSql(request);


// var res = {
//   rowCount: -1,
//   sql: 'SELECT TOP 10 mlsarea, mlsnumber, price, CreateDate, SquareFeet, PropertyType, City, State, Zip, County, TotalBedrooms, TotalBaths, Age, AgentName, AgentPhone FROM MLSMASTER.dbo.AutoListings WHERE age IS NOT NULL',
//   output: '',
//   rows: null,
//   err: ''
// };
// var output = '';

// function addListingRecurse(iteration) {
//     var listing = {
//         "ListingId": iteration,
//         "ListingKey": iteration,
//         "ListAOR": "test data",
//         "OriginatingSystemKey": "test data",
//         "OriginatingSystemName": "test data",
//         "ListingService": "test data",
//         "ListingAgreement": "test data",
//         "LeaseConsideredYN": true,
//         "HomeWarrantyYN": true,
//         "CopyrightNotice": "test data",
//         "Disclaimer": "test data",
//         "StandardStatus": "test data",
//         "MlsStatus": "test data",
//         "ApprovalStatus": "test data",
//         "ListingContractDate": "2015-11-16 12:00:00.000Z",
//         "ContractStatusChangeDate": "2015-11-16 12:00:00.000Z",
//         "ExpirationDate": "2015-11-16 12:00:00.000Z",
//         "CancelationDate": "2015-11-16 12:00:00.000Z",
//         "ContingentDate": "2015-11-16 12:00:00.000Z",
//         "WithdrawnDate": "2015-11-16 12:00:00.000Z",
//         "PurchaseContractDate": "2015-11-16 12:00:00.000Z",
//         "CloseDate": "2015-11-16 12:00:00.000Z",
//         "OnMarketDate": "2015-11-16 12:00:00.000Z",
//         "OffMarketDate": "2015-11-16 12:00:00.000Z",
//         "PendingTimestamp": "2015-11-16 12:00:00.000Z",
//         "ModificationTimestamp": "2015-11-16 12:00:00.000Z",
//         "StatusChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "PriceChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "MajorChangeType": "test data",
//         "MajorChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "OriginalEntryTimestamp": "2015-11-16 12:00:00.000Z",
//         "OnMarketTimestamp": "2015-11-16 12:00:00.000Z",
//         "OffMarketTimestamp": "2015-11-16 12:00:00.000Z",
//         "DaysOnMarket": 42,
//         "CumulativeDaysOnMarket": 42,
//         "ClosePrice": 42,
//         "ListPrice": 42,
//         "OriginalListPrice": 42,
//         "ListPriceLow": 42,
//         "PreviousListPrice": 42,
//         "BuyerAgencyCompensation": "test data",
//         "BuyerAgencyCompensationType": "test data",
//         "SubAgencyCompensation": "test data",
//         "SubAgencyCompensationType": "test data",
//         "TransactionBrokerCompensation": "test data",
//         "TransactionBrokerCompensationType": "test data",
//         "DualVariableCompensationYN": true,
//         "LeaseRenewalCompensation": "2015-11-16 12:00:00.000Z",
//         "SignOnPropertyYN": true,
//         "InternetEntireListingDisplayYN": true,
//         "InternetAddressDisplayYN": true,
//         "InternetConsumerCommentYN": true,
//         "InternetAutomatedValuationDisplayYN": true,
//         "SyndicateTo": ["test data"],
//         "PhotosCount": 42,
//         "PhotosChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "VideosCount": 42,
//         "VideosChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "DocumentsCount": 42,
//         "DocumentsChangeTimestamp": "2015-11-16 12:00:00.000Z",
//         "DocumentsAvailable": ["test data"],
//         "VirtualTourURLUnbranded": "test data",
//         "VirtualTourURLBranded": "test data",
//         "PublicRemarks": "test data",
//         "SyndicationRemarks": "test data",
//         "PrivateRemarks": "test data",
//         "PrivateOfficeRemarks": "test data",
//         "ShowingInstructions": "test data",
//         "ShowingContactPhone": "test data",
//         "ShowingContactPhoneExt": "test data",
//         "ShowingContactName": "test data",
//         "ShowingContactType": ["test data"],
//         "LockBoxLocation": "test data",
//         "LockBoxType": ["test data"],
//         "LockBoxSerialNumber": "test data",
//         "AccessCode": "test data",
//         "Exclusions": "test data",
//         "Inclusions": "test data",
//         "Disclosures": ["test data"],
//         "Ownership": "test data",
//         "SpecialListingConditions": ["test data"],
//         "ListingTerms": ["test data"],
//         "CurrentFinancing": ["test data"],
//         "BuyerFinancing": ["test data"],
//         "Concessions": "test data",
//         "ConcessionsComments": "test data",
//         "ConcessionsAmount": 42,
//         "Contingency": "test data",
//         "Possession": ["test data"],
//         "AvailabilityDate": "2015-11-16 12:00:00.000Z",
//         "StreetNumber": "test data",
//         "StreetNumberNumeric": 42,
//         "StreetDirPrefix": "test data",
//         "StreetName": "test data",
//         "StreetAdditionalInfo": "test data",
//         "StreetSuffix": "test data",
//         "StreetSuffixModifier": "test data",
//         "StreetDirSuffix": "test data",
//         "UnitNumber": "test data",
//         "City": "test data",
//         "StateOrProvince": "test data",
//         "Country": "test data",
//         "PostalCode": "test data",
//         "PostalCodePlus4": "test data",
//         "CarrierRoute": "test data",
//         "UnparsedAddress": "test data",
//         "PostalCity": "test data",
//         "CountyOrParish": "test data",
//         "Township": "test data",
//         "MLSAreaMajor": "test data",
//         "MLSAreaMinor": "test data",
//         "SubdivisionName": "test data",
//         "Latitude": 42,
//         "Longitude": 42,
//         "Elevation": 42,
//         "ElevationUnits": "test data",
//         "Directions": "test data",
//         "MapCoordinate": "test data",
//         "MapCoordinateSource": "test data",
//         "MapURL": "test data",
//         "CrossStreet": "test data",
//         "ElementarySchool": "test data",
//         "ElementarySchoolDistrict": "test data",
//         "MiddleOrJuniorSchool": "test data",
//         "MiddleOrJuniorSchoolDistrict": "test data",
//         "HighSchool": "test data",
//         "HighSchoolDistrict": "test data",
//         "ListAgentNamePrefix": "test data",
//         "ListAgentFirstName": "test data",
//         "ListAgentMiddleName": "test data",
//         "ListAgentLastName": "test data",
//         "ListAgentNameSuffix": "test data",
//         "ListAgentFullName": "test data",
//         "ListAgentPreferredPhone": "test data",
//         "ListAgentPreferredPhoneExt": "test data",
//         "ListAgentOfficePhone": "test data",
//         "ListAgentOfficePhoneExt": "test data",
//         "ListAgentCellPhone": "test data",
//         "ListAgentDirectPhone": "test data",
//         "ListAgentHomePhone": "test data",
//         "ListAgentFax": "test data",
//         "ListAgentPager": "test data",
//         "ListAgentVoiceMail": "test data",
//         "ListAgentVoiceMailExt": "test data",
//         "ListAgentTollFreePhone": "test data",
//         "ListAgentEmail": "test data",
//         "ListAgentURL": "test data",
//         "ListAgentKey": "test data",
//         "ListAgentAOR": "test data",
//         "ListAgentMlsId": "test data",
//         "ListAgentStateLicense": "test data",
//         "ListAgentDesignation": ["test data"],
//         "ListOfficeName": "test data",
//         "ListOfficePhone": "test data",
//         "ListOfficePhoneExt": "test data",
//         "ListOfficeFax": "test data",
//         "ListOfficeEmail": "test data",
//         "ListOfficeURL": "test data",
//         "ListOfficeKey": "test data",
//         "ListOfficeAOR": "test data",
//         "ListOfficeMlsId": "test data",
//         "CoListAgentNamePrefix": "test data",
//         "CoListAgentFirstName": "test data",
//         "CoListAgentMiddleName": "test data",
//         "CoListAgentLastName": "test data",
//         "CoListAgentNameSuffix": "test data",
//         "CoListAgentFullName": "test data",
//         "CoListAgentPreferredPhone": "test data",
//         "CoListAgentPreferredPhoneExt": "test data",
//         "CoListAgentOfficePhone": "test data",
//         "CoListAgentOfficePhoneExt": "test data",
//         "CoListAgentCellPhone": "test data",
//         "CoListAgentDirectPhone": "test data",
//         "CoListAgentHomePhone": "test data",
//         "CoListAgentFax": "test data",
//         "CoListAgentPager": "test data"
//     };

//     running++;

//     needle.put('http://localhost:9200/wolfconnect/listings/' + iteration, listing, { json: true }, function (err, res, body) {
//         console.log('Added listing: ' + iteration);
//         running--;
//         batchIt();
//     });
// }

// function batchIt() {
//     while (running < 200 && iteration <= times) {
//         addListingRecurse(iteration);
//         iteration++;
//     }
// }

// batchIt();