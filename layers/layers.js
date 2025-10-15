var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Project_AOI_1 = new ol.format.GeoJSON();
var features_Project_AOI_1 = format_Project_AOI_1.readFeatures(json_Project_AOI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Project_AOI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Project_AOI_1.addFeatures(features_Project_AOI_1);
var lyr_Project_AOI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Project_AOI_1, 
                style: style_Project_AOI_1,
                popuplayertitle: 'Project_AOI',
                interactive: false,
                title: '<img src="styles/legend/Project_AOI_1.png" /> Project_AOI'
            });
var format_MostSuitableLocation_2_2 = new ol.format.GeoJSON();
var features_MostSuitableLocation_2_2 = format_MostSuitableLocation_2_2.readFeatures(json_MostSuitableLocation_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MostSuitableLocation_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MostSuitableLocation_2_2.addFeatures(features_MostSuitableLocation_2_2);
var lyr_MostSuitableLocation_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MostSuitableLocation_2_2, 
                style: style_MostSuitableLocation_2_2,
                popuplayertitle: 'Most Suitable Location_2',
                interactive: false,
    title: 'Most Suitable Location_2<br />\
    <img src="styles/legend/MostSuitableLocation_2_2_0.png" /> Less Suitable Site<br />\
    <img src="styles/legend/MostSuitableLocation_2_2_1.png" /> Most Suitable Site<br />\
    <img src="styles/legend/MostSuitableLocation_2_2_2.png" /> Not Suitable site<br />\
    <img src="styles/legend/MostSuitableLocation_2_2_3.png" /> Not Suitable Site<br />' });
var format_Existing_HealthFacility_3 = new ol.format.GeoJSON();
var features_Existing_HealthFacility_3 = format_Existing_HealthFacility_3.readFeatures(json_Existing_HealthFacility_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existing_HealthFacility_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_HealthFacility_3.addFeatures(features_Existing_HealthFacility_3);
var lyr_Existing_HealthFacility_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Existing_HealthFacility_3, 
                style: style_Existing_HealthFacility_3,
                popuplayertitle: 'Existing_Health Facility',
                interactive: false,
    title: 'Existing_Health Facility<br />\
    <img src="styles/legend/Existing_HealthFacility_3_0.png" /> Hospital<br />\
    <img src="styles/legend/Existing_HealthFacility_3_1.png" /> Specialty Center<br />\
    <img src="styles/legend/Existing_HealthFacility_3_2.png" /> Specialty Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_3_3.png" /> Health Center<br />\
    <img src="styles/legend/Existing_HealthFacility_3_4.png" /> Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_3_5.png" /> Pharmacy<br />' });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_4_0.png" /> <br />\
    <img src="styles/legend/Buildings_4_1.png" /> <br />\
    <img src="styles/legend/Buildings_4_2.png" /> <br />' });
var format_Landuse_5 = new ol.format.GeoJSON();
var features_Landuse_5 = format_Landuse_5.readFeatures(json_Landuse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_5.addFeatures(features_Landuse_5);
var lyr_Landuse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_5, 
                style: style_Landuse_5,
                popuplayertitle: 'Landuse',
                interactive: false,
    title: 'Landuse<br />\
    <img src="styles/legend/Landuse_5_0.png" /> Administrative<br />\
    <img src="styles/legend/Landuse_5_1.png" /> Agriculture<br />\
    <img src="styles/legend/Landuse_5_2.png" /> Commercial<br />\
    <img src="styles/legend/Landuse_5_3.png" /> Forest<br />\
    <img src="styles/legend/Landuse_5_4.png" /> Manufucturing & Storagel<br />\
    <img src="styles/legend/Landuse_5_5.png" /> Mixed Residential<br />\
    <img src="styles/legend/Landuse_5_6.png" /> Pure Residential<br />\
    <img src="styles/legend/Landuse_5_7.png" /> Recreational<br />\
    <img src="styles/legend/Landuse_5_8.png" /> Services<br />\
    <img src="styles/legend/Landuse_5_9.png" /> Special Function<br />\
    <img src="styles/legend/Landuse_5_10.png" /> Transport<br />' });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                popuplayertitle: 'Road',
                interactive: false,
    title: 'Road<br />\
    <img src="styles/legend/Road_6_0.png" /> Asphalt<br />\
    <img src="styles/legend/Road_6_1.png" /> Gravel<br />' });
var format_Streams_7 = new ol.format.GeoJSON();
var features_Streams_7 = format_Streams_7.readFeatures(json_Streams_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_7.addFeatures(features_Streams_7);
var lyr_Streams_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_7, 
                style: style_Streams_7,
                popuplayertitle: 'Streams',
                interactive: false,
                title: '<img src="styles/legend/Streams_7.png" /> Streams'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Project_AOI_1.setVisible(true);lyr_MostSuitableLocation_2_2.setVisible(true);lyr_Existing_HealthFacility_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Landuse_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_Streams_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Project_AOI_1,lyr_MostSuitableLocation_2_2,lyr_Existing_HealthFacility_3,lyr_Buildings_4,lyr_Landuse_5,lyr_Road_6,lyr_Streams_7];
lyr_Project_AOI_1.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MostSuitableLocation_2_2.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID': 'OBJECTID', 'suitabilit': 'suitabilit', });
lyr_Existing_HealthFacility_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Ownership': 'Ownership', 'Type': 'Type', 'admin3Name': 'admin3Name', 'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'City': 'City', 'Kebele': 'Kebele', 'Status': 'Status', });
lyr_Buildings_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ZONE_': 'ZONE_', 'WOREDA': 'WOREDA', 'KEBELE': 'KEBELE', 'CODE_BID': 'CODE_BID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Landuse_5.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Road_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Meters': 'Meters', 'Oneway': 'Oneway', 'TF_Minutes': 'TF_Minutes', 'FT_Minutes': 'FT_Minutes', 'Road_Name': 'Road_Name', 'Road_Type': 'Road_Type', });
lyr_Streams_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Project_AOI_1.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MostSuitableLocation_2_2.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID': 'Range', 'suitabilit': 'TextEdit', });
lyr_Existing_HealthFacility_3.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'Ownership': 'TextEdit', 'Type': 'TextEdit', 'admin3Name': 'TextEdit', 'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'City': 'TextEdit', 'Kebele': 'TextEdit', 'Status': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ZONE_': 'Range', 'WOREDA': 'Range', 'KEBELE': 'Range', 'CODE_BID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Landuse_5.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'Meters': 'TextEdit', 'Oneway': 'TextEdit', 'TF_Minutes': 'TextEdit', 'FT_Minutes': 'TextEdit', 'Road_Name': 'TextEdit', 'Road_Type': 'TextEdit', });
lyr_Streams_7.set('fieldImages', {'OBJECTID': '', 'FID_': '', 'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrLock': '', 'LyrOn': '', 'LyrVPFrzn': '', 'LyrHandle': '', 'Color': '', 'EntColor': '', 'LyrColor': '', 'BlkColor': '', 'Linetype': '', 'EntLinetyp': '', 'LyrLnType': '', 'BlkLinetyp': '', 'Elevation': '', 'Thickness': '', 'LineWt': '', 'EntLineWt': '', 'LyrLineWt': '', 'BlkLineWt': '', 'RefName': '', 'LTScale': '', 'ExtX': '', 'ExtY': '', 'ExtZ': '', 'DocName': '', 'DocPath': '', 'DocType': '', 'DocVer': '', 'Shape_Leng': '', 'Shape_Le_1': '', });
lyr_Project_AOI_1.set('fieldLabels', {'ZONE_': 'no label', 'LUSE_CODE': 'no label', 'Use_Type': 'no label', 'AREA': 'no label', 'PERIMETER': 'inline label - always visible', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MostSuitableLocation_2_2.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'hidden field', 'AREA': 'inline label - always visible', 'WOREDA': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBJECTID': 'hidden field', 'suitabilit': 'hidden field', });
lyr_Existing_HealthFacility_3.set('fieldLabels', {'Id': 'hidden field', 'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Altitude': 'hidden field', 'Ownership': 'inline label - always visible', 'Type': 'inline label - always visible', 'admin3Name': 'hidden field', 'admin2Name': 'hidden field', 'admin1Name': 'header label - visible with data', 'admin1Pcod': 'hidden field', 'City': 'no label', 'Kebele': 'hidden field', 'Status': 'hidden field', });
lyr_Buildings_4.set('fieldLabels', {'AREA': 'inline label - always visible', 'PERIMETER': 'hidden field', 'ZONE_': 'inline label - always visible', 'WOREDA': 'inline label - always visible', 'KEBELE': 'hidden field', 'CODE_BID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Landuse_5.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'hidden field', 'WOREDA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Road_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Meters': 'no label', 'Oneway': 'no label', 'TF_Minutes': 'no label', 'FT_Minutes': 'no label', 'Road_Name': 'no label', 'Road_Type': 'no label', });
lyr_Streams_7.set('fieldLabels', {'OBJECTID': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Streams_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});