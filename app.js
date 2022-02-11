const datas = [
  {
    author: 'Jean',
    content:
      'Quos explicabo tempore necessitatibus des ty a miu numquam qui, consequuntur epellat vel? Nemo perspiciatis quas nostrum ratione laboriosam cumque nisi asperiores, cupiditate quia nesciunt officiis maxime facilis et atque! Exercitationem dolorem ipsa ad soluta? Debitis consequuntur eos cumque, sequi eligendi quos! Incidunt.',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Technologie', 'Inovation'],
  },
  {
    author: 'Antoine',
    content:
      'Lorem ipsum dolor sit nulla omnis dicta quasi quo, amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Humour', 'Scène'],
  },
  {
    author: 'Clément',
    content:
      'Lorem ipsum dolor sit, amet consectetur adi repellat vel? Nemo ver a gui a para jix perspiciatis quas nostrum ratione laboriosam cumque nisi asperiores, cupiditate quia nesciunt officiis maxime facilis et atque! Exercitationem dolorem ipsa ad soluta? Debitis consequuntur eos cumque, sequi eligendi quos! Incidunt.',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Economie', 'Finance', 'Spéculation'],
  },
  {
    author: 'John',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, hic ipsum alias natus assumenda eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Cryptomonnaies', 'NFT'],
  },
  {
    author: 'Nathan',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus, nulla omnis dicta quasi quo, repellat est unde esse nisi cumque at sunt, Lorem ipsum dolor sit nulla omnis dicta hic ipsum alias nulla omnis dicta quasi quo, natus assumenda ipsum dolor sit nulla omnis dicta eligendi! Nam?',
    date: Date.now() - Math.round(Math.random() * 100000000000),
    categories: ['Magie'],
  },
];

const rootElement = document.getElementById('articles');
const selectELement = document.getElementById('trie');

const trieArticleDateCroissant = () => {
  const result = [...datas];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].date > result[j + 1].date) {
        const d = result[j + 1];
        result[j + 1] = result[j];
        result[j] = d;
      }
    }
  }
  return result;
};

const trieArticleCategoriesCroissant = () => {
  const result = [...datas];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].categories.length < result[j + 1].categories.length) {
        const d = result[j + 1];
        result[j + 1] = result[j];
        result[j] = d;
      }
    }
  }
  return result;
};

const trieArticleTextCroissant = () => {
  const result = [...datas];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].content.length < result[j + 1].content.length) {
        const d = result[j + 1];
        result[j + 1] = result[j];
        result[j] = d;
      }
    }
  }
  return result;
};

const articleMap = (articlesSort = datas) => {
  const articles = articlesSort;
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
  rootElement.innerHTML = '';
  rootElement.append(...articlesElements);
};

articleMap();

selectELement.addEventListener('change', (e) => {
  const categorie = e.target.value;

  switch (categorie) {
    case 'default':
      articleMap();
      break;
    case 'latest':
      articleMap(trieArticleDateCroissant(datas).reverse());
      break;
    case 'oldest':
      articleMap(trieArticleDateCroissant(datas));
      break;
    case 'more-categories':
      articleMap(trieArticleCategoriesCroissant(datas));
      break;
    case 'less-categories':
      articleMap(trieArticleCategoriesCroissant(datas).reverse());
      break;
    case 'more-texte':
      articleMap(trieArticleTextCroissant(datas));
      break;
    case 'less-texte':
      articleMap(trieArticleTextCroissant(datas).reverse());
      break;
    default:
      break;
  }
});
