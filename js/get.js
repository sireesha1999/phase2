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
var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}

}
var parent=document.querySelector(".parent");

function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/man.svg";
    image.alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name
    // child.append(image);
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
  link.textContent="View Profile";
  var email_id=document.createElement("h3");
  email_id.textContent=d[i].email_id;
  var phone_no=document.createElement("h4");
  phone_no.textContent=d[i].phone_no;
  var d_o_b=document.createElement("h4");
  d_o_b.textContent=d[i].d_o_b;
    // var head=document.createElement("h3");
    // head.innerHTML=d[i].name;
      child.append(image);
      child.append(link);
    child.append(name);
    child.append(d_o_b);
    child.append(email_id);
    child.append(phone_no);
    parent.append(child);


  }

}
