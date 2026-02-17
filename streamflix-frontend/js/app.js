// Movie Database
const movies = {
    'cosmic-odyssey': {
        id: 'cosmic-odyssey',
        title: 'Cosmic Odyssey',
        description: 'A thrilling space adventure where humanity\'s last hope lies in discovering an ancient alien artifact that could save Earth from impending doom.',
        genre: ['Sci-Fi', 'Action', 'Adventure'],
        duration: 148,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/cosmic-odyssey/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        featured: true,
        category: 'Trending',
        cast: ['Chris Johnson', 'Emma Stone', 'Michael B. Jordan'],
        director: 'Christopher Nolan',
        imdbRating: 8.5,
        progress: 45
    },
    'last-detective': {
        id: 'last-detective',
        title: 'The Last Detective',
        description: 'A gritty crime thriller following a veteran detective who must solve one final case before retirement.',
        genre: ['Crime', 'Thriller', 'Drama'],
        duration: 126,
        year: 2023,
        rating: 'R',
        thumbnail: 'https://picsum.photos/seed/last-detective/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        featured: true,
        category: 'New Releases',
        cast: ['Denzel Washington', 'Viola Davis', 'Oscar Isaac'],
        director: 'David Fincher',
        imdbRating: 7.8,
        progress: 0
    },
    'laugh-track': {
        id: 'laugh-track',
        title: 'Laugh Track',
        description: 'A heartwarming comedy about a struggling comedian who finds unexpected success and love.',
        genre: ['Comedy', 'Romance'],
        duration: 98,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/laugh-track/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        featured: false,
        category: 'Comedy',
        cast: ['Kevin Hart', 'Amy Schumer', 'John Cena'],
        director: 'Judd Apatow',
        imdbRating: 6.9,
        progress: 0
    },
    'digital-dreams': {
        id: 'digital-dreams',
        title: 'Digital Dreams',
        description: 'A mind-bending psychological thriller that explores the boundaries between reality and virtual reality.',
        genre: ['Sci-Fi', 'Thriller', 'Drama'],
        duration: 142,
        year: 2023,
        rating: 'R',
        thumbnail: 'https://picsum.photos/seed/digital-dreams/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        featured: true,
        category: 'Trending',
        cast: ['Ryan Gosling', 'Alicia Vikander', 'Jared Leto'],
        director: 'Denis Villeneuve',
        imdbRating: 8.2,
        progress: 78
    },
    'family-first': {
        id: 'family-first',
        title: 'Family First',
        description: 'An emotional drama about a family coming together to overcome adversity and rediscover the meaning of love.',
        genre: ['Drama', 'Family'],
        duration: 118,
        year: 2023,
        rating: 'PG',
        thumbnail: 'https://picsum.photos/seed/family-first/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        featured: false,
        category: 'Drama',
        cast: ['Tom Hanks', 'Julia Roberts', 'Jacob Tremblay'],
        director: 'Steven Spielberg',
        imdbRating: 7.5,
        progress: 0
    },
    'shadow-protocol': {
        id: 'shadow-protocol',
        title: 'Shadow Protocol',
        description: 'An action-packed espionage thriller where a covert agent must go rogue to uncover a conspiracy.',
        genre: ['Action', 'Thriller'],
        duration: 134,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/shadow-protocol/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        featured: false,
        category: 'Action',
        cast: ['Daniel Craig', 'Charlize Theron', 'Idris Elba'],
        director: 'Sam Mendes',
        imdbRating: 7.3,
        progress: 0
    },
    'oceans-mystery': {
        id: 'oceans-mystery',
        title: 'Ocean\'s Mystery',
        description: 'A fascinating documentary exploring the deepest parts of our oceans and the incredible creatures that inhabit these mysterious realms.',
        genre: ['Documentary'],
        duration: 96,
        year: 2023,
        rating: 'G',
        thumbnail: 'https://picsum.photos/seed/oceans-mystery/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        featured: false,
        category: 'Documentary',
        cast: ['David Attenborough'],
        director: 'James Cameron',
        imdbRating: 8.7,
        progress: 0
    },
    'magic-kingdom': {
        id: 'magic-kingdom',
        title: 'Magic Kingdom',
        description: 'An enchanting animated adventure about a young princess who must save her kingdom from an evil sorcerer.',
        genre: ['Animation', 'Kids', 'Adventure'],
        duration: 88,
        year: 2023,
        rating: 'G',
        thumbnail: 'https://picsum.photos/seed/magic-kingdom/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        featured: false,
        category: 'Kids',
        cast: ['Idina Menzel', 'Josh Gad', 'Kristen Bell'],
        director: 'Chris Buck',
        imdbRating: 7.6,
        progress: 0
    },
    'tokyo-nights': {
        id: 'tokyo-nights',
        title: 'Tokyo Nights',
        description: 'A romantic drama set in the bustling streets of Tokyo, following two strangers whose paths cross in the most unexpected way.',
        genre: ['Romance', 'Drama'],
        duration: 112,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/tokyo-nights/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        featured: false,
        category: 'International',
        cast: ['Ken Watanabe', 'Zhang Ziyi', 'Rinko Kikuchi'],
        director: 'Wong Kar-wai',
        imdbRating: 7.1,
        progress: 0
    },
    'haunted-manor': {
        id: 'haunted-manor',
        title: 'Haunted Manor',
        description: 'A spine-chilling horror film about a family that moves into a seemingly perfect home, only to discover it\'s haunted by dark spirits.',
        genre: ['Horror', 'Thriller'],
        duration: 102,
        year: 2023,
        rating: 'R',
        thumbnail: 'https://picsum.photos/seed/haunted-manor/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        featured: false,
        category: 'Horror',
        cast: ['Lily James', 'Oscar Isaac', 'Sarah Paulson'],
        director: 'Mike Flanagan',
        imdbRating: 6.8,
        progress: 0
    },
    'code-warriors': {
        id: 'code-warriors',
        title: 'Code Warriors',
        description: 'A cyber-thriller about ethical hackers who uncover a massive data breach that threatens national security.',
        genre: ['Action', 'Thriller', 'Sci-Fi'],
        duration: 128,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/code-warriors/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouBuy.mp4',
        featured: false,
        category: 'Action',
        cast: ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne'],
        director: 'The Wachowskis',
        imdbRating: 7.4,
        progress: 0
    },
    'great-escape': {
        id: 'great-escape',
        title: 'The Great Escape',
        description: 'Based on a true story, this historical drama follows prisoners of war during World War II as they plan and execute a daring escape.',
        genre: ['Drama', 'Action', 'History'],
        duration: 156,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/great-escape/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        featured: true,
        category: 'Drama',
        cast: ['Tom Hardy', 'Cillian Murphy', 'Mark Ruffalo'],
        director: 'Christopher Nolan',
        imdbRating: 8.1,
        progress: 23
    },
    'comedy-central': {
        id: 'comedy-central',
        title: 'Comedy Central',
        description: 'A stand-up comedy special featuring the world\'s funniest comedians performing their best material.',
        genre: ['Comedy'],
        duration: 85,
        year: 2023,
        rating: 'R',
        thumbnail: 'https://picsum.photos/seed/comedy-central/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        featured: false,
        category: 'Comedy',
        cast: ['Dave Chappelle', 'Kevin Hart', 'Amy Schumer'],
        director: 'Various',
        imdbRating: 7.2,
        progress: 0
    },
    'space-explorers': {
        id: 'space-explorers',
        title: 'Space Explorers',
        description: 'A documentary series following NASA astronauts as they prepare for and execute missions to the International Space Station.',
        genre: ['Documentary', 'Sci-Fi'],
        duration: 92,
        year: 2023,
        rating: 'PG',
        thumbnail: 'https://picsum.photos/seed/space-explorers/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        featured: false,
        category: 'Documentary',
        cast: ['Various NASA personnel'],
        director: 'Ron Howard',
        imdbRating: 8.3,
        progress: 0
    },
    'love-paris': {
        id: 'love-paris',
        title: 'Love in Paris',
        description: 'A romantic comedy about an American writer who finds love in the most romantic city in the world.',
        genre: ['Romance', 'Comedy'],
        duration: 106,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/love-paris/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        featured: false,
        category: 'Romance',
        cast: ['Emma Watson', 'Ryan Reynolds', 'Marion Cotillard'],
        director: 'Nancy Meyers',
        imdbRating: 6.7,
        progress: 0
    },
    'final-chapter': {
        id: 'final-chapter',
        title: 'The Final Chapter',
        description: 'The epic conclusion to a blockbuster fantasy saga, where heroes must face their ultimate challenge.',
        genre: ['Action', 'Adventure', 'Fantasy'],
        duration: 168,
        year: 2023,
        rating: 'PG-13',
        thumbnail: 'https://picsum.photos/seed/final-chapter/300/450',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        featured: true,
        category: 'Trending',
        cast: ['Chris Hemsworth', 'Scarlett Johansson', 'Robert Downey Jr.'],
        director: 'Russo Brothers',
        imdbRating: 8.6,
        progress: 0
    }
};

// Application State
let currentProfile = null;
let myList = [];
let continueWatching = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved data from localStorage
    loadSavedData();
    
    // Show profile selection if no profile is selected
    if (!currentProfile) {
        showProfileSelection();
    }
    
    // Populate movie rows
    populateMovieRows();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Update continue watching section
    updateContinueWatching();
}

function loadSavedData() {
    // Load current profile
    const savedProfile = localStorage.getItem('currentProfile');
    if (savedProfile) {
        currentProfile = savedProfile;
    }
    
    // Load my list
    const savedMyList = localStorage.getItem('myList');
    if (savedMyList) {
        myList = JSON.parse(savedMyList);
    }
    
    // Load continue watching
    const savedContinueWatching = localStorage.getItem('continueWatching');
    if (savedContinueWatching) {
        continueWatching = JSON.parse(savedContinueWatching);
    }
}

function saveData() {
    // Save current profile
    if (currentProfile) {
        localStorage.setItem('currentProfile', currentProfile);
    }
    
    // Save my list
    localStorage.setItem('myList', JSON.stringify(myList));
    
    // Save continue watching
    localStorage.setItem('continueWatching', JSON.stringify(continueWatching));
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
        if (e.target.classList.contains('video-modal')) {
            closeVideo();
        }
        if (e.target.classList.contains('profile-modal')) {
            closeProfileSelection();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeVideo();
            closeProfileSelection();
        }
    });
}

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function populateMovieRows() {
    // Get all movies as array
    const allMovies = Object.values(movies);
    
    // Populate different categories
    populateMovieRow('trending', allMovies.filter(m => m.category === 'Trending'));
    populateMovieRow('new-releases', allMovies.filter(m => m.category === 'New Releases'));
    populateMovieRow('action', allMovies.filter(m => m.genre.includes('Action')));
    populateMovieRow('comedy', allMovies.filter(m => m.genre.includes('Comedy')));
    populateMovieRow('drama', allMovies.filter(m => m.genre.includes('Drama')));
    
    // Populate my list
    updateMyList();
}

function populateMovieRow(rowId, movieList) {
    const rowElement = document.getElementById(rowId);
    if (!rowElement) return;
    
    rowElement.innerHTML = '';
    
    if (movieList.length === 0) {
        rowElement.innerHTML = '<div class="empty-state"><p>No movies found</p></div>';
        return;
    }
    
    movieList.forEach(movie => {
        const movieCard = createMovieCard(movie);
        rowElement.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => showMovieDetails(movie.id);
    
    card.innerHTML = `
        <img src="${movie.thumbnail}" alt="${movie.title}">
        <div class="movie-card-overlay">
            <div class="movie-card-title">${movie.title}</div>
            <div class="movie-card-meta">
                ${movie.imdbRating > 0 ? movie.imdbRating + '/10' : 'New'} • ${movie.year} • ${movie.rating}
            </div>
            <div class="movie-card-buttons">
                <button class="movie-card-btn movie-card-play" onclick="event.stopPropagation(); playMovie('${movie.id}')">
                    <i class="fas fa-play"></i> Play
                </button>
                <button class="movie-card-btn movie-card-info" onclick="event.stopPropagation(); showMovieDetails('${movie.id}')">
                    <i class="fas fa-info-circle"></i> Info
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function updateContinueWatching() {
    const continueWatchingRow = document.getElementById('continue-watching');
    if (!continueWatchingRow) return;
    
    continueWatchingRow.innerHTML = '';
    
    const continueWatchingMovies = continueWatching.map(id => movies[id]).filter(m => m);
    
    if (continueWatchingMovies.length === 0) {
        continueWatchingRow.innerHTML = '<div class="empty-state"><p>Nothing to continue watching yet</p></div>';
        return;
    }
    
    continueWatchingMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        continueWatchingRow.appendChild(movieCard);
    });
}

function updateMyList() {
    const myListRow = document.getElementById('my-list');
    if (!myListRow) return;
    
    myListRow.innerHTML = '';
    
    const myListMovies = myList.map(id => movies[id]).filter(m => m);
    
    if (myListMovies.length === 0) {
        myListRow.innerHTML = '<div class="empty-state"><p>Your list is empty</p></div>';
        return;
    }
    
    myListMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        myListRow.appendChild(movieCard);
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
        populateMovieRows();
        return;
    }
    
    const allMovies = Object.values(movies);
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query) ||
        movie.genre.some(g => g.toLowerCase().includes(query)) ||
        movie.cast.some(c => c.toLowerCase().includes(query))
    );
    
    // Update all rows with search results
    const rows = ['trending', 'new-releases', 'action', 'comedy', 'drama'];
    rows.forEach(rowId => {
        const rowElement = document.getElementById(rowId);
        if (rowElement) {
            rowElement.innerHTML = '';
            filteredMovies.forEach(movie => {
                const movieCard = createMovieCard(movie);
                rowElement.appendChild(movieCard);
            });
        }
    });
}

function showMovieDetails(movieId) {
    const movie = movies[movieId];
    if (!movie) return;
    
    const modal = document.getElementById('movieModal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalRating = document.getElementById('modal-rating');
    const modalYear = document.getElementById('modal-year');
    const modalDuration = document.getElementById('modal-duration');
    const modalQuality = document.getElementById('modal-quality');
    const modalDescription = document.getElementById('modal-description');
    const modalCast = document.getElementById('modal-cast');
    const modalDirector = document.getElementById('modal-director');
    const modalGenres = document.getElementById('modal-genres');
    
    modalImg.src = movie.thumbnail;
    modalImg.alt = movie.title;
    modalTitle.textContent = movie.title;
    modalRating.textContent = movie.imdbRating > 0 ? movie.imdbRating + '/10' : 'New';
    modalYear.textContent = movie.year;
    modalDuration.textContent = Math.floor(movie.duration / 60) + 'h ' + (movie.duration % 60) + 'min';
    modalQuality.textContent = 'HD';
    modalDescription.textContent = movie.description;
    modalCast.textContent = movie.cast.join(', ');
    modalDirector.textContent = movie.director;
    modalGenres.textContent = movie.genre.join(', ');
    
    // Store current movie for modal buttons
    modal.setAttribute('data-movie-id', movieId);
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.style.display = 'none';
}

function playMovie(movieId) {
    const movie = movies[movieId];
    if (!movie) return;
    
    // Add to continue watching
    if (!continueWatching.includes(movieId)) {
        continueWatching.push(movieId);
    }
    
    // Update progress
    if (movie.progress !== undefined) {
        movie.progress = Math.min(movie.progress + 10, 100);
    }
    
    saveData();
    updateContinueWatching();
    
    // Show video player
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('video-title');
    
    videoPlayer.src = movie.videoUrl;
    videoTitle.textContent = movie.title;
    
    videoModal.style.display = 'block';
    videoPlayer.play();
    
    // Track progress
    videoPlayer.addEventListener('timeupdate', function() {
        const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
        movie.progress = Math.round(progress);
        saveData();
    });
}

function playFromModal() {
    const modal = document.getElementById('movieModal');
    const movieId = modal.getAttribute('data-movie-id');
    closeModal();
    playMovie(movieId);
}

function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.pause();
    videoModal.style.display = 'none';
}

function addToMyList() {
    const modal = document.getElementById('movieModal');
    const movieId = modal.getAttribute('data-movie-id');
    
    if (!myList.includes(movieId)) {
        myList.push(movieId);
        saveData();
        updateMyList();
        
        // Show success message
        showNotification('Added to My List');
    } else {
        showNotification('Already in My List');
    }
}

function removeFromMyList(movieId) {
    const index = myList.indexOf(movieId);
    if (index > -1) {
        myList.splice(index, 1);
        saveData();
        updateMyList();
        showNotification('Removed from My List');
    }
}

function showProfileSelection() {
    const profileModal = document.getElementById('profileModal');
    profileModal.style.display = 'block';
}

function closeProfileSelection() {
    const profileModal = document.getElementById('profileModal');
    profileModal.style.display = 'none';
}

function selectProfile(profileName) {
    currentProfile = profileName;
    saveData();
    closeProfileSelection();
    showNotification(`Switched to ${profileName}`);
}

function addProfile() {
    const name = prompt('Enter profile name:');
    if (name) {
        showNotification(`Profile "${name}" created`);
        closeProfileSelection();
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #E50914;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility functions
function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-top');
    if (!scrollTop) {
        const button = document.createElement('button');
        button.className = 'scroll-top';
        button.innerHTML = '↑';
        button.onclick = scrollToTop;
        document.body.appendChild(button);
    }
    
    if (window.scrollY > 300) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});

// Initialize hero movie
function initializeHero() {
    const heroMovie = movies['cosmic-odyssey'];
    if (heroMovie) {
        const heroImg = document.querySelector('.hero-img');
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroImg) heroImg.src = heroMovie.thumbnail;
        if (heroTitle) heroTitle.textContent = heroMovie.title;
        if (heroDescription) heroDescription.textContent = heroMovie.description;
    }
}

// Call initializeHero when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeHero);