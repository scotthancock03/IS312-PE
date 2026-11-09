/**
 * Directory: pe06
 * File name: index.js
 * Purpose: Test the event cost calculation module.
 */

import { calculateTotalCost } from './src/calculator.js';

// Test Case 1: $15 ticket price, 4 attendees
let eventName = "Tech Conference";
let ticketPrice = 15;
let attendees = 4;
let totalCost = calculateTotalCost(ticketPrice, attendees);

console.log(`--- Test Case 1 ---`);
console.log(`Event: ${eventName}`);
console.log(`Ticket Price: $${ticketPrice}`);
console.log(`Attendees: ${attendees}`);
console.log(`Expected Total: $60 | Calculated Total: $${totalCost}`);

// Test Case 2: $15 ticket price, 6 attendees
attendees = 6;
totalCost = calculateTotalCost(ticketPrice, attendees);

console.log(`\n--- Test Case 2 ---`);
console.log(`Event: ${eventName}`);
console.log(`Ticket Price: $${ticketPrice}`);
console.log(`Attendees: ${attendees}`);
console.log(`Expected Total: $90 | Calculated Total: $${totalCost}`);