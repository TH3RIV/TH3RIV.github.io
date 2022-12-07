// **************** MOVIE / SHOW ****************

const msPoster = document.querySelector('#msPoster');
const msLink = document.querySelector('#msLink');
const msTitle = document.querySelector('#msTitle');
const msLang = document.querySelector('#msLang');
const msLength = document.querySelector('#msLength');
const msDate = document.querySelector('#msDate');
const msGenre = document.querySelector('#msGenre');
const msDesc = document.querySelector('#msDesc');
const msBtn = document.querySelector('#msBtn')

const randMS = async () => {
    try {
        let latest = await axios.get('https://api.themoviedb.org/3/movie/latest?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US');
        let randID = Math.floor((Math.random() * latest.data.id) + 1);
        let tmdb = await axios.get(`https://api.themoviedb.org/3/movie/${randID}?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);
        let imdbID = tmdb.data.imdb_id;

        msLink.href = `https://www.imdb.com/title/${imdbID}/`;
        msPoster.src = `https://image.tmdb.org/t/p/w500${tmdb.data.poster_path}`;
        msTitle.innerText = `"${tmdb.data.title}"`;
        msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
        msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
        msLength.innerHTML = `<b>Length:</b> ${tmdb.data.runtime} min.`;
        msDate.innerHTML = `<b>Released:</b> ${tmdb.data.release_date}`;
        msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
        console.log(randID);
    }
    catch (err) {
        msDesc.innerHTML = `Unexpected error, please try again.`;
        console.log(err);
    }
}

msBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randMS();
})

// **************** EXECUTE ON LOAD ****************

randMS();