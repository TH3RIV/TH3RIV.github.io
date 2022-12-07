// **************** MOVIE / SHOW ****************

const msPoster = document.querySelector('#msPoster');
const msLink = document.querySelector('#msLink');
const msTitle = document.querySelector('#msTitle');
const msLang = document.querySelector('#msLang');
const msLength = document.querySelector('#msLength');
const msDate = document.querySelector('#msDate');
const msGenre = document.querySelector('#msGenre');
const msDesc = document.querySelector('#msDesc');
const msBtn = document.querySelector('#msBtn');

const randMS = async () => {
    let arr = ['movie', 'tv'];

    try {
        let indexRand = Math.floor(Math.random() * arr.length);
        let index = arr[indexRand];
        let latest = await axios.get(`https://api.themoviedb.org/3/${index}/latest?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);
        let randID = Math.floor((Math.random() * latest.data.id) + 1);
        let tmdb = await axios.get(`https://api.themoviedb.org/3/${index}/${randID}?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);

        if (index === 'movie') {
            msLink.href = `https://www.themoviedb.org/movie/${randID}-${tmdb.data.original_title}`;
            msPoster.src = `https://image.tmdb.org/t/p/w500${tmdb.data.poster_path}`;
            msTitle.innerText = `"${tmdb.data.title}"`;
            msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
            msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
            msLength.innerHTML = `<b>Length:</b> ${tmdb.data.runtime} min.`;
            msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
            msDate.innerHTML = `<b>Released:</b> ${tmdb.data.release_date}`;
            console.log(`Index: ${index} and ID: ${randID}`);
        }
        else if (index === 'tv') {
            msLink.href = `https://www.themoviedb.org/tv/${randID}-${tmdb.data.original_title}`;
            msPoster.src = `https://image.tmdb.org/t/p/w500${tmdb.data.poster_path}`;
            msTitle.innerText = `"${tmdb.data.original_name}"`;
            msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
            msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
            msLength.innerHTML = `<b>Length:</b> ${tmdb.data.episode_run_time} min.`;
            msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
            msDate.innerHTML = `<b>Released:</b> ${tmdb.data.first_air_date}`;
            console.log(`Index: ${index} and ID: ${randID}`);
        }

    }
    catch (err) {
        randMS();
        console.log(err);
    }
}

msBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randMS();
})

// **************** EXECUTE ON LOAD ****************

randMS();