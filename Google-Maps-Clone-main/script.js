mapboxgl.accessToken =
        'pk.eyJ1Ijoicml0enoxOTk5IiwiYSI6ImNrczliZ3lxdzFpdHAyb3MzYWNoN2RkdTcifQ.yzvU748HA9tBDhDyS5KZ1w';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, 
{enableHighAccuracy: true});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom: 15,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  
  map.addControl(directions, 'top-left');
}

