import {component} from "../../utils/component";

export var BsFps = component("bs-fps", {
    replace: true,
    template: require("./bs-fps.hbs"),

    attached: function () {
        var frameCount = 0;
        var begin = +new Date();
        var me = this;

        window.setInterval(function() {
            var end = +new Date();
            var milliseconds = end - begin;
            var seconds = milliseconds / 1000.0;
            var frameRate = frameCount / seconds;
            me.fps = frameRate.toPrecision(4);
            frameCount = 0;
            begin = end;
        }, 500);

        var go = function() {
            frameCount++;
            window.requestAnimationFrame(go);
        };
        go();
    },

    data: function () {
        return {
            fps: 0
        }
    },

    computed: {
        isOK: {
            get: function () {
                return this.fps > 20;
            }
        }
    }
});