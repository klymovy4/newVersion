var openNav;
var closeNav;
jQuery('document').ready(function(){
  openNav = function () {
    document.getElementById('mySidenav').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
closeNav = function () {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$('.cancelbtn').click(function(){
  $('#id01').hide();
})
        $('.login').click(function(){
        $('.modal').show();
    });
  var modal = document.getElementById ('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event){
  if (event.target == modal){
    modal.style.display='none';
  }
}
});