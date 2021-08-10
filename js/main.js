let myDate = new Date()
let day = myDate.getDate()
var month = myDate.getMonth()

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


let block_today = document.querySelector('.procedure-item.today ')
let block_twoday = document.querySelector('.procedure-item.twoday ')
let block_onemonth = document.querySelector('.procedure-item.onemonth ')
let block_twomonth = document.querySelector('.procedure-item.twomonth ')
let block_fourmonth = document.querySelector('.procedure-item.fourmonth ')
let block_sixmonth = document.querySelector('.procedure-item.sixmonth ')
let block_free = document.querySelector('.procedure-item.freelive ')

let block_today__title = document.querySelector('.procedure-item.today .procedure-item__title')
let block_twoday__title = document.querySelector('.procedure-item.twoday .procedure-item__title')
let block_onemonth__title = document.querySelector('.procedure-item.onemonth .procedure-item__title')
let block_twomonth__title = document.querySelector('.procedure-item.twomonth .procedure-item__title')
let block_fourmonth__title = document.querySelector('.procedure-item.fourmonth .procedure-item__title')
let block_sixmonth__title = document.querySelector('.procedure-item.sixmonth .procedure-item__title')
let block_free__title = document.querySelector('.procedure-item.freelive .procedure-item__title')

let btn = document.querySelector('.btn')

let procedure_block = document.querySelector('.procedure')

function getFullDate( qty ) {
	var date = new Date();
	let todayDate = date.addDays(qty)

	let day = todayDate.getDate()
	let month = todayDate.getMonth()

	switch(month) {
		case 0: 
			month = 'Января'
			break; 
	    case 1: 
	    	month = 'Февраля'
	    	break; 
	    case 2: 
	    	month = 'Марта'
	    	break; 
	    case 3: 
	    	month = 'Апреля'
	    	break; 
	    case 4: 
	    	month = 'Мая'
	    	break; 
	    case 5: 
	    	month = 'Июня'
	    	break; 
	    case 6: 
	    	month = 'Июля'
	    	break; 
	    case 7: 
	    	month = 'Августа'
	    	break; 
	    case 8: 
	    	month = 'Сентября'
	    	break; 
	    case 9: 
	    	month = 'Октября'
	    	break; 
	    case 10: 
	    	month = 'Ноября'
	    	break; 
	    case 11: 
	    	month = 'Декабря'
	    	break; 
	}

	return ` ${day} ${month}`
}







block_today__title.textContent = 'Сегодня'
block_twoday__title.textContent = getFullDate(2)
block_onemonth__title.textContent = getFullDate(30)
block_twomonth__title.textContent = getFullDate(60)
block_fourmonth__title.textContent = getFullDate(120)
block_sixmonth__title.textContent = getFullDate(180)
block_free__title.textContent = 'Свободная жизнь'

function addText(block, days) {
	block.textContent = getFullDate(days)
}


btn.addEventListener('click', (e) => {
	console.log('xyu')
	procedure_block.classList.add('start')
	startAnimate()
})

function startAnimate() {
	function todayLoad() {
		block_today.classList.add('loaded')
		setInterval(
		 ()=>{ block_today.style.color = "rgba(0,0,0,1)" }
		, 900);
		
	}
	function twodayLoad() {
		block_twoday.classList.add('loaded')
		setInterval(
		 ()=>{ block_twoday.style.color = "rgba(0,0,0,1)" }
		, 900);
	}
	function onemonthLoad() {
		block_onemonth.classList.add('loaded')
		setInterval(
		 ()=>{ block_onemonth.style.color = "rgba(0,0,0,1)" }
		, 900);
	}
	function twomonthLoad() {
		block_twomonth.classList.add('loaded')
		setInterval(
		 ()=>{ block_twomonth.style.color = "rgba(0,0,0,1)" }
		, 900);
	}
	function fourmonthLoad() {
		block_fourmonth.classList.add('loaded')
		setInterval(
		 ()=>{ block_fourmonth.style.color = "rgba(0,0,0,1)" }
		, 900);
	}
	function sixmonthLoad() {
		block_sixmonth.classList.add('loaded')
		setInterval(
		 ()=>{ block_sixmonth.style.color = "rgba(0,0,0,1)" }
		, 900);
	}
	function freeliveLoad() {
		block_free.classList.add('loaded')
		setInterval(
		 ()=>{ block_free.style.color = "rgba(0,0,0,1)" ; }
		, 900);
	}
	setTimeout(todayLoad, 300)
	setTimeout(twodayLoad, 1100)
	setTimeout(onemonthLoad, 2000)
	setTimeout(twomonthLoad, 2900)
	setTimeout(fourmonthLoad, 3800)
	setTimeout(sixmonthLoad, 4700)
	setTimeout(freeliveLoad, 5600)
}