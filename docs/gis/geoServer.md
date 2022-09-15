# GeoServer
## 一、安装GeoServer
>_注：需要jdk8环境_
1. 下载链接：[http://geoserver.org/release/stable/]
(img)
_此处安装 2.20.2 版本_
2. 安装
- windows用户：打开程序一直next即可
- linux/mac用户：建议解压到 `usr/local/geoserver`
**目录文件
(img)
----
## 二、安装切片插件（供后续导出）
>_注：需要与上一步GeoServer版本一致_
1. 在上述链接中继续下载插件
(img)
(img)
2. 把里面的 _jar_ 文件解压到 `<安装路径>/webapps/geoserver/WEB-INF/lib/ `
(img)
----
## 三、开启跨域（供后续使用）
1. 打开`<安装路径>/webapps/geoserver/WEB-INF/web.xml`文件
2. 搜索_“CORS”_（注意大写），释放框选区域代码（根据实际情况选择_Jetty_ 或 _Tomcat_）
(img)
3. 下方还有一处需要一起释放
(img)
----
## 四、启动geoserver
1. 启动`<安装路径>/bin/`下的`startup.sh`（windows启动`startup.bat`）
(img)
2. 如下提示，启动成功
(img)
3. 浏览器进入[http://localhost:8080/geoserver/web/ ]，登录
- 用户名：`admin`
- 密码：`geoserver`
(img)
----
## 五、准备数据
1. 进入[http://datav.aliyun.com/tools/atlas/]选择需要的区域，下载geojson文件
这里使用阿里云的地图选择器网站，DATAV.GeoAtlas提供的行政区划
(img)
2. 进入[https://mapshaper.org/]导入刚刚下载的_geojson_文件
(img)
3. 导出，得到一个压缩包
(img)
(img)
4. 将该压缩包解压到_geoserver_数据目录`<安装目录>/data_dir/data/`
(img)
----
## 六、发布矢量切片
1. **新建工作区**
(img)
设置命名和_url_
(img)
----
2. **新建数据存储**
(img)
选择_shp_（其他格式数据也同理，这里以发布_shp_为例）
(img)
配置工作区、命名、编码
(img)
选择第五步中存入的_shp_文件
(img)
----
3. **新建图层**
找到添加的数据图层，进入编辑
(img)
在_“数据面板”_，配置命名、标题、坐标系统、边界值
(img)
配置坐标系统、边界范围
(img)
在_“Tile Caching”_，勾选`application/vnd.mapbox-vector-tile`（上述第二步安装了插件才有）
(img)
在 _gridset_ 添加 _EPSG:900913_
(img)
----
**上述操作添加完毕。**
----
4. **预览效果**
在“切片图层”打开刚刚创建的pdf
(img)
预览效果如下
(img)
----
5. **获取服务地址（供mapbox使用）**
点击 _geoserver_ 的 _logo_，选择 _TMS_ 发布
（这里以 _TMS_ 为例）
(img)
浏览器搜索_“pdf”_
(img)
拷贝地址进行拼接 + `/{z}/{x}/{y}.pbf `
完整的就是：
`"http://localhost:8080/geoserver/gwc/service/tms/1.0.0/GDFS%3AGDFS@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"`

----
## 七、mapbox调用
在 `map.on('load')` 中使用 `addLayer` 添加 `vector` 图层
```typescript
map.on('load', function() {
    // Add Mapillary sequence layer.
    // https://www.mapillary.com/developer/tiles-documentation/#sequence-layer
    map.addLayer({
        "id": "GDFS",
        "type": "fill",
        "source": {
            "type": "vector",
            "scheme":"tms",
            "tiles": ["http://localhost:8080/geoserver/gwc/service/tms/1.0.0/GDFS%3AGDFS@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"],
            "minzoom": 1,
            "maxzoom": 14
        },
        "source-layer": "GDFS",
        "paint": {
            "fill-color":"#088",
            "fill-opacity":0.8
        }
    });
});
```
(img)
**效果展示（佛山市）**
(img)