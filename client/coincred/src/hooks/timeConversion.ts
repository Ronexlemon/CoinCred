// Function to convert seconds to days and hours
export function convertSecondsToDaysHours(seconds: number): { days: number, hours: number } {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    return { days, hours };
}

// Function to count down from duration to the current time
export function countdown(duration: number): string {
    const now = Math.floor(Date.now() / 1000); // current time in seconds
    const remainingTime = duration - now;

    if (remainingTime <= 0) {
        return "Time is up!";
    }

    const { days, hours } = convertSecondsToDaysHours(remainingTime);
    return `Time remaining: ${days} days and ${hours} hours`;
}