// Sample card data with features as objects for two icons
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

// Dynamically create and append the cards
const container = document.getElementById('cards-container');
cardData.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  // Construct the HTML for each card
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
        <div class="card-features-ab">
          ${card.features.map(feature => `
            <div class="feature">
              <i class="${feature.icon}"></i>
              <span>${feature.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

  container.appendChild(cardElement);
});
