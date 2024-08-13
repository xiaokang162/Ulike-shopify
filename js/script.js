// 获取所有具有指定类名的元素

			
// 计算阈值
const threshold = window.innerHeight+120;

// 检查元素是否在视口内的函数
function isElementInViewport(element,index) {
  const bounding = element.getBoundingClientRect();
  return (
    // bounding.top >= 0 &&
    // bounding.top <= threshold
    bounding.bottom >= 0 &&
    bounding.top <= threshold
  );
}

// 监听滚动事件
function handleScroll() {
  const animateElements = document.querySelectorAll('.to-left,.to-edge,.to-top,.slide-to-left,.to-opacity,.to-top1,.text-top,.text-top-btn,.line-top');
  animateElements.forEach((element,index) => {
    if (!element.classList.contains('appear') && isElementInViewport(element,index)) {
      element.classList.add('appear');
    }
  });
}

// 初始检查，如果元素初始位置已经在视口中，则立即触发动画
window.initialCheck = function () {
  const animateElements = document.querySelectorAll('.to-left,.to-edge,.to-top,.slide-to-left,.to-opacity,.to-top1,.text-top,.text-top-btn,.line-top');
    animateElements.forEach((element,index) => {
    if (isElementInViewport(element,index)) {
      element.classList.add('appear');
    }
  });
}

// 在页面加载时和滚动时都执行初始检查
window.addEventListener('load', initialCheck);
window.addEventListener('scroll', handleScroll);


function wrapWordsWithSpanAndAddClass(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent;
        const words = textContent.split(/\s+/);

        if (words.length > 1) {
            const spanFragment = document.createDocumentFragment();
            words.forEach((word, index) => {
                if (word) {
                    const wordNode = document.createElement('span');
                    wordNode.textContent = word;
                    spanFragment.appendChild(wordNode);

                    if (index < words.length - 1) {
                        spanFragment.appendChild(document.createTextNode(' '));
                    }
                }

            });

            node.parentNode.insertBefore(spanFragment, node);
            node.remove();
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.childNodes.length === 0) {
            node.classList.add('text-oth');
        } else {
            const childNodes = Array.from(node.childNodes);
            childNodes.forEach(childNode => {
                wrapWordsWithSpanAndAddClass(childNode);
            });
        }
    }
}

function getInitialTransitionDelay(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const computedStyle = window.getComputedStyle(node);
        const transitionDelay = computedStyle.transitionDelay;
        if (transitionDelay !== '0s') {
            return parseFloat(transitionDelay) || 0;
        }
    }
    return 0;
}

let transitionDelayCounter = 0;

function addTransitionDelay(node, initialDelay) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'SPAN' || node.classList.contains('text-oth')) {
            node.style.transitionDelay = `${initialDelay + transitionDelayCounter * 0.1}s`;
            transitionDelayCounter += 0.5;
        }

        for (const childNode of node.childNodes) {
            addTransitionDelay(childNode, initialDelay);
        }
    }
}

// 文本行分隔
function wrapWordsWithSpanAndAddClass1(node,width) {
  if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent;
      const words = textContent.split(/\b/);
      if (words.length > 1) {
        const newContainer = document.createDocumentFragment();
        let startIndex = 0;
        let line = '';
        const testElement = document.createElement('span');
        testElement.style.display = 'inline-block';
        testElement.style.whiteSpace = 'nowrap';
        testElement.className = 'test-span-ulike';
        for (let i = 0; i < words.length; i++) {
          const char = words[i];
          testElement.textContent = line + char;
          
          // 尝试将字符添加到当前行
          node.parentNode.appendChild(testElement);
        
          // 如果当前行加上字符后超出了容器宽度，则开始新的一行
          if (parseFloat(window.getComputedStyle(testElement).width) > width) {
            node.parentNode.removeChild(testElement); // 移除用于测试的span元素
            newContainer.appendChild(document.createElement('span')).textContent = line; // 创建新span并添加上一行的内容
            line = char; // 重置当前行为当前字符
            startIndex = i; // 记录下一行开始的索引位置
          } else {
            line = line + char; // 否则，将字符添加到当前行
          }
        }
        
        // 添加最后一行内容（如果有剩余内容）
        if (line.trim() !== '') {
          newContainer.appendChild(document.createElement('span')).textContent = line.trim();
          node.parentNode.removeChild(testElement);
        }
        node.parentNode.insertBefore(newContainer, node);
        node.remove()
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.childNodes.length === 0) {
          node.classList.add('text-oth');
      } else {
          const childNodes = Array.from(node.childNodes);
          childNodes.forEach(childNode => {
              wrapWordsWithSpanAndAddClass1(childNode,width);
          });
      }
  }
}

document.addEventListener("DOMContentLoaded", function() {
// 选择你想要遍历的根节点，这里假设根节点有 id 为 "content"
// const rootElement = document.getElementById('content');
  document.querySelectorAll(".text-top").forEach(el => {
      transitionDelayCounter = 0
      wrapWordsWithSpanAndAddClass(el);
      addTransitionDelay(el, getInitialTransitionDelay(el));
  })

  document.querySelectorAll(".line-top").forEach(el => {
    const containerWidth = parseFloat(window.getComputedStyle(el).width)
    transitionDelayCounter = 0
    wrapWordsWithSpanAndAddClass1(el,containerWidth);
    addTransitionDelay(el, getInitialTransitionDelay(el));
  })
})