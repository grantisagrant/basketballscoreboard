let homeCount = 0
let guestCount = 0

function home1() {
  document.getElementById("homeScore").textContent = homeCount += 1
}

function home2() {
  document.getElementById("homeScore").textContent = homeCount += 2
}

function home3() {
  document.getElementById("homeScore").textContent = homeCount += 3
}

function guest1() {
  document.getElementById("guestScore").textContent = guestCount += 1
}

function guest2() {
  document.getElementById("guestScore").textContent = guestCount += 2
}

function guest3() {
  document.getElementById("guestScore").textContent = guestCount += 3
}

function resetAll() {
  document.getElementById("guestScore").textContent = 0 
  document.getElementById("homeScore").textContent = 0
  document.getElementById("quarter").textContent = 1
  document.getElementById("guestFouls").textContent = 0
  document.getElementById("homeFouls").textContent = 0
}

        const gameTime = document.getElementById('gameTime');
        const startGame = document.getElementById('startGame');
        const stopGame = document.getElementById('stopGame');
        const resetGame = document.getElementById('resetGame');

        // State variables
        let startTime = 0;
        let elapsedTime = 0;
        let timerInterval = null;

        // Formats time units to always show 2 digits
        function formatTimeUnit(unit) {
            return String(unit).padStart(2, '0');
        }

        function updateDisplay() {
            // Calculate absolute hours, minutes, seconds, and milliseconds
            let totalMilliseconds = Date.now() - startTime + elapsedTime;

            let minutes = Math.floor((totalMilliseconds / 1000 / 60) % 60);
            let seconds = Math.floor((totalMilliseconds / 1000) % 60);
            let centiseconds = Math.floor((totalMilliseconds / 10) % 100); // 2-digit milliseconds

            // Update UI
            gameTime.textContent = `${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}:${formatTimeUnit(centiseconds)}`;
        }

        // Action: Start Stopwatch
        startGame.addEventListener('click', () => {
            if (timerInterval) return; // Prevent multiple intervals if clicked repeatedly

            startTime = Date.now();
            timerInterval = setInterval(updateDisplay, 10); // Update every 10ms for smooth precision
        });

        // Action: Stop/Pause Stopwatch
        stopGame.addEventListener('click', () => {
            if (!timerInterval) return;

            // Save progress made so far before clearing the interval
            elapsedTime += Date.now() - startTime;
            clearInterval(timerInterval);
            timerInterval = null; 
        });

        // Action: Reset Stopwatch
        resetGame.addEventListener('click', () => {
            clearInterval(timerInterval);
            timerInterval = null;
            startTime = 0;
            elapsedTime = 0;
            gameTime.textContent = "00:00:00";
            document.getElementById("guestScore").textContent = 0 
            document.getElementById("homeScore").textContent = 0

        });