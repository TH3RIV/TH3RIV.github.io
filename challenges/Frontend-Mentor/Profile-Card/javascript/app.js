const age = document.querySelector('#age');
const city = document.querySelector('.city');
const follow = document.querySelector('#followers');
const like = document.querySelector('#likes');
const photo = document.querySelector('#photos');

function randomizer() {
    let cities = ["London, GB", "Paris, FR", "Berlin, DE", "Milan, IT", "Tokyo, JP", "Vilnius, LT",
        "Madrid, ES", "Belgrad, SR", "Kyiv, UA", "Bangkok, TH", "Rio De Janeiro, BR",
        "Doha, QA", "Dubai, AE", "Riga, LV", "Vienna, AT", "Beijing, CN", "Oslo, NO"];
    let randCity = cities[Math.floor(Math.random() * cities.length)];
    let randAge = Math.floor(Math.random() * 20) + 20;
    let randNumber = Math.floor(Math.random() * 1000);

    age.innerText = `${randAge}`;
    city.innerText = `${randCity}`;
    follow.innerText = `${Math.floor(randNumber * 0.33)}K`;
    like.innerText = `${Math.floor(randNumber * 0.74)}K`;
    photo.innerText = `${Math.floor(randNumber * 0.29)}`;
};

randomizer();
