// **************** ACTIVITY ****************

const actDesc = document.querySelector('#actDesc');
const randActBtn = document.querySelector('#actBtn');

const randAct = async () => {
    let act = await axios.get("http://www.boredapi.com/api/activity/");
    actDesc.innerText = `"${act.data.activity}"`;
}

randActBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randAct();
})

// **************** MOVIE / SHOW ****************

const msPoster = document.querySelector('#msPoster');
const msLink = document.querySelector('#msLink');
const msTitle = document.querySelector('#msTitle');
const msLang = document.querySelector('#msLang');
const msLength = document.querySelector('#msLength');
const msDate = document.querySelector('#msDate');
const msRating = document.querySelector('#msRating');
const msDesc = document.querySelector('#msDesc');
const msBtn = document.querySelector('#msBtn')

const randMS = async () => {
    try {
        let latest = await axios.get('https://api.themoviedb.org/3/movie/latest?api_key=587f7613fd27cf7a55e08375dbfd8ad6');
        let randID = Math.floor((Math.random() * latest.data.id) + 1);
        let tmdb = await axios.get(`https://api.themoviedb.org/3/movie/${randID}?api_key=587f7613fd27cf7a55e08375dbfd8ad6`);
        let imdbID = tmdb.data.imdb_id;
        if (tmdb.data.success === false) {
            randMS();
        }
        else {
            msLink.href = `https://www.imdb.com/title/${imdbID}/`;
            msPoster.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${tmdb.data.poster_path}`;
            msTitle.innerText = `"${tmdb.data.title}"`;
            msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
            msLang.innerHTML = `<b>Language:</b> ${tmdb.data.original_language}`;
            msLength.innerHTML = `<b>Length:</b> ${tmdb.data.runtime} min.`;
            msDate.innerHTML = `<b>Released:</b> ${tmdb.data.release_date}`;
            msRating.innerHTML = `<b>TMDB Rating:</b> ${tmdb.data.vote_average}/10`;
            console.log(randID);
        }
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

randAct();
randMS();