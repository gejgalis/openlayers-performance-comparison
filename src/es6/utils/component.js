var Vue = require("vue");

export function component(name, config) {
    var component = Vue.extend(config);
    Vue.component(name, component);
    return component;
}