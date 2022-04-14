const db = {
    id: 'appLXR09f8EqbBV79',
    table: 'Songs',
    apiKey: 'keyul7nEZff6Uw7lV'
};

const airtableUrl = `https://api.airtable.com/v0/appLXR09f8EqbBV79/Table%201?api_key=keyul7nEZff6Uw7lV`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchSongs = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records;
};

const buildSlideshow = (songs) => {
    console.log(songs);
    console.log(buildSlide(songs[0]));


    const firstSongs = buildSlide(songs[0]);
    console.log(firstSongs)
    slideshowContainer.append(firstSongs);

    let currentSongs = 0;

    prevButton.addEventListener('click', () => {
        if (currentSongs === 0) {
            currentSongs = songs.length - 1;
        } else {
            currentSongs = currentSongs - 1;
        }

        const songsRecord = songs[currentSongs];
        swapSlide(songsRecord);

    });

    nextButton.addEventListener('click', () => {
        if (currentSongs === songs.length - 1) {
            currentSongs = 0;
        } else {
            currentSongs = currentSongs + 1;
        }

        const songsRecord = songs[currentSongs];
        swapSlide(songsRecord);
    });
};

const swapSlide = (songsRecord) => {
    const slideEl = buildSlide(songsRecord);

    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
};

const buildSlide = (songs) => {
    const songsContainer = document.createElement('article');
    if (songs.fields.Song_Cover) {
        console.log(songs.fields.Song_Cover[0].url);
        const Image_img = document.createElement('img');
        Image_img.src = songs.fields.Song_Cover[0].url;
        Image_img.classList.add('image-img', 'dsfgghkvg');
        Image_img.id = 'image-img-id'
        songsContainer.append(Image_img);
        }
        if (songs.fields.release_date); {
            console.log(songs.fields.release_date);
        }
        
        if(songs.fields.Description) {
            const descriptionEl = document.createElement('p');
            descriptionEl.innerHTML = songs.fields.Description;
            songsContainer.append(descriptionEl);
        }
        return songsContainer;
};

fetchSongs();

