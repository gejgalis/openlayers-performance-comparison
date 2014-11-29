import {component} from "../../../utils/component";

export var OlMap = component("ol-map", {
    replace: true,
    template: require("./ol-map.hbs"),
    paramAttributes: ["width", "height", "renderer", "layers", "zoom"],

    attached: function () {
        if (this._map) {
            return;
        }

        this._map = new OpenLayers.Map({
            div: this.$el
        });
        this._map.addLayers(this.layers);
        this._map.zoomToMaxExtent();
    },

    data: function () {
        return {
            width: "800px",
            height: "600px",
            renderer: ["Canvas"],
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