import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button";
import {BsFps} from "../../../bs/bs-fps/bs-fps";
import {$, Vue} from "../../../libs";
import {openStreetMapLayer} from "../../layers/openStreetMapLayer";
import {imageVectorLayer} from "../../layers/imageVectorLayer";

export var VectorFeatures = Vue.extend({
    template: require("./vector-features.hbs"),

    data: function () {
        return {
            newFeaturesCount: 1000,
            currentFeatures: 0,
            renderTime: 0,
            layerClass: "OpenLayers.Layer.Vector",
            map: {
                width: "100%",
                height: "300px",
                renderer: ["Canvas"],
                layers: [openStreetMapLayer()],
                center: [2.1833, 41.3833],
                zoom: 2
            }
        }
    },

    created: function () {
        this.vectorLayer = imageVectorLayer();
        this.map.layers.push(this.vectorLayer);
    },

    filters: {
        seconds: function (milliseconds) {
            var seconds = Math.round(milliseconds) / 1000;
            return "" + seconds;
        }
    },

    methods: {
        addFeatures: function () {
            var i, lat, lon, point, feature, lonLat, circle,
                features = [],
                start = performance.now();

            var EPSG_4326 = new OpenLayers.Projection("EPSG:4326");
            var EPSG_3857 = new OpenLayers.Projection("EPSG:3857");

            var newFeaturesCount = this.newFeaturesCount;
            for (i = 0; i < newFeaturesCount; i++) {
                lat = Math.random() * 174 - 87;
                lon = Math.random() * 360 - 180;

                lonLat = new OpenLayers.LonLat(lon, lat)
                    .transform(EPSG_4326, EPSG_3857);

                point = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);
                circle = OpenLayers.Geometry.Polygon.createRegularPolygon(point, 100000, 40, 0);
                feature = new OpenLayers.Feature.Vector(circle);
                features.push(feature);
            }

            this.vectorLayer.addFeatures(features);
            this.currentFeatures += newFeaturesCount;
            this.renderTime += (performance.now() - start);
        }
    }
});