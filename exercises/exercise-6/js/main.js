const fetchSongs = async () => {
    const response = await fetch('https://api.airtable.com/v0/appLXR09f8EqbBV79/Table%201?api_key=keyul7nEZff6Uw7lV').then(data => data.json());

    console.log(response);

    const songsContainer = document.getElementById('songs-container');

    response.records.forEach(songs => {
        console.log(songs.fields)
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const spotifyUrlEl = document.createElement('div');
        const releasedateEl = document.createElement('div');

        titleEl.innerHTML = songs.fields.Title;
        genreEl.innerHTML = songs.fields.Genre;
        articleEl.appendChild(titleEl);

        songsContainer.appendChild(articleEl);
    });
};

fetchSongs();