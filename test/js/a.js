var $a87C$export$default1 = (function () {
  function ShootingStar() {
    var _this = this
    var numD = 100
    $a87C$var$_classCallCheck(this, ShootingStar)

    var root = $mrfc$export$default.root,
      controller = $mrfc$export$default.controller
    this.root = root
    this.rate = 1
    this.setSize()

    this.datData = controller.addData($a87C$var$data)

    var front = new THREE.Vector2()
    var uniforms = {
      resolution: {
        value: $mrfc$export$default.resolution,
      },
      pixelRatio: {
        value: root.renderer.getPixelRatio(),
      },
      timestamp: {
        value: 0,
      },
      fallSpeed: {
        value: 0.005, // 设置下落速度
      },
    }

    this.datUniformData = controller.addUniformData(
      $a87C$var$uniformData1,
      uniforms
    )

    var geometry = (this.geometry = new THREE.BufferGeometry())
    var positions = []
    var mouse = []
    var aFront = []
    var random = []

    // 初始化一些流星位置数据
    for (var i = 0; i < $a87C$var$COUNT; i++) {
      positions.push(Math.random(), Math.random(), Math.random()) // 随机x、y、z坐标
      mouse.push(-1, -1, 0, 0)
      aFront.push(front.x, front.y)
      random.push(Math.random())
    }

    geometry.addAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.addAttribute(
      'mouse',
      new THREE.Float32BufferAttribute(mouse, $a87C$var$MOUSE_ATTRIBUTE_COUNT)
    )
    geometry.addAttribute(
      'aFront',
      new THREE.Float32BufferAttribute(aFront, $a87C$var$FRONT_ATTRIBUTE_COUNT)
    )
    geometry.addAttribute('random', new THREE.Float32BufferAttribute(random, 1))

    var $puli$$interop$default = $parcel$interopDefault($puli$exports)
    var $v3o$$interop$default = $parcel$interopDefault($v3o$exports1)

    var material = (this.material = new THREE.RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: $puli$$interop$default.d,
      fragmentShader: $v3o$$interop$default.d,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      size: 0.02,
    }))

    var mesh = (this.mesh = new THREE.Points(geometry, material))
    mesh.frustumCulled = false
    mesh.visible = this.datData.visible
    root.add(mesh)

    this.mouseI = 0
    this.lineCoordinateList = []
    this.enableSaveCoordinate = false

    root.addResizeCallback(function () {
      _this.setSize()
      material.uniforms['resolution'].value = $mrfc$export$default.resolution
    })
    root.addUpdateCallback(function (timestamp) {
      _this.update(timestamp)
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
        )
        this.rate *=
          1 /
          ($mrfc$export$default.clientHeight /
            $mrfc$export$default.initialClientHeight)
      },
    },
    {
      key: 'update',
      value: function update(timestamp) {
        this.timestamp = timestamp
        this.material.uniforms['timestamp'].value = timestamp

        // 下落的速度控制
        const fallSpeed = this.material.uniforms['fallSpeed'].value

        // 更新每个流星的位置
        const positions = this.geometry.attributes['position'].array
        for (let i = 0; i < positions.length; i += 3) {
          // 使每个流星从屏幕顶部开始下落
          positions[i + 1] -= fallSpeed // 更新y坐标使其下落
          // 如果流星已经下落到屏幕底部，将其重置到顶部
          // if (positions[i + 1] < 0) {
          //   positions[i + 1] = 1 // 重置y坐标到顶部
          //   positions[i] = Math.random() // 随机x位置
          //   positions[i + 2] = Math.random() // 随机z位置
          // }
        }

        // 更新几何体的坐标数据
        this.geometry.attributes['position'].needsUpdate = true
      },
    },
    {
      key: 'start',
      value: function start() {
        var _this3 = this
        var w = window.innerWidth
        var h = window.innerHeight
        this.mesh.visible = true // 确保光点 mesh 是可见的
        this.oldPosition = null

        // 定期创建新的随机点并绘制
        setInterval(function () {
          // 随机生成新的流星点
          var positions = _this3.geometry.attributes['position'].array
          var i = Math.floor(Math.random() * $a87C$var$COUNT) * 3
          // positions[i] = Math.random() // 随机x位置
          positions[i] = Math.floor(Math.random() * w) - w / 2 // 随机x位置
          positions[i + 1] = -h / 2 // 重置y坐标到顶部
          positions[i + 2] = -1 // 随机z位置
          // 使用draw方法绘制新的流星点
          _this3.draw({
            clientX: positions[i], // x坐标
            clientY: -h / 2, // y坐标
          })
          _this3.geometry.attributes['position'].needsUpdate = true
        }, 500) // 每100毫秒创建并绘制一个新流星
      },
    },
    {
      key: 'draw',
      value: function draw(_ref) {
        var clientX = _ref.clientX,
          clientY = _ref.clientY
        console.log(_ref)

        var x = clientX * this.rate + $mrfc$export$default.clientHalfWidth
        var y =
          $mrfc$export$default.clientHeight -
          (clientY * this.rate + $mrfc$export$default.clientHalfHeight)
        var newPosition = new THREE.Vector2(x, y)
        var diff = this.oldPosition
          ? newPosition.clone().sub(this.oldPosition)
          : new THREE.Vector2()
        var length = diff.length()
        var front = diff.clone().normalize()

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
  ])

  return ShootingStar
})()
