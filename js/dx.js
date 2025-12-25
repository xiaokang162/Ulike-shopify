!(function () {
  'use strict'
  var t = {
      2908: function (t, e, n) {
        n(1181),
          n(9665),
          n(5767),
          n(9115),
          n(522),
          n(6059),
          n(6108),
          n(6253),
          n(110),
          n(2139),
          n(1246),
          n(1466),
          n(1876)
        var i = n(8670),
          o = n(7856),
          r = n(3180),
          s = n(6086),
          a = n(4656),
          c = n(7274),
          l = n(7971),
          h = n(4954),
          u = (window.sdListenersLoadProgress =
            window.sdListenersLoadProgress || []),
          v = (window.sdListenersLoadDone = window.sdListenersLoadDone || []),
          d = n(5729),
          m = n(3106),
          g = n(5432),
          f = n(7650),
          p = n(4295)
        function y(t, e) {
          ;(null == e || e > t.length) && (e = t.length)
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n]
          return i
        }
        n(3510),
          new ((function (t) {
            ;(0, r.Z)(x, t)
            var e,
              n,
              c =
                ((e = x),
                (n = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    )
                  } catch (t) {
                    return !1
                  }
                })()),
                function () {
                  var t,
                    i = (0, a.Z)(e)
                  if (n) {
                    var o = (0, a.Z)(this).constructor
                    t = Reflect.construct(i, arguments, o)
                  } else t = i.apply(this, arguments)
                  return (0, s.Z)(this, t)
                })
            function x() {
              return (0, i.Z)(this, x), c.apply(this, arguments)
            }
            return (
              (0, o.Z)(x, [
                {
                  key: 'init',
                  value: function () {
                    var t = this
                    ;(this.state = {
                      current: 'kv',
                      splash: !1,
                      startPosition: 0,
                      movePosition: 0,
                      about: !1,
                    }),
                      (this.kv = document.querySelector('.lTop-top')),
                      (this.jsonAnime = document.querySelector('#jsonAnime')),
                      (this.kvTitleSvg = document.querySelectorAll(
                        '.lTop-kv-title .svg-path'
                      )),
                      (this.kvSubTitle =
                        document.querySelector('.lTop-kv-subtitle')),
                      (this.kvScrollText = document.querySelector(
                        '.lTop-kv-scroll-text'
                      )),
                      (this.main = document.querySelector('.cMain')),
                      (this.header = document.querySelector('.cHeader')),
                      (this.footer = document.querySelector('.cFooter')),
                      (this.works =
                        document.querySelectorAll('.cWorks-item.-show')),
                      (this.worksBtn =
                        document.querySelector('.lTop-worksBtn')),
                      (this.canvas = document.querySelector('.lTop-canvas')),
                      (this.about = document.querySelector('.lTop-about')),
                      (this.loading = document.querySelector('.cLoading')),
                      (this.loadingText =
                        document.querySelector('.cLoading-text')),
                      (this.loadingNumber = document.querySelector(
                        '.cLoading-text-progress-number'
                      )),
                      (this.loadingCover =
                        document.querySelector('.cLoading-cover')),
                      (this.worksItemList =
                        document.querySelectorAll('.cWorks-item')),
                      (this.lottie = lottie.loadAnimation({
                        container: document.getElementById('jsonAnime'),
                        renderer: 'svg',
                        loop: !1,
                        autoplay: !1,
                        path: '/assets/img/json/data_1200_1200.json',
                      }))
                    var e,
                      n = !1,
                      i = 0,
                      o = (function (t, e) {
                        var n
                        if (
                          'undefined' == typeof Symbol ||
                          null == t[Symbol.iterator]
                        ) {
                          if (
                            Array.isArray(t) ||
                            (n = (function (t, e) {
                              if (t) {
                                if ('string' == typeof t) return y(t, e)
                                var n = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1)
                                return (
                                  'Object' === n &&
                                    t.constructor &&
                                    (n = t.constructor.name),
                                  'Map' === n || 'Set' === n
                                    ? Array.from(t)
                                    : 'Arguments' === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n
                                      )
                                    ? y(t, e)
                                    : void 0
                                )
                              }
                            })(t)) ||
                            (e && t && 'number' == typeof t.length)
                          ) {
                            n && (t = n)
                            var i = 0,
                              o = function () {}
                            return {
                              s: o,
                              n: function () {
                                return i >= t.length
                                  ? { done: !0 }
                                  : { done: !1, value: t[i++] }
                              },
                              e: function (t) {
                                throw t
                              },
                              f: o,
                            }
                          }
                          throw new TypeError(
                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                          )
                        }
                        var r,
                          s = !0,
                          a = !1
                        return {
                          s: function () {
                            n = t[Symbol.iterator]()
                          },
                          n: function () {
                            var t = n.next()
                            return (s = t.done), t
                          },
                          e: function (t) {
                            ;(a = !0), (r = t)
                          },
                          f: function () {
                            try {
                              s || null == n.return || n.return()
                            } finally {
                              if (a) throw r
                            }
                          },
                        }
                      })(document.cookie.split(';'))
                    try {
                      for (o.s(); !(e = o.n()).done; ) {
                        var r = e.value.split('=')
                        r[0].match(/works/) &&
                          r[1] > 0 &&
                          ((n = !0), (i = Number(r[1])))
                      }
                    } catch (t) {
                      o.e(t)
                    } finally {
                      o.f()
                    }
                    for (
                      var s = function (t) {
                          document
                            .querySelectorAll('[data-number]')
                            [t].addEventListener('click', function (e) {
                              var n = document
                                  .querySelectorAll('[data-number]')
                                  [t].getAttribute('data-number'),
                                i = new Date()
                              i.setDate(i.getDate() + 1),
                                (document.cookie =
                                  'works=' +
                                  n +
                                  ';expires=' +
                                  i.toUTCString() +
                                  ';')
                            })
                        },
                        a = 0;
                      a < document.querySelectorAll('[data-number]').length;
                      a++
                    )
                      s(a)
                    var c,
                      l = document.referrer
                    ;(l = l.split('/')),
                      n &&
                      'works' === l[3] &&
                      !1 !== l[4] &&
                      void 0 !== l[4] &&
                      null !== l[4]
                        ? this.worksSet(i)
                        : ((this._callbackLoadProgress =
                            this._updateLoadingProgress.bind(this)),
                          (c = this._callbackLoadProgress),
                          u.push(c),
                          (this._callbackLoadDone =
                            this._onLoadDone.bind(this)),
                          (function (t) {
                            v.push(t)
                          })(this._callbackLoadDone)),
                      this.loadSet(),
                      this.kv.addEventListener('wheel', function (e) {
                        e.deltaY > 5 && t.kvScroll(e)
                      }),
                      this.main.addEventListener('wheel', function (e) {
                        e.deltaY < -5 && t.mainScroll(e)
                      }),
                      (this._kvstartHandler = this._kvTouchstart.bind(this)),
                      this.kv.addEventListener(
                        'touchstart',
                        this._kvstartHandler,
                        'passive'
                      ),
                      (this._kvmoveHandler = this._kvTouchmove.bind(this)),
                      this.kv.addEventListener(
                        'touchmove',
                        this._kvmoveHandler,
                        'passive'
                      ),
                      (this._mainstartHandler =
                        this._mainTouchstart.bind(this)),
                      this.main.addEventListener(
                        'touchstart',
                        this._mainstartHandler,
                        'passive'
                      ),
                      (this._mainmoveHandler = this._mainTouchmove.bind(this)),
                      this.main.addEventListener(
                        'touchmove',
                        this._mainmoveHandler,
                        'passive'
                      ),
                      (document.cookie = 'works=; max-age=0;'),
                      (this._callbackScroll = this.onScroll.bind(this)),
                      h.Z.cScroll.onCall(this._callbackScroll)
                  },
                },
                {
                  key: 'loadSet',
                  value: function () {
                    window.scrollTo(0, 0)
                  },
                },
                {
                  key: 'worksSet',
                  value: function (t) {
                    if (
                      (l.Z.set(this.loading, { display: 'none' }),
                      l.Z.set(this.header, { opacity: 1 }),
                      (this.webgl = new d.Z(this.lottie)),
                      (this.splash = new m.V(this.state, !0)),
                      (this.worksList = new g.R()),
                      this.scrollNext(!1),
                      t > 5)
                    )
                      this.workShow(t)
                    else {
                      var e =
                        document
                          .querySelectorAll('[data-number]')
                          [t].getBoundingClientRect().top + window.pageYOffset
                      setTimeout(function () {
                        h.Z.cScroll.scrollTo(e)
                      }, 1e3)
                    }
                  },
                },
                {
                  key: '_updateLoadingProgress',
                  value: function (t) {
                    var e = t <= 10 ? '0' + Math.floor(t) : Math.floor(t)
                    this.loadingNumber.innerHTML = e
                    var n = (100 - t) / 100
                    l.Z.set(this.loadingCover, { opacity: n })
                  },
                },
                {
                  key: '_onLoadDone',
                  value: function () {
                    var t = this
                    l.Z.to(this.loading, {
                      opacity: 0,
                      display: 'none',
                      duration: 1.2,
                      onStart: function () {
                        setTimeout(function () {
                          ;(t.webgl = new d.Z(t.lottie)),
                            (t.splash = new m.V(t.state, !1)),
                            (t.worksList = new g.R())
                        }, 500)
                      },
                    })
                  },
                },
                {
                  key: '_kvTouchstart',
                  value: function (t) {
                    var e = (0, f.fC)(t)
                    this.state.startPosition = e.y
                  },
                },
                {
                  key: '_kvTouchmove',
                  value: function (t) {
                    t.preventDefault(),
                      (0, f.fC)(t).y - this.state.startPosition < 0 &&
                        this.kvScroll()
                  },
                },
                {
                  key: '_mainTouchstart',
                  value: function (t) {
                    var e = (0, f.fC)(t)
                    this.state.startPosition = e.y
                  },
                },
                {
                  key: '_mainTouchmove',
                  value: function (t) {
                    ;(0, f.fC)(t).y - this.state.startPosition > 0 &&
                      this.mainScroll()
                  },
                },
                {
                  key: 'kvScroll',
                  value: function () {
                    this.state.splash && this.scrollNext(!0)
                  },
                },
                {
                  key: 'mainScroll',
                  value: function () {
                    h.Z.scrollY <= 100 && this.scrollPrev()
                  },
                },
                {
                  key: 'scrollPrev',
                  value: function () {
                    var t = this
                    'kv' !== this.state.current &&
                      ((this.state.current = 'kv'),
                      (this.state.splash = !1),
                      (this.webgl.stop = !1),
                      l.Z.set(
                        [this.kvTitleSvg, this.kvSubTitle, this.kvScrollText],
                        { opacity: 0 }
                      ),
                      l.Z.set(this.kv, { opacity: 1, pointerEvents: 'auto' }),
                      l.Z.fromTo(
                        this.jsonAnime,
                        { opacity: 0 },
                        { delay: 1, opacity: 1, duration: 1 }
                      ),
                      l.Z.to([this.main, this.header, this.footer], {
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: function () {
                          document.documentElement.classList.remove('-main'),
                            t.splash.kvShow(!0),
                            l.Z.set([t.main, t.footer], {
                              display: 'none',
                              onComplete: function () {
                                ;(0, p.kP)()
                              },
                            })
                        },
                      }),
                      l.Z.to(this.canvas, { opacity: 0.5, duration: 1 }))
                  },
                },
                {
                  key: 'scrollNext',
                  value: function (t) {
                    var e = this
                    'main' !== this.state.current &&
                      ((this.state.current = 'main'),
                      l.Z.to(this.canvas, {
                        opacity: 0,
                        duration: 1,
                        onComplete: function () {
                          e.webgl.stop = !0
                        },
                      }),
                      l.Z.to(this.kv, {
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: function () {
                          l.Z.set(e.kv, { pointerEvents: 'none' })
                        },
                      }),
                      l.Z.set([this.main, this.footer], {
                        display: 'block',
                        onComplete: function () {
                          ;(0, p.kP)(),
                            l.Z.to([e.main, e.footer], {
                              opacity: 1,
                              duration: 0.2,
                              ease: 'power2.out',
                              onComplete: function () {
                                document.documentElement.classList.add('-main')
                              },
                            })
                        },
                      }),
                      t &&
                        l.Z.fromTo(
                          [this.works, this.worksBtn],
                          { y: 20, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            duration: 1.4,
                            delay: 0.6,
                            ease: 'power2.out',
                            stagger: {
                              grid: 'auto',
                              from: 'start',
                              amount: 0.4,
                            },
                          }
                        ))
                  },
                },
                {
                  key: 'workShow',
                  value: function (t) {
                    ;(this.worksList.state.current = Number(t)),
                      this.worksList.set()
                    for (var e = 0; e < t + 1; e++)
                      this.worksItemList[e].classList.remove('-none'),
                        this.worksItemList[e].classList.add('-show'),
                        l.Z.set(this.worksItemList[e], {
                          display: 'block',
                          opacity: 1,
                        })
                    l.Z.set(this.worksBtn, { display: 'block', opacity: 1 })
                    var n =
                      this.worksItemList[Number(t)].getBoundingClientRect()
                        .top + window.pageYOffset
                    setTimeout(function () {
                      h.Z.cScroll.scrollTo(n)
                    }, 1e3)
                  },
                },
                {
                  key: 'onScroll',
                  value: function (t, e, n) {
                    var i = this
                    'about' === t && 'enter' === e
                      ? ((this.webgl.stop = !1),
                        l.Z.to(this.canvas, { opacity: 1, duration: 1 }))
                      : 'about' === t &&
                        'exit' === e &&
                        l.Z.to(this.canvas, {
                          opacity: 0,
                          duration: 1,
                          onComplete: function () {
                            i.webgl.stop = !0
                          },
                        })
                  },
                },
              ]),
              x
            )
          })(c.Z))()
      },
      5729: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return h
          },
        })
        var i = n(8670),
          o = n(7856),
          r = n(7971),
          s = n(3894),
          a = n(6449),
          c = n(3510),
          l = (function () {
            function t(e) {
              ;(0, i.Z)(this, t),
                (this.lottie = e),
                (this.loaded = !1),
                (this.canvas = document.querySelector('[data-l-kv-canvas]')),
                (this.Theme = {
                  _gray: 15730057,
                  _dark: 15730057,
                  _cont: 15730057,
                  _blue: 15730057,
                  _red: 15730057,
                  _cyan: 15730057,
                  _white: 15730057,
                }),
                (this.scene = null),
                (this.camera = null),
                (this.renderer = null),
                (this.container = null),
                (this.width = null),
                (this.height = null),
                (this.ambientLights = null),
                (this.lights = null),
                (this.rectAreaLight = null),
                (this.skin = null),
                (this.mat = null),
                (this.geo = null),
                (this.groupMoon = new THREE.Group()),
                (this.uniforms = {
                  time: { type: 'f', value: 0 },
                  RGBr: { type: 'f', value: 0 },
                  RGBg: { type: 'f', value: 0 },
                  RGBb: { type: 'f', value: 0 },
                  RGBn: { type: 'f', value: 0 },
                  RGBm: { type: 'f', value: 0 },
                  morph: { type: 'f', value: 0 },
                  dnoise: { type: 'f', value: 0 },
                  psize: { type: 'f', value: 3 },
                }),
                (this.options = {
                  perlin: { time: 2, morph: 0, dnoise: 2.5 },
                  chroma: { RGBr: 0, RGBg: 0, RGBb: 0, RGBn: 0.2, RGBm: 1 },
                  camera: {
                    zoom: c.Z.isSp ? 125 : 215,
                    speedY: 0.1,
                    speedX: 0,
                    guide: !1,
                  },
                  sphere: { wireframe: !1, points: !1, psize: 3 },
                })
            }
            return (
              (0, o.Z)(t, [
                {
                  key: 'init',
                  value: function () {
                    var t = this,
                      e = c.Z.isSp
                        ? '../images/img_bg1.png'
                        : '../images/img_bg.png'
                    this.loadTexture(e, function () {
                      t.createWorld(),
                        t.createLights(),
                        t.createGrid(),
                        t.createSkin(),
                        t.lottie.stop(),
                        setTimeout(function () {
                          t.lottie.play()
                        }, 1e3),
                        (t.loaded = !0),
                        r.Z.fromTo(
                          t.canvas,
                          { opacity: 0 },
                          { opacity: 1, duration: 2, ease: 'power1.in' }
                        )
                    })
                  },
                },
                {
                  key: 'loadTexture',
                  value: function (t, e) {
                    var n = this
                    new THREE.TextureLoader().load(t, function (t) {
                      ;(t.magFilter = THREE.NearestFilter),
                        (t.minFilter = THREE.NearestFilter),
                        (n.texture = t),
                        e()
                    })
                  },
                },
                {
                  key: 'createWorld',
                  value: function () {
                    var t = this
                    ;(this.width = window.innerWidth),
                      (this.height = window.innerHeight),
                      (this.scene = new THREE.Scene()),
                      (this.scene.fog = new THREE.Fog(
                        this.Theme._dark,
                        150,
                        320
                      )),
                      (this.scene.background = this.texture),
                      this.scene.add(this.groupMoon),
                      (this.loader = new THREE.TextureLoader()),
                      (this.camera = new THREE.PerspectiveCamera(
                        10,
                        this.width / this.height,
                        1,
                        1e3
                      )),
                      this.camera.position.set(0, 10, 120),
                      r.Z.set(this.camera.position, {
                        z: 300 - this.options.camera.zoom,
                      }),
                      (this.renderer = new THREE.WebGLRenderer({
                        antialias: !0,
                        alpha: !0,
                      })),
                      this.renderer.setSize(this.width, this.height),
                      (this.renderer.shadowMap.enabled = !0),
                      this.canvas.appendChild(this.renderer.domElement),
                      window.addEventListener('resize', function () {
                        t.resize()
                      })
                  },
                },
                {
                  key: 'createLights',
                  value: function () {
                    var t = new THREE.HemisphereLight(
                        this.Theme._cont,
                        this.Theme._white,
                        1
                      ),
                      e = new THREE.PointLight(this.Theme._white, 1)
                    e.position.set(-5, -20, -20)
                    var n = new THREE.RectAreaLight(this.Theme._white, 20, 3, 3)
                    n.position.set(0, 0, 2)
                    var i = new THREE.PointLight(this.Theme._white, 2)
                    i.position.set(20, 10, 0),
                      this.scene.add(e),
                      this.scene.add(t),
                      this.scene.add(n),
                      this.scene.add(i)
                  },
                },
                {
                  key: 'createSkin',
                  value: function () {
                    ;(this.geo = new THREE.IcosahedronBufferGeometry(20, 5)),
                      (this.mat = new THREE.ShaderMaterial({
                        uniforms: this.uniforms,
                        side: THREE.FrontSide,
                        vertexShader: a.Z,
                        fragmentShader: s.Z,
                        wireframe: this.options.sphere.wireframe,
                        blending: THREE.AdditiveBlending,
                        depthWrite: !0,
                        transparent: !0,
                      })),
                      (this.point = new THREE.Points(this.geo, this.mat)),
                      (this.mesh = new THREE.Mesh(this.geo, this.mat)),
                      (this.mesh.geometry.verticesNeedUpdate = !0),
                      (this.mesh.geometry.morphTargetsNeedUpdate = !0),
                      (this.mesh.reseivedShadow = !0),
                      (this.mesh.castShadow = !0),
                      this.groupMoon.add(this.point),
                      this.groupMoon.add(this.mesh),
                      this.mesh.scale.set(1, 1, 1),
                      this.scene.add(this.mesh)
                  },
                },
                {
                  key: 'createGrid',
                  value: function () {
                    ;(this.gridHelper = new THREE.GridHelper(
                      200,
                      20,
                      this.Theme._cont,
                      this.Theme._gray
                    )),
                      (this.gridHelper.position.y = -20),
                      this.scene.add(this.gridHelper),
                      (this.frame = Date.now())
                  },
                },
                {
                  key: 'render',
                  value: function (t) {
                    this.loaded &&
                      ((this.time = Date.now()),
                      (this.uniforms.time.value =
                        (this.options.perlin.time / 15e3) *
                        (this.time - this.frame)),
                      (this.mesh.rotation.y +=
                        this.options.camera.speedY / 150),
                      (this.mesh.rotation.z +=
                        this.options.camera.speedX / 150),
                      (this.point.rotation.y = this.mesh.rotation.y),
                      (this.point.rotation.z = this.mesh.rotation.z),
                      (this.gridHelper.rotation.y = this.mesh.rotation.y),
                      (this.mat.uniforms.RGBr.value =
                        this.options.chroma.RGBr / 10),
                      (this.mat.uniforms.RGBg.value =
                        this.options.chroma.RGBg / 10),
                      (this.mat.uniforms.RGBb.value =
                        this.options.chroma.RGBb / 10),
                      (this.mat.uniforms.RGBn.value =
                        this.options.chroma.RGBn / 300),
                      (this.mat.uniforms.RGBm.value = this.options.chroma.RGBm),
                      (this.mat.uniforms.psize.value =
                        this.options.sphere.psize),
                      (this.gridHelper.visible = this.options.camera.guide),
                      (this.mesh.visible = !this.options.sphere.points),
                      (this.point.visible = this.options.sphere.points),
                      this.camera.lookAt(this.scene.position),
                      this.renderer.render(this.scene, this.camera))
                  },
                },
                {
                  key: 'resize',
                  value: function () {
                    ;(this.width = window.innerWidth),
                      (this.height = window.innerHeight),
                      r.Z.set(document.querySelector('.lTop-canvas canvas'), {
                        width: window.innerWidth,
                        height: window.innerHeight,
                      }),
                      this.renderer.setSize(this.width, this.height),
                      (this.camera.aspect = this.width / this.height),
                      this.camera.updateProjectionMatrix()
                  },
                },
              ]),
              t
            )
          })(),
          h = (function () {
            function t(e) {
              ;(0, i.Z)(this, t),
                (this.hikari = new l(e)),
                this.hikari.init(),
                this.render(),
                this.resize()
            }
            return (
              (0, o.Z)(t, [
                {
                  key: 'updateTimeRatio',
                  value: function () {
                    var t = this.time
                    if (t > 0) {
                      var e = new Date().getTime() - t
                      this.timeRatio = e / 16.666666666666668
                    }
                    this.time = new Date().getTime()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this
                    if (
                      (window.requestAnimationFrame(function () {
                        t.render()
                      }),
                      this.stop)
                    )
                      return !1
                    this.frame++,
                      this.frame % 2 != 0 &&
                        (this.updateTimeRatio(),
                        this.hikari.render(this.timeRatio))
                  },
                },
                { key: 'resize', value: function () {} },
              ]),
              t
            )
          })()
      },
      3106: function (t, e, n) {
        n.d(e, {
          V: function () {
            return s
          },
        })
        var i = n(8670),
          o = n(7856),
          r = n(7971),
          s = (function () {
            function t(e, n) {
              ;(0, i.Z)(this, t),
                (this.state = e),
                (this.works = n),
                (this.header = document.querySelector('.cHeader')),
                (this.kvTitleSvg = document.querySelectorAll(
                  '.lTop-kv-title .svg-path'
                )),
                (this.kvSubTitle = document.querySelector('.lTop-kv-subtitle')),
                (this.kvScrollText = document.querySelector(
                  '.lTop-kv-scroll-text'
                )),
                (this.kvScrollLine = document.querySelector(
                  '.lTop-kv-scroll-line span'
                )),
                (this.time = [4.7, 4.7, 4.9, 5.1, 5.3]),
                this.init()
            }
            return (
              (0, o.Z)(t, [
                {
                  key: 'init',
                  value: function () {
                    if (this.works) return !1
                    this.kvShow(!1)
                  },
                },
                {
                  key: 'kvShow',
                  value: function (t) {
                    var e = this
                    r.Z.set(
                      [this.kvTitleSvg, this.kvSubTitle, this.kvScrollText],
                      { opacity: 0 }
                    ),
                      t &&
                        (r.Z.set(
                          [this.kvTitleSvg, this.kvSubTitle, this.kvScrollText],
                          { opacity: 0 }
                        ),
                        r.Z.set(this.kvScrollLine, { height: '0%' })),
                      r.Z.fromTo(
                        this.header,
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 1,
                          delay: t ? 0.6 : this.time[0],
                          ease: 'power2.out',
                        }
                      ),
                      r.Z.fromTo(
                        this.kvTitleSvg,
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 2,
                          delay: t ? 0 : this.time[0],
                          ease: 'power1.out',
                          stagger: {
                            grid: 'auto',
                            from: 'random',
                            amount: 0.3,
                          },
                        }
                      ),
                      r.Z.fromTo(
                        this.kvSubTitle,
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 1.2,
                          delay: t ? 0.2 : this.time[1],
                          ease: 'power2.out',
                        }
                      ),
                      r.Z.fromTo(
                        this.kvScrollText,
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 1.2,
                          delay: t ? 0.4 : this.time[2],
                          ease: 'power2.out',
                        }
                      ),
                      r.Z.fromTo(
                        this.kvScrollLine,
                        { height: '0%' },
                        {
                          height: '100%',
                          duration: 1.2,
                          delay: t ? 0.6 : this.time[3],
                          ease: 'power2.out',
                          onComplete: function () {
                            e.state.splash = !0
                          },
                        }
                      )
                  },
                },
              ]),
              t
            )
          })()
      },
      5432: function (t, e, n) {
        n.d(e, {
          R: function () {
            return c
          },
        })
        var i = n(8670),
          o = n(7856),
          r = n(2825),
          s = n(7971),
          a = n(4295),
          c = (function () {
            function t() {
              ;(0, i.Z)(this, t),
                (this.state = { current: 0, nextListLength: 0, showLength: 9 }),
                (this.trigger = document.querySelector('[data-works-trigger]')),
                (this.list = document.querySelectorAll(
                  '[data-works-list].-none'
                )),
                this.init()
            }
            return (
              (0, o.Z)(t, [
                {
                  key: 'init',
                  value: function () {
                    var t = this
                    this.set(),
                      this.trigger.addEventListener(
                        'click',
                        function () {
                          t.state.current++, t.show()
                        },
                        r.Z
                      )
                  },
                },
                {
                  key: 'set',
                  value: function () {
                    this.state.nextListLength = this.list.length
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    var t = this
                    this.buttonHide()
                    for (
                      var e = function (e) {
                          s.Z.set(t.list[e], { display: 'block' }),
                            s.Z.fromTo(
                              t.list[e],
                              { y: 20, opacity: 0 },
                              {
                                opacity: 1,
                                y: 0,
                                duration: 1.4,
                                delay: 0.2 * e,
                                ease: 'power2.out',
                                onStart: function () {
                                  ;(0, a.kP)()
                                },
                                onComplete: function () {
                                  t.list[e].classList.remove('-none'),
                                    t.list[e].classList.add('-show')
                                  var n =
                                    t.state.nextListLength < 9
                                      ? t.state.nextListLength - 1
                                      : t.state.showLength - 1
                                  e === n &&
                                    ((t.list = document.querySelectorAll(
                                      '[data-works-list].-none'
                                    )),
                                    t.set(),
                                    t.buttonShow(),
                                    0 === t.state.nextListLength &&
                                      t.buttonHide())
                                },
                              }
                            )
                        },
                        n = 0;
                      n < this.state.showLength;
                      n++
                    )
                      e(n)
                  },
                },
                {
                  key: 'buttonShow',
                  value: function () {
                    s.Z.set(this.trigger, { display: 'block' })
                  },
                },
                {
                  key: 'buttonHide',
                  value: function () {
                    s.Z.set(this.trigger, { display: 'none' })
                  },
                },
              ]),
              t
            )
          })()
      },
      3894: function (t, e) {
        e.Z =
          '#define GLSLIFY 1\nvec3 mod289(vec3 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\nreturn mod289(((x*34.0)+1.0)*x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\nreturn 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t) {\nreturn t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 10.0 * n_xyz;\n}\nvarying vec3 vNormal;\nuniform sampler2D tShine;\nuniform float time;\nuniform float RGBr;\nuniform float RGBg;\nuniform float RGBb;\nuniform float RGBn;\nuniform float RGBm;\nuniform float dnoise;\n\nfloat PI = 3.14159265358979323846264;\nvoid main() {\n  float r = ( pnoise( RGBr * ( vNormal + time ), vec3( 10.0 ) ) );\n  float g = ( pnoise( RGBg * ( vNormal + time ), vec3( 10.0 ) ) );\n  float b = ( pnoise( RGBb * ( vNormal + time ), vec3( 10.0 ) ) );\n  float n = pnoise( -1.0 * ( vNormal + time ), vec3( 10.0 ) );\n  //n = pow( 1.0, n );\n  n = 50.0 * pnoise( (RGBn) * ( vNormal ), vec3( 10.0 ) ) * pnoise( RGBm * ( vNormal + time ), vec3( 10.0 ) );\n  n -= 0.10 * pnoise( dnoise * vNormal, vec3( 10.0 ) );\n  vec3 color = vec3( r + n, g + n, b + n );\n  gl_FragColor = vec4( color, 1.0 );\n}\n'
      },
      6449: function (t, e) {
        e.Z =
          '#define GLSLIFY 1\nvec3 mod289(vec3 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\nreturn mod289(((x*34.0)+1.0)*x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\nreturn 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t) {\nreturn t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.0 * n_xyz;\n}\n\nvarying vec3 vNormal;\nuniform float time;\nuniform float weight;\nuniform float morph;\nuniform float psize;\n\nvoid main() {\n  float f = morph * pnoise( normal + time, vec3( 10.0 ) );\n  vNormal = normalize(normal);\n  vec4 pos = vec4( position + f * normal, 1.0 );\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n  gl_PointSize = psize;\n}\n'
      },
    },
    e = {}
  function n(i) {
    if (e[i]) return e[i].exports
    var o = (e[i] = { exports: {} })
    return t[i].call(o.exports, o, o.exports, n), o.exports
  }
  ;(n.m = t),
    (n.x = function () {}),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, { a: e }), e
    }),
    (n.d = function (t, e) {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] })
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (t) {
        if ('object' == typeof window) return window
      }
    })()),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.j = 613),
    (function () {
      var t = { 613: 0, 599: 0, 475: 0, 721: 0 },
        e = [[2908, 643]],
        i = function () {},
        o = function (o, r) {
          for (
            var s, a, c = r[0], l = r[1], h = r[2], u = r[3], v = 0, d = [];
            v < c.length;
            v++
          )
            (a = c[v]), n.o(t, a) && t[a] && d.push(t[a][0]), (t[a] = 0)
          for (s in l) n.o(l, s) && (n.m[s] = l[s])
          for (h && h(n), o && o(r); d.length; ) d.shift()()
          return u && e.push.apply(e, u), i()
        },
        r = (self.webpackChunkpug_static_template =
          self.webpackChunkpug_static_template || [])
      function s() {
        for (var i, o = 0; o < e.length; o++) {
          for (var r = e[o], s = !0, a = 1; a < r.length; a++) {
            var c = r[a]
            0 !== t[c] && (s = !1)
          }
          s && (e.splice(o--, 1), (i = n((n.s = r[0]))))
        }
        return 0 === e.length && (n.x(), (n.x = function () {})), i
      }
      r.forEach(o.bind(null, 0)), (r.push = o.bind(null, r.push.bind(r)))
      var a = n.x
      n.x = function () {
        return (n.x = a || function () {}), (i = s)()
      }
    })(),
    n.x()
})()
