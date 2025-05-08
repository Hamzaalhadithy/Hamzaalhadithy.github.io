

// projects code 
document.querySelectorAll('.flip-card').forEach(card => {
    const flipButtons = card.querySelectorAll('.flip-btn');
    flipButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }); 