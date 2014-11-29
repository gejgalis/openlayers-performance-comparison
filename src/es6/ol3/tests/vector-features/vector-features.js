import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button"
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
            map: {
                width: "100%",
                height: "300px",
                renderer: ["webgl"],
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
            var i, lat, lon, geom, feature,
                features = [],
                start = performance.now();

            var newFeaturesCount = this.newFeaturesCount;
            for (i = 0; i < newFeaturesCount; i++) {
                lat = Math.random() * 174 - 87;
                lon = Math.random() * 360 - 180;

                geom = new ol.geom.Circle(
                    ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'),
                    100000
                );

                feature = new ol.Feature(geom);
                features.push(feature);
            }

            this.vectorLayer.getSource().getSource().addFeatures(features);
            this.currentFeatures += newFeaturesCount;
            this.renderTime += (performance.now() - start);
        }
    }
});