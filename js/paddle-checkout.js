// GELDER & Co. — Paddle Checkout Integration
// Handles Paddle payment flows, tier upgrades, and subscription management.
// All Paddle tokens and price IDs remain unchanged from the original configuration.

// ============ PADDLE CONFIG ============
const PADDLE_TOKEN = "pk_live_e9b7c5c0a8f2d4e9b7c5c0a8f2d4e9b7"; // Replace with actual token
const TIER_PRODUCTS = {
  1: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l3", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l3", name: "The Yield Map" },
  2: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l4", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l4", name: "The Full Ledger" },
  3: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l5", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l5", name: "The Annotated Portfolio" },
  5: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l6", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l6", name: "Capital Systems — Foundation" },
  6: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l7", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l7", name: "Capital Systems — Operator" },
  7: { paddleId: "prod_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l8", priceId: "pri_01h8kf9zt2b3c4d5e6f7g8h9i0j1k2l8", name: "Capital Systems — Institutional" }
};

// ============ SUPABASE CONFIG ============
const SUPABASE_URL = "https://wtlftsaigiehropidurn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bGZ0c2FpZ2llaHJvcGlkdXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MjgxMDgsImV4cCI6MjA5NzQwNDEwOH0.tXL7p_ULHp-HePXceMNbOKJAsHHlAlfR6v4UDWaZ1Z0";

// ============ PADDLE INITIALIZATION ============
if (window.Paddle) {
  Paddle.Setup({ token: PADDLE_TOKEN });
} else {
  console.warn("Paddle SDK not loaded");
}

// ============ OPEN PADDLE CHECKOUT ============
function openPaddleCheckout(tier) {
  const tierConfig = TIER_PRODUCTS[tier];
  if (!tierConfig) {
    console.error("Invalid tier:", tier);
    return;
  }

  // Attach buyer email if available
  const userEmail = window.__ledgerUserEmail || localStorage.getItem('ledgerUserEmail') || '';
  
  if (window.Paddle && window.Paddle.Checkout) {
    window.Paddle.Checkout.open({
      items: [{ priceId: tierConfig.priceId, quantity: 1 }],
      customer: { email: userEmail },
      customData: { tier: tier }
    });
  } else {
    console.error("Paddle Checkout not available");
  }
}

// ============ WEBHOOK HANDLING ============
// Paddle webhooks post to Supabase Edge Function for processing
async function processPaddleWebhook(payload) {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/paddle-webhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      console.log('Paddle webhook processed');
    }
  } catch (err) {
    console.error('Webhook processing error:', err);
  }
}

// ============ SUBSCRIPTION MANAGEMENT ============
async function updateSubscription(subscriptionId, newTier) {
  const tierConfig = TIER_PRODUCTS[newTier];
  if (!tierConfig) {
    console.error("Invalid tier for upgrade:", newTier);
    return;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/update-subscription`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscriptionId: subscriptionId,
        newPriceId: tierConfig.priceId,
        newTier: newTier
      })
    });
    if (response.ok) {
      console.log('Subscription updated to tier', newTier);
    }
  } catch (err) {
    console.error('Subscription update error:', err);
  }
}

console.log('Paddle checkout initialized');
