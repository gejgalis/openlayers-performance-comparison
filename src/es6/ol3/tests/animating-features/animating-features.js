import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button";
import {BsFps} from "../../../bs/bs-fps/bs-fps";
import {$, Vue} from "../../../libs";
import {openStreetMapLayer} from "../../layers/openStreetMapLayer";
import {imageVectorLayer} from "../../layers/imageVectorLayer";

export var AnimatingFeatures = Vue.extend({
    template: require("./animating-features.hbs"),

    data: function () {
        return {
            newAnimations: 100,
            currentAnimations: 0,
            map: {
                width: "100%",
                height: "300px",
                renderer: ["canvas"],
                layers: [openStreetMapLayer()],
                zoom: 2
            }
        }
    },

    created: function () {
        this.geoms = [];
        this.constraints = {
            step: 10000,
            maxLonLat: ol.proj.transform([180 - 1, 174 - 87 -1], 'EPSG:4326', 'EPSG:3857'),
            minLonLat: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
            latDirection: 1,
            lonDirection: 1
        };
        this.imageStyle = new ol.style.Icon(({
            rotation: 45  * (Math.PI/180),
            src: 'data/icon.png'
        }));

        this.vectorLayer = imageVectorLayer();
        this.map.layers.push(this.vectorLayer);

        setInterval(this.tick.bind(this), 200);
    },

    filters: {
        seconds: function (milliseconds) {
            var seconds = Math.round(milliseconds) / 1000;
            return "" + seconds;
        }
    },

    methods: {
        addAnimations: function () {
            for (var i = 0; i < this.newAnimations; i++) {
                this.addAnimation(i);
            }
            this.currentAnimations += this.newAnimations;
        },

        addAnimation: function () {
            var lat, lon, geom, feature;

            lat = Math.random() * 174 - 87;
            lon = Math.random() * 360 - 180;

            geom = new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));

            feature = new ol.Feature({
                geometry: geom
            });

            feature.setStyle(new ol.style.Style({
                image: this.imageStyle
            }));

            this.geoms.push(geom);
            this.vectorLayer.getSource().getSource().addFeature(feature);
        },

        tick: function () {
            var c = this.constraints;
            this.imageStyle.setRotation(this.imageStyle.getRotation() + (Math.PI/180));
            this.geoms.forEach(function (geom) {
                var lonLat = geom.getCoordinates(),
                    lon = lonLat[0],
                    lat = lonLat[1];

                lat += c.step * c.latDirection;
                lon += c.step * c.lonDirection;

                if (lat < c.minLonLat[1]) {
                    c.latDirection = 1;
                } else if (lat > c.maxLonLat[1]) {
                    c.latDirection = -1;
                }

                if (lon < c.minLonLat[0]) {
                    c.lonDirection = 1;
                } else if (lon > c.maxLonLat[0]) {
                    c.lonDirection = -1;
                }

                geom.setCoordinates([lon, lat]);
            });
        }
    }
});