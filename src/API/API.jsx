
const url = 'api.openweathermap.org/data/2.5/weather?';
const apiKey = '2e5660b01e0572c13d96b747b0d2555a';

 export  const  getData  = async (cityName) => {

     try{
     const data = await  fetch(url+`q=${cityName}&appid=${apiKey}`)
     const res = await data.json();
     return res;
  }catch(error){

      throw error;
  }
 }