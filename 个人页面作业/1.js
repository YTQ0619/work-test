
document.addEventListener('DOMContentLoaded', () => {
  // 欢迎动画
  const welcomeTl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1.2
    }
  });

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
      scale: 0.1, // 加入缩小动画
      duration: 4, // 延长到4秒
      ease: "expo.in", // 更平滑
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

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

初始化平滑滚动
ScrollSmoother.create({
  wrapper: ".scroll-container",
  content: ".scroll-container",
  smooth: 1.5,
  effects: true,
  ignore: ".timeline-wrapper"
});
