const counters = document.querySelector('.value');
const speed = 200;


function counnnter(){
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
	   
	});
}

counters.onclick = animate();
