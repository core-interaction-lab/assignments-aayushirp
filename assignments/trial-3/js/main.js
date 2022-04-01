
const airtableUrl = `https://api.airtable.com/v0/appqlAk4rdVEwSycH/Table%201?api_key=keyul7nEZff6Uw7lV`

const fetchSongs = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject = {
        title: 'songs',
        releaseEvents_date: '334824'
    }

    const myArray = ['songs', 348927, 'didai'];

    const isReleased = true;

    console.log( myObject.release_date )
    console.log(myArray[2]);

    const container = document.getElementById ('songs-container');

    response.records.forEach((songs) => {
        console.log(songs);
        if (songs.fields.Image) {
        console.log(songs.fields.Image[0].url);
        const Image_img = document.createElement('img');
        // Image_img.src = songs.fields.Image[0].url;
        Image_img.setAttribute('src', songs.fields.Image[0].url);
        container.append(Image_img);
        }
        if (songs.fields.release_date); {
            console.log(songs.fields.release_date);
        }
        
        if(songs.fields.description) {
            const descriptionEl = document.createElement('p');
            description.innerHTML = songs.fields.description;
            container.append(descriptionEl);
        }
    });
};

fetchSongs();