var valueToSet = '';
var ldate = '${ClientListRow.HoldEndDate}'.split(',');
var n2 = new Date();
var n1 = ldate[0].length() ==0 ? n2 : new Date(ldate[0]);
var B1 = ldate != null ? n1.getTime() : n2.getTime();
var B2 = new Date();
var M3 = B2.getMonth() + 1;
var D3 = B2.getDate();
var Yr3 = B2.getFullYear();
var today = (M3 < 10? '0' + M3 : M3) + "/" + (D3 < 10 ? '0' + D3 : D3) + "/" + Yr3;
valueToSet = ldate[0] =='' ? today : ldate[0] + '<br>' + (ldate[1] == '' ? today : ldate[1]);


// Project LL Contact



var valueToSet = '';
var Sdate = '${ClientListRow.HoldStartDate}'.split(',');
var Edate = '${ClientListRow.HoldEndDate}'.split(',');
var n2 = new Date();
var n1 = Edate[0] != null ? new Date(Edate[0]) : n2;
var B1 = Edate[0] != null ? n1.getTime() : n2.getTime();
var B2 = new Date();
var M3 = B2.getMonth() + 1;
var D3 = B2.getDate();
var Yr3 = B2.getFullYear();
var today = (M3 < 10? '0' + M3 : M3) + "/" + (D3 < 10 ? '0' + D3 : D3) + "/" + Yr3;



var n3 = (Edate[1] !=null) ? new Date(Edate[1]):n2;
var B3 = (Edate[1] != null) ? n3.getTime():n2.getTime();
var B4 = new Date();
var M4 = B4.getMonth()+1;
var D4 = B4.getDate();
var Yr4 = B4.getFullYear();
var today1 = (M4 < 10? '0' + M4 : M4) + "/" + (D4 < 10 ? '0' + D4 : D4) + "/" + Yr4;

var line1 = isNaN(Math.round(Number((new Date(Edate[0]).getTime() - new Date(Sdate[0]).getTime())/(24*60*60*1000)),0)) ? Math.round(Number((new Date(today).getTime() - new Date(Sdate[0]).getTime())/(60*60*24*1000)),0):Math.round(Number((new Date(Edate[0]).getTime()-new Date(Sdate[0]).getTime())/(24*60*60*1000)),0);
var line2 = Math.round(Number((new Date(Edate[1]).getTime()-new Date(Sdate[1]).getTime())/(24*60*60*1000)),0);
var line3 = Math.round(Number((new Date(today1).getTime() - new Date(Sdate[1]).getTime())/(60*60*24*1000)),0);
var line4 = isNaN(line2) ? line3: line2;
valueToSet = isNaN(line4) ? line1.toFixed(0) : line1.toFixed(0) + '<br>' + line4.toFixed(0);
