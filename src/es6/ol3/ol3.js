import {$, Vue} from "../libs.js";
import {VectorFeatures} from "./tests/vector-features/vector-features";
import {OverlayElements} from "./tests/overlay-elements/overlay-elements";

var tests = {
    "vector-features": VectorFeatures,
    "overlay-elements": OverlayElements
};

$(function () {
    var searchParams = getSearchParams(),
        test = tests[searchParams.test];

    if (test) {
        new test({
            el: $(".test").get(0)
        });
    } else {
        if (searchParams.test !== "undefined") {
            $("body").html("Test <strong>" + searchParams.test + "</strong> is not implemented yet.");
        }
    }
});

function getSearchParams() {
    return window.location.search
        .replace(/^\?/, "")
        .split("=")
        .reduce(function (key, value) {
            var el = {};
            el[key] = value;
            return el;
        });
}