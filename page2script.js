const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76e2f3a6e5msha9d6055dd5051b9p1fee85jsn7d2265ba6bcb',
		'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
	}
};

let city = "hyderabad";
let url = 'https://aerisweather1.p.rapidapi.com/forecasts/'+city+',in';

fetch(url, options)
	.then(response => response.json())
	.then(response => {
        document.querySelector(".pres").innerText = response.response[0].periods[0].pressureIN;
        console.log(response);
        console.log(response.response[0].periods[0].pressureIN);
    })
	.catch(err => console.error(err));

