function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var cope = document.getElementById("myTooltip");
  cope.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var cope = document.getElementById("myTooltip");
  cope.innerHTML = "Copied";
}