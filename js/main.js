// Select DOM elements
const mapDiv = document.querySelector('.map');
let coord = [-74.5, 40];
// Mapbox function
function mapBoxFn (coord){ 
    let map = new mapboxgl.Map({
    container: mapDiv, // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coord, // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
    // Popup
    let popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(coord)
    .setHTML('<h1>You are here!</h1>')
    .addTo(map);
};
// mapBoxFn(coord);

// Find user location
function userLocation (){
    try{
    // Get position fn
    function position (c){
        console.log(c.coords);
        let lat = c.coords.latitude;
        let lng = c.coords.longitude;
        let coords = [lng, lat];
        // Show map location
        mapBoxFn(coords);
    };
    // Error fn
    function error (err){
        alert(`ERROR(${err.code}): ${err.message}`);
    };

    // Navigator
     navigator.geolocation.getCurrentPosition(position, error);

    }catch(error){
        alert(error);
    }
};
userLocation();