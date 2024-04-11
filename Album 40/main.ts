// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
	let album: {artist: string, tital: string, tracks?: number} = {
		artist: artist_name,
		tital: album_title,
	};

	if (tracks !== undefined){
		album.tracks = tracks;
	}

    return album;

}

// Calling three times functions and Creating 3 variables with different values

let album1 = make_album("Faryal", "Album tital 1");

let album2 = make_album("Zainab", "Album tital 2");

// Calling a make_album function with third parameter
let album3 = make_album("Raima", "Album tital 3", 5);

// Print values of our object created my function

console.log(album1);
console.log(album2);
console.log(album3);




