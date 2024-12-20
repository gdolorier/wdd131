document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        if (navMenu.style.display === "block") {
          navMenu.style.display = "none";
          hamburger.textContent = "☰";
        } else {
          navMenu.style.display = "block";
          hamburger.textContent = "✖";
        }
      });
    }
  
    // Function to render reviews
    const renderReviews = (filteredReviews) => {
      const reviewGrid = document.querySelector(".review-grid");
      if (!reviewGrid) {
        console.error("Element with class 'review-grid' not found.");
        return;
      }
  
      reviewGrid.innerHTML = "";
      filteredReviews.forEach((review) => {
        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";
        reviewItem.innerHTML = `
          <img src="${review.image}" alt="Game Image" class="rating-image">
          <h3>${review.title}</h3>
          <p>${review.description}</p>
          <p>Rating: ${review.rating}</p>
          <a href="#" class="read-more">Read More</a>
        `;
        reviewGrid.appendChild(reviewItem);
      });
    };
  
    // Initial render if .review-grid exists
    const reviewGrid = document.querySelector(".review-grid");
    if (reviewGrid) {
      const reviews = [
        {
          title: "Minecraft",
          description:
            'Minecraft is a sandbox survival game created by Markus "Notch" Persson and later developed by Mojang Studios, now owned by Microsoft.',
          image: "https://i.redd.it/ak9w918zi5r81.png",
          genre: "adventure",
          rating: 4.5,
        },
        {
          title: "EA Sports FC 24",
          description:
            "EA Sports FC 24 is a football video game developed by EA Canada and EA Romania, published by EA Sports, marking the start of the EA Sports FC series after EA's partnership with FIFA ended.",
          image: "https://fifauteam.com/images/fc24/earlyaccess/1.webp",
          genre: "sports",
          rating: 4.0,
        },
        {
          title: "Forza Horizon",
          description:
            "Forza Horizon 5 is a racing game developed by Playground Games and Turn 10 Studios, published by Xbox Game Studios, set in a fictional representation of Mexico.",
          image:
            "https://i.pinimg.com/736x/2b/ca/2e/2bca2ec8ee9ce893f541bbdc2928b623.jpg",
          genre: "action",
          rating: 4.7,
        },
        {
          title: "Red Dead Redemption 2",
          description:
            "Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first- or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the United States in 1899.",
          image:
            "https://cdn.neowin.com/news/images/uploaded/2018/10/1539711354_screen_shot_2018-10-16_at_10.35.28_am.jpg",
          genre: "adventure",
          rating: 4.9,
        },
      ];
  
      // Render initial reviews
      renderReviews(reviews);
  
      // Filtering and Sorting
      const genreSelect = document.getElementById("genre");
      const sortSelect = document.getElementById("sort");
  
      if (genreSelect && sortSelect) {
        const applyFilters = () => {
          let filteredReviews = [...reviews];
  
          // Filter by genre
          const selectedGenre = genreSelect.value;
          if (selectedGenre !== "all") {
            filteredReviews = filteredReviews.filter(
              (review) => review.genre === selectedGenre
            );
          }
  
          // Sort by rating
          if (sortSelect.value === "rating") {
            filteredReviews.sort((a, b) => b.rating - a.rating);
          }
  
          renderReviews(filteredReviews);
        };
  
        genreSelect.addEventListener("change", applyFilters);
        sortSelect.addEventListener("change", applyFilters);
      }
    }
  
    // Form submission handling
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
  
        const contact = {
          name: userName,
          email: userEmail,
          subject: subject,
          message: message,
        };
  
        localStorage.setItem("contact", JSON.stringify(contact));
  
        alert("Contact sent successfully!");
      });
    }
  
    // Load contact data
    window.addEventListener("load", () => {
      const contactData = localStorage.getItem("contact");
      if (contactData) {
        const contact = JSON.parse(contactData);
        console.log("Saved Contact:", contact);
      }
    });
  });