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

const rootElement = document.getElementById('articles');

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
    const element = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.innerText = article.author;

    const ulElement = document.createElement('ul');
    const liElements = article.categories.map((categorie) => {
      const li = document.createElement('li');
      li.innerText = categorie;
      return li;
    });
    ulElement.append(...liElements);

    const h5 = document.createElement('h5');
    h5.innerText = new Date(article.date).toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const p = document.createElement('p');
    p.innerText = article.content;

    element.append(...[h3, ulElement, h5, p]);

    return element;
  });
  rootElement.append(...articlesElements);
};

articleMap();
