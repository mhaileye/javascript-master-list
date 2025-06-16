//get a projected go date from a project on a facility										
var valueToSet ='';										
var dte1 = '${Task.ActualStartDate:{"TaskName": "Grand Opening"}}';										
var dte2 = '${Facility.OpenDate}';										
var dte3 = dte2 == '' ? dte1 : dte2;										
var dte4 = new Date(dte3);										
var yr = dte4.getFullYear();										
var mth = dte4.getMonth() + 1;										
var date = dte4.getDate();										
valueToSet = mth + '/' + date + '/' + yr;										
										
										
//Keep the report to 1 value per store										
var valueToSet ='';										
var n1 = '${ProjectEntity.ProjectEntityTypeName}';										
var n2 = '${Facility.CodeFacilityStatusID}';										
var n3 = n1 == 'Opening Project' && n2 == 'Planned' ? 'Planned Facility' : n1;										
var n4 = n3 == 'Planned Facility' || n2 == 'Active' ? n3:'';										
valueToSet = n4;										

