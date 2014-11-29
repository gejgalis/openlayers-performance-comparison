export function openStreetMapLayer() {
    return new ol.layer.Tile({
        source: new ol.source.OSM()
    });
}