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
    //  Make the array of all the available categories:
    const arr = ['movie', 'tv'];

    //  Determine the loop condition to keep calling the function:
    let success = false;

    while (!success) {
        try {
            //  Pick a random category and generate a random ID:
            const category = arr[Math.floor(Math.random() * arr.length)];
            const latestID = await axios.get(`https://api.themoviedb.org/3/${category}/latest?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`);
            const randomID = Math.floor((Math.random() * latestID.data.id) + 1);

            //  Request the information from the API:
            const requestLink = `https://api.themoviedb.org/3/${category}/${randomID}?api_key=587f7613fd27cf7a55e08375dbfd8ad6&language=en-US`;
            const tmdb = await axios.get(requestLink);

            if (tmdb.status === 200 && tmdb.data.adult === false) {
                success = true;

                //  Update HTML:
                if (category === 'movie') {
                    msTitle.innerText = `"${tmdb.data.title}"`;
                    msLength.innerHTML = `<b>Length:</b> ${tmdb.data.runtime} min.`;
                    msDate.innerHTML = `<b>Released:</b> ${tmdb.data.release_date}`;
                }
                else if (category === 'tv') {
                    msTitle.innerText = `"${tmdb.data.name}"`;
                    msLength.innerHTML = `<b>Length:</b> ${tmdb.data.episode_run_time} min.`;
                    msDate.innerHTML = `<b>Released:</b> ${tmdb.data.first_air_date}`;
                }

                if (tmdb.data.poster_path === null) {
                    msPoster.src = "https://www.cinemahalls.com/wp-content/uploads/2019/10/Picture-Not-Available-1.jpg";
                } else {
                    msPoster.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${tmdb.data.poster_path}`;
                }

                msLink.href = `https://www.themoviedb.org/movie/${randomID}`;
                msDesc.innerHTML = `<b>Summary:</b> "${tmdb.data.overview}"`;
                msLang.innerHTML = `<b>Language:</b> ${tmdb.data.spoken_languages[0].english_name}`;
                msGenre.innerHTML = `<b>Genre:</b> ${tmdb.data.genres[0].name}`;
                console.log(`Category: ${category} and ID: ${randomID}`);

                break;
            }
            else {
                console.log(`HTTP status code: ${tmdb.status}`);
            }
        }

        catch (err) {
            console.log(err);
        }
    }
}

msBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randMS();
})

// **************** BOOK ****************

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
    //  Determine the loop condition to keep calling the function:
    let success = false;

    while (!success) {
        try {
            //  Generate a random ID:
            const randID = Math.floor((Math.random() * 35000000) + 10000000);
            const olID = `OLID:OL${randID}M`;

            //  Request the information from the API:
            const requestLink = `https://openlibrary.org/api/books?bibkeys=${olID}&format=json&jscmd=data`;
            const oldb = await axios.get(requestLink);

            if (oldb.status === 200) {
                success = true;

                //  Update HTML:
                if (oldb.data[olID].cover === undefined || oldb.data[olID].cover.large === undefined) {
                    bPoster.src = "https://www.cinemahalls.com/wp-content/uploads/2019/10/Picture-Not-Available-1.jpg";
                } else {
                    bPoster.src = oldb.data[olID].cover.large;
                }

                bLink.href = `https://openlibrary.org/books/OL${randID}M/`;
                bTitle.innerText = `"${oldb.data[olID].title}"`;
                bDesc.innerHTML = `<b>Summary:</b> "Summary is currently unavailable. We are sorry about this inconvenience."`;
                bAuthor.innerHTML = `<b>Author:</b> ${oldb.data[olID].authors[0].name}`;
                bPubl.innerHTML = `<b>Publisher:</b> ${oldb.data[olID].publishers[0].name}`;
                bGenre.innerHTML = `<b>Genre / Subject:</b> ${oldb.data[olID].subjects[0].name}`;
                bLength.innerHTML = `<b>Pages:</b> ${oldb.data[olID].number_of_pages}`;
                console.log(`Open Library ID: OL${randID}M`);

                break;
            }
            else {
                //  Book not found error:
                console.log(`The book with Open Library ID: OL${randID}M was not found.`);
            }
        }
        catch (err) {
            //  Handle other errors
            console.log(err);
        }
    }
}

bBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    randB();
})

// **************** EXECUTE ON LOAD ****************

randMS();
randB();