require("./main.less");
import {$, Vue} from "../libs.js";

new Vue({
    el: ".main-app",
    template: require("./main.hbs"),

    data: {
        tests: [
            {id: "vector-features", label: "Vector Features", selected: false},
            {id: "overlay-elements", label: "Overlay Elements", selected: false},
            {id: "animating-features", label: "Animating Features", selected: false}
        ],
        selectedTest: {}
    },

    created: function () {
        var initTest = this._findById(this._hashValue()) || this.tests[0];
        this._selectTest(initTest);
    },

    methods: {
        runTest: function (test) {
            this._selectTest(test);
        },

        _selectTest: function (test) {
            this._unselectAll();
            test.selected = true;
            this.selectedTest = test;
        },

        _unselectAll: function () {
            this.tests.forEach(test => test.selected = false);
        },

        _findById: function (id) {
            return this.tests.filter(test => test.id == id)[0];
        },

        _hashValue: function () {
            return window.location.hash.replace(/^#/, "");
        }
    }
});