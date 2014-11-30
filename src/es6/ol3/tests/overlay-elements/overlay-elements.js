require("./overlay-elements.less");

import {OlMap} from "../../components/ol-map/ol-map";
import {BsButton} from "../../../bs/bs-button/bs-button"
import {BsFps} from "../../../bs/bs-fps/bs-fps";
import {$, Vue} from "../../../libs";
import {openStreetMapLayer} from "../../layers/openStreetMapLayer";

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
                renderer: ["webgl"],
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
            var i, lat, lon, overlay,
                map = this.$.map.getMap(),
                start = performance.now();

            var newElementsCount = this.newElementsCount;
            for (i = 0; i < newElementsCount; i++) {
                lat = Math.random() * 174 - 87;
                lon = Math.random() * 360 - 180;

                var coordinate = ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');

                var $element = $('<span class="overlay-item"></span>');
                overlay = new ol.Overlay({
                    element: $element,
                    positioning: 'top-right',
                    stopEvent: false
                });
                overlay.setPosition(coordinate);
                map.addOverlay(overlay);
                $element.show();

            }
            this.currentElements += newElementsCount;
            this.renderTime += (performance.now() - start);
        }
    }
});