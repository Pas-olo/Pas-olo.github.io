const counters = document.querySelectorAll('.value');
const speed = 200;

function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}
while(true){
	counters.forEach( counter => {
		   const animate = () => {
			  const value = +counter.getAttribute('akhi');
			  const data = +counter.innerText;
			 
			  const time = value / speed;
			 if(data < value) {
				  counter.innerText = Math.ceil(data + time);
				  setTimeout(animate, 1);
				}else{
				  counter.innerText = value;
				}
			 
		   }
			if(isOnScreen(counter)) {
				animate();
			}
	});
}
