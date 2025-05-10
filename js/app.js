

// projects code 
document.querySelectorAll('.flip-card').forEach(card => {
    const flipButtons = card.querySelectorAll('.flip-btn');
    flipButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }); 


// about us page project
    // Add event listeners to all flip buttons
    document.addEventListener('DOMContentLoaded', function() {
      const flipButtons = document.querySelectorAll('.flip-btn');
      
      flipButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Find the parent flip-card element
          const flipCard = this.closest('.flip-card');
          
          // Toggle the 'flipped' class
          flipCard.classList.toggle('flipped');
        });
      });
      
      // Trigger fade-in effect when scrolled into view
      function fadeInImages() {
        const images = document.querySelectorAll('.card-image');
        images.forEach(img => {
          const rect = img.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            img.style.animation = 'fadeIn 1.5s forwards';
          }
        });
      }
      
      // Initial check on page load
      fadeInImages();
      
      // Check on scroll
      window.addEventListener('scroll', fadeInImages);
    });