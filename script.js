// Sample Data
const placesData = [
  {
      id: 1,
      name: "Charminar",
      type: "historical",
      description: "Iconic 16th-century monument with four grand arches, a mosque and panoramic city views from the top.",
      image: "images/charminar.jpg",
      points: 50
  },
  {
      id: 2,
      name: "Golconda Fort",
      type: "historical",
      description: "Massive ruined fort with impressive acoustics, royal palaces and ingenious water supply system.",
      image: "images/golcondafort.jpg",
      points: 45
  },
  {
      id: 3,
      name: "Ramoji Film City",
      type: "tourist",
      description: "World's largest film studio complex offering tours, live shows, and entertainment attractions.",
      image: "images/ramoji.avif",
      points: 40
  },
  {
      id: 4,
      name: "Hussain Sagar Lake",
      type: "tourist",
      description: "Large heart-shaped lake with a giant Buddha statue, boating facilities and waterfront parks.",
      image: "images/hussiansagarlake.webp",
      points: 30
  },
  {
      id: 5,
      name: "Salar Jung Museum",
      type: "historical",
      description: "One of India's largest museums showcasing art, sculptures and artifacts from around the world.",
      image: "images/salarjung-m.jpg",
      points: 35
  },
  {
      id: 6,
      name: "Wonderla Amusement Park",
      type: "modern",
      description: "Popular amusement park with thrilling rides, water slides and entertainment shows.",
      image: "images/wonderla.jpeg",
      points: 40
  },
  {
      id: 7,
      name: "Chowmahalla Palace",
      type: "historical",
      description: "Former royal palace with elegant courtyards, grand halls and vintage car collection.",
      image: "images/chowmahalla.jpeg",
      points: 35
  },
  {
      id: 8,
      name: "Birla Mandir",
      type: "tourist",
      description: "Striking white marble temple dedicated to Lord Venkateswara, offering panoramic city views.",
      image: "images/birlamandir.png",
      points: 30
  },
  {
        id:9,
        name:"Statue Of Equality | 108 DivyaDesams",
        type:"tourist",
        description:"Vast, golden monument dedicated to medieval guru Sri Ramanuja, with a meditation hall in its base.",
        image: "images/statue.webp",
        points:40
  },
  {
        id:10,
        name:"B.M. Birla Science Center",
        type:"modern",
        description:"Museum housing a science centre and dinosaurium, as well as a planetarium and an observatory.",
        image: "images/birla-science-center.webp",
        points:50 
  },
  {
        id:11,
        name:"Nehru Zoological Park",
        type:"tourist",
        description:"Spacious zoo featuring tigers, rhinos, elephants & monkeys, plus safari rides.",
        image: "images/nehruzoopark.jpg",
        points:45 
  }
];

const challengesData = [
  {
      id: 1,
      title: "Historical Explorer",
      description: "Visit 3 historical places in Hyderabad",
      points: 100,
      completed: false,
      placesRequired: [1, 2, 5]
  },
  {
      id: 2,
      title: "Weekend Adventurer",
      description: "Visit any 2 tourist spots in a single weekend",
      points: 75,
      completed: false,
      placesRequired: [3, 4, 8]
  },
  {
      id: 3,
      title: "First Step",
      description: "Visit your first place in Hyderabad",
      points: 50,
      completed: true,
      placesRequired: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
      id: 4,
      title: "Modern Explorer",
      description: "Visit 2 modern attractions in Hyderabad",
      points: 80,
      completed: false,
      placesRequired: [6]
  }
];

const badgesData = [
  {
      id: 1,
      name: "New Explorer",
      description: "Visit your first place",
      icon: "fas fa-map-marker-alt",
      unlocked: true
  },
  {
      id: 2,
      name: "History Buff",
      description: "Visit 5 historical places",
      icon: "fas fa-landmark",
      unlocked: false
  },
  {
      id: 3,
      name: "Foodie",
      description: "Try 3 local foods",
      icon: "fas fa-utensils",
      unlocked: false
  },
  {
      id: 4,
      name: "Photographer",
      description: "Upload 10 photos",
      icon: "fas fa-camera",
      unlocked: false
  },
  {
      id: 5,
      name: "Weekend Warrior",
      description: "Complete 3 weekend challenges",
      icon: "fas fa-trophy",
      unlocked: false
  },
  {
      id: 6,
      name: "Local Guide",
      description: "Visit all major attractions",
      icon: "fas fa-map-signs",
      unlocked: false
  }
];

const leaderboardData = {
  weekly: [
      { id: 1, name: "Suansh K", avatar: "https://randomuser.me/api/portraits/men/32.jpg", points: 450, badges: 5 },
      { id: 2, name: "Vaibhav K", avatar: "https://randomuser.me/api/portraits/women/44.jpg", points: 420, badges: 4 },
      { id: 3, name: "Yashwanth G", avatar: "https://randomuser.me/api/portraits/men/22.jpg", points: 380, badges: 3 },
      { id: 4, name: "Chandra Shekhar K", avatar: "https://randomuser.me/api/portraits/women/65.jpg", points: 350, badges: 4 },
      { id: 5, name: "Arun S", avatar: "https://randomuser.me/api/portraits/men/75.jpg", points: 320, badges: 3 }
  ],
  monthly: [
      { id: 1, name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/44.jpg", points: 1850, badges: 12 },
      { id: 2, name: "Aarav Sharma", avatar: "https://randomuser.me/api/portraits/men/32.jpg", points: 1750, badges: 10 },
      { id: 3, name: "Neha Kapoor", avatar: "https://randomuser.me/api/portraits/women/33.jpg", points: 1620, badges: 9 },
      { id: 4, name: "Rahul Gupta", avatar: "https://randomuser.me/api/portraits/men/22.jpg", points: 1580, badges: 8 },
      { id: 5, name: "Vikram Singh", avatar: "https://randomuser.me/api/portraits/men/75.jpg", points: 1420, badges: 7 }
  ],
  alltime: [
      { id: 1, name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/44.jpg", points: 4850, badges: 25 },
      { id: 2, name: "Aarav Sharma", avatar: "https://randomuser.me/api/portraits/men/32.jpg", points: 4750, badges: 24 },
      { id: 3, name: "Neha Kapoor", avatar: "https://randomuser.me/api/portraits/women/33.jpg", points: 4620, badges: 22 },
      { id: 4, name: "Rahul Gupta", avatar: "https://randomuser.me/api/portraits/men/22.jpg", points: 4380, badges: 20 },
      { id: 5, name: "Vikram Singh", avatar: "https://randomuser.me/api/portraits/men/75.jpg", points: 4120, badges: 18 }
  ]
};

const budgetRecommendations = {
  1: { // Charminar
      food: [
          { name: "Irani Chai & Osmania Biscuit", place: "Near Charminar", price: 50, type: "snack" },
          { name: "Hyderabadi Biryani", place: "Hotel Shadab", price: 250, type: "meal" },
          { name: "Haleem", place: "Pista House", price: 150, type: "meal" },
          { name: "Double Ka Meetha", place: "Local Sweet Shops", price: 80, type: "dessert" }
      ],
      activities: [
          { name: "Shopping at Laad Bazaar", price: 0, duration: "1-2 hours" },
          { name: "Photography Tour", price: 0, duration: "1 hour" },
          { name: "Heritage Walk", price: 200, duration: "2 hours" }
      ]
  },
  2: { // Golconda Fort
      food: [
          { name: "Packed Lunch", place: "Bring your own", price: 100, type: "meal" },
          { name: "Fresh Juice & Snacks", place: "Fort Entrance", price: 80, type: "snack" }
      ],
      activities: [
          { name: "Light & Sound Show", price: 100, duration: "1 hour" },
          { name: "Guided Tour", price: 300, duration: "2 hours" },
          { name: "Climb to the top", price: 0, duration: "1 hour" }
      ]
  },
  3: { // Ramoji Film City
      food: [
          { name: "Theme Park Meal", place: "Food Court", price: 200, type: "meal" },
          { name: "Snacks & Drinks", place: "Various Counters", price: 150, type: "snack" }
      ],
      activities: [
          { name: "Full Day Entry Ticket", price: 1150, duration: "6-8 hours" },
          { name: "Movie Magic Shows", price: 0, duration: "varies" },
          { name: "Rides & Attractions", price: 0, duration: "varies" }
      ]
  }
};

// DOM Elements
const placesContainer = document.getElementById('places-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const challengesList = document.getElementById('challenges-list');
const badgesContainer = document.getElementById('badges-container');
const uploadBox = document.getElementById('upload-box');
const photoUpload = document.getElementById('photo-upload');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const submitPhotosBtn = document.getElementById('submit-photos');
const placeSelect = document.getElementById('place-select');
const budgetAmount = document.getElementById('budget-amount');
const visitType = document.getElementById('visit-type');
const generatePlanBtn = document.getElementById('generate-plan');
const planResults = document.getElementById('plan-results');
const leaderboardTabs = document.querySelectorAll('.tab-btn');
const leaderboardBody = document.getElementById('leaderboard-body');
const userPosition = document.getElementById('user-position');
const photoModal = document.getElementById('photo-modal');
const closeModalBtn = document.querySelector('.close-btn');
const photoPreview = document.getElementById('photo-preview');
const previewImage = document.getElementById('preview-image');
const photoPlaceSelect = document.getElementById('photo-place');
const photoDate = document.getElementById('photo-date');
const confirmUploadBtn = document.getElementById('confirm-upload');
const userPointsElement = document.getElementById('user-points');

// App State
let currentUser = {
  name: "You",
  avatar: "https://via.placeholder.com/40",
  points: 150,
  badges: 1,
  visitedPlaces: [1, 3],
  uploadedPhotos: 0
};

let uploadedFiles = [];
let currentPhoto = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  // Load places
  renderPlaces(placesData);
  
  // Load challenges
  renderChallenges();
  
  // Load badges
  renderBadges();
  
  // Load leaderboard
  renderLeaderboard('weekly');
  
  // Load place select options
  loadPlaceSelectOptions();
  
  // Update user profile
  updateUserProfile();
  
  // Event listeners
  setupEventListeners();
});

// Render functions
function renderPlaces(places) {
  placesContainer.innerHTML = '';
  
  places.forEach(place => {
      const placeCard = document.createElement('div');
      placeCard.className = 'place-card';
      
      const typeClass = place.type === 'historical' ? 'historical' : 
                       place.type === 'modern' ? 'modern' : 'tourist';
      
      placeCard.innerHTML = `
          <div class="place-image">
              <img src="${place.image}" alt="${place.name}">
          </div>
          <div class="place-info">
              <h3>${place.name}</h3>
              <span class="place-type ${typeClass}">${place.type}</span>
              <p>${place.description}</p>
              <div class="place-points">
                  <i class="fas fa-star"></i>
                  <span>${place.points} points</span>
              </div>
          </div>
      `;
      
      placesContainer.appendChild(placeCard);
  });
}

function renderChallenges() {
  challengesList.innerHTML = '';
  
  challengesData.forEach(challenge => {
      const challengeItem = document.createElement('div');
      challengeItem.className = `challenge-item ${challenge.completed ? 'completed' : ''}`;
      
      challengeItem.innerHTML = `
          <i class="fas ${challenge.completed ? 'fa-check-circle' : 'fa-flag'}"></i>
          <div class="challenge-details">
              <h4>${challenge.title}</h4>
              <p>${challenge.description}</p>
              <div class="challenge-points">
                  <i class="fas fa-star"></i>
                  <span>${challenge.points} points</span>
              </div>
          </div>
      `;
      
      challengesList.appendChild(challengeItem);
  });
}

function renderBadges() {
  badgesContainer.innerHTML = '';
  
  badgesData.forEach(badge => {
      const badgeItem = document.createElement('div');
      badgeItem.className = 'badge-item';
      
      badgeItem.innerHTML = `
          <div class="badge-icon ${badge.unlocked ? 'unlocked' : 'locked'}">
              <i class="${badge.icon}"></i>
          </div>
          <h4>${badge.name}</h4>
          <p>${badge.description}</p>
      `;
      
      badgesContainer.appendChild(badgeItem);
  });
}

function renderLeaderboard(period) {
  leaderboardBody.innerHTML = '';
  
  const data = leaderboardData[period];
  
  data.forEach((user, index) => {
      const row = document.createElement('div');
      row.className = `leaderboard-row ${index < 3 ? 'top-3' : ''}`;
      
      let rankIcon = '';
      if (index === 0) {
          rankIcon = '<i class="fas fa-crown"></i>';
      } else if (index === 1) {
          rankIcon = '<i class="fas fa-medal"></i>';
      } else if (index === 2) {
          rankIcon = '<i class="fas fa-medal"></i>';
      }
      
      row.innerHTML = `
          <span class="rank rank-${index + 1}">${rankIcon} ${index + 1}</span>
          <div class="user-info">
              <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
              <span class="user-name">${user.name}</span>
          </div>
          <span class="user-points">${user.points} pts</span>
          <div class="user-badges">
              <div class="badge-count">${user.badges}</div>
          </div>
      `;
      
      leaderboardBody.appendChild(row);
  });
  
  // Update user position
  updateUserPosition(period);
}

function updateUserPosition(period) {
  const data = leaderboardData[period];
  let userRank = data.length + 1; // Default to last position
  
  // Check if user is in the leaderboard
  for (let i = 0; i < data.length; i++) {
      if (data[i].name === currentUser.name) {
          userRank = i + 1;
          break;
      }
  }
  
  userPosition.innerHTML = `
      <div class="position-details">
          <div class="position-rank">#${userRank}</div>
          <div class="position-info">
              <h4>${currentUser.name}</h4>
              <p>${period === 'weekly' ? 'Weekly ranking' : period === 'monthly' ? 'Monthly ranking' : 'All-time ranking'}</p>
          </div>
      </div>
      <div class="position-stats">
          <div class="stat-item">
              <div class="stat-value">${currentUser.points}</div>
              <div class="stat-label">Points</div>
          </div>
          <div class="stat-item">
              <div class="stat-value">${currentUser.badges}</div>
              <div class="stat-label">Badges</div>
          </div>
      </div>
  `;
}

function loadPlaceSelectOptions() {
  placeSelect.innerHTML = '<option value="">-- Select a place --</option>';
  photoPlaceSelect.innerHTML = '<option value="">-- Select place --</option>';
  
  placesData.forEach(place => {
      const option = document.createElement('option');
      option.value = place.id;
      option.textContent = place.name;
      
      placeSelect.appendChild(option.cloneNode(true));
      photoPlaceSelect.appendChild(option);
  });
}

function updateUserProfile() {
  userPointsElement.textContent = `${currentUser.points} pts`;
}

// Event listeners
function setupEventListeners() {
  // Filter places
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          const filter = this.dataset.filter;
          if (filter === 'all') {
              renderPlaces(placesData);
          } else {
              const filteredPlaces = placesData.filter(place => place.type === filter);
              renderPlaces(filteredPlaces);
          }
      });
  });
  
  // Photo upload
  uploadBox.addEventListener('click', () => photoUpload.click());
  
  uploadBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadBox.style.borderColor = '#4a6bff';
      uploadBox.style.backgroundColor = 'rgba(74, 107, 255, 0.05)';
  });
  
  uploadBox.addEventListener('dragleave', () => {
      uploadBox.style.borderColor = '#ddd';
      uploadBox.style.backgroundColor = 'transparent';
  });
  
  uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadBox.style.borderColor = '#ddd';
      uploadBox.style.backgroundColor = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
          handleFiles(e.dataTransfer.files);
      }
  });
  
  photoUpload.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
          handleFiles(e.target.files);
      }
  });
  
  // Submit photos
  submitPhotosBtn.addEventListener('click', () => {
      if (uploadedFiles.length > 0) {
          showPhotoModal(uploadedFiles[0]);
      }
  });
  
  // Generate plan
  generatePlanBtn.addEventListener('click', generateBudgetPlan);
  
  // Leaderboard tabs
  leaderboardTabs.forEach(tab => {
      tab.addEventListener('click', function() {
          leaderboardTabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          
          const period = this.dataset.period;
          renderLeaderboard(period);
      });
  });
  
  // Modal
  closeModalBtn.addEventListener('click', closePhotoModal);
  confirmUploadBtn.addEventListener('click', confirmPhotoUpload);
  
  // Close modal when clicking outside
  photoModal.addEventListener('click', (e) => {
      if (e.target === photoModal) {
          closePhotoModal();
      }
  });
}

// Helper functions
function handleFiles(files) {
  uploadedFiles = Array.from(files);
  
  // Simulate upload progress
  let progress = 0;
  const interval = setInterval(() => {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
      
      if (progress >= 100) {
          clearInterval(interval);
          submitPhotosBtn.disabled = false;
          progressText.textContent = 'Upload complete!';
      }
  }, 100);
  
  // Show progress bar
  document.querySelector('.progress-container').style.display = 'block';
}

function showPhotoModal(file) {
  currentPhoto = file;
  
  const reader = new FileReader();
  reader.onload = function(e) {
      previewImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
  
  photoModal.style.display = 'flex';
}

function closePhotoModal() {
  photoModal.style.display = 'none';
  currentPhoto = null;
}

function confirmPhotoUpload() {
  const placeId = photoPlaceSelect.value;
  const date = photoDate.value;
  
  if (!placeId || !date) {
      alert('Please select a place and date');
      return;
  }
  
  // In a real app, you would upload to server here
  console.log('Photo uploaded:', {
      place: photoPlaceSelect.options[photoPlaceSelect.selectedIndex].text,
      date: date,
      photo: currentPhoto.name
  });
  
  // Update user points
  const place = placesData.find(p => p.id === parseInt(placeId));
  currentUser.points += place.points;
  currentUser.uploadedPhotos++;
  
  // Check if this is a new place
  if (!currentUser.visitedPlaces.includes(parseInt(placeId))) {
      currentUser.visitedPlaces.push(parseInt(placeId));
  }
  
  // Check for new badges
  checkForNewBadges();
  
  // Update UI
  updateUserProfile();
  renderChallenges();
  renderBadges();
  renderLeaderboard(document.querySelector('.tab-btn.active').dataset.period);
  
  // Reset upload
  uploadedFiles = [];
  photoUpload.value = '';
  progressBar.style.width = '0%';
  progressText.textContent = '0%';
  document.querySelector('.progress-container').style.display = 'none';
  submitPhotosBtn.disabled = true;
  
  // Close modal
  closePhotoModal();
  
  // Show success message
  alert(`Success! You earned ${place.points} points for visiting ${place.name}`);
}

function checkForNewBadges() {
  // Check for New Explorer badge (already unlocked)
  
  // Check for Photographer badge
  if (currentUser.uploadedPhotos >= 10 && !badgesData[3].unlocked) {
      badgesData[3].unlocked = true;
      currentUser.badges++;
      alert('Congratulations! You unlocked the Photographer badge!');
  }
  
  // Check for History Buff badge
  const historicalPlacesVisited = currentUser.visitedPlaces.filter(id => {
      const place = placesData.find(p => p.id === id);
      return place.type === 'historical';
  }).length;
  
  if (historicalPlacesVisited >= 5 && !badgesData[1].unlocked) {
      badgesData[1].unlocked = true;
      currentUser.badges++;
      alert('Congratulations! You unlocked the History Buff badge!');
  }
}

function generateBudgetPlan() {
  const placeId = placeSelect.value;
  const budget = parseInt(budgetAmount.value);
  const type = visitType.value;
  
  if (!placeId || isNaN(budget)) {
      alert('Please select a place and enter a valid budget');
      return;
  }
  
  const place = placesData.find(p => p.id === parseInt(placeId));
  const recommendations = budgetRecommendations[placeId] || budgetRecommendations[1]; // Default to Charminar
  
  // Adjust budget based on visit type
  let adjustedBudget = budget;
  if (type === 'family') adjustedBudget = budget / 4;
  if (type === 'couple') adjustedBudget = budget / 2;
  
  // Generate plan
  planResults.innerHTML = `
      <h3>Smart Plan for ${place.name}</h3>
      <p>Based on your ${type} budget of ₹${budget}</p>
      
      <div class="plan-category">
          <h4><i class="fas fa-utensils"></i> Food Recommendations</h4>
          ${generateFoodRecommendations(recommendations.food, adjustedBudget)}
      </div>
      
      <div class="plan-category">
          <h4><i class="fas fa-running"></i> Activity Recommendations</h4>
          ${generateActivityRecommendations(recommendations.activities, adjustedBudget)}
      </div>
      
      <div class="plan-tips">
          <h4><i class="fas fa-lightbulb"></i> Budget Tips</h4>
          <ul>
              <li>Carry water bottles to avoid buying expensive drinks</li>
              <li>Visit during weekdays for potentially lower prices</li>
              <li>Check for combo tickets if visiting multiple attractions</li>
              ${type === 'family' ? '<li>Look for family discounts or packages</li>' : ''}
          </ul>
      </div>
  `;
}

function generateFoodRecommendations(foodItems, budget) {
  // Filter items that fit within 50% of the budget
  const affordableItems = foodItems.filter(item => item.price <= budget * 0.5);
  
  // Sort by price (ascending)
  affordableItems.sort((a, b) => a.price - b.price);
  
  // Limit to 3 recommendations
  const recommendations = affordableItems.slice(0, 3);
  
  if (recommendations.length === 0) {
      return '<p>Consider bringing your own food to stay within budget</p>';
  }
  
  let html = '';
  recommendations.forEach(item => {
      html += `
          <div class="recommendation-item">
              <div class="recommendation-icon">
                  <i class="fas ${item.type === 'meal' ? 'fa-utensils' : item.type === 'snack' ? 'fa-coffee' : 'fa-ice-cream'}"></i>
              </div>
              <div class="recommendation-details">
                  <h5>${item.name}</h5>
                  <p>${item.place}</p>
                  <div class="recommendation-price">₹${item.price}</div>
              </div>
          </div>
      `;
  });
  
  return html;
}

function generateActivityRecommendations(activities, budget) {
  // Filter activities that fit within the budget
  const affordableActivities = activities.filter(activity => activity.price <= budget);
  
  // Sort by price (ascending)
  affordableActivities.sort((a, b) => a.price - b.price);
  
  if (affordableActivities.length === 0) {
      return '<p>Enjoy the free sights and atmosphere of the location</p>';
  }
  
  let html = '';
  affordableActivities.forEach(activity => {
      html += `
          <div class="recommendation-item">
              <div class="recommendation-icon">
                  <i class="fas ${activity.price > 0 ? 'fa-ticket-alt' : 'fa-walking'}"></i>
              </div>
              <div class="recommendation-details">
                  <h5>${activity.name}</h5>
                  <p>Duration: ${activity.duration}</p>
                  <div class="recommendation-price">${activity.price > 0 ? '₹' + activity.price : 'Free'}</div>
              </div>
          </div>
      `;
  });
  
  return html;
}
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // Navigation for menu links
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          // Remove active class from all links and sections
          navLinks.forEach(nav => nav.classList.remove("active"));
          sections.forEach(section => section.classList.remove("active"));

          // Add active class to the clicked link and the corresponding section
          this.classList.add("active");
          const targetSection = document.querySelector(this.getAttribute("href"));
          if (targetSection) {
              targetSection.classList.add("active");
          }
      });
  });

  // Handle "Start Exploring" and "Plan Your Trip" button clicks
  document.querySelectorAll(".cta-buttons a").forEach(button => {
      button.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          // Remove active class from all sections
          sections.forEach(section => section.classList.remove("active"));

          // Show the target section
          const targetSection = document.querySelector(this.getAttribute("href"));
          if (targetSection) {
              targetSection.classList.add("active");
          }

          // Update active navigation link
          navLinks.forEach(link => link.classList.remove("active"));
          document.querySelector(`.nav-link[href='${this.getAttribute("href")}']`)?.classList.add("active");
      });
  });
});
