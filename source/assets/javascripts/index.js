import 'bootstrap';

const collapseAbout = () => {
  const collapseBtn = document.getElementById('collapse-button');
  const collapseSection = document.getElementById('about-collapse-section');
  collapseBtn.addEventListener('click', () => {
    collapseSection.classList.toggle('show');
  });
};

collapseAbout();

function init() {
  const style = ['style1', 'style2', 'style3', 'style4'];
  const size = ['size1', 'size1', 'size1', 'size2', 'size3'];
  const opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity2', 'opacity3'];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let star = '';
  const starsNumber = 250;
  const starsBackground = document.querySelector('.stars-background');
  const widthWindow = window.innerWidth;
  const heightWindow = window.innerHeight;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < starsNumber; i++) {
    star += `<span class='star ${style[getRandomArbitrary(0, 4)]} ${opacity[getRandomArbitrary(0, 6)]} ${size[getRandomArbitrary(0, 5)]}' style='animation-delay: .${getRandomArbitrary(0, 9)}s; left: ${getRandomArbitrary(0, widthWindow)}px; top: ${getRandomArbitrary(0, heightWindow)}px'></span>`;
  }

  starsBackground.innerHTML = star;

  let randomNumber = 5000;

  const generateCommets = () => {
    setTimeout(generateCommets, randomNumber);
    randomNumber = getRandomArbitrary(5000, 10000);
    const commet = `<div class='commet ${style[getRandomArbitrary(0, 4)]}'></div>`;
    document.getElementsByClassName('commets-wrapper')[0].innerHTML = commet;
    setTimeout(() => {
      document.getElementsByClassName('commets-wrapper')[0].innerHTML = '';
    }, 1000);
  };
  setTimeout(() => {
    generateCommets();
  }, randomNumber);
}

window.onload = init;

const target = document.querySelector('.night-sky');

const scrollUpBtn = document.querySelector('.scroll-up-btn');

// eslint-disable-next-line no-unused-vars
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollUpBtn.classList.remove('show');
    } else {
      scrollUpBtn.classList.add('show');
    }
  });
}

function scrollToTop() {
  // rootElement.scrollTo({
  //   top: 0,
  //   behavior: 'smooth'
  // });
  document.body.scrollTop = 0;
}
scrollUpBtn.addEventListener('click', scrollToTop);

const observer = new IntersectionObserver(callback);
observer.observe(target);

// const sendMsg = () => {
//   const sendMsgBtn = document.querySelector('.sendMsg');
//   sendMsgBtn.addEventListener('click', () => {
//     document.querySelector('form').reset();
//   });
// };

// sendMsg();
