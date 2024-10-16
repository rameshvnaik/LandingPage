function toggleMenu() {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

document.querySelectorAll('.dropdown-menu a').forEach(item => {
  item.addEventListener('click', () => {
      document.querySelector('.dropdown-menu').classList.remove('show');
  });
});



const cardData = [
  {
    image: './images/newyork.jpg',
    title: 'Urban Oasis',
    price: '$395,000',
    details: '2699 Green Valley. Highland lake.FL',
    features: [
      { icon: 'fas fa-briefcase', text: '2 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  },
  {
    image: './images/chicago.jpg',
    title: 'Creen Haven',
    price: '$375,000',
    details: '2699 Green Valley. Highland lake.FL',
    features: [
      { icon: 'fas fa-briefcase', text: '1 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  },
  {
    image: './images/LosAneles.jpg',
    title: 'Green Heaven',
        price: '$375,000',
        details: '2699 Green Valley. Highland lake.FL',
        features: [
      { icon: 'fas fa-briefcase', text: '1 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  },
  {
    image: './images/newyork.jpg',
    title: 'Urban Oasis',
    price: '$395,000',
    details: '2699 Green Valley. Highland lake.FL',
    features: [
      { icon: 'fas fa-briefcase', text: '2 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  },
  {
    image: './images/chicago.jpg',
    title: 'Cityscape Living',
    price: '$375,000',
    details: '2699 Green Valley. Highland lake.FL',
    features: [
      { icon: 'fas fa-briefcase', text: '1 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  },
  {
    image: './images/LosAneles.jpg',
    title: 'Green Heaven',
        price: '$375,000',
        details: '2699 Green Valley. Highland lake.FL',
        features: [
      { icon: 'fas fa-briefcase', text: '1 Workspaces' },
      { icon: 'fas fa-chalkboard', text: '1 Conference Room' }
    ]
  }
];

const container = document.getElementById('cards-container');
cardData.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  cardElement.innerHTML = `
      <div class="image-container">
        <img src="${card.image}" alt="${card.title}">
        <span class="popular">★ Popular</span>
      </div>
      <div class="card-content">
        <div class="card-title">
          <span>${card.title}</span>
          <span class="price">${card.price}</span>
        </div>
        <p class="card-details">${card.details}</p>
        <hr />
        <div class="card-features-ab">
          ${card.features.map(feature => `
            <div class="feature">
              <i class="${feature.icon} icons"></i>
              <span>${feature.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

  container.appendChild(cardElement);
});

