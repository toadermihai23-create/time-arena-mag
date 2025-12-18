import { SHOP_TICKETS } from "./shop.js";

const shopEl = document.getElementById("shop");
const inventory = JSON.parse(localStorage.getItem("inventory") || "{}");

function genCode() {
  return "#" + Math.floor(100000 + Math.random() * 900000);
}
function now() {
  return new Date().toLocaleString("ro-RO");
}

function canRedeem(ticket) {
  const used = inventory[ticket.id] || [];
  const today = new Date().toDateString();

  if (ticket.dailyLimit) {
    return used.filter(d => d === today).length < ticket.dailyLimit;
  }
  if (ticket.weeklyLimit) {
    const week = getWeek();
    return used.filter(d => d === week).length < ticket.weeklyLimit;
  }
  return true;
}

function getWeek() {
  const d = new Date();
  return d.getFullYear() + "-W" + Math.ceil(d.getDate() / 7);
}

function redeem(ticket, el) {
  if (!canRedeem(ticket)) {
    alert("⛔ Limit atins!");
    return;
  }

  el.classList.add("redeeming");

  const audio = new Audio("redeem.mp3");
  audio.play();

  setTimeout(() => {
    el.classList.remove("redeeming");
    el.classList.add("used");

    const key =
      ticket.weeklyLimit ? getWeek() :
      ticket.dailyLimit ? new Date().toDateString() :
      "used";

    inventory[ticket.id] = inventory[ticket.id] || [];
    inventory[ticket.id].push(key);
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, 400);
}

function renderTicket(ticket) {
  const el = document.createElement("div");
  el.className = `ticket ${ticket.color}`;

  if (!canRedeem(ticket)) el.classList.add("used");

  el.innerHTML = `
    <div class="ticket-header">
      <span>${genCode()}</span>
      <span>${now()}</span>
    </div>

    <div class="ticket-title">${ticket.emoji} ${ticket.title}</div>
    <div class="ticket-desc">${ticket.description}</div>
    <div class="ticket-extra">${ticket.extra}</div>

    <div class="ticket-reward">🎁 ${ticket.reward}</div>

    <div class="ticket-unlock">
      🔓 ${ticket.missionsRequired} misiuni necesare
    </div>

    <div class="barcode"></div>
  `;

  el.onclick = () => redeem(ticket, el);
  return el;
}

SHOP_TICKETS.forEach(t =>
  shopEl.appendChild(renderTicket(t))
);
