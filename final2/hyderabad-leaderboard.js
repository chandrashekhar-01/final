const places = [
  { id: 1, name: "Charminar", points: 50 },
  { id: 2, name: "Golconda Fort", points: 60 },
  { id: 3, name: "Ramoji Film City", points: 40 },
  { id: 4, name: "Hussain Sagar Lake", points: 30 },
  { id: 5, name: "Salar Jung Museum", points: 45 },
  { id: 6, name: "Birla Mandir", points: 35 },
  { id: 7, name: "Chowmahalla Palace", points: 55 },
  { id: 8, name: "Wonderla Amusement Park", points: 70 }
];

let users = JSON.parse(localStorage.getItem('hyderabadExplorerUsers')) || [
  { id: 'user1', name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/44.jpg", 
    weeklyPoints: 120, monthlyPoints: 480, allTimePoints: 1250 },
  { id: 'user2', name: "Aarav Sharma", avatar: "https://randomuser.me/api/portraits/men/32.jpg", 
    weeklyPoints: 90, monthlyPoints: 420, allTimePoints: 1100 },
  { id: 'current', name: "You", avatar: "https://via.placeholder.com/40", 
    weeklyPoints: 50, monthlyPoints: 200, allTimePoints: 500 }
];


const placesContainer = document.getElementById('places-container');
const leaderboardBody = document.getElementById('leaderboard-body');
const tabButtons = document.querySelectorAll('.tab-btn');
const resetBtn = document.getElementById('reset-btn') || createResetButton();

let currentPeriod = 'weekly';

function initializeApp() {
  if (!localStorage.getItem('hyderabadExplorerUsers')) {
      saveToLocalStorage();
  }
  renderPlaces();
  renderLeaderboard();
  setupEventListeners();
}


// Save data to localStorage
function saveToLocalStorage() {
  localStorage.setItem('hyderabadExplorerUsers', JSON.stringify(users));
}

// Render all Hyderabad places
function renderPlaces() {
  placesContainer.innerHTML = '';
  
  places.forEach(place => {
      const placeCard = document.createElement('div');
      placeCard.className = 'place-card';
      placeCard.innerHTML = `
          <div>
              <strong>${place.name}</strong>
          </div>
          <div>
              <span class="place-points">${place.points} pts</span>
              <button class="submit-btn" data-id="${place.id}">
                  <i class="fas fa-check"></i> Submit
              </button>
          </div>
      `;
      placesContainer.appendChild(placeCard);
  });
}

// Handle place visit submission
function submitPlaceVisit(placeId) {
  const place = places.find(p => p.id === placeId);
  if (!place) return;

  const currentUser = users.find(u => u.id === 'current');
  const oldPoints = currentUser[currentPeriod + 'Points'];
  
  // Update points
  currentUser.weeklyPoints += place.points;
  currentUser.monthlyPoints += place.points;
  currentUser.allTimePoints += place.points;
  
  saveToLocalStorage();
  animatePointsUpdate(currentUser, oldPoints);
  updateLeaderboard();
}

// Animate points change
function animatePointsUpdate(user, oldPoints) {
  const pointsElement = document.querySelector(`.user-points.highlight`);
  if (pointsElement) {
      pointsElement.classList.remove('highlight');
  }
  
  setTimeout(() => {
      const newPointsElement = document.querySelector(`.user-info img[src="${user.avatar}"]`)
                             ?.closest('.leaderboard-row')
                             ?.querySelector('.user-points');
      if (newPointsElement) {
          newPointsElement.classList.add('highlight');
          setTimeout(() => {
              newPointsElement.classList.remove('highlight');
          }, 1000);
      }
  }, 100);
}

// Update leaderboard display
function updateLeaderboard() {
  users.sort((a, b) => b[currentPeriod + 'Points'] - a[currentPeriod + 'Points']);
  renderLeaderboard();
}

// Render the leaderboard
function renderLeaderboard() {
  const sortedUsers = [...users].sort((a, b) => 
      b[currentPeriod + 'Points'] - a[currentPeriod + 'Points']);
  
  leaderboardBody.innerHTML = '';
  
  sortedUsers.forEach((user, index) => {
      const row = document.createElement('div');
      row.className = `leaderboard-row ${index < 3 ? 'top-3' : ''}`;
      
      row.innerHTML = `
          <div class="rank rank-${index + 1}">
              ${getRankIcon(index)} ${index + 1}
          </div>
          <div class="user-info">
              <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
              <span>${user.name}</span>
          </div>
          <div class="user-points">${user[currentPeriod + 'Points']} pts</div>
      `;
      
      leaderboardBody.appendChild(row);
  });
}

// Get rank icon (crown/medal)
function getRankIcon(index) {
  if (index === 0) return '<i class="fas fa-crown"></i>';
  if (index <= 2) return '<i class="fas fa-medal"></i>';
  return '';
}

// Reset all data
function resetData() {
  if (confirm('Are you sure you want to reset all leaderboard data?')) {
      localStorage.removeItem('hyderabadExplorerUsers');
      users = [
          { id: 'user1', name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/44.jpg", 
            weeklyPoints: 120, monthlyPoints: 480, allTimePoints: 1250 },
          { id: 'user2', name: "Aarav Sharma", avatar: "https://randomuser.me/api/portraits/men/32.jpg", 
            weeklyPoints: 90, monthlyPoints: 420, allTimePoints: 1100 },
          { id: 'current', name: "You", avatar: "https://via.placeholder.com/40", 
            weeklyPoints: 50, monthlyPoints: 200, allTimePoints: 500 }
      ];
      saveToLocalStorage();
      renderLeaderboard();
  }
}

// Create reset button if doesn't exist
function createResetButton() {
  const btn = document.createElement('button');
  btn.id = 'reset-btn';
  btn.className = 'reset-btn';
  btn.innerHTML = '<i class="fas fa-trash-alt"></i> Reset Data';
  document.querySelector('.leaderboard-section').appendChild(btn);
  return btn;
}

// ======================
// EVENT HANDLERS
// ======================
function setupEventListeners() {
  // Place submission
  document.addEventListener('click', function(e) {
      if (e.target.closest('.submit-btn')) {
          const placeId = parseInt(e.target.closest('.submit-btn').dataset.id);
          submitPlaceVisit(placeId);
      }
  });

  // Tab switching
  tabButtons.forEach(btn => {
      btn.addEventListener('click', function() {
          tabButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentPeriod = this.dataset.period;
          renderLeaderboard();
      });
  });

  // Reset button
  resetBtn.addEventListener('click', resetData);
}

// ======================
// START THE APP
// ======================
initializeApp();