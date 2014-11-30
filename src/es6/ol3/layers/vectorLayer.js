export function vectorLayer() {
    return new ol.layer.Vector({
        source: new ol.source.Vector()
    });
}