let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }

  function checkCountValue() {
    if (count === 5) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 10) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function resetCount(){
    count = 0;
    alert("Your Instagram post is back down to 0, loser!");
    document.getElementById('countDisplay').innerHTML=0; 
}