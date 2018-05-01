var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.transform([36.8219, -1.2921], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
    })
});



var Lake = new ol.layer.Tile({
        visible: true,
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/cite/wms',
          params: {'FORMAT': 'image/png', 
                   'VERSION': '1.1.1',
                   tiled: true,
                STYLES: '',
                LAYERS: 'cite:Lake',
             tilesOrigin: 33.95495871617866 + "," + -0.4254190030843574
          }
        })
      });
	  

var vector = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        projection: 'EPSG:4326',
    //crossOrigin: 'anonymous',
        url: 'http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:Lake&maxFeatures=50&outputFormat=application%2Fjson'
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 2.0)',
            width: 2
        })
    })
});
	  map.addLayer(Lake);
    map.addLayer(vector);
/*var geology = new ol.layer.Tile({
        visible: true,
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/cite/wms',
          params: {'FORMAT': 'image/png', 
                   'VERSION': '1.1.1',
                   tiled: true,
                STYLES: '',
                LAYERS: 'cite:geology',
             tilesOrigin: -63657.84135396697 + "," + 9481316.83659178
          }
        })
      });
	  

/*var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: function(extent) {
          return 'http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:County&maxFeatures=50&outputFormat=application%2Fjson';
        },
        //strategy: ol.loadingstrategy.bbox
		strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
  }))
      });


var vector = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 1.0)',
            width: 2
          })
        })
*/ 	  
//map.addLayer(counties);
//map.addLayer(geology);
/*
var vector = new ol.layer.Vector({
    source: new ol.source.GeoJSON({
        projection: 'EPSG:4210',
		//crossOrigin: 'anonymous',
        url: 'http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:County&maxFeatures=50&outputFormat=application%2Fjson'
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 2.0)',
            width: 2
        })
    })
});

//map.addLayer(vector);
//map.addLayer(geology);
map.addLayer(vector);
console.log(vector)*/