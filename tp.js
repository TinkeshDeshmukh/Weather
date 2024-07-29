const apikey="3b4386a2954a63fce7bffc7078f54e09";
const input=document.getElementById("input")
const btn=document.getElementById("btn")
const temprature=document.getElementById("temprature")
const Cityname=document.getElementById("Cityname")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const rain =document.getElementById("rain")
const wrappercontainer=document.getElementById("wrappercontainer")
const Section2Container=document.getElementById("section2Container")
btn.addEventListener("click",()=>{
	const val=input.value;
	wrappercontainer.style.animation="increaser 1s ease-in-out"
	setTimeout(() => {
	wrappercontainer.style.height="550px"
	wrappercontainer.style.borderRadius="50%"
	}, 600);
	getweather(val)
})

async function getweather(val){
	try{
	const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}&units=metric`)
	if(!response.ok){
		throw new error("network is not ok or you have enterd invalid city name");
	}
	const data=await response.json();
	
	Section2Container.style.animation="entry 1s ease-in-out 1"
	temprature.textContent=`${Math.round(data.main.temp)}°C`
	Cityname.textContent=data.name;
	humidity.textContent=` Humidity:${data.main.humidity}%`;
	wind.textContent=`WindSpeed:${data.wind.speed}km/h `;
	rain.textContent=data.weather[0].description
	console.log(data.weather[0].description);

	
} 
catch(err){
	alert("May be you have enterd invalid city or remained city name empty ")	
}
}