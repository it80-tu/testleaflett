      
const fetchData = async () => {
    const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
    const res = await fetch(url)
    const geoData = await res.json();

    initMap(geoData);
};

const fetchDataVotes = () => {
        fetch ('https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/kvaa/statfin_kvaa_pxt_12g3.px',
    {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery1)
    })
    .then (res => res.json())
    .then (data => {
        console.log(data)
    });
};

const initMap = (data) => {
    let map = L.map('map', {
        minZoom: -3
    })

    let col = '#723532'
    let KOKcol = "red"
    let SDPcol = "yellow"
    let KESKcol = "pink"
    let PScol = "orange"
    let VIHRcol = "grey"
    let VAScol = "purple"
    let RKPcol = "white"
    let KDcol = "green"
    let LIIKEcol = "#472094"
    let KRIPcol = "#210855"
    let Femincol = "#389263"
    let Piratecol = "#862019"
    let SKPcol = "#109873"
    let EOPcol = "#560312"
    let Otherscol = "#674563"

    let geoJson = L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
            // console.log(feature)
        },
        style: function (feature) {
            console.log(feature.properties.name)
            return {color: col};
        }
    }).addTo(map)

    let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
    }).addTo(map);

    let google = L.tileLayer("https://{s}.google.com/vt/lyrs=s@221097413,traffic&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        minZoom: 2,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map)

    let baseMaps = {
        "OpenStreetMap": osm,
        "Google Maps": google
    }

    let overlayMaps = {
        "LUT": geoJson
    }

    let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


    map.fitBounds(geoJson.getBounds())

}

fetchData();
fetchDataVotes();
  }
}
  }
}
  }
}
    }
  }
}
  }
