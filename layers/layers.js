var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASI_LN_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_1 = format_ADMINISTRASI_LN_25K_1.readFeatures(json_ADMINISTRASI_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_1.addFeatures(features_ADMINISTRASI_LN_25K_1);
var lyr_ADMINISTRASI_LN_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_1, 
                style: style_ADMINISTRASI_LN_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_1.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_0.png" /> Angke<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_1.png" /> Cengkareng Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_2.png" /> Cengkareng Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_3.png" /> Duri Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_4.png" /> Duri Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_5.png" /> Durikepa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_6.png" /> Durikosambi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_7.png" /> Glodok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_8.png" /> Grogol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_9.png" /> Jatipulo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_10.png" /> Jelambar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_11.png" /> Jelambarbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_12.png" /> Jembatanbesi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_13.png" /> Jembatanlima<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_14.png" /> Joglo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_15.png" /> Kalianyar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_16.png" /> Kalideres<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_17.png" /> Kamal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_18.png" /> Kapuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_19.png" /> Keagungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_20.png" /> Kebonjeruk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_21.png" /> Kedaungkaliangke<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_22.png" /> Kedoya Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_23.png" /> Kedoya Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_24.png" /> Kelapadua<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_25.png" /> Kemanggisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_26.png" /> Kembangan Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_27.png" /> Kembangan Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_28.png" /> Kotabambu Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_29.png" /> Kotabambu Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_30.png" /> Krendang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_31.png" /> Krukut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_32.png" /> Manggabesar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_33.png" /> Maphar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_34.png" /> Meruya Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_35.png" /> Meruya Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_36.png" /> Palmerah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_37.png" /> Pegadungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_38.png" /> Pekojan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_39.png" /> Pinangsia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_40.png" /> Rawabuaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_41.png" /> Roamalaka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_42.png" /> Semanan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_43.png" /> Slipi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_44.png" /> Srengseng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_45.png" /> Sukabumi Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_46.png" /> Sukabumi Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_47.png" /> Tamansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_48.png" /> Tambora<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_49.png" /> Tanahsareal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_50.png" /> Tangki<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_51.png" /> Tanjungduren Selatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_52.png" /> Tanjungduren Utara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_53.png" /> Tegalalur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_54.png" /> Tomang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_55.png" /> Wijayakusuma<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_56.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASI_LN_25K_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASI_LN_25K_1,lyr_ADMINISTRASIDESA_AR_25K_2];
lyr_ADMINISTRASI_LN_25K_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});