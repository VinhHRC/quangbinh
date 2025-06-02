var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QB18102020_1 = new ol.format.GeoJSON();
var features_QB18102020_1 = format_QB18102020_1.readFeatures(json_QB18102020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QB18102020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QB18102020_1.addFeatures(features_QB18102020_1);
var lyr_QB18102020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QB18102020_1, 
                style: style_QB18102020_1,
                popuplayertitle: 'QB18102020',
                interactive: true,
                title: '<img src="styles/legend/QB18102020_1.png" /> QB18102020'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_QB18102020_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QB18102020_1];
lyr_QB18102020_1.set('fieldAliases', {'label': 'label', });
lyr_QB18102020_1.set('fieldImages', {'label': 'TextEdit', });
lyr_QB18102020_1.set('fieldLabels', {'label': 'no label', });
lyr_QB18102020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});