require("./main.less");
import {$, Vue} from "../libs.js";

new Vue({
    el: ".main-app",
    template: require("./main.hbs"),

    data: {
        tests: [
            {id: "vector-features", label: "Vector Features", selected: false},
            {id: "overlay-elements", label: "Overlay Elements", selected: false}
        ],
        selectedTest: {}
    },

    created: function () {
        this._selectTest(this.tests[0]);
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
        }
    }
});