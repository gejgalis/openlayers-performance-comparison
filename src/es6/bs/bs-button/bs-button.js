import {component} from "../../utils/component";

export var BsButton = component("bs-button", {
    replace: true,
    template: require("./bs-button.hbs"),
    paramAttributes: ["type", "size"],

    attached: function () {
    },

    data: function () {
        return {
            type: "default",
            size: "default"
        }
    }
});