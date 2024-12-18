var wms_layers = [];


        var lyr_HIBRIDO_0 = new ol.layer.Tile({
            'title': 'HIBRIDO',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Rocassedimentarias_1 = new ol.format.GeoJSON();
var features_Rocassedimentarias_1 = format_Rocassedimentarias_1.readFeatures(json_Rocassedimentarias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rocassedimentarias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rocassedimentarias_1.addFeatures(features_Rocassedimentarias_1);
var lyr_Rocassedimentarias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rocassedimentarias_1, 
                style: style_Rocassedimentarias_1,
                popuplayertitle: 'Rocas sedimentarias',
                interactive: true,
                title: '<img src="styles/legend/Rocassedimentarias_1.png" /> Rocas sedimentarias'
            });
var lyr_CuencassedimentariasnoproductivasYPF_2 = new ol.layer.Tile({
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
              wms_layers.push([lyr_CuencassedimentariasnoproductivasYPF_2, 0]);
var lyr_CuencassedimentariasproductivasYPF_3 = new ol.layer.Tile({
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
              wms_layers.push([lyr_CuencassedimentariasproductivasYPF_3, 0]);
var format_Fosiliferos_4 = new ol.format.GeoJSON();
var features_Fosiliferos_4 = format_Fosiliferos_4.readFeatures(json_Fosiliferos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fosiliferos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fosiliferos_4.addFeatures(features_Fosiliferos_4);
var lyr_Fosiliferos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fosiliferos_4, 
                style: style_Fosiliferos_4,
                popuplayertitle: 'Fosiliferos',
                interactive: true,
                title: '<img src="styles/legend/Fosiliferos_4.png" /> Fosiliferos'
            });
var format_Yacimientos_5 = new ol.format.GeoJSON();
var features_Yacimientos_5 = format_Yacimientos_5.readFeatures(json_Yacimientos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yacimientos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yacimientos_5.addFeatures(features_Yacimientos_5);
var lyr_Yacimientos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yacimientos_5, 
                style: style_Yacimientos_5,
                popuplayertitle: 'Yacimientos',
                interactive: true,
                title: '<img src="styles/legend/Yacimientos_5.png" /> Yacimientos'
            });
var format_YacimientosdeHidrocarburos_6 = new ol.format.GeoJSON();
var features_YacimientosdeHidrocarburos_6 = format_YacimientosdeHidrocarburos_6.readFeatures(json_YacimientosdeHidrocarburos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YacimientosdeHidrocarburos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YacimientosdeHidrocarburos_6.addFeatures(features_YacimientosdeHidrocarburos_6);
var lyr_YacimientosdeHidrocarburos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YacimientosdeHidrocarburos_6, 
                style: style_YacimientosdeHidrocarburos_6,
                popuplayertitle: 'Yacimientos de Hidrocarburos',
                interactive: true,
                title: '<img src="styles/legend/YacimientosdeHidrocarburos_6.png" /> Yacimientos de Hidrocarburos'
            });
var format_Fosiles_7 = new ol.format.GeoJSON();
var features_Fosiles_7 = format_Fosiles_7.readFeatures(json_Fosiles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fosiles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fosiles_7.addFeatures(features_Fosiles_7);
var lyr_Fosiles_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fosiles_7, 
                style: style_Fosiles_7,
                popuplayertitle: 'Fosiles',
                interactive: true,
                title: '<img src="styles/legend/Fosiles_7.png" /> Fosiles'
            });

lyr_HIBRIDO_0.setVisible(true);lyr_Rocassedimentarias_1.setVisible(true);lyr_CuencassedimentariasnoproductivasYPF_2.setVisible(true);lyr_CuencassedimentariasproductivasYPF_3.setVisible(true);lyr_Fosiliferos_4.setVisible(true);lyr_Yacimientos_5.setVisible(true);lyr_YacimientosdeHidrocarburos_6.setVisible(true);lyr_Fosiles_7.setVisible(true);
var layersList = [lyr_HIBRIDO_0,lyr_Rocassedimentarias_1,lyr_CuencassedimentariasnoproductivasYPF_2,lyr_CuencassedimentariasproductivasYPF_3,lyr_Fosiliferos_4,lyr_Yacimientos_5,lyr_YacimientosdeHidrocarburos_6,lyr_Fosiles_7];
lyr_Rocassedimentarias_1.set('fieldAliases', {'tipo_muest': 'tipo_muest', 'codigo_mue': 'codigo_mue', 'fraccion': 'fraccion', 'metodo': 'metodo', 'ag_ppm': 'ag_ppm', 'al_porcien': 'al_porcien', 'as_ppm': 'as_ppm', 'au_ppb': 'au_ppb', 'ba_ppm': 'ba_ppm', 'be_ppm': 'be_ppm', 'bi_ppm': 'bi_ppm', 'br_ppm': 'br_ppm', 'ca_porcien': 'ca_porcien', 'cd_ppm': 'cd_ppm', 'ce_ppm': 'ce_ppm', 'co_ppm': 'co_ppm', 'cr_ppm': 'cr_ppm', 'cs_ppm': 'cs_ppm', 'cu_ppm': 'cu_ppm', 'eu_ppm': 'eu_ppm', 'fe_porcien': 'fe_porcien', 'ga_ppm': 'ga_ppm', 'ge_ppm': 'ge_ppm', 'hf_ppm': 'hf_ppm', 'hg_ppm': 'hg_ppm', 'in_ppm': 'in_ppm', 'ir_ppb': 'ir_ppb', 'k_porcient': 'k_porcient', 'la_ppm': 'la_ppm', 'li_ppm': 'li_ppm', 'lu_ppm': 'lu_ppm', 'mg_porcien': 'mg_porcien', 'mn_ppm': 'mn_ppm', 'mo_ppm': 'mo_ppm', 'na_porcien': 'na_porcien', 'nb_ppm': 'nb_ppm', 'nd_ppm': 'nd_ppm', 'ni_ppm': 'ni_ppm', 'p_ppm': 'p_ppm', 'pb_ppm': 'pb_ppm', 'rb_ppm': 'rb_ppm', 's_porcient': 's_porcient', 'sb_ppm': 'sb_ppm', 'sc_ppm': 'sc_ppm', 'se_ppm': 'se_ppm', 'sm_ppm': 'sm_ppm', 'sn_ppm': 'sn_ppm', 'sr_ppm': 'sr_ppm', 'ta_ppm': 'ta_ppm', 'tb_ppm': 'tb_ppm', 'te_ppm': 'te_ppm', 'th_ppm': 'th_ppm', 'ti_porcien': 'ti_porcien', 'ti_ppm': 'ti_ppm', 'u_ppm': 'u_ppm', 'v_ppm': 'v_ppm', 'w_ppm': 'w_ppm', 'y_ppm': 'y_ppm', 'yb_ppm': 'yb_ppm', 'zn_ppm': 'zn_ppm', 'zr_ppm': 'zr_ppm', });
lyr_Fosiliferos_4.set('fieldAliases', {'Epoca': 'Epoca', 'Lugar': 'Lugar', });
lyr_Yacimientos_5.set('fieldAliases', {'id': 'id', 'Nombre': 'NOMBRE', 'PAGINA': 'PAGINA', });
lyr_YacimientosdeHidrocarburos_6.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'ppo': 'ppo', 'sag': 'sag', 'fdc': 'fdc', });
lyr_Fosiles_7.set('fieldAliases', {'Especie': 'ESPECIE', 'Tipo': 'TIPO', 'Era': 'EPOCA', 'IMAGEN': 'MAS SOBRE ESTA ESPECIE', });
lyr_Rocassedimentarias_1.set('fieldImages', {'tipo_muest': 'TextEdit', 'codigo_mue': 'TextEdit', 'fraccion': 'TextEdit', 'metodo': 'TextEdit', 'ag_ppm': 'TextEdit', 'al_porcien': 'TextEdit', 'as_ppm': 'TextEdit', 'au_ppb': 'TextEdit', 'ba_ppm': 'TextEdit', 'be_ppm': 'TextEdit', 'bi_ppm': 'TextEdit', 'br_ppm': 'TextEdit', 'ca_porcien': 'TextEdit', 'cd_ppm': 'TextEdit', 'ce_ppm': 'TextEdit', 'co_ppm': 'TextEdit', 'cr_ppm': 'TextEdit', 'cs_ppm': 'TextEdit', 'cu_ppm': 'TextEdit', 'eu_ppm': 'TextEdit', 'fe_porcien': 'TextEdit', 'ga_ppm': 'TextEdit', 'ge_ppm': 'TextEdit', 'hf_ppm': 'TextEdit', 'hg_ppm': 'TextEdit', 'in_ppm': 'TextEdit', 'ir_ppb': 'TextEdit', 'k_porcient': 'TextEdit', 'la_ppm': 'TextEdit', 'li_ppm': 'TextEdit', 'lu_ppm': 'TextEdit', 'mg_porcien': 'TextEdit', 'mn_ppm': 'TextEdit', 'mo_ppm': 'TextEdit', 'na_porcien': 'TextEdit', 'nb_ppm': 'TextEdit', 'nd_ppm': 'TextEdit', 'ni_ppm': 'TextEdit', 'p_ppm': 'TextEdit', 'pb_ppm': 'TextEdit', 'rb_ppm': 'TextEdit', 's_porcient': 'TextEdit', 'sb_ppm': 'TextEdit', 'sc_ppm': 'TextEdit', 'se_ppm': 'TextEdit', 'sm_ppm': 'TextEdit', 'sn_ppm': 'TextEdit', 'sr_ppm': 'TextEdit', 'ta_ppm': 'TextEdit', 'tb_ppm': 'TextEdit', 'te_ppm': 'TextEdit', 'th_ppm': 'TextEdit', 'ti_porcien': 'TextEdit', 'ti_ppm': 'TextEdit', 'u_ppm': 'TextEdit', 'v_ppm': 'TextEdit', 'w_ppm': 'TextEdit', 'y_ppm': 'TextEdit', 'yb_ppm': 'TextEdit', 'zn_ppm': 'TextEdit', 'zr_ppm': 'TextEdit', });
lyr_Fosiliferos_4.set('fieldImages', {'Epoca': 'TextEdit', 'Lugar': 'TextEdit', });
lyr_Yacimientos_5.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'PAGINA': 'TextEdit', });
lyr_YacimientosdeHidrocarburos_6.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fun': '', 'ppo': '', 'sag': '', 'fdc': '', });
lyr_Fosiles_7.set('fieldImages', {'Especie': 'TextEdit', 'Tipo': 'TextEdit', 'Era': 'TextEdit', 'IMAGEN': 'TextEdit', });
lyr_Rocassedimentarias_1.set('fieldLabels', {'tipo_muest': 'hidden field', 'codigo_mue': 'hidden field', 'fraccion': 'hidden field', 'metodo': 'hidden field', 'ag_ppm': 'hidden field', 'al_porcien': 'hidden field', 'as_ppm': 'hidden field', 'au_ppb': 'hidden field', 'ba_ppm': 'hidden field', 'be_ppm': 'hidden field', 'bi_ppm': 'hidden field', 'br_ppm': 'hidden field', 'ca_porcien': 'hidden field', 'cd_ppm': 'hidden field', 'ce_ppm': 'hidden field', 'co_ppm': 'hidden field', 'cr_ppm': 'hidden field', 'cs_ppm': 'hidden field', 'cu_ppm': 'hidden field', 'eu_ppm': 'hidden field', 'fe_porcien': 'hidden field', 'ga_ppm': 'hidden field', 'ge_ppm': 'hidden field', 'hf_ppm': 'hidden field', 'hg_ppm': 'hidden field', 'in_ppm': 'hidden field', 'ir_ppb': 'hidden field', 'k_porcient': 'hidden field', 'la_ppm': 'hidden field', 'li_ppm': 'hidden field', 'lu_ppm': 'hidden field', 'mg_porcien': 'hidden field', 'mn_ppm': 'hidden field', 'mo_ppm': 'hidden field', 'na_porcien': 'hidden field', 'nb_ppm': 'hidden field', 'nd_ppm': 'hidden field', 'ni_ppm': 'hidden field', 'p_ppm': 'hidden field', 'pb_ppm': 'hidden field', 'rb_ppm': 'hidden field', 's_porcient': 'hidden field', 'sb_ppm': 'hidden field', 'sc_ppm': 'hidden field', 'se_ppm': 'hidden field', 'sm_ppm': 'hidden field', 'sn_ppm': 'hidden field', 'sr_ppm': 'hidden field', 'ta_ppm': 'hidden field', 'tb_ppm': 'hidden field', 'te_ppm': 'hidden field', 'th_ppm': 'hidden field', 'ti_porcien': 'hidden field', 'ti_ppm': 'hidden field', 'u_ppm': 'hidden field', 'v_ppm': 'hidden field', 'w_ppm': 'hidden field', 'y_ppm': 'hidden field', 'yb_ppm': 'hidden field', 'zn_ppm': 'hidden field', 'zr_ppm': 'hidden field', });
lyr_Fosiliferos_4.set('fieldLabels', {'Epoca': 'inline label - visible with data', 'Lugar': 'inline label - visible with data', });
lyr_Yacimientos_5.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', 'PAGINA': 'inline label - always visible', });
lyr_YacimientosdeHidrocarburos_6.set('fieldLabels', {'gid': 'hidden field', 'entidad': 'hidden field', 'objeto': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'fun': 'hidden field', 'ppo': 'hidden field', 'sag': 'hidden field', 'fdc': 'hidden field', });
lyr_Fosiles_7.set('fieldLabels', {'Especie': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Era': 'inline label - always visible', 'IMAGEN': 'inline label - always visible', });
lyr_Fosiles_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});