function submitData(){
  var career=document.querySelector("#career").value;
    var name=document.querySelector("#name").value;
      var email_id=document.querySelector("#email_id").value;
        var phone_no=document.querySelector("#phone_no").value;
          var d_o_b=document.querySelector("#d_o_b").value;
        var ginstitute=document.querySelector("#ginstitute").value;
        var gbranch=document.querySelector("#gbranch").value;
        var gy_o_p=document.querySelector("#gy_o_p").value;
        var gpercentage=document.querySelector("#gpercentage").value;
        var iinstitute=document.querySelector("#iinstitute").value;
        var ibranch=document.querySelector("#ibranch").value;
        var iy_o_p=document.querySelector("#iy_o_p").value;
        var ipercentage=document.querySelector("#ipercentage").value;
        var sinstitute=document.querySelector("#sinstitute").value;
        var sbranch=document.querySelector("#sbranch").value;
        var sy_o_p=document.querySelector("#sy_o_p").value;
        var spercentage=document.querySelector("#spercentage").value;
        var skills=document.querySelector("#skills").value;
        // IndexedDB Implemetation
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
    store.put({
      career:career,
      name:name,
      email_id:email_id,
      phone_no:phone_no,
      d_o_b:d_o_b,
      education:[
        {
          institute:ginstitute,
          branch:gbranch,
          y_o_p:gy_o_p,
          percentage:gpercentage
        },
        {
          institute:iinstitute,
          branch:ibranch,
          y_o_p:iy_o_p,
          percentage:ipercentage
        },
        {
          institute:sinstitute,
          branch:sbranch,
          y_o_p:sy_o_p,
          percentage:spercentage
        }
      ],
      skills:skills


      });
  }


















       window.open("index.html");
}
