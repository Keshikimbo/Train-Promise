const start = document.querySelector('.Js_start')
const restart = document.querySelector('.Js_restart')
const list = document.querySelector('.list')
const ConnectionLost = document.querySelector('.ConnectionLost')


const arr = ['🍕','🍔','🌭'];
function foo (randomValue, isConnectionLost){
	return new Promise((resolve, reject) => {
		
			if(!isConnectionLost){
				if(randomValue >=0 && randomValue <=2){
					resolve(arr[0])
				}else if(randomValue >=3 && randomValue <= 5){
					resolve(arr[1])
				}else{
					resolve(arr[2])
				}
			}else{reject ('https://i.pinimg.com/564x/5f/0f/47/5f0f4737057f6a653f1415403f759747.jpg')} 
		
	})
}
start.addEventListener('click', onStart)

function onStart (){
	
	const isConnectionLost = Math.random() < 0.4

	const count = list.children.length;
	
	const arr = [];
	[...list.children].forEach(item => item.textContent = '')
	ConnectionLost.innerHTML = '';
	for(let i = 0; i < count; i+=1){
		const randomValue = Math.round(Math.random() * 8)
	
		
		arr.push(foo(randomValue, isConnectionLost))


		
	}
	Promise.all(arr).then(
		items =>{
			items.forEach((item, idx)=>{
				setTimeout(()=>{
					list.children[idx].textContent = item
				}, idx * 700)
			})
		} ).catch(err => {
		ConnectionLost.insertAdjacentHTML('beforeend', `<img src="${err}" alt="lost" width='300px'>`)
		
	})
}


