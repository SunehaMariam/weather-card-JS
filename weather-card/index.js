var weather = prompt("Enter your weather (hot/cold)");
var summer = "hot";
var winter = "cold";


if (weather === "hot") {
    document.write(`
       <div class="container">
    <div class="card">
<div class="container">
    <div class="search-bar">
            <input type="text" class="form-control" placeholder="Search location....." aria-label="Search">
    </div>
</div>
        <img src="https://www.awxcdn.com/adc-assets/images/weathericons/2.svg
" class="card-img-top" alt="Hot Weather">
        <div class="card-body">
            <h3 class="card-title text-center">Karachi,Sindh</h3>
                 <h2 class="text-center">35°C</h2>
            <p class="card-text text-center"><i class="fas fa-glass-water"></i>Stay cool and hydrated!</p>
        </div>
    </div>
</div>

    `);
} else if (weather === "cold") {
    document.write(`
<div class="container">
    <div class="card">
   <div class="container">
    <div class="search-bar">
            <input type="text" class="form-control" placeholder="Search location....." aria-label="Search">
    </div>
</div>
        <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png
" class="image" alt="cold Weather">
        <div class="card-body">
            <h3 class="card-title text-center">Karachi,Sindh</h3>
<h2 class="text-center">-5°C</h2>
       <p class="card-text text-center"><i class="fa-solid fa-snowflake"></i> Stay warm!</p>
            
        </div>
    </div>
</div>
    `);
} else {
    document.write("Invalid input");
}

