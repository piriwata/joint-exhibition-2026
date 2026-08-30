const artworks = [
  { src: 'assets/images/pearl.svg', title: '真珠の耳飾りの少女' },
  { src: 'assets/images/milkmaid.svg', title: '牛乳を注ぐ女' },
  { src: 'assets/images/delft.svg', title: 'デルフトの眺望' },
  { src: 'assets/images/painting.svg', title: '絵画芸術' },
  { src: 'assets/images/astronomer.svg', title: '天文学者' },
  { src: 'assets/images/geographer.svg', title: '地理学者' },
  { src: 'assets/images/balance.svg', title: '天秤を持つ女' },
  { src: 'assets/images/lacemaker.svg', title: 'レースを編む女' }
];

const slots = [...document.querySelectorAll('.art img')];

function shuffleArt() {
  const selection = [...artworks].sort(() => Math.random() - 0.5).slice(0, slots.length);
  slots.forEach((image, index) => {
    image.classList.add('changing');
    window.setTimeout(() => {
      image.src = selection[index].src;
      image.alt = `ヨハネス・フェルメール「${selection[index].title}」をモチーフにしたサンプル`;
      image.classList.remove('changing');
    }, index * 70);
  });
}

document.querySelector('#shuffle').addEventListener('click', shuffleArt);
shuffleArt();
