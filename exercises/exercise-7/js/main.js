const fetchSongs = async () => {
    const response = await fetch('https://api.airtable.com/v0/appLXR09f8EqbBV79/Table%201?api_key=keyul7nEZff6Uw7lV').then(data => data.json());

    console.log(response);

    const songsContainer = document.getElementById('songs-container');

    response.records.forEach(songs => {
        console.log(songs.fields)
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const spotifyUrlEl = document.createElement('a');
        const releasedateEl = document.createElement('div');

        titleEl.innerHTML = songs.fields.Title;
        genreEl.innerHTML = songs.fields.Genre;

        spotifyUrlEl.href = songs.fields.Spotify_url;
        spotifyUrlEl.target = "_blank";
        spotifyUrlEl.classList.add('spotify-link');

        spotifyUrlEl.innerHTML = "Spotify Link";
        releasedateEl.innerHTML = songs.fields.Release_Date;

        articleEl.append(titleEl, genreEl, spotifyUrlEl, releasedateEl);

        songsContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.spotify-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-$(index + 1)`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        });

        link.addEventListener('mouseout', (evt) => {
            link.style.color = "linkColor";
        });
    });

};


fetchSongs();