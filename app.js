/*************************************************
 * TimeArena Shop — app.js (FULL)
 * UI + Redeem + Inventory + Limits
 *************************************************/

import { SHOP_TICKETS } from "./shop.js";

/* ===============================
   DOM REFERENCES
================================ */

const rails = {
  STANDARD: document.getElementById("standard"),
  CONTROL: document.getElementById("control"),
  PROTECT: document.getElementById("protect"),
  LEGENDARY: document.getElementById("legendary")
};

/* ===============================
   INVENTORY (localStorage)
================================ */

const inventory = JSON.parse(localStorage.getItem("timearena_inventory") || "{}");

/* ===============================
   HELPERS
================================ */

function genCode() {
  return "#" + Math.floor(100000 + Math.random() * 900000);
}

function now() {
  return new Date().toLocaleString("ro-RO");
}

function todayKey() {
  return new Date().toDateString();
}

function weekKey() {
  const d = new Date();
  return `${d.getFullYear()}-W${Math.ceil(d.getDate() / 7)}`;
}

/* ===============================
   LIMIT CHECK
================================ */

function canRedeem(ticket) {
  const used = inventory[ticket.id] || [];

  if (ticket.dailyLimit) {
    return used.filter(v => v === todayKey()).length < ticket.dailyLimit;
  }

  if (ticket.weeklyLimit) {
    return used.filter(v => v === weekKey()).length < ticket.weeklyLimit;
  }

  return true;
}

/* ===============================
   REDEEM LOGIC
================================ */

function redeemTicket(ticket, el) {
  if (!canRedeem(ticket)) {
    alert("⛔ Limita pentru acest ticket a fost atinsă!");
    return;
  }

  // animation
  el.classList.add("redeeming");

  // sound (optional file)
  try {
    new Audio("redeem.mp3").play();
  } catch (e) {}

  setTimeout(() => {
    el.classList.remove("redeeming");
    el.classList.add("used");

    inventory[ticket.id] = inventory[ticket.id] || [];

    if (ticket.dailyLimit) {
      inventory[ticket.id].push(todayKey());
    } else if (ticket.weeklyLimit) {
      inventory[ticket.id].push(weekKey());
    } else {
      inventory[ticket.id].push("used");
    }

    localStorage.setItem(
      "timearena_inventory",
      JSON.stringify(inventory)
    );
  }, 400);
}

/* ===============================
   TICKET RENDER
================================ */

function renderTicket(ticket) {
  const el = document.createElement("div");
  el.className = `ticket ${ticket.color}`;

  if (!canRedeem(ticket)) {
    el.classList.add("used");
  }

  el.innerHTML = `
    <div class="ticket-header">
      <span>${genCode()}</span>
      <span>${now()}</span>
    </div>

    <div class="ticket-title">
      ${ticket.emoji} ${ticket.title}
    </div>

    <div class="ticket-desc">
      ${ticket.description}
    </div>

    <div class="ticket-extra">
      ${ticket.extra}
    </div>

    <div class="ticket-reward">
      🎁 ${ticket.reward}
    </div>

    <div class="ticket-unlock">
      🔓 Necesită ${ticket.missionsRequired} misiuni
    </div>

    <div class="barcode"></div>
  `;

  el.addEventListener("click", () => redeemTicket(ticket, el));

  return el;
}

/* ===============================
   INIT SHOP
================================ */

function initShop() {
  SHOP_TICKETS.forEach(ticket => {
    const rail = rails[ticket.type];
    if (!rail) return;

    const card = renderTicket(ticket);
    rail.appendChild(card);
  });
}

initShop();
