const gauges = document.querySelectorAll('.gauge');
function createProgressGauge(canvas, targetProgress, theme) {
  const ctx = canvas.getContext('2d');

  // Fonction pour dessiner un cercle de pourcentage
  function drawCircle(progress) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calcule l'angle du cercle de progression en fonction du pourcentage
    const progressAngle = (progress / 100) * 2 * Math.PI;

    // Dessine le cercle de progression de la jauge
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width / 2 - 10, -Math.PI / 2, -Math.PI / 2 + progressAngle);
    ctx.strokeStyle = theme; // Couleur du cercle de progression
    ctx.lineWidth = 20; // Épaisseur du cercle de progression
    ctx.stroke();

    //draw text
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = theme;
    ctx.fillText('~'+progress+'%', canvas.width/2, canvas.height/2);
  }

  // Fonction pour animer le chargement du pourcentage
  function animateProgress() {
    let currentProgress = 0;
    const animationInterval = setInterval(() => {
      currentProgress += 1;
      drawCircle(currentProgress);
      if (currentProgress >= targetProgress) {
        clearInterval(animationInterval);
      }
    }, 16); // 16ms = 60fps
  }

  // Appel initial pour animer le chargement du pourcentage
  animateProgress();

  // Retourne la fonction pour mettre à jour la jauge de pourcentage
  return drawCircle;
}

function getThemeColor() {
  const bodyStyles = getComputedStyle(document.body);
  return bodyStyles.getPropertyValue('--theme-color');
}

gauges.forEach((gauge)=>{
  const theme = getThemeColor();
  const progress = parseInt(gauge.getAttribute('data-progress'));
  createProgressGauge(gauge,progress,theme);
})

function updateThemeGauge(){
  gauges.forEach((gauge)=>{
    const theme = getThemeColor();
    const progress = parseInt(gauge.getAttribute('data-progress'));
    createProgressGauge(gauge,progress,theme);
  })
}

themeToggle.addEventListener('click', updateThemeGauge);