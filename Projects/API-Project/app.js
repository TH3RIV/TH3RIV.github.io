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
        let ctgIndex = Math.floor(Math.random() * arr.length);
        let ctg = arr[ctgIndex];
        let latest = await axios.get(`https://api.themoviedb.org/3/${ctg}/latest?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);
        let randID = Math.floor((Math.random() * latest.data.id) + 1);
        let tmdb = await axios.get(`https://api.themoviedb.org/3/${ctg}/${randID}?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);

        if (ctg === 'movie') {
            msLink.href = `https://www.themoviedb.org/movie/${randID}-${tmdb.data.original_title}`;
            msPoster.src = `https://image.tmdb.org/t/p/w500${tmdb.data.poster_path}`;
            msTitle.innerText = `"${tmdb.data.title}"`;
            msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
            msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
            msLength.innerHTML = `<b>Length:</b> ${tmdb.data.runtime} min.`;
            msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
            msDate.innerHTML = `<b>Released:</b> ${tmdb.data.release_date}`;
            console.log(`Category: ${ctg} and ID: ${randID}`);
        }
        else if (ctg === 'tv') {
            msLink.href = `https://www.themoviedb.org/tv/${randID}-${tmdb.data.original_title}`;
            msPoster.src = `https://image.tmdb.org/t/p/w500${tmdb.data.poster_path}`;
            msTitle.innerText = `"${tmdb.data.name}"`;
            msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
            msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
            msLength.innerHTML = `<b>Length:</b> ${tmdb.data.episode_run_time} min.`;
            msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
            msDate.innerHTML = `<b>Released:</b> ${tmdb.data.first_air_date}`;
            console.log(`Category: ${ctg} and ID: ${randID}`);
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

// **************** MOVIE / SHOW ****************

const bPoster = document.querySelector('#bPoster');
const bLink = document.querySelector('#bLink');
const bTitle = document.querySelector('#bTitle');
const bDesc = document.querySelector('#bDesc');
const bAuthor = document.querySelector('#bAuthor');
const bPubl = document.querySelector('#bPubl');
const bGenre = document.querySelector('#bGenre');
const bLength = document.querySelector('#bLength');
const bBtn = document.querySelector('#bBtn');

const randB = async () => {
    let randID = Math.floor((Math.random() * 35000000) + 1000000);
    let olID = `OLID:OL${randID}M`;
    let oldb = await axios.get(`https://openlibrary.org/api/books?bibkeys=${olID}&format=json&jscmd=data`);

    try {
        bLink.href = `https://openlibrary.org/books/OL${randID}M/`;
        bPoster.src = oldb.data[olID].cover.large;
        bTitle.innerText = `"${oldb.data[olID].title}"`;
        // bDesc.innerHTML = `<b>First sentence:</b> "${oldb.data[olID].excerpts[0].text}"`;
        bAuthor.innerHTML = `<b>Author:</b> ${oldb.data[olID].authors[0].name}`;
        bPubl.innerHTML = `<b>Publisher:</b> ${oldb.data[olID].publishers[0].name}`;
        bGenre.innerHTML = `<b>Genre / Subject:</b> ${oldb.data[olID].subjects[0].name}`;
        bLength.innerHTML = `<b>Pages:</b> ${oldb.data[olID].number_of_pages}`;
        console.log(`Open Library ID: ${olID}`);
    }
    catch (err) {
        randB()
        console.log(err);
    }
}

bBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randB();
})

// **************** EXECUTE ON LOAD ****************

randMS();
randB();