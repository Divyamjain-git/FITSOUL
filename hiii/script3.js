// Function to toggle the fact visibility
function toggleFact(factNumber) {
    const factElement = document.getElementById('fact' + factNumber);
    const button = document.querySelector('#myth' + factNumber + ' .myth-btn');

    // Toggle visibility of the fact
    if (factElement.style.display === 'none' || factElement.style.display === '') {
        factElement.style.display = 'block';
        button.innerText = 'Hide Fact';
    } else {
        factElement.style.display = 'none';
        button.innerText = 'Show Fact';
    }
}

// Initialize all facts to be hidden when the page load
document.addEventListener('DOMContentLoaded', function() {
    const facts = document.querySelectorAll('.fact');
    facts.forEach(fact => {
        fact.style.display = 'none';
    });
});