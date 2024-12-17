window.addEventListener('load', () => {
  const counter = document.querySelector('.loading-panel__counter');
  const panels = document.querySelectorAll('.panel');
  const loadingPanel = document.querySelector('.loading-panel');
  let count = { value: 0 };

  const tl = gsap.timeline();

  // Анимация счётчика
  tl.to(count, {
      value: 100,
      duration: 2,
      onUpdate: () => {
          counter.innerText = `${Math.round(count.value)}%`;
      },
      ease: 'linear',
  });

  // Анимация панелей с добавлением класса .animated
  panels.forEach((panel, index) => {
      tl.to(panel, {
          y: "-100%", // Поднимаем панель
          duration: 1.2,
          ease: "power2.inOut",
          onStart: () => panel.classList.add("animated"), // Добавляем эффект нижней границы
      }, `-=${index === 0 ? 0 : 0.6}`); // Начинаем со смещением для второй и третьей панели
  });

  // Убираем loading-panel
  tl.to(loadingPanel, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => loadingPanel.remove(),
  });
  
  
  
  
  
  
  
  
  const fall = document.querySelector('.fall');
  
   
    gsap.set(fall, {
      opacity: 0,
      y: -200, 
    });
  
    
    gsap.to(fall, {
      opacity: 1,
      y: window.innerHeight / 2, 
      duration: 14, 
      ease: "power1.out", 
    });
  
    
    gsap.to(fall, {
      y: window.innerHeight - 50, 
      duration: 19,
      ease: "power3.out" 
    });

    const sidePanelLinks = document.querySelectorAll('.sidepanel__link'); 
    const sidePanelText = document.querySelector('.sidepanel__text');
    const sidePanelDivider = document.querySelector('.sidepanel__divider');
    const subtitle = document.querySelector('.promo__subtitle'); 
    const title = document.querySelector('.promo__title'); 
    const btn = document.querySelector('.promo__link');

    
    // const tl = gsap.timeline();

     
    tl.from(sidePanelLinks, {
        x: -100, 
        opacity: 0,
        stagger: 0.2, 
        duration: 1,
        ease: "power2.out",
    })

        
        .from(sidePanelDivider, {
        height: 0, 
        opacity: 0, 
        duration: 1,
        ease: "power2.out",
        }, "-=0.5") 

        
        .from(sidePanelText, {
        opacity: 0, 
        y: 20,
        duration: 1,
        ease: "power2.out",
        }, "-=0.5")

        // Ани
        .from(subtitle, {
        opacity: 0,
        y: 50, 
        duration: 1,
        ease: "power2.out",
        }, "-=0.5") 

        
        .from(title, {
        opacity: 0,
        y: 50, 
        duration: 1,
        ease: "power2.out",
        }, "-=0.8") 

        
        .from(btn, {
            opacity: 0, 
            scale: 0.8, 
            y: 20,
            duration: 0.8, 
            ease: "back.out(1.7)", 
          }, "-=0.5");  
            
        

          const hamburger = document.querySelector("#hamburger");
const circle = document.querySelector(".circle");
const overlay = document.querySelector("#overlay"); 
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");
const menuIcons = document.querySelectorAll(".menu__socials img");

let isMenuOpen = false;

// Анимация для кнопки гамбургера
const tlHamburger = gsap.timeline({ paused: true });
tlHamburger.to(circle, {
  width: 45,
  height: 45,
  background: "transparent",
  border: "3px solid white",
  boxShadow: "0 0 12px rgba(255, 255, 255, 1)",
  duration: 0.5,
  ease: "power2.out",
  
});



// Анимация для оверлея
const tlOverlay = gsap.timeline({ paused: true });
tlOverlay.to(overlay, {
  opacity: 1,
  backdropFilter: "blur(1px)",
  pointerEvents: "auto",
  duration: 0.5,
  ease: "power2.out",
});

// Анимация для меню
const tlMenu = gsap.timeline({ paused: true });
tlMenu.to(menu, { right: 0, duration: 0.8, ease: "power2.out" })
      .fromTo(
        menuLinks,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.4" // Смещение во времени
      )
      .fromTo(
        menuIcons,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.4" 
      );

// Объединённый обработчик клика
hamburger.addEventListener("click", () => {
  if (!isMenuOpen) {
    tlHamburger.play(); // Анимация гамбургера
    tlOverlay.play();   // Анимация оверлея
    tlMenu.play();      // Анимация меню
  } else {
    tlHamburger.reverse();
    tlOverlay.reverse();
    tlMenu.reverse();
  }
  isMenuOpen = !isMenuOpen; // Переключаем состояние
});

// Анимация появления круга при загрузке страницы
gsap.from(circle, {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "power2.out",
  delay: 1,
});

















  









  });
  