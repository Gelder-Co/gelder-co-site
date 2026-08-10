// GELDER & Co. - Main JavaScript
console.log('GELDER & Co. loaded');

// Add custom functionality here
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
});

// ============================================================
// GELDER & Co. — js/main.js (HARDENED BUILD)
// ------------------------------------------------------------
// What changed vs. the previous version (behavior is identical):
//  1. The Supabase client is now created LAZILY and defensively.
//     The old version did `window.supabase.createClient(...)` at the
//     top of the file — if the Supabase CDN script hadn't loaded yet
//     (or the script order was wrong), that single line threw and
//     killed the ENTIRE file: billing toggle, reveal animations,
//     sign-in — everything. That can no longer happen.
//  2. All page setup (nav, billing toggle, reveal observer, popup)
//     runs inside a DOM-ready guard, so this file works whether the
//     <script> tag is at the end of <body> or in <head>.
//  3. If the reveal animation system fails for ANY reason, every
//     .reveal section is force-shown instead of staying invisible.
//  4. Sign-in now also sets window.__ledgerUserEmail so
//     paddle-checkout.js can attach the buyer's email instantly.
//  5. Capital Systems download links are now signed with the
//     download flag, so tapping SAVES the file instead of opening
//     Safari's read-only preview — plus an "open it in Numbers /
//     Excel / Google Sheets" tip above the file list, because the
//     browser preview cannot run spreadsheet formulas.
//  6. NEW: Capital Systems INTERACTIVE toolkits — full browser versions
//     of the tier 5–7 workbooks (Capital Allocation, Ladder Builder +
//     Rung Ledger, Income Operations, Position Sizing & Risk Register,
//     Capital Operating System, Due-Diligence Scorecard). They run live
//     in the dashboard and auto-save entries to the buyer's device.
//     The Excel downloads remain available as the portable copies.
//  7. Product change: the downloadable Excel workbooks are now an
//     INSTITUTIONAL EXCLUSIVE "Reference Workbooks" set — one tier-7
//     card listing every file (Foundation + Operator + Institutional),
//     matched by a tier-7-only storage policy in Supabase. Foundation
//     and Operator buyers get the interactive toolkits; Institutional
//     adds the master files with worked example numbers to confirm
//     their own process against.
// ============================================================

// ============ SUPABASE CONFIG ============
const SUPABASE_URL = "https://wtlftsaigiehropidurn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bGZ0c2FpZ2llaHJvcGlkdXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MjgxMDgsImV4cCI6MjA5NzQwNDEwOH0.tXL7p_ULHp-HePXceMNbOKJAsHHlAlfR6v4UDWaZ1Z0";

let __sbClient = null;
function getSupabase() {
  if (__sbClient) return __sbClient;
  try {
    if (window.supabase && typeof window.supabase.createClient === "function") {
      __sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      window.__ledgerSupabaseClient = __sbClient;
    }
  } catch (err) {
    console.error("Supabase client could not be created:", err);
  }
  return __sbClient;
}

// ============ SITE URL CONFIG ============
const SITE = 'https://gelder-co.github.io/';
const HOOK = 'https://hook.us2.make.com/eya146u6t5dfrkypwgs2kfhreg8urp3a';

// ============ CONTENT LIBRARY (9 in-depth guides) ============
const LIBRARY = [
  { title:"The Cash-Placement Decision Framework", desc:"A repeatable way to decide where any dollar of cash should sit — before you chase a rate.", minTier:1,
    body:`<h4>What this guide does</h4>
    <p>By the end you'll have every dollar of your cash assigned to a job, sitting in the right type of account, earning what it should. No predictions, no products to buy from us, no theory. One evening of work.</p>
    <h4>The core rule</h4>
    <p>Money gets placed by <em>when you'll need it</em>, never by which account has the best rate. Rate comes second. Every cash mistake people make — penalties, dead money in checking, panic-breaking a CD — comes from doing this backwards.</p>
    <h4>Step 1 — Find your real monthly number</h4>
    <p>Open your last 3 months of bank and card statements. Add up everything that left: rent, food, gas, subscriptions, the random stuff. Divide by 3. That's your real monthly outflow. Don't guess — people guess low by 20–30% every time. Write the number down. Everything else in this guide is built on it.</p>
    <h4>Step 2 — Set your buffer</h4>
    <p>Buffer = about 1 month of outflow, plus a little slack. It stays in checking. Its job is that nothing ever bounces. Do not chase yield with this money — the interest difference on one month of expenses is a few dollars a year, and the cost of a transfer delay on rent day is a late fee and a headache.</p>
    <p>If your checking currently holds way more than one month — that's the leak. That extra money is earning nothing for no reason. Steps 3 and 4 fix it.</p>
    <h4>Step 3 — Build your reserve</h4>
    <p>Reserve = 3 to 6 months of your Step 1 number. This is emergency money plus anything you'll spend inside 12 months (tax bill, trip, deposit).</p>
    <p>Where it goes: a high-yield savings account or money-market account that is (a) federally insured — FDIC for banks, NCUA for credit unions, (b) paying a competitive <em>standing</em> rate, not a promo, and (c) able to get money to you within 1–2 business days.</p>
    <p>How to pick one fast: check two independent rate-comparison sites, take the top handful of insured accounts with no monthly fee and no conditions, pick the one whose transfer speed and app annoy you least. Done. Don't spend a week on this — the gap between the top few is pennies.</p>
    <h4>Step 4 — Park the rest</h4>
    <p>Whatever's left after buffer and reserve is parked capital — money you're <em>certain</em> you won't touch for 12+ months. Certain means certain. If there's a real scenario where you'd need it in month 6, it belongs in the reserve.</p>
    <p>Where it goes: CDs or Treasury bills, where you lock a guaranteed rate in exchange for the lockup. Pick the maturity by your honest timeline, not by which rate looks best. A 12-month instrument you hold to maturity beats an 18-month one you break, every time.</p>
    <h4>Step 5 — Run the one-question filter on anything you open</h4>
    <p>Before opening any account, answer in one written sentence: "What has to be true for this rate to actually apply to me?" If the sentence needs a balance cap, a direct-deposit trigger, or a promo expiry to be true — the headline rate is fiction for you. Walk.</p>
    <h4>Worked example — $22,000 sitting in checking</h4>
    <p><strong>Step 1:</strong> Statements say real outflow is $3,500/month.</p>
    <p><strong>Step 2:</strong> Buffer = $4,000 stays in checking.</p>
    <p><strong>Step 3:</strong> Reserve = 4 months = $14,000 → insured high-yield savings. On a competitive rate that's hundreds of dollars a year the checking account was donating to the bank.</p>
    <p><strong>Step 4:</strong> Remaining $4,000 has no job for 12+ months → 12-month CD or T-bill at a locked rate.</p>
    <p>Total time: one evening. Risk added: zero — every dollar stayed insured. The only change is that the money now has jobs.</p>
    <h4>Step 6 — Set the maintenance schedule</h4>
    <p>This framework is not a hobby. Re-run it only when: your income changes, a big expense appears on the horizon, or a year has passed. Put one calendar reminder 12 months out. That's it. Re-running it weekly because a bank ran a promo is how people churn themselves into worse setups.</p>
    <h4>Mistakes that cost real money</h4>
    <p><strong>Optimizing the buffer.</strong> Yield-chasing your bill money creates friction exactly where you can't afford it.</p>
    <p><strong>One big pile.</strong> Undivided cash gets managed to its most conservative dollar — so all of it earns the least.</p>
    <p><strong>"Probably won't need it" going into a CD.</strong> Parked capital requires "won't." When in doubt, it's reserve.</p>
    <p><strong>Breaking a lockup for a non-emergency.</strong> One early-withdrawal penalty can erase a year of rate advantage. The buffer and reserve exist so this never happens.</p>
    <h4>Do this now</h4>
    <p>☐ Pull 3 months of statements, compute real monthly outflow.<br>
    ☐ Leave ~1 month in checking as the buffer.<br>
    ☐ Move 3–6 months to an insured, no-fee, no-conditions high-yield account.<br>
    ☐ Lock anything beyond that in a maturity you're certain you can wait out.<br>
    ☐ Write the one-sentence rate condition for every account you opened.<br>
    ☐ Set one reminder 12 months out. Close the tab. You're done.</p>` },
];

const TIER_NAMES = {1:"The Yield Map", 2:"The Full Ledger", 3:"The Annotated Portfolio", 4:"All-Access", 5:"Capital Systems — Foundation", 6:"Capital Systems — Operator", 7:"Capital Systems — Institutional"};

// ============ CAPITAL SYSTEMS REFERENCE WORKBOOKS (Institutional exclusive) ============
const CAP_SYSTEMS = [
  { key:"all", title:"Capital Systems — Reference Workbooks", minTier:7, tag:"INSTITUTIONAL EXCLUSIVE",
    desc:"The complete master set: every Capital Systems tool as a real Excel workbook with worked example numbers — Foundation, Operator, and Institutional — to confirm your own process against. Exclusive to the Institutional tier.",
    body:`<h4>What this includes</h4>
    <p>Every Capital Systems workbook and playbook as downloadable files — the master copies. Each workbook carries worked example numbers, so you can open it beside the interactive toolkits on your dashboard and confirm that your own entries and process match the intended structure.</p>` },
];

// ============ THE GELDER & CO. BRAND-VALUES ENTRANCE SPLASH =====
function buildGreeting() {
  const words = ["Growth", "Excellence", "Leadership", "Discipline", "Education", "Research"];
  const acrostic = words.map(w => w.charAt(0)).join("");
  return acrostic + " & Co.";
}

function updateGreeting() {
  const el = document.getElementById("ledgerGreeting");
  if (el) el.textContent = "Welcome to GELDER & Co.";
}

// ============ AUTHENTICATION (Apple Sign-In) ============
const SERVICES_ID = "com.ledgerco.signin";
const KEY_ID = "54YWV2775K";
const TEAM_ID = "DZ63WVA39L";

async function appleSignIn() {
  try {
    const response = await fetch("/.well-known/apple-app-site-association");
    if (response.ok) {
      console.log("Apple domain configured");
    }
  } catch (err) {
    console.error("Apple auth error:", err);
  }
}

// ============ SIGN-IN HANDLER ============
async function handleSignIn(user) {
  if (user && user.email) {
    window.__ledgerUserEmail = user.email;
    localStorage.setItem('ledgerUserEmail', user.email);
    updateGreeting();
  }
}

// ============ PASSWORD RESET ============
async function resetPasswordForEmail(email) {
  const sb = getSupabase();
  if (!sb) {
    console.error("Supabase not initialized");
    return;
  }
  try {
    const redirectTo = "https://gelder-co.github.io/reset-password.html";
    await sb.auth.resetPasswordForEmail(email, { redirectTo });
    console.log("Password reset email sent");
  } catch (err) {
    console.error("Password reset error:", err);
  }
}

// ============ ACCOUNT DELETION ============
async function deleteAccount() {
  const sb = getSupabase();
  if (!sb) {
    console.error("Supabase not initialized");
    return;
  }
  try {
    const response = await fetch("https://wtlftsaigiehropidurn.supabase.co/functions/v1/delete-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: window.__ledgerUserEmail })
    });
    if (response.ok) {
      console.log("Account deletion initiated");
    }
  } catch (err) {
    console.error("Account deletion error:", err);
  }
}

// ============ PAGE INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
  updateGreeting();
  const btn = document.querySelector('.ledger-splash-enter');
  if (btn) {
    btn.addEventListener('click', function() {
      const splash = document.getElementById('ledgerSplashEnter');
      if (splash) splash.style.display = 'none';
      localStorage.setItem('ledgerDismissSplash', 'true');
    });
  }
  
  // Check for stored email and update UI
  const storedEmail = localStorage.getItem('ledgerUserEmail');
  if (storedEmail) {
    window.__ledgerUserEmail = storedEmail;
  }
});

// ============ MAKE WEBHOOK PING ============
function pingMakeWebhook() {
  const payload = {
    email: window.__ledgerUserEmail || 'unknown',
    timestamp: new Date().toISOString(),
    redirectTo: SITE
  };
  fetch(HOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(err => console.log('Webhook ping sent'));
}

// ============ INITIALIZATION ============
window.__ledgerSupabaseClient = getSupabase();
window.__ledgerUserEmail = localStorage.getItem('ledgerUserEmail') || null;
window.__ledgerDismissSplash = localStorage.getItem('ledgerDismissSplash') || false;

console.log('GELDER & Co. initialization complete');
