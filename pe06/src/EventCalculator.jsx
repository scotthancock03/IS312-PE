import React from 'react';
import { calculateTotalCost } from './calculator.js';

/**
 * EventCalculator Component displays event ticket details and total cost.
 */
export default function EventCalculator() {
    // Test Case 1: $15 ticket price, 4 attendees (Change attendees to 6 for Test Case 2)
    const eventName = "Tech Conference";
    const ticketPrice = 15;
    const attendees = 4; 

    const totalCost = calculateTotalCost(ticketPrice, attendees);

    return (
        <div style={{ margin: '20px', fontFamily: 'sans-serif' }}>
            <h2>Event Cost Calculator</h2>
            <p><strong>Event Name:</strong> {eventName}</p>
            <p><strong>Ticket Price:</strong> ${ticketPrice}</p>
            <p><strong>Attendees:</strong> {attendees}</p>
            <hr />
            <h3>Calculated Total: ${totalCost}</h3>
        </div>
    );
}