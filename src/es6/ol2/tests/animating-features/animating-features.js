import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button";
import {BsFps} from "../../../bs/bs-fps/bs-fps";
import {$, Vue} from "../../../libs";
import {openStreetMapLayer} from "../../layers/openStreetMapLayer";
import {imageVectorLayer} from "../../layers/imageVectorLayer";

var EPSG_4326 = new OpenLayers.Projection("EPSG:4326");
var EPSG_3857 = new OpenLayers.Projection("EPSG:3857");

export var AnimatingFeatures = Vue.extend({
    template: require("./animating-features.hbs"),

    data: function () {
        return {
            newAnimations: 100,
            currentAnimations: 0,
            map: {
                width: "100%",
                height: "300px",
                renderer: ["Canvas"],
                layers: [openStreetMapLayer()],
                zoom: 2
            }
        }
    },

    created: function () {
        this.geoms = [];
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
            var lat, lon, lonLat, geom, feature, features = [];

            for (var i = 0; i < this.newAnimations; i++) {
                lat = Math.random() * 174 - 87;
                lon = Math.random() * 360 - 180;

                lonLat = new OpenLayers.LonLat(lon, lat).transform(EPSG_4326, EPSG_3857);

                geom = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);

                feature = new OpenLayers.Feature.Vector(geom, null, {
                    externalGraphic: "data/icon.png",
                    graphicWidth: 20,
                    graphicHeight: 20,
                    fillOpacity: 1
                });
                features.push(feature);
                this.geoms.push(geom);
            }
            this.vectorLayer.addFeatures(features);
            this.currentAnimations += this.newAnimations;
        },

        tick: function () {
            this.geoms.forEach(function (geom) {
                geom.move(2000, 2000);
            });
            this.vectorLayer.redraw();
        }
    }
});