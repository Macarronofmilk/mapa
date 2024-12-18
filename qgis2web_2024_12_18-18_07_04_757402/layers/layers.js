var wms_layers = [];


        var lyr_HIBRIDO_0 = new ol.layer.Tile({
            'title': 'HIBRIDO',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_CuencassedimentariasnoproductivasYPF_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.energia.gob.ar/wmsenergia.",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ypf_cuencas_sedimentarias_no_productivas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Cuencas sedimentarias no productivas(YPF)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuencassedimentariasnoproductivasYPF_1, 0]);
var lyr_CuencassedimentariasproductivasYPF_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.energia.gob.ar/wmsenergia.",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ypf_cuencas_sedimentarias_productivas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Cuencas sedimentarias productivas(YPF)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CuencassedimentariasproductivasYPF_2, 0]);
var format_Fosiliferos_3 = new ol.format.GeoJSON();
var features_Fosiliferos_3 = format_Fosiliferos_3.readFeatures(json_Fosiliferos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fosiliferos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fosiliferos_3.addFeatures(features_Fosiliferos_3);
var lyr_Fosiliferos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fosiliferos_3, 
                style: style_Fosiliferos_3,
                popuplayertitle: 'Fosiliferos',
                interactive: true,
                title: '<img src="styles/legend/Fosiliferos_3.png" /> Fosiliferos'
            });
var format_Yacimientos_4 = new ol.format.GeoJSON();
var features_Yacimientos_4 = format_Yacimientos_4.readFeatures(json_Yacimientos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yacimientos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yacimientos_4.addFeatures(features_Yacimientos_4);
var lyr_Yacimientos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yacimientos_4, 
                style: style_Yacimientos_4,
                popuplayertitle: 'Yacimientos',
                interactive: true,
                title: '<img src="styles/legend/Yacimientos_4.png" /> Yacimientos'
            });
var format_YacimientosdeHidrocarburos_5 = new ol.format.GeoJSON();
var features_YacimientosdeHidrocarburos_5 = format_YacimientosdeHidrocarburos_5.readFeatures(json_YacimientosdeHidrocarburos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YacimientosdeHidrocarburos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YacimientosdeHidrocarburos_5.addFeatures(features_YacimientosdeHidrocarburos_5);
var lyr_YacimientosdeHidrocarburos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YacimientosdeHidrocarburos_5, 
                style: style_YacimientosdeHidrocarburos_5,
                popuplayertitle: 'Yacimientos de Hidrocarburos',
                interactive: true,
                title: '<img src="styles/legend/YacimientosdeHidrocarburos_5.png" /> Yacimientos de Hidrocarburos'
            });
var format_Fosiles_6 = new ol.format.GeoJSON();
var features_Fosiles_6 = format_Fosiles_6.readFeatures(json_Fosiles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fosiles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fosiles_6.addFeatures(features_Fosiles_6);
var lyr_Fosiles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fosiles_6, 
                style: style_Fosiles_6,
                popuplayertitle: 'Fosiles',
                interactive: true,
                title: '<img src="styles/legend/Fosiles_6.png" /> Fosiles'
            });

lyr_HIBRIDO_0.setVisible(true);lyr_CuencassedimentariasnoproductivasYPF_1.setVisible(true);lyr_CuencassedimentariasproductivasYPF_2.setVisible(true);lyr_Fosiliferos_3.setVisible(true);lyr_Yacimientos_4.setVisible(true);lyr_YacimientosdeHidrocarburos_5.setVisible(true);lyr_Fosiles_6.setVisible(true);
var layersList = [lyr_HIBRIDO_0,lyr_CuencassedimentariasnoproductivasYPF_1,lyr_CuencassedimentariasproductivasYPF_2,lyr_Fosiliferos_3,lyr_Yacimientos_4,lyr_YacimientosdeHidrocarburos_5,lyr_Fosiles_6];
lyr_Fosiliferos_3.set('fieldAliases', {'Epoca': 'Epoca', 'Lugar': 'Lugar', });
lyr_Yacimientos_4.set('fieldAliases', {'id': 'id', 'Nombre': 'NOMBRE', 'PAGINA': 'PAGINA', });
lyr_YacimientosdeHidrocarburos_5.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'ppo': 'ppo', 'sag': 'sag', 'fdc': 'fdc', });
lyr_Fosiles_6.set('fieldAliases', {'Especie': 'ESPECIE', 'Tipo': 'TIPO', 'Era': 'EPOCA', 'IMAGEN': 'MAS SOBRE ESTA ESPECIE', });
lyr_Fosiliferos_3.set('fieldImages', {'Epoca': 'TextEdit', 'Lugar': 'TextEdit', });
lyr_Yacimientos_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'PAGINA': 'TextEdit', });
lyr_YacimientosdeHidrocarburos_5.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'ppo': '', 'sag': '', 'fdc': '', });
lyr_Fosiles_6.set('fieldImages', {'Especie': 'TextEdit', 'Tipo': 'TextEdit', 'Era': 'TextEdit', 'IMAGEN': 'TextEdit', });
lyr_Fosiliferos_3.set('fieldLabels', {'Epoca': 'inline label - visible with data', 'Lugar': 'inline label - visible with data', });
lyr_Yacimientos_4.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', 'PAGINA': 'inline label - always visible', });
lyr_YacimientosdeHidrocarburos_5.set('fieldLabels', {'gid': 'hidden field', 'entidad': 'hidden field', 'objeto': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'fun': 'hidden field', 'ppo': 'hidden field', 'sag': 'hidden field', 'fdc': 'hidden field', });
lyr_Fosiles_6.set('fieldLabels', {'Especie': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Era': 'inline label - always visible', 'IMAGEN': 'inline label - always visible', });
lyr_Fosiles_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});