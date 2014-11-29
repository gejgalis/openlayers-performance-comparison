export function imageVectorLayer() {
    return new OpenLayers.Layer.Vector("Vector Layer", {
        renderers: ["Canvas"]
    });
}