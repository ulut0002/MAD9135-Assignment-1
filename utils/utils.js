// source: chatGPT - Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export { shuffleArray };
