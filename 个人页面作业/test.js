// 需要确保 index.html 已引入 gsap、ScrollTrigger、ScrollSmoother 的 CDN

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. 欢迎动画
  const welcomeTl = gsap.timeline();
  welcomeTl
    .fromTo('.spinner-container', 
      { opacity: 0, visibility: 'hidden' }, 
      { opacity: 1, visibility: 'visible', duration: 0.6, ease: "power2.out" }
    )
    .fromTo('.welcome-text',
      { y: 60, opacity: 0, rotationX: 20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.2"
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
      "-=0.8"
    );

  // 2. 页面加载完成后淡出 preloader
  window.addEventListener('load', () => {
    gsap.to('#preloader', {
      opacity: 0,
      scale: 0.1,
      duration: 1.2,
      ease: "expo.in",
      pointerEvents: "none",
      onComplete: () => {
        document.getElementById('preloader').style.display = 'none';
      }
    });
  });
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    gsap.to(preloader, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        preloader.style.display = 'none';
      }
    });
  }
});
});

  // 3. 导航栏高亮
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  // 4. 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        gsap.to(window, {
          scrollTo: { y: targetElement, offsetY: navbarHeight + 20 },
          duration: 1,
          ease: "power2.inOut"
        });
      }
    });
  });



