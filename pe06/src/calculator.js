/**
 * Calculates the total cost for event tickets.
 * @param {number} price - The price per ticket.
 * @param {number} attendees - The number of attendees.
 * @returns {number} The calculated total cost.
 */
export function calculateTotalCost(price, attendees) {
    return price * attendees;
}