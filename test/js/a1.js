// function rotate(element, radians, flip) {
//   radians += Math.PI / 2
//   var s = 'rotate(' + radians + 'rad)'
//   $(element)
//     .css('-moz-transform', s)
//     .css('-webkit-transform', s)
//     .css('-o-transform', s)
//     .css('-ms-transform', s)

//   // 翻转图片
//   var flipStyle = flip ? 'scaleX(-1)' : 'scaleX(1)'
//   $(element)
//     .find('img')
//     .css('transform', 'rotate(' + radians * -1 + 'rad) ' + flipStyle)
// }
// var w = 25
// function initSnakes(container, numSnakes) {
//   var snakeWidth = w,
//     snakeHeight = w,
//     snakeRadius = Math.max(snakeWidth, snakeHeight),
//     maxDistance = 1.5 * snakeRadius,
//     frameRate = 60,
//     damping = (9 * frameRate) / 30,
//     width = container.width(),
//     height = container.height(),
//     border = parseInt(container.css('border-left-width'), 10),
//     left = container.offset().left + border,
//     top = container.offset().top + border,
//     snakes = new Array(numSnakes),
//     mouse = { x: width / 5, y: height / 5, mouse: true }

//   function positionSnake(snake) {
//     $(snake.element).css({
//       left: snake.x - snakeWidth / 2,
//       top: snake.y - snakeHeight / 2,
//     })

//     // 判断蛇头是否在鼠标左边
//     var flip = snake.x < mouse.x
//     rotate(snake.element, snake.angle, flip)
//   }

//   for (var i = 0; i < numSnakes; ++i) {
//     var snake = (snakes[i] = {
//       id: i,
//       x: (width * 4) / 5,
//       y: (height * 4) / 5,
//       angle: (Math.PI * 3) / 2,
//       element: $.parseHTML('<div class="snakeSegment"></div>'),
//     })
//     $(snake.element).html(`<img src="./img/ceshi${i}.svg"/>`)
//     container.append(snake.element)
//     positionSnake(snake)
//     if (i == 0) {
//       follow(snake, mouse)
//     } else {
//       follow(snake, snakes[i - 1])
//     }
//   }

//   function follow(snake, leader) {
//     function update() {
//       var dx = leader.x - snake.x,
//         dy = leader.y - snake.y,
//         dd = Math.hypot(dx, dy),
//         angle = (snake.angle = Math.atan2(dy, dx)),
//         direction = dd < snakeRadius ? -1 : 1
//       if (dd > maxDistance && !leader.mouse) {
//         snake.x += Math.cos(angle) * (dd - maxDistance)
//         snake.y += Math.sin(angle) * (dd - maxDistance)
//         dx = leader.x - snake.x
//         dy = leader.y - snake.y
//         dd = maxDistance
//       }
//       if (dd - snakeRadius < 0.5) {
//         return
//       }
//       snake.x += (direction * Math.cos(angle) * dd) / damping
//       snake.y += (direction * Math.sin(angle) * dd) / damping
//       positionSnake(snake)
//     }
//     update()
//     snake.moveInterval = window.setInterval(update, 1000 / frameRate)
//   }

//   function mouseUpdate(event) {
//     event = event || window.event
//     mouse.x = event.pageX - left
//     mouse.y = event.pageY - top
//   }
//   container.mousemove(mouseUpdate)
// }

// function launch() {
//   initSnakes($('body'), 7)
// }

// $(document).ready(launch)

// $(window).resize(function () {
//   $('.snakeSegment').remove()
//   launch()
// })

;[
  {
    id: 'item_CqNgQw',
    type: '1',
    productType: '1',
    cyclicality: '1',
    skinTone: '',
    other: '',
    img: '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/a1_01b491d9-969d-4fcc-a0d6-01fa71197a5d.jpg?v=1734685744',

    video: '',
    videoJson: false,

    starImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/st.svg?v=1734685766',
    starTxt: '4.8',
    title: 'It’s amazing!',
    desc: '“It’s amazing, I was able to recover my hair with this powerful product. I don’t have extensions, and it feels so natural.”',
    userImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/user.png?v=1734685781',
    userName: 'Kiara B.',
    proImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/pro.png?v=1734685743',

    proName: 'Ulike Air 10',
    proPrice: '279.00',
    proPriceOld: '<span class=money>$399.00</span>',
    proId: '44485783814385',

    proBtn: 'Add to Cart',
    dzTxt: '0',
  },

  {
    id: 'item_4kedxK',
    type: '1',
    productType: '1',
    cyclicality: '1',
    skinTone: '',
    other: '',
    img: '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/a1_01b491d9-969d-4fcc-a0d6-01fa71197a5d.jpg?v=1734685744',

    video: '',
    videoJson: false,

    starImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/st.svg?v=1734685766',
    starTxt: '4.8',
    title: 'It’s amazing!',
    desc: '“It’s amazing, I was able to recover my hair with this powerful product. I don’t have extensions, and it feels so natural.”',
    userImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/user.png?v=1734685781',
    userName: 'Kiara B.',
    proImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/pro.png?v=1734685743',

    proName: 'Ulike Air 10',
    proPrice: '279.00',
    proPriceOld: '<span class=money>$399.00</span>',
    proId: '44485783814385',

    proBtn: 'Add to Cart',
    dzTxt: '0',
  },

  {
    id: 'item_VErDTH',
    type: '1',
    productType: '1',
    cyclicality: '1',
    skinTone: '',
    other: '',
    img: '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/a1_01b491d9-969d-4fcc-a0d6-01fa71197a5d.jpg?v=1734685744',

    video: '',
    videoJson: false,

    starImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/st.svg?v=1734685766',
    starTxt: '4.8',
    title: 'It’s amazing!',
    desc: '“It’s amazing, I was able to recover my hair with this powerful product. I don’t have extensions, and it feels so natural.”',
    userImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/user.png?v=1734685781',
    userName: 'Kiara B.',
    proImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/pro.png?v=1734685743',

    proName: 'Ulike Air 10',
    proPrice: '279.00',
    proPriceOld: '<span class=money>$399.00</span>',
    proId: '44485783814385',

    proBtn: 'Add to Cart',
    dzTxt: '0',
  },

  {
    id: 'item_Lc9QLP',
    type: '1',
    productType: '1',
    cyclicality: '1',
    skinTone: '',
    other: '',
    img: '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/a1_01b491d9-969d-4fcc-a0d6-01fa71197a5d.jpg?v=1734685744',

    video: '',
    videoJson: false,

    starImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/st.svg?v=1734685766',
    starTxt: '4.8',
    title: 'It’s amazing!',
    desc: '“It’s amazing, I was able to recover my hair with this powerful product. I don’t have extensions, and it feels so natural.”',
    userImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/user.png?v=1734685781',
    userName: 'Kiara B.',
    proImg:
      '//ljtbo1z8h2mgke6a-65690796273.shopifypreview.com/cdn/shop/files/pro.png?v=1734685743',

    proName: 'Ulike Air 10',
    proPrice: '279.00',
    proPriceOld: '<span class=money>$399.00</span>',
    proId: '44485783814385',

    proBtn: 'Add to Cart',
    dzTxt: '0',
  },
]

class SnakeAnimation {
  constructor(containerSelector, numSnakes) {
    this.container = $(containerSelector)
    this.numSnakes = numSnakes
    this.snakeWidth = 25
    this.snakeHeight = 25
    this.snakeRadius = Math.max(this.snakeWidth, this.snakeHeight)
    this.maxDistance = 1.5 * this.snakeRadius
    this.frameRate = 60
    this.damping = (9 * this.frameRate) / 30
    this.snakes = []
    this.mouse = { x: 0, y: 0, mouse: true }

    this.init()
  }

  init() {
    this.updateContainerDimensions()
    this.createSnakes()
    this.container.mousemove(this.updateMousePosition.bind(this))
    $(window).resize(this.handleResize.bind(this))
  }

  updateContainerDimensions() {
    this.width = this.container.width()
    this.height = this.container.height()
    const border = parseInt(this.container.css('border-left-width'), 10)
    this.left = this.container.offset().left + border
    this.top = this.container.offset().top + border
    this.mouse = { x: this.width / 5, y: this.height / 5, mouse: true }
  }

  createSnakes() {
    for (let i = 0; i < this.numSnakes; ++i) {
      const snake = {
        id: i,
        x: (this.width * 4) / 5,
        y: (this.height * 4) / 5,
        angle: (Math.PI * 3) / 2,
        element: $('<div class="snakeSegment"></div>'),
      }

      snake.element.html(`<img src="./img/ceshi${i}.svg"/>`)
      this.container.append(snake.element)
      this.positionSnake(snake)

      if (i === 0) {
        this.follow(snake, this.mouse)
      } else {
        this.follow(snake, this.snakes[i - 1])
      }

      this.snakes.push(snake)
    }
  }

  positionSnake(snake) {
    snake.element.css({
      left: snake.x - this.snakeWidth / 2,
      top: snake.y - this.snakeHeight / 2,
    })

    const flip = snake.x < this.mouse.x
    this.rotate(snake.element, snake.angle, flip)
  }

  rotate(element, radians, flip) {
    radians += Math.PI / 2
    const rotationStyle = `rotate(${radians}rad)`
    element
      .css('-moz-transform', rotationStyle)
      .css('-webkit-transform', rotationStyle)
      .css('-o-transform', rotationStyle)
      .css('-ms-transform', rotationStyle)

    const flipStyle = flip ? 'scaleX(-1)' : 'scaleX(1)'
    element.find('img').css('transform', `rotate(${-radians}rad) ${flipStyle}`)
  }

  follow(snake, leader) {
    const update = () => {
      let dx = leader.x - snake.x
      let dy = leader.y - snake.y
      let dd = Math.hypot(dx, dy)
      const angle = (snake.angle = Math.atan2(dy, dx))
      const direction = dd < this.snakeRadius ? -1 : 1

      if (dd > this.maxDistance && !leader.mouse) {
        snake.x += Math.cos(angle) * (dd - this.maxDistance)
        snake.y += Math.sin(angle) * (dd - this.maxDistance)
        dx = leader.x - snake.x
        dy = leader.y - snake.y
        dd = this.maxDistance
      }

      if (dd - this.snakeRadius < 0.5) return

      snake.x += (direction * Math.cos(angle) * dd) / this.damping
      snake.y += (direction * Math.sin(angle) * dd) / this.damping
      this.positionSnake(snake)
    }

    update()
    snake.moveInterval = setInterval(update, 1000 / this.frameRate)
  }

  updateMousePosition(event) {
    this.mouse.x = event.pageX - this.left
    this.mouse.y = event.pageY - this.top
  }

  handleResize() {
    this.snakes.forEach((snake) => clearInterval(snake.moveInterval))
    this.container.find('.snakeSegment').remove()
    this.snakes = []
    this.updateContainerDimensions()
    this.createSnakes()
  }
}

$(document).ready(() => new SnakeAnimation('body', 7))
