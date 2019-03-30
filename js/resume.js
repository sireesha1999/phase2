
var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for( var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB|| window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("IndexedDB is not supported");
}
// IndexedDB creation
var request;
var store;
var open = idb.open("storeData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(ee){
console.log("error is created");
}
open.onsuccess=function(e){
request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);
  career(data.target.result);

}
}
var left=document.querySelector(".left");
function personalinfo(pi)
{
  var image=document.createElement("img");
  image.src="images/man.svg";
  image.alt=pi.name;
  left.append(image);
  var name=document.createElement("h3");
  name.textContent=pi.name;
  left.append(name);
  var email_id=document.createElement("h2");
  email_id.textContent=pi.email_id;
  left.append(email_id);
  var phone_no=document.createElement("h4");
  phone_no.textContent=pi.phone_no;
  left.append(phone_no);
  var d_o_b=document.createElement("h4");
  d_o_b.textContent=pi.d_o_b;
  left.append(d_o_b);


}
var right=document.querySelector(".right");
function career(c){
  var ca=document.createElement("h2");
  ca.textContent="career objective";
  right.append(ca);
  var hr=document.createElement("hr");
  right.append(hr);
  var p=document.createElement("p");
  p.textContent=c.career;
  right.append(p);
  var hh=document.createElement("h2");
  hh.textContent="Education details";
  right.append(hh);
  var hr2=document.createElement("hr");
  right.append(hr2);
  var table=document.createElement("table");

  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>y_o_p</th><th>percentage</th></tr>";
   var tr2="";
   for( var i in c.education)
   {
     tr2=tr2+"<tr><td>"+c.education[i].institute+"</td><td>"+c.education[i].branch+"</td><td>"+c.education[i].y_o_p+"</td><td>"+c.education[i].percentage+"</td></tr>";
   }
   table.innerHTML=tr1+tr2;
   right.append(table);
   var s=document.createElement("h2");
   s.textContent="Skills";
   right.append(s);
   var hr1=document.createElement("hr");
   right.append(hr1);
   var skills=document.createElement("p");
   skills.textContent=c.skills;
   right.append(skills);


}
