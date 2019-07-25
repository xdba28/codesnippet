function formatTime(d){
	let Hours = d.getHours();
	let Minutes = d.getMinutes();
	let [M, D, Y, H, Min, Meredian] = [
		d.getMonth(),
		d.getDate(),
		d.getFullYear(),
		Hours <= 12 ? (Hours !== 10 && Hours !== 11 && Hours !== 12) ? Hours === 0 ? 12 : `0${Hours}` : Hours : (Hours - 12) < 10 ? `0${Hours - 12}` : Hours - 12,
		Minutes < 10 ? `0${Minutes}` : Minutes,
		Hours <= 11 ? "AM" : "PM" 
	];
	return `${M}/${D}/${Y} ${H}:${Min} ${Meredian}`;
}