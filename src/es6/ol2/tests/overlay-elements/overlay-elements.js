require("./overlay-elements.less");

import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button";
import {BsFps} from "../../../bs/bs-fps/bs-fps";
import {$, Vue} from "../../../libs";
import {openStreetMapLayer} from "../../layers/openStreetMapLayer";

var EPSG_4326 = new OpenLayers.Projection("EPSG:4326");
var EPSG_3857 = new OpenLayers.Projection("EPSG:3857");

export var OverlayElements = Vue.extend({
    template: require("./overlay-elements.hbs"),

    data: function () {
        return {
            newElementsCount: 1000,
            currentElements: 0,
            renderTime: 0,
            map: {
                width: "100%",
                height: "300px",
                renderer: ["Canvas"],
                layers: [openStreetMapLayer()],
                zoom: 2
            }
        }
    },

    filters: {
        seconds: function (milliseconds) {
            var seconds = Math.round(milliseconds) / 1000;
            return "" + seconds;
        }
    },

    methods: {
        addElements: function () {
            var i, lat, lon, overlay, lonLat,
                map = this.$.map.getMap(),
                start = performance.now();

            var newElementsCount = this.newElementsCount;
            for (i = 0; i < newElementsCount; i++) {
                lat = Math.random() * 174 - 87;
                lon = Math.random() * 360 - 180;

                lonLat = new OpenLayers.LonLat(lon, lat)
                    .transform(EPSG_4326, EPSG_3857);

                var popup = new OpenLayers.Popup(
                    null,
                    lonLat,
                    new OpenLayers.Size(30, 30),
                    '<span class="overlay-item"></span>',
                    false
                );
                popup.setBackgroundColor("transparent");
                map.addPopup(popup);
            }
            this.currentElements += newElementsCount;
            this.renderTime += (performance.now() - start);
        }
    }
});