function fetchTime() {
    const city = document.getElementById("my-input").value;
    
    axios.get(`http://api.aladhan.com/v1/timingsByCity?country=DZ&city=${city}`)
      .then(function (response) {
        // handle success
        console.log(response.data.data.timings.Fajr);  // Logs the API data to the console
        document.getElementById("Fajr").textContent=response.data.data.timings.Fajr;
        document.getElementById("Sunrise").textContent=response.data.data.timings.Sunrise;
        document.getElementById("Dhuhr").textContent=response.data.data.timings.Dhuhr;
        document.getElementById("Asr").textContent=response.data.data.timings.Asr;
        document.getElementById("Maghrib").textContent=response.data.data.timings.Maghrib;
        document.getElementById("Isha").textContent=response.data.data.timings.Isha;
        document.getElementById("my-location").textContent=document.getElementById("my-input").value;
        document.getElementById("my-date").textContent=response.data.data.date.readable;
        console.log(response.data.data.date.readable)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}
