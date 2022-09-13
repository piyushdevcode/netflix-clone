export const APIKEY = process.env.REACT_APP_API_KEY

export const BASEURL = "https://api.themoviedb.org/3/"
export const IMGBASEURL = "https://image.tmdb.org/t/p/original"
export const netflixOriginals = `discover/tv/?api_key=${APIKEY}&with_network=123`

// Every Movie Ele has Trailer button -> Trailer button shows the modal and plays the given trailer id video 
// -> on modal hide video should pause