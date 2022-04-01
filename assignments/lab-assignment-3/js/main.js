const fetchSongs = async () => {
    const response = await fetch('https://api.airtable.com/v0/appLXR09f8EqbBV79/Table%201?api_key=keyul7nEZff6Uw7lV').then(data => data.json());

    console.log(response);

    const songsContainer = document.getElementById('songs-container');

    response.records.forEach(songs => {
        console.log(songs.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const releasedateEl = document.createElement('div');
        const genreEl = document.createElement('div')
        const spotifyUrlEl = document.createElement('a');
        const songcoverEl = document.createElement('div');
        const descriptionEl = document.createElement('div');

        var song = document.createElement("img");
        song.src = "https://dl.airtable.com/.attachmentThumbnails/73a5b8ffacd06ce831530e2089c29498/db3662e3";
        song.style.width = '300px';

        var div = document.getElementById("songs-container");
    

        titleEl.innerHTML = songs.fields.Title;
        titleEl.classList.add('title');

        releasedateEl.innerHTML = songs.fields.Release_Date;
        releasedateEl.classList.add('release-date');

        genreEl.innerHTML = songs.fields.Genre;
        genreEl.classList.add('genre');

        descriptionEl.innerHTML = songs.fields.Description;
        descriptionEl.classList.add('description');

        songcoverEl.innerHTML = songs.fields.Song_Cover;
        songcoverEl.classList.add('song-cover');

        spotifyUrlEl.href = songs.fields.Spotify_url;
        spotifyUrlEl.target = "_blank";
        spotifyUrlEl.classList.add('spotify-link');
        spotifyUrlEl.innerHTML = "Spotify Link";

        articleEl.append(titleEl, genreEl, spotifyUrlEl, releasedateEl, descriptionEl, song);

        songsContainer.appendChild(articleEl);
    });

    const linkTags = document.querySelectorAll('.spotify-link');
    console.log(linkTags);

    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = 'my-link-$(index + 1)';
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "lightgreen";
        });

        link.addEventListener('mouseout', (evt) => {
            link.style.color = "white";
        });
    });
};

fetchSongs();