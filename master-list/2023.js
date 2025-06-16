Projected Go Date							
var valueToSet ='';							
var dte1 = '${Task.ActualStartDate:{"TaskName": "Grand Opening"}}';							
var dte2 = '${Facility.OpenDate}';							
var dte3 = dte2 == '' ? dte1 : dte2;							
var dte4 = new Date(dte3);							
var yr = dte4.getFullYear();							
var mth = dte4.getMonth()+1;							
var date = dte4.getDate();							
valueToSet = yr+'/'+mth+'/'+date;							
							
							
valueToSet = yr + '/' + mth + '/' + date;						
    
    
    
var year = d1.getFullYear();
var yrstart = new Date(year, 0, 1);
var firstdate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

// Set to noon							
var yrstart1 =   new Date(yrstart.setHours(0, 0, 0, 0));	
var firstdate1 = new Date(firstdate.setHours(0, 0, 0, 0));							
							 
 							
							
// Get difference in whole days, divide by milliseconds in one day							
// and round to remove any daylight saving boundary effects							
// return Math.round((d1-d0) / 8.64e7)							
							
 							
							
							
var diffDays0 = (parseInt((firstdate - yrstart) / (1000 * 60 * 60 * 24), 10))+1	 						
var diffDays = Math.round((firstdate1-yrstart1) / 8.64e7)+1							
//var diffDays = (parseInt((firstdate - yrstart) / (1000 * 60 * 60 * 24), 10))+1						//var diffDays = (parseInt((firstdate - yrstart) / (1000 * 60 * 60 * 24), 10))+1	
var check = new Date(year,0,diffDays)							
							
							
							
							
							
							
							
var valueToSet ='NewFieldPlaceholder';							
var d = '${Task.ActualStartDate:{"TaskName": "Grand Opening"}}';							
var e = new Date();							
e.setDate(e.getDate() - 5);							
valueToSet = e							
							
							
							
							
							
							
var valueToSet = 'NewFieldPlaceholder';							
var dates = '${ProcessTimeline.ActualStartDate}'.split(',');							
							
var MSname = '${ProcessTimeline.ProcessTimelineTemplateName}'.split(',');							
var MSpos = MSname.indexOf('Landlord Delivery Date');							
var MSpos_CSt = MSname.indexOf('Construction Started');							
var MSpos_FS = MSname.indexOf('Fixture Started');							
var MSpos_SO = MSname.indexOf('Store Open');							
							
var constrstart = new Date(dates[MSname.indexOf('Construction Started')]); //was [9]							
var D1 = constrstart.getTime()/(24*60*60*1000);							
var fixstart = new Date(dates[MSname.indexOf('Fixture Started')]); //was [10]							
var D2 = fixstart.getTime()/(24*60*60*1000);							
var merchcomplete = new Date(dates[MSname.indexOf('Grand Opening')]); //was Store Open .. was [17]							
var D3 = merchcomplete.getTime()/(24*60*60*1000);							
var ldd = new Date(dates[MSname.indexOf('Landlord Delivery Date')]);							
var D4 = ldd.getTime()/(24*60*60*1000);							
var ConstrT = Math.ceil(((D2 - D1)-(((D2-D1)/7)*2))/5);							
var MerchCT = Math.ceil(((D3 - D4)-(((D3-D4)/7)*2))/5);							
var final = new Date(ldd.getTime() - (15*86400000));							
valueToSet = final.getMonth()+1 + '/' + final.getDate() + '/' + final.getFullYear();							
							
							
							
							
var valueToSet = 'NewFieldPlaceholder';							
							
var sr = '${ProjectEntity.ClientEntityID}';							
var finalstore = sr.replaceFirst("^0+(?!$)", "")							
var status = '${Facility.CodeFacilityStatusID}';							
var A = finalstore + '|' + status;							
var check = A ==						new oir relo do x if it’s a remodel do xyz	
'123|Planned' || A == 							
'148|Planned' || A == 							
'191|Planned' || A == 							
'257|Planned' || A == 							
'300|Planned' || A == 							
'337|Planned' || A == 							
'375|Planned' || A == 							
'445|Planned' || A == 							
'582|Planned' || A == 							
'874|Planned' ? 'Excl': '';							
							
valueToSet = check;							
							
							
							
var valueToSet = 'NewFieldPlaceholder';							
							
var sr = '${ProjectEntity.ClientEntityID}';							
var finalstore = sr.replaceFirst("^0+(?!$)", "")							
var status = '${Facility.CodeFacilityStatusID}';							
var A = finalstore + '|' + status;							
var check = A == '123|Planned' || 
            A == '148|Planned' || 
            A == '191|Planned' || 
            A == '257|Planned' || 
            A == '300|Planned' || 
            A == '337|Planned' || 
            A == '375|Planned' || 
            A == '445|Planned' || 
            A == '582|Planned' || 
            A == '874|Planned' 
    ? finalstore +'R': finalstore;							
							
valueToSet = check;							
							
							
							
var valueToSet = 'NewFieldPlaceholder';							
							
var keyedFcstDate = '${ProjectEntity.ForecastEndDate}';							
var projectType = '${ProjectEntity.CodeProjectTypeID}';							
var extraDate = '${Task.ActualStartDate:{TaskName:"Remodel Construction Complete"}}';							
var Go = '${Task.ActualStartDate:{TaskName:"Grand Opening"}}';							
var dates = projectType == 'Remodel' ? extraDate : Go ;							
							
							
var GODate = new Date(dates);							
var keepGO = isNaN(GODate) ? new Date(01/01/1900) : GODate;							
							
var keep = keepGO;							
							
var Fdate = keep.getTime();							
var P3 = new Date(Fdate);							
var Yr = P3.getFullYear();							
var M1 = P3.getMonth()+1;							
var D1 = P3.getDate();							
var keepdate = (M1 + "/" + D1+ "/" +Yr);							
							
var month = new Array('2/26/2022','4/2/2022', '4/30/2022', '5/28/2022', '7/2/2022', '7/30/2022', '8/27/2022', '10/1/2022', '10/29/2022', '11/26/2022', '12/31/2022', '1/28/2023', '2/25/2023', '4/1/2023', '4/29/2023', '5/27/2023', '7/1/2023', '7/29/2023', '8/26/2023', '9/30/2023',	'10/28/2023', '11/25/2023',						
                      '12/30/2023', '2/3/2024', '3/2/2024',	'4/6/2024', '5/4/2024',	'6/1/2024', '7/6/2024', '8/3/2024', '8/31/2024', '10/5/2024', '11/2/2024', '11/30/2024', '1/4/2025', '2/1/2025', '3/1/2025', '4/5/2025', '5/3/2025', '5/31/2025', '7/5/2025', '8/2/2025', '8/30/2025', '10/4/2025', '11/1/2025',
                      '11/29/2025', '1/3/2026', '1/31/2026', '2/28/2026', '4/4/2026', '5/2/2026', '5/30/2026', '7/4/2026', '8/1/2026', '8/29/2026', '10/3/2026', '10/31/2026', '11/28/2026', '1/2/2027', '1/30/2027', '2/27/2027', '4/3/2027', '5/1/2027', '5/29/2027',	'7/3/2027', '7/31/2027', '8/28/2027', '10/2/2027', 
                      '10/30/2027', '11/27/2027', '1/1/2028', '1/29/2028', '2/26/2028', '4/1/2028', '4/29/2028', '5/27/2028', '7/1/2028', '7/29/2028', '8/26/2028', '9/30/2028', '10/28/2028', '11/25/2028', '12/30/2028', '2/3/2029', '3/3/2029', '4/7/2029', '5/5/2029', '6/2/2029', '7/7/2029', '8/4/2029', '9/1/2029',
                      '10/6/2029', '11/3/2029', '12/1/2029', '1/5/2030', '2/2/2030', '3/2/2030', '4/6/2030', '5/4/2030', '6/1/2030', '7/6/2030', '8/3/2030', '8/31/2030', '10/5/2030', '11/2/2030', '11/30/2030', '1/4/2031', '2/1/2031', '3/1/2031', '4/5/2031', '5/3/2031', '5/31/2031', '7/5/2031', '8/2/2031',							
                      '8/30/2031', '10/4/2031', '11/1/2031', '11/29/2031', '1/3/2032', '1/31/2032', '2/28/2032', '4/3/2032', '5/1/2032', '5/29/2032', '7/3/2032', '7/31/2032', '8/28/2032', '10/2/2032', '10/30/2032', '11/27/2032', '1/1/2033', '1/29/2033', '2/26/2033', '4/2/2033', '4/30/2033', '5/28/2033', '7/2/2033', 
                      '7/30/2033', '8/27/2033', '10/1/2033', '10/29/2033', '11/26/2033', '12/31/2033', '1/28/2034', '2/25/2034', '4/1/2034', '4/29/2034', '5/27/2034', '7/1/2034', '7/29/2034', '8/26/2034', '9/30/2034', '10/28/2034', '11/25/2034', '12/30/2034', '2/3/2035', '3/3/2035', '4/7/2035', '5/5/2035', 
                      '6/2/2035', '7/7/2035', '8/4/2035', '9/1/2035', '10/6/2035', '11/3/2035', '12/1/2035', '1/5/2036', '2/2/2036', '3/1/2036', '4/5/2036', '5/3/2036', '5/31/2036', '7/5/2036', '8/2/2036', '8/30/2036', '10/4/2036', '11/1/2036', '11/29/2036', '1/3/2037', '1/31/2037');							
							
var nr0 = new Date(keepdate);							
var nr1 = nr0.getTime()/(24*60*60*1000);							
							
var pos = '';							
for (i = 0; i < month.length; i++) {		
    var currMonthDate = (new Date(new Date(month[i])).getTime()) / (24 * 60 * 60 * 1000);
    if (currMonthDate - nr1 >= 0) {
        break; 
    }							
    pos = i + 1;							
}							
var lendate = Number(keyedFcstDate.length) > 0 ? 'Yes' : 'No';							
var finalFcstDate = lendate == 'Yes' ? keyedFcstDate : month[pos];							
var final1 = 'Month-End:' + finalFcstDate;							
var finalOne = new Date(final1.substr(10,final1.length-10));							
							
var Fdate1 = finalOne.getTime();							
var P1 = new Date(Fdate1);							
var Yr = P1.getFullYear();							
var M1 = P1.getMonth()+1;							
var D1 = P1.getDate();							
var keepdate = (M1 + "/" + D1+ "/" +Yr);							
							
valueToSet = keepdate;							
