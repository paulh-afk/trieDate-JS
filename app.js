const datas = [
  {
    author: 'Jean',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Technologie'],
  },
  {
    author: 'Antoine',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Humour'],
  },
  {
    author: 'John',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Cryptomonnaies'],
  },
  {
    author: 'Clément',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Economie', 'Finance'],
  },
  {
    author: 'Nathan',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Magie'],
  },
];

const rootElement = document.getElementById('root');

const trieArticleDate = (datas) => {
  let result = [...datas];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].date < result[j + 1].date) {
        const d = result[j];
        result[j] = result[j + 1];
        result[j + 1] = d;
      }
    }
  }
  return result;
};

const articleMap = () => {
  const articles = trieArticleDate(datas);
  const articlesElements = articles.map((article) => {
    const element = document.createElement('div');

    const ulElement = document.createElement('ul');
    const liElements = article.categories.map((categorie) => {
      const li = document.createElement('li');
      li.innerHTML = categorie;
      return li;
    });
    ulElement.append(...liElements);

    element.innerHTML = `
      <h3>${article.author}</h3>
      ${ulElement.innerHTML}
      <h5>${new Date(article.date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}</h5>
      <p>${article.content}</p>
    `;
    return element;
  });
  rootElement.append(...articlesElements);
};

articleMap();
