function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultSection = document.getElementById('result');
    const workoutSection = document.getElementById('workout');

    if (!dobInput.value) {
        alert('Please enter your date of birth');
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display age
    resultSection.innerHTML = `
        <div class="age-result">
            <h2>Your Age: ${age} years</h2>
        </div>
    `;

    // Get workout recommendations based on age
    const workoutPlan = getWorkoutPlan(age);
    workoutSection.innerHTML = `
        <div class="workout-plan">
            <h3>Recommended Workout Plan</h3>
            ${workoutPlan}
        </div>
    `;
}

function getWorkoutPlan(age) {
    if (age < 13) {
        return `
            <p>At your age, focus on playful physical activities:</p>
            <ul>
                <li>Outdoor play and sports</li>
                <li>Swimming</li>
                <li>Cycling</li>
                <li>Basic stretching exercises</li>
                <li>Team sports with peers</li>
            </ul>
            <p><strong>Note:</strong> Always exercise under adult supervision.</p>
        `;
    } else if (age >= 13 && age < 20) {
        return `
            <p>Recommended exercises for teenagers:</p>
            <ul>
                <li>30 minutes of moderate cardio 5 times a week</li>
                <li>Basic bodyweight exercises (push-ups, squats)</li>
                <li>Sports activities</li>
                <li>Flexibility training</li>
                <li>Light resistance training with proper form</li>
            </ul>
            <p><strong>Note:</strong> Focus on proper form and technique.</p>
        `;
    } else if (age >= 20 && age < 40) {
        return `
            <p>Optimal workout routine for young adults:</p>
            <ul>
                <li>45-60 minutes of exercise 4-5 times per week</li>
                <li>Mix of cardio and strength training</li>
                <li>Weight training with proper progression</li>
                <li>High-Intensity Interval Training (HIIT)</li>
                <li>Yoga or flexibility work</li>
            </ul>
            <p><strong>Note:</strong> Include adequate rest and recovery.</p>
        `;
    } else if (age >= 40 && age < 60) {
        return `
            <p>Balanced workout plan for middle age:</p>
            <ul>
                <li>30-45 minutes of moderate exercise 4-5 times per week</li>
                <li>Low-impact cardio (swimming, cycling)</li>
                <li>Strength training with focus on form</li>
                <li>Balance exercises</li>
                <li>Regular stretching</li>
            </ul>
            <p><strong>Note:</strong> Consider joint health and recovery time.</p>
        `;
    } else {
        return `
            <p>Gentle but effective exercises for seniors:</p>
            <ul>
                <li>Daily walking</li>
                <li>Water aerobics</li>
                <li>Chair yoga</li>
                <li>Light resistance exercises</li>
                <li>Balance and stability work</li>
            </ul>
            <p><strong>Note:</strong> Consult with healthcare provider before starting any exercise program.</p>
        `;
    }
}
