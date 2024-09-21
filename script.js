function updateTime() {
    const clock = document.getElementById("clock");
    const date = document.getElementById("date");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time as HH:MM:SS
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    // Get current date
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();

    // Format date as DD/MM/YYYY
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    
    date.textContent = formattedDate;
}

// Update the clock and date every second
setInterval(updateTime, 1000);

// Initialize the clock and date
updateTime();
