import {component} from "../../../utils/component";

export var OlMap = component("ol-map", {
    replace: true,
    template: require("./ol-map.hbs"),
    paramAttributes: ["width", "height", "renderer", "layers", "zoom"],

    attached: function () {
        if (this._map) {
            return;
        }

        this._map = new ol.Map({
            target: this.$el,
            renderer: this.renderer,
            layers: this.layers,
            view: new ol.View({
                center: ol.proj.transform(this.center, 'EPSG:4326', 'EPSG:3857'),
                zoom: this.zoom
            })
        });

        this.$watch("zoom", function (val) {
            if (this._map) {
                this._map.getView().setZoom(val);
            }
        });

        this.$watch("width", function (val) {
            console.log("width", val);
        });
    },

    data: function () {
        return {
            width: "800px",
            height: "600px",
            renderer: ["webgl", "canvas"],
            layers: [],
            center: [0, 0],
            zoom: 1
        }
    },

    methods: {
        getMap: function () {
            return this._map;
        }
    }
});