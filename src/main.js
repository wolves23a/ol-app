import './style.css';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';

// 1. 创建地图
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7'
      }),
    }),
  ],
  view: new View({
    center: [116.397, 39.908],
    zoom: 11,
  }),
});

// 2. 准备图层和样式
const vectorSource = new VectorSource();
const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: new Style({
    image: new CircleStyle({
      radius: 15, // 够大了吧
      fill: new Fill({ color: 'red' }), // 纯红色
      stroke: new Stroke({ color: 'white', width: 2 })
    }),
  }),
});
map.addLayer(vectorLayer);

// 3. 直接把数据写死在代码里（不读文件了！）
const myData = [
  { name: '国贸店', coords: [116.461, 39.909] },
  { name: '王府井店', coords: [116.411, 39.914] },
  { name: '中关村店', coords: [116.316, 39.983] }
];

// 遍历数据，生成点
myData.forEach(item => {
  const feature = new Feature({
    geometry: new Point(item.coords), // 直接塞入真实经纬度
    name: item.name
  });
  vectorSource.addFeature(feature);
});

// 4. 点击弹窗
map.on('singleclick', function (evt) {
  map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    alert('你点到了：' + feature.get('name'));
  });
});