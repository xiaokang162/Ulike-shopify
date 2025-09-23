var $a87C$export$default = (function () {
  function ShootingStar() {
    var _this = this

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
    }

    this.datUniformData = controller.addUniformData(
      $a87C$var$uniformData,
      uniforms
    )

    var geometry = (this.geometry = new THREE.BufferGeometry())
    var positions = []
    var mouse = []
    var aFront = []
    var random = []

    for (var i = 0; i < $a87C$var$COUNT; i++) {
      positions.push(Math.random(), Math.random(), Math.random())
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
    var $v3o$$interop$default = $parcel$interopDefault($v3o$exports)

    var material = (this.material = new THREE.RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: $puli$$interop$default.d,
      fragmentShader: $v3o$$interop$default.d,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
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
        this.mesh.visible = this.datData.visible
      },
    },
    {
      key: 'draw',
      value: function draw(_ref) {
        var clientX = _ref.clientX,
          clientY = _ref.clientY

        this.enableSaveCoordinate &&
          this.lineCoordinateList.push({
            clientX: clientX,
            clientY: clientY,
          })

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
    {
      key: 'start',
      value: function start() {
        var _this3 = this
        this.mesh.visible = true // 确保光点 mesh 是可见的
        this.oldPosition = null
        window.addEventListener('pointermove', function (e) {
          var clientX = e.clientX,
            clientY = e.clientY

          _this3.draw({
            clientX: clientX - $mrfc$export$default.clientHalfWidth,
            clientY: clientY - $mrfc$export$default.clientHalfHeight,
          })
        })
        window.addEventListener('touchmove', function (e) {
          var _e$touches$ = e.touches[0],
            clientX = _e$touches$.clientX,
            clientY = _e$touches$.clientY

          _this3.draw({
            clientX: clientX - $mrfc$export$default.clientHalfWidth,
            clientY: clientY - $mrfc$export$default.clientHalfHeight,
          })
        })
      },
    },
  ])

  return ShootingStar
})()
