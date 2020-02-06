  require([
      "esri/Map",
      "esri/views/SceneView"
    ], function(Map, SceneView) {

    var map = new Map({
      basemap: "topo-vector",
      ground: "world-elevation"  // show elevation
    });

    var view = new SceneView({
      container: "viewDiv",
      map: map,
      camera: {
        position: {  // observation point
          x: -105.043833,
          y: 38.841705,
          z:3500 // altitude in meters
        },
        tilt: 75  // perspective in degrees
      }
    });
  });