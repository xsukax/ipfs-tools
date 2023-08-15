function displayMessage() {
   let cidd = document.getElementById("cid").value;
   if (cidd) {
      location.href = 'cid.html?cid=' + cidd + '';
   }
}