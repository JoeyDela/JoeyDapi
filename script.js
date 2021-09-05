class Fetch {
    async getCurrent(input) {
      const myKey = "1c8e39f651140497c07f345a9a60af7d";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }