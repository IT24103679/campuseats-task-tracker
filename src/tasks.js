// CampusEats task list - improved version

// VIP discount constant (no more magic number)
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  // Input validation
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  // Use strict equality and clear logic
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key comes from an environment variable
// e.g. process.env.API_KEY - NEVER hard-coded

// Example task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);