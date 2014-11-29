export function openStreetMapLayer() {
    return new OpenLayers.Layer.OSM({
        renderers: ["Canvas"]
    });
}