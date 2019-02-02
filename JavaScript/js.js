var mainMenu = document.getElementsByClassName('main-menu');
mainMenu = mainMenu[0];
var addRemove = function(k){
  for(var i = 1; i < 6; i++){
	  if(i==k){
      mainMenu.querySelector('li:nth-child('+ i + ') > a').classList.add('active');
	  }else{
      mainMenu.querySelector('li:nth-child('+ i + ') > a').classList.remove('active');
    }
  }
}
window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if(scrolled < 650){
  	addRemove(1);
  }else if(scrolled < 1055 && scrolled >= 650){
		addRemove(2);
  }else if(scrolled < 2679 && scrolled >= 1055){
   	addRemove(3);
  }else if(scrolled < 3544 && scrolled >= 2679){
    addRemove(4);
  }else if(scrolled >= 3544){
    addRemove(5);
  }
};
window.scroll(0, 1);
window.scroll(0, 0);