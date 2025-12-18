import { SHOP_TICKETS } from './shop.js';

const shopEl = document.getElementById("shop");

function randomCode() {
  return "#" + Math.floor(100000 + Math.random() * 900000);
}

function now() {
  return new Date().toLocaleString("ro-RO");
}

function renderTicket(ticket) {
  const el = document.createElement("div");
  el.className = `ticket ${ticket.color}`;

  el.innerHTML = `
    <div class="ticket-header">
      <span class="ticket-code">${randomCode()}</span>
      <span>${now()}</span>
    </div>

    <div class="ticket-title">${ticket.emoji} ${ticket.title}</div>
    <div class="ticket-desc">${ticket.description}</div>
    <div class="ticket-extra">${ticket.extra}</div>

    <div class="ticket-reward">🎁 ${ticket.reward}</div>

    <div class="ticket-unlock">
      🔓 Necesită ${ticket.missionsRequired} misiuni
    </div>

    <div class="barcode"></div>
  `;

  return el;
}

SHOP_TICKETS.forEach(t =>
  shopEl.appendChild(renderTicket(t))
);
