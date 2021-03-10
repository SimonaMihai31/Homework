/*SEARCH BY USING A CITY NAME */
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
// const apiKey = "69518b1f8f16c35f8705550dc4161056";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //athens,gr
      if (inputVal.includes(",")) {
        //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el.querySelector(".city-name span").textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well `;
      form.reset();
      input.focus();
      list.innerHTML = "";
      return;
    }
  }
  
  //ajax here for input city in input field
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${inputVal}`;

  //ajax here for defined city-Pitesti
  // const url = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=Pitesti`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather,} = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;
      //// api cu poze de pe platforma care nu imi merge 
      // const icon = `http://openweathermap.org/img/w/sufix.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        <h5> Humidity : ${main.humidity} </h5>
        <h5> Pressure : ${main.pressure}</h5>
        <h5> Temp Min : ${Math.round(main.temp_min)}<sup>°C</sup></h5>
        <h5> Temp Max : ${Math.round(main.temp_max)}<sup>°C</sup></h5>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please enter a valid city";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

///////
// /// ex.2-Prognoza meteo urmatoarele 6 zile, pentru fiecare zi, prognoza va fi afisata din 3 in 3 ore, Pentru fiecare prognoza afisata, afisati si o imagine ce reprezinta interpretarea prognozei pentru fiecare interval orar

const prognozaBtn = document.getElementById('prognozaBtn');
const prognozaDiv = document.getElementById('prognozaDiv');
// console.log(prognozaBtn,prognozaDiv);
const URL_FORECAST_WEATHER =
	'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=';

prognozaBtn.addEventListener('click', showForecast);

function showForecast() {
  if (input.value === "") {
    msg.textContent = "Please enter a valid city";
  }
	//step 2 - create final endpoint
	let finalEndPoint = URL_FORECAST_WEATHER + input.value;
	console.log(finalEndPoint);

	// fetch from endpoint
	fetch(finalEndPoint)
		.then((res) => res.json())
		.then((data) => {
      console.log(data.city.name);
			console.log(data.list[0].dt_txt.split(' ')[0]);
			console.log(data.list[0].dt_txt.split(' ')[1]);
			console.log(data.list[0].main.temp);
			console.log(data.list[0].weather[0].description);

			var numarDePrognozeZiuaCurenta = 0;
			for (let i = 0; i < data.list.length; i++) {
				if (
					data.list[i].dt_txt.split(' ')[0] !==
					data.list[i + 1].dt_txt.split(' ')[0]
				) {
					numarDePrognozeZiuaCurenta = i + 1;
					break;
				}
			}
			console.log(numarDePrognozeZiuaCurenta);
			prognozaDiv.innerHTML = '';
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				0,
				numarDePrognozeZiuaCurenta - 1
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta,
				numarDePrognozeZiuaCurenta + 7
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 8,
				numarDePrognozeZiuaCurenta + 15
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 16,
				numarDePrognozeZiuaCurenta + 23
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 24,
				numarDePrognozeZiuaCurenta + 31
			);
			createPrognozaBoxDiv(
				data,
				prognozaDiv,
				numarDePrognozeZiuaCurenta + 32,
				data.list.length - 1
			);
		});
}

//step 3 - create div
function createPrognozaHoursOutput(name,day, hour, temp,description) {
	let output = `
   <div class="prognozaHours">
     <h2 class="city-name" data-name="${name}">
         <span>${name}</span> 
     </h2>
      <h5 class="date"> ${day}</h5>
      <p class="hour"> ${hour}</p>
      <p class="temp"> ${Math.round(temp)}<sup>°C</sup></p>
      <p class="desc"> ${description}</p>
   </div>
   `;
  input.value="";
	return output;
}

function createPrognozaBoxDiv(data, divElement, startIndex, endIndex) {
	let prognozaBox = document.createElement('div');
	prognozaBox.classList.add('prognozaBox');
	for (let i = startIndex; i <= endIndex; i++) {
		prognozaBox.innerHTML += createPrognozaHoursOutput(
      data.city.name,
			data.list[i].dt_txt.split(' ')[0],
			data.list[i].dt_txt.split(' ')[1],
			data.list[i].main.temp,
			data.list[i].weather[0].description
		);
	}
	divElement.appendChild(prognozaBox);
}



