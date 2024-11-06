const navbarLinks = document.querySelectorAll('#navbar a');
const pageContainer = document.querySelector('.page-container');
const articles = document.querySelectorAll('article');

navbarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetarticle = document.getElementById(targetId);
    targetarticle.scrollIntoView({ behavior: 'smooth' });
    updateActiveLink(link);
  });
});


pageContainer.addEventListener('scroll', () => {
  const scrollPosition = pageContainer.scrollTop;

  articles.forEach((article, index) => {
    const offsetTop = article.offsetTop - pageContainer.offsetTop;

    const articleHeight = article.offsetHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + articleHeight) {
      navbarLinks.forEach((link) => link.classList.remove('active'));
      navbarLinks[index].classList.add('active');
    }
  });
});


function updateActiveLink(link) {
  navbarLinks.forEach((l) => l.classList.remove('active'));
  link.classList.add('active');
}