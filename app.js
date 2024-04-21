
document.addEventListener('DOMContentLoaded', function() {
    

 
    let stressLevel = 0;


    function updateStressLevel(value) {
        stressLevel += value;
        console.log(`Stress level updated: ${stressLevel}`);
    }

   
    const stressButton = document.getElementById('stress-button');
    stressButton.addEventListener('click', function() {
        updateStressLevel(1); 
    });

    
    const stressDisplay = document.getElementById('stress-display');
    stressDisplay.textContent = `Stress Level: ${stressLevel}`;
});
