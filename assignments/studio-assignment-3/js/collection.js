const db = {
    id: 'appoREwRng0gEiJqE',
    table: 'Soup-or-Salad?',
    apiKey: 'keyul7nEZff6Uw7lV'
  };
  
      const fetchMovies = async () => {
        const response = await fetch("https://api.airtable.com/v0/appoREwRng0gEiJqE/Table%201?api_key=keyul7nEZff6Uw7lV").then(data => data.json()); 
        console.log(response);
    
        const moviesContainer = document.getElementById('food-container');    
        response.records.forEach(movie => {

            const articleEl = document.createElement('article');
            const photoImg = document.createElement('img');

            photoImg.classList.add('image-styling');
    
            response.records.forEach((image) => {
                console.log(image);
                if(movie.fields.Image){
                    photoImg.src = movie.fields.Image[0].url;
                    
                    photoImg.style.width = '300px';
                }
            });   
            articleEl.append(photoImg);
            moviesContainer.appendChild(articleEl); 
     
        });

    
    };
    
    fetchMovies();
    
