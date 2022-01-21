[TOC]

#### 环境搭建
* vscode 然后创建文件夹, 比如3D
* npm init
* npm install —save three #安装three.js依赖包
* 找到index.html 
  <script type="module">
      import * as THREE from './node_modules/three/src/Three.js';
      var scene, camera, renderer;
      function initThree(){
        console.log("1111")
        loop();
      }
      function loop(){
      }
      window.onload = initThree;
  </script>
* 使用python3内置服务器 python3 -m http.server [port] , 然后选择 01.html 就可以预览了
* resources: 来源于 threejs 源代码中的资源文件

#### 模型支持的格式 
  * obj: 
    * 概念：老牌通用3d模型文件，不包含贴图，材质，动画等信息
  * gltf: 
    * 概念：由OpenGL官方维护团队推出的现代3d模型通用格式，可以包含几何体、材质、动画及场景、摄影机等信息，并且文件量还小。有3D模型界的JPEG之称，
    * 以插件 GLTFLoader.js 形势提供

#### 编辑器
  * three.js 在线编辑器：https://threejs.org/editor/ ，可以导入/导出模型文件
  * blender 软件

#### Demo （https://threejs.org/manual/）
开发工具：vscode
服务启动： python3 -m http.server 8300  #8300是端口号
命令行网络代理：export https_proxy=127.0.0.1:9999
例子
[01basic] -- 基础
[03scene] -- 场景
[05texture] -- 纹理, 做了简单封装

#### 术语
* 场景 scene
* 摄像头 camera
    * 透视相机 perspectiveCamera
        > 目的：通过以下参数决定scene里的哪些三维顶点会被渲染绘制出来
        fov: 视口 
        aspect: 视口宽高比--（一般用 画布宽/高 即可）
        near: 能看多近
        far：能看多远
        perspectiveCamera(fov:Number, aspect:Number, near:Number, far:Number)

    * 正交相机 orthographicCamera
* 3D模型：
    * 由一个或多个几何体构成
    * 包含 贴图 信息
        * 贴图（texture 或 纹理) -- 设计师的工作
            * 可以理解为在立方体上包裹一张白卡纸绘画
            * 可以和光照发生反应
            * 分类
              * 普通贴图（_col / .map 替代颜色）
              * 法线贴图（_nor / .normalMap 让细节程度较低的表面生成高细节程度的精确光照方向和反射效果）
              * 环境光遮蔽贴图（_occ / .aoMap 用来描绘物体和物体相交或靠近的时候遮挡周围漫反射光线的效果）
              * 环境反射贴图（ .envMap 用于模拟材质反射周围环境的效果）
    * 包含 材质 信息
        * 材质
            * 延续贴图想象，白卡纸 可以换成 油纸，白卡纸、油纸就是材质
            * MeshBasicMaterial -- 基础材质，不受光照影响
            * MeshStandardMaterial -- PBR标准材质
            * MeshPhongMaterial -- 高光材质，适用于陶瓷，烤漆类质感
            * MeshToonMaterial -- 卡通材质
            * MeshStandardMaterial -- PBR标准材质模拟金属反射
* 灯光 light
    * ambientLight -- 环境光：没有方向全局打亮，不会产生明暗
    * directionLight -- 平行光
    * pointLight -- 点光源，类似灯泡
    * spotLight -- 聚光灯，类似舞台聚光灯

#### 参考资料
* [官方文档](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)
* [基础参考手册](https://threejs.org/manual/#zh/fundamentals)
* [three.js 在线编辑器](https://threejs.org/editor/), 还有 blender 等软件
* [3D模型网站](https://sketchfab.com/)--免费或付费
* [掘金实战一](https://juejin.cn/post/6981249521258856456)
* [掘金实战二](https://juejin.cn/post/6981249521258856456)