async function callQwenAPI(prompt) {
  // 使用正确的API端点
  const API_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';

  // 清理API密钥（去掉多余空格和制表符）
  const API_KEY = 'sk-240df64b5221491dba82836a8238bb50'.trim();

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        "model": "qwen-turbo", // 必须包含model字段
        "input": {
          "messages": [
            {
              "role": "system",
              "content": "你是一个帮助用户了解羊焘祺个人信息的AI助手。羊焘祺是三亚学院区块链工程专业的学生，擅长前端开发、后端开发、Python、Java、视频剪辑和设计。用户可能会询问他的教育背景、专业技能、项目经验或联系方式。"
            },
            {
              "role": "user",
              "content": prompt
            }
          ]
        },
        "parameters": {
          "result_format": "message" // 添加必要参数
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API请求失败，状态码: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API调用错误:', error);
    throw error;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // 欢迎动画
  const welcomeTl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1.2
    }
  });
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const currentSlide = document.querySelector('.current-slide');
  const totalSlides = document.querySelector('.total-slides');

  let currentIndex = 0;
  let autoPlayInterval;

  // 设置总幻灯片数
  totalSlides.textContent = carouselItems.length;

  // 更新轮播图位置
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    currentSlide.textContent = currentIndex + 1;
    carouselItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // 下一张
  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  }

  // 上一张
  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  }

  // 自动播放
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 8000); // 
  }

  // 停止自动播放
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // 添加事件监听器
  prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  // 触摸滑动支持
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const minSwipeDistance = 50; // 最小滑动距离

    if (touchStartX - touchEndX > minSwipeDistance) {
      // 向左滑动 - 下一张
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    } else if (touchEndX - touchStartX > minSwipeDistance) {
      // 向右滑动 - 上一张
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    }
  }

  // 初始化轮播图
  updateCarousel();
  startAutoPlay();

  // 当轮播图不在视图中时暂停自动播放
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.carousel-container'));

  welcomeTl
    .to('.spinner-container', {
      opacity: 1,
      visibility: 'visible',
      duration: 0.5
    })
    .fromTo('.welcome-text',
      { y: 40, rotationX: 10, opacity: 0 },
      { y: 0, rotationX: 0, opacity: 1, duration: 2.5, transformOrigin: "top center" }
    )
    .fromTo('.dot',
      { y: 0, scale: 0.5, opacity: 0.5 },
      {
        y: -20,
        scale: 1.2,
        opacity: 1,
        stagger: { each: 0.1, repeat: -1, yoyo: true },
        duration: 0.6,
        ease: "power1.inOut"
      },
      "-=1"
    );

  // 页面加载完成后淡出 preloader
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    gsap.to(preloader, {
      opacity: 0,
      scale: 0.1,
      duration: 4,
      ease: "expo.in",
      onStart: () => {
        preloader.style.pointerEvents = 'none';
      },
      onComplete: () => {
        preloader.style.display = 'none';
      }
    });
  });

  // 导航栏高亮
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
      }
    });
  });

  // 点击发光效果
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // 移除所有发光效果
      navLinks.forEach(l => l.classList.remove('glow'));

      // 添加当前点击项的发光效果
      this.classList.add('glow');

      // 1秒后移除发光效果
      setTimeout(() => {
        this.classList.remove('glow');
      }, 1000);
    });
  });

  // 平滑滚动函数
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }



  
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });



  // 主题切换功能
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // 更新图标
    const themeIcon = document.querySelector('#theme-toggle i');
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // 初始化主题
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // 技能可视化功能
  const radarPoints = document.querySelectorAll('.radar-point');
  const radarContainer = document.querySelector('.radar-chart');

  if (radarContainer) {
    // 初始化技能进度条动画
    document.querySelectorAll('.skill-level').forEach(bar => {
      const level = bar.getAttribute('data-level');
      setTimeout(() => {
        bar.style.width = `${level}%`;
      }, 300);
    });

    const centerX = radarContainer.offsetWidth / 2;
    const centerY = radarContainer.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // 清除旧标签
    const radarGrid = document.querySelector('.radar-grid');
    radarGrid.innerHTML = '';

    // 添加新标签
    const labels = ['前端开发', '后端开发', 'Python', 'Java', '视频剪辑', '设计'];
    labels.forEach((label, index) => {
      const labelEl = document.createElement('span');
      labelEl.textContent = label;
      labelEl.className = 'radar-label';
      radarGrid.appendChild(labelEl);

      const angle = index * (360 / labels.length) * (Math.PI / 180);
      const labelRadius = radius * 1.1;

      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius; // 修正Y轴方向

      labelEl.style.position = 'absolute';
      labelEl.style.left = `${x}px`;
      labelEl.style.top = `${y}px`;
      labelEl.style.transform = 'translate(-50%, -50%)';
      labelEl.style.color = 'var(--text-primary)';
    });

    // 设置雷达点位置
    radarPoints.forEach((point, index) => {
      const level = parseFloat(point.getAttribute('data-level'));
      const angle = index * (360 / radarPoints.length) * (Math.PI / 180);
      const distance = (level / 100) * radius;

      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance; // 修正Y轴方向

      point.style.left = `${x}px`;
      point.style.top = `${y}px`;
      point.style.animationDelay = `${index * 0.1}s`;
    });

    // 创建雷达图连线
    const radarLine = document.createElement('div');
    radarLine.className = 'radar-line';
    radarLine.style.position = 'absolute';
    radarLine.style.top = '0';
    radarLine.style.left = '0';
    radarLine.style.width = '100%';
    radarLine.style.height = '100%';
    radarLine.style.zIndex = '1';
    radarLine.style.pointerEvents = 'none';

    radarContainer.appendChild(radarLine);

    // 绘制雷达图连线
    setTimeout(() => {
      const points = Array.from(radarPoints).map(point => {
        return {
          x: parseFloat(point.style.left),
          y: parseFloat(point.style.top)
        };
      });

      // 闭合路径
      if (points.length > 0) {
        points.push(points[0]);
      }

      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", `0 0 ${radarContainer.offsetWidth} ${radarContainer.offsetHeight}`);
      svg.style.position = 'absolute';
      svg.style.top = '0';
      svg.style.left = '0';

      const polygon = document.createElementNS(svgNS, "polygon");
      polygon.setAttribute("fill", "rgba(255, 215, 0, 0.2)");
      polygon.setAttribute("stroke", "var(--accent)");
      polygon.setAttribute("stroke-width", "2");
      polygon.setAttribute("stroke-dasharray", "5,5");

      let pointsStr = '';
      points.forEach(point => {
        pointsStr += `${point.x},${point.y} `;
      });
      polygon.setAttribute("points", pointsStr.trim());

      svg.appendChild(polygon);
      radarLine.appendChild(svg);

      // 添加动画
      polygon.style.opacity = '0';
      polygon.style.transition = 'opacity 1s ease';
      setTimeout(() => {
        polygon.style.opacity = '1';
      }, 300);
    }, 500);
  }

  // 滚动时更新活动导航项
  window.addEventListener('scroll', function () {
    let currentSection = '';

    // 检测当前滚动位置对应的区块
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // 更新导航栏活动状态
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  // 打开聊天窗口
  chatToggle.addEventListener('click', () => {
    chatWindow.classList.add('active');
  });

  // 关闭聊天窗口
  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
  });

  // 发送消息
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      // 添加用户消息
      addMessage(message, 'user');
      chatInput.value = '';

      // 显示加载状态
      const loadingMessage = addMessage('<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>', 'bot loading');

      // 调用阿里云API
      callQwenAPI(message)
        .then(response => {
          // 移除加载状态
          chatMessages.removeChild(loadingMessage);
          // 添加AI回复
          addMessage(response.output.text, 'bot');
        })
        .catch(error => {
          chatMessages.removeChild(loadingMessage);
          addMessage('抱歉，我暂时无法回答这个问题。错误: ' + error.message, 'bot');
          console.error('API调用失败:', error);
        });
    }
  }

  // 发送按钮点击事件
  chatSend.addEventListener('click', sendMessage);

  // 输入框回车事件
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // 添加消息到聊天窗口
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender.split(' ')[0]);

    if (sender === 'bot loading') {
      messageDiv.innerHTML = text;
    } else {
      messageDiv.textContent = text;
    }

    chatMessages.appendChild(messageDiv);
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
  }

  // 调用阿里云通义千问API
  async function askAI() {
    const input = document.getElementById('userInput').value;
    const responseArea = document.getElementById('responseArea');
    responseArea.innerHTML = "AI 正在思考...";

    const apiKey = 'sk-240df64b5221491dba82836a8238bb50'; // 你的 DashScope API Key

    const response = await fetch('https://api.dashscope.cn/api/v1/services/aigc/text-generation/generation', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-DashScope-Api-Key': apiKey
      },
      body: JSON.stringify({
        model: 'qwen-plus', // 可替换为 qwen-turbo、qwen-max 等
        input: {
          prompt: input
        },
        parameters: {
          temperature: 0.7,
          top_p: 0.8,
          max_tokens: 512
        }
      })
    });

    if (!response.ok) {
      responseArea.innerHTML = "请求失败，请检查网络或 API Key";
      return;
    }

    const data = await response.json();
    const outputText = data.output.text;

    responseArea.innerHTML = `<strong>AI 回答：</strong><br>${outputText}`;
  }

});

