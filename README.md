# 基于 OpenLayers 的城市 POI 可视化地图平台

## 项目简介
本项目是一个基于原生 JavaScript (ES6) 与 OpenLayers 地图引擎开发的 WebGIS 前端练习项目。实现了基础的地图加载、空间数据渲染及交互功能。

## 技术栈
- 前端基础：HTML5 / CSS3 / JavaScript (ES6)
- 地图引擎：OpenLayers
- 构建工具：Vite
- 数据格式：GeoJSON

## 主要功能
1. 集成高德地图 XYZ 瓦片底图，实现地图的平滑加载与缩放。
2. 解析 GeoJSON 格式的空间数据，使用 `VectorLayer` 渲染矢量点要素。
3. 自定义矢量要素样式（红色圆形），并处理坐标投影转换，解决偏移问题。
4. 监听地图 `singleclick` 事件，实现点击要素弹出属性信息框的交互。

## 本地运行
```bash
npm install
npm run dev
