;(function () {
  // 定义一个立即执行的匿名函数，创建一个局部作用域以避免变量污染全局环境
  function ShootingStar() {
    // 定义 ShootingStar 类，构造函数用于初始化流星效果
    var _this = this

    $a87C$var$_classCallCheck(this, ShootingStar) // 检查 ShootingStar 类是否被正确调用
    var root = $mrfc$export$default.root,
      controller = $mrfc$export$default.controller // 获取场景根节点 root 和控制器 controller
    this.root = root // 将 root 赋值给类的实例属性
    this.rate = 1 // 设置流星的速率初始值为 1
    this.setSize() // 调用 setSize 方法调整速率
    var folder = controller.addFolder('Shooting Star') // 使用控制器创建名为 "Shooting Star" 的 GUI 文件夹
    this.datData = controller.addData($a87C$var$data, {
      folder: folder,
    }) // 将数据 datData 添加到控制器中以便动态修改

    var front = new THREE.Vector2() // 创建一个新的 2D 向量 front，用于保存流星的前进方向
    var uniforms = {
      // 定义着色器的 uniform 变量，用于传递自定义属性
      resolution: {
        value: $mrfc$export$default.resolution,
      },
      pixelRatio: {
        value: root.renderer.getPixelRatio(), // 传递屏幕分辨率
      },
      timestamp: {
        value: 0,
      },
    }

    this.datUniformData = controller.addUniformData(
      $a87C$var$uniformData,
      uniforms,
      {
        folder: folder,
      }
    ) // 将 uniforms 数据绑定到 GUI 控制器中

    var geometry = (this.geometry = new THREE.BufferGeometry()) // 创建流星几何体并赋值给 geometry 属性
    var positions = [] // 创建位置数组，存储每个顶点的位置
    var mouse = [] // 创建 mouse 数组，存储每个顶点的鼠标交互状态
    var aFront = [] // 创建 aFront 数组，存储流星的前进方向
    var random = [] // 创建 random 数组，存储每个流星的随机偏移值

    for (var i = 0; i < $a87C$var$COUNT; i++) {
      // 生成流星点数据
      positions.push(Math.random(), Math.random(), Math.random()) // 为每个流星生成随机位置
      mouse.push(-1, -1, 0, 0) // 初始化鼠标数据
      aFront.push(front.x, front.y) // 存储前进方向
      random.push(Math.random()) // 存储随机值
    }

    geometry.addAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    ) // 将 positions 数组添加到 geometry 的 position 属性
    geometry.addAttribute(
      'mouse',
      new THREE.Float32BufferAttribute(mouse, $a87C$var$MOUSE_ATTRIBUTE_COUNT)
    ) // 将 mouse 数组添加到 geometry 的 mouse 属性
    geometry.addAttribute(
      'aFront',
      new THREE.Float32BufferAttribute(aFront, $a87C$var$FRONT_ATTRIBUTE_COUNT)
    ) // 将 aFront 数组添加到 geometry 的 aFront 属性
    geometry.addAttribute('random', new THREE.Float32BufferAttribute(random, 1)) // 将 random 数组添加到 geometry 的 random 属性

    var $puli$$interop$default = $parcel$interopDefault($puli$exports)
    var $v3o$$interop$default = $parcel$interopDefault($v3o$exports)
    var material = (this.material = new THREE.RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: $puli$$interop$default.d,
      fragmentShader: $v3o$$interop$default.d,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    })) // 创建 RawShaderMaterial 材质以添加自定义着色器

    var mesh = (this.mesh = new THREE.Points(geometry, material)) // 创建 Point Mesh 对象，将流星作为点状物体添加
    mesh.frustumCulled = false // 禁用视锥裁剪确保所有流星都显示
    mesh.visible = this.datData.visible // 将流星的可见状态绑定到 datData 控制数据
    root.add(mesh) // 将 mesh 添加到根节点场景中

    this.mouseI = 0 // 初始化 mouseI 变量，跟踪鼠标事件
    this.lineCoordinateList = [] // 初始化 lineCoordinateList 数组，保存流星轨迹坐标
    this.enableSaveCoordinate = false // 是否保存轨迹的开关

    root.addResizeCallback(function () {
      // 监听窗口大小改变
      _this.setSize() // 调整速率
      material.uniforms['resolution'].value = $mrfc$export$default.resolution
    })

    root.addUpdateCallback(function (timestamp) {
      _this.update(timestamp) // 更新时间戳
    })
  }

  $a87C$var$_createClass(ShootingStar, [
    {
      key: 'setSize',
      value: function setSize() {
        this.rate = Math.min(
          $mrfc$export$default.ratio > $mrfc$export$default.initialRatio
            ? $mrfc$export$default.clientHeight /
                $mrfc$export$default.initialClientHeight
            : $mrfc$export$default.clientWidth /
                $mrfc$export$default.initialClientWidth,
          1
        ) // 根据窗口比率计算流星速率
        this.rate *=
          1 /
          ($mrfc$export$default.clientHeight /
            $mrfc$export$default.initialClientHeight)
      },
    },
    {
      key: 'update',
      value: function update(timestamp) {
        var _this2 = this
        this.timestamp = timestamp // 更新时间戳
        this.material.uniforms['timestamp'].value = timestamp // 更新材质时间戳
        this.mesh.visible = this.datData.visible // 控制流星是否显示
        $a87C$var$dataKeys.forEach(function (key) {
          _this2.material.uniforms[key].value = _this2.datUniformData[key] // 更新 uniform 数据
        })
      },
    },
    {
      key: 'draw',
      value: function draw(_ref) {
        var clientX = _ref.clientX,
          clientY = _ref.clientY
        this.enableSaveCoordinate &&
          this.lineCoordinateList.push({ clientX: clientX, clientY: clientY }) // 记录流星轨迹
        var x = clientX * this.rate + $mrfc$export$default.clientHalfWidth
        var y =
          $mrfc$export$default.clientHeight -
          (clientY * this.rate + $mrfc$export$default.clientHalfHeight)
        var newPosition = new THREE.Vector2(x, y) // 创建新的流星位置

        var diff = this.oldPosition
          ? newPosition.clone().sub(this.oldPosition)
          : new THREE.Vector2() // 计算位置差异
        var length = diff.length()
        var front = diff.clone().normalize() // 计算方向

        for (var i = 0; i < $a87C$var$PER_MOUSE; i++) {
          var ci =
            (this.mouseI %
              ($a87C$var$COUNT * $a87C$var$MOUSE_ATTRIBUTE_COUNT)) +
            i * $a87C$var$MOUSE_ATTRIBUTE_COUNT
          var position = this.oldPosition
            ? this.oldPosition
                .clone()
                .add(diff.clone().multiplyScalar(i / $a87C$var$PER_MOUSE))
            : newPosition
          this.geometry.attributes['mouse'].array[ci] = position.x
          this.geometry.attributes['mouse'].array[ci + 1] = position.y
          this.geometry.attributes['mouse'].array[ci + 2] = this.timestamp
          this.geometry.attributes['mouse'].array[ci + 3] = length
          this.geometry.attributes['aFront'].array[ci] = front.x
          this.geometry.attributes['aFront'].array[ci + 1] = front.y
        }

        this.oldPosition = newPosition
        this.geometry.attributes['mouse'].needsUpdate = true
        this.geometry.attributes['aFront'].needsUpdate = true
        this.mouseI += $a87C$var$MOUSE_ATTRIBUTE_COUNT * $a87C$var$PER_MOUSE
      },
    },
    {
      key: 'start',
      value: function start() {
        var _this3 = this
        this.oldPosition = null // 初始化前一个位置
        window.addEventListener('pointermove', function (e) {
          var clientX = e.clientX,
            clientY = e.clientY
          _this3.draw({
            clientX: clientX - $mrfc$export$default.clientHalfWidth,
            clientY: clientY - $mrfc$export$default.clientHalfHeight,
          })
        }) // 监听鼠标移动事件并更新流星位置
        window.addEventListener('pointerdown', function (e) {
          var clientX = e.clientX,
            clientY = e.clientY
          _this3.enableSaveCoordinate = true // 开启轨迹保存
          _this3.draw({
            clientX: clientX - $mrfc$export$default.clientHalfWidth,
            clientY: clientY - $mrfc$export$default.clientHalfHeight,
          })
        }) // 监听鼠标按下事件，开启轨迹记录

        window.addEventListener('pointerup', function (e) {
          var clientX = e.clientX,
            clientY = e.clientY
          _this3.enableSaveCoordinate = false // 关闭轨迹保存
          _this3.draw({
            clientX: clientX - $mrfc$export$default.clientHalfWidth,
            clientY: clientY - $mrfc$export$default.clientHalfHeight,
          })
        }) // 监听鼠标释放事件，停止轨迹记录
      },
    },
  ])
  return ShootingStar
})()
