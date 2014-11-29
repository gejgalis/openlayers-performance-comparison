export function imageVectorLayer() {
    var vectorSource = new ol.source.Vector({projection: 'EPSG:4326'});
    var imageSource = new ol.source.ImageVector({source: vectorSource});
    return new ol.layer.Image({source: imageSource});
}