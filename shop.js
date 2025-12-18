/*************************************************
 * TimeArena Shop Schema v1.10
 * Tickets = Power, Time & Control
 *************************************************/

export const SHOP_TICKETS = [

/* =================================================
   🟢 TICKETE STANDARD — TIME
   ================================================= */

{
  id: "STD-DUO-10",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🦉",
  title: "Duolingo Boost",
  description: "+10 min Duolingo",
  extra: "Bufnița profesor te aplaudă",
  reward: "+10 min Duolingo",
  missionsRequired: 4,
  barcode: true
},

{
  id: "STD-PHONE-15",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "📱",
  title: "Phone Time",
  description: "+15 min Telefon",
  extra: "Acces rapid la aplicații",
  reward: "+15 min Telefon",
  missionsRequired: 3,
  barcode: true
},
{
  id: "STD-PHONE-20",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "📱",
  title: "Phone Time Plus",
  description: "+20 min Telefon",
  extra: "Nivel extins de acces",
  reward: "+20 min Telefon",
  missionsRequired: 4,
  barcode: true
},
{
  id: "STD-PHONE-30",
  type: "STANDARD",
  rarity: "Uncommon",
  color: "green",
  emoji: "📱",
  title: "Phone Time Max",
  description: "+30 min Telefon",
  extra: "Acces maxim azi",
  reward: "+30 min Telefon",
  missionsRequired: 5,
  barcode: true
},

{
  id: "STD-PS-15",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🎮",
  title: "PlayStation Pass",
  description: "+15 min PlayStation",
  extra: "Intrare rapidă în joc",
  reward: "+15 min PlayStation",
  missionsRequired: 3,
  barcode: true
},
{
  id: "STD-PS-20",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🎮",
  title: "PlayStation Plus",
  description: "+20 min PlayStation",
  extra: "Sesiune extinsă",
  reward: "+20 min PlayStation",
  missionsRequired: 4,
  barcode: true
},
{
  id: "STD-PS-30",
  type: "STANDARD",
  rarity: "Uncommon",
  color: "green",
  emoji: "🎮",
  title: "PlayStation Max",
  description: "+30 min PlayStation",
  extra: "Nivel de gaming ridicat",
  reward: "+30 min PlayStation",
  missionsRequired: 5,
  barcode: true
},

{
  id: "STD-CARTOON-10",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🎨",
  title: "Cartoon Time",
  description: "+10 min Desene",
  extra: "Relax time",
  reward: "+10 min Desene",
  missionsRequired: 2,
  barcode: true
},
{
  id: "STD-CARTOON-20",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🎨",
  title: "Cartoon Time Plus",
  description: "+20 min Desene",
  extra: "Relax extins",
  reward: "+20 min Desene",
  missionsRequired: 3,
  barcode: true
},

{
  id: "STD-YT-10",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "▶️",
  title: "YouTube Snack",
  description: "+10 min YouTube",
  extra: "Conținut scurt și controlat",
  reward: "+10 min YouTube",
  missionsRequired: 2,
  barcode: true
},
{
  id: "STD-YT-20",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "▶️",
  title: "YouTube Plus",
  description: "+20 min YouTube",
  extra: "Vizionare extinsă",
  reward: "+20 min YouTube",
  missionsRequired: 3,
  barcode: true
},

{
  id: "STD-TALK-10",
  type: "STANDARD",
  rarity: "Common",
  color: "green",
  emoji: "🗣️",
  title: "Important Talk",
  description: "+10 min discuție importantă",
  extra: "Timp 1-la-1",
  reward: "+10 min Talk",
  missionsRequired: 2,
  barcode: true
},

{
  id: "STD-MOVIE",
  type: "STANDARD",
  rarity: "Uncommon",
  color: "green",
  emoji: "🎬",
  title: "Movie Night Ticket",
  description: "Alegi filmul de Vineri / Sâmbătă",
  extra: "Popcorn inclus 🍿",
  reward: "Choose Movie",
  missionsRequired: 6,
  weeklyLimit: 1,
  barcode: true
},

/* =================================================
   🔵 TICKETE DE CONTROL
   ================================================= */

{
  id: "CTL-DIFF",
  type: "CONTROL",
  rarity: "Uncommon",
  color: "blue",
  emoji: "🎮",
  title: "Difficulty Down",
  description: "O regulă mai ușoară azi",
  extra: "Folosește strategic",
  reward: "Rule Relax",
  missionsRequired: 5,
  barcode: true
},

{
  id: "CTL-RETRY",
  type: "CONTROL",
  rarity: "Uncommon",
  color: "blue",
  emoji: "🔁",
  title: "Retry Card",
  description: "Refaci o misiune eșuată",
  extra: "Încă o șansă",
  reward: "Retry Mission",
  missionsRequired: 6,
  barcode: true
},

{
  id: "CTL-GAME",
  type: "CONTROL",
  rarity: "Uncommon",
  color: "blue",
  emoji: "🕹️",
  title: "Game Mode Switch",
  description: "Alegi jocul pentru o sesiune",
  extra: "Control temporar",
  reward: "Choose Game",
  missionsRequired: 6,
  barcode: true
},

{
  id: "CTL-MISSION",
  type: "CONTROL",
  rarity: "Uncommon",
  color: "blue",
  emoji: "🎯",
  title: "Mission Selector",
  description: "Alegi misiunea de mâine",
  extra: "Planificare strategică",
  reward: "Choose Mission",
  missionsRequired: 5,
  barcode: true
},

/* =================================================
   🔴 PROTECT
   ================================================= */

{
  id: "PRT-EXPLORE",
  type: "PROTECT",
  rarity: "Rare",
  color: "red",
  emoji: "🌍",
  title: "Explorer Pass",
  description: "+15 min documentar",
  extra: "Spațiu, animale, istorie, TEDx",
  reward: "+15 min Learning",
  missionsRequired: 5,
  barcode: true
},

{
  id: "PRT-PODCAST",
  type: "PROTECT",
  rarity: "Rare",
  color: "red",
  emoji: "🧠🎧",
  title: "Brain Podcast Boost",
  description: "+10 min podcast",
  extra: "Conținut educativ",
  reward: "+10 min Podcast",
  missionsRequired: 4,
  barcode: true
},

{
  id: "PRT-STREAK",
  type: "PROTECT",
  rarity: "Rare",
  color: "red",
  emoji: "🔥",
  title: "Streak Shield",
  description: "Streak protejat o zi",
  extra: "Fără reset",
  reward: "Streak Protection",
  missionsRequired: 8,
  barcode: true
},

{
  id: "PRT-NOPEN",
  type: "PROTECT",
  rarity: "Rare",
  color: "red",
  emoji: "🛡️",
  title: "No-Penalty Day",
  description: "Imunitate la penalități minore",
  extra: "Zi de siguranță",
  reward: "Penalty Immunity",
  missionsRequired: 7,
  barcode: true
},

/* =================================================
   🟣 PRIZES / LEGENDARY
   ================================================= */

{
  id: "LEG-TIME",
  type: "LEGENDARY",
  rarity: "Legendary",
  color: "purple",
  emoji: "🌌",
  title: "Time Lord",
  description: "+30 min wildcard",
  extra: "O dată pe săptămână",
  reward: "+30 min ANY",
  missionsRequired: 10,
  weeklyLimit: 1,
  barcode: true
},

{
  id: "LEG-MYSTERY",
  type: "LEGENDARY",
  rarity: "Legendary",
  color: "purple",
  emoji: "🎁",
  title: "Mystery Box",
  description: "Premiu random",
  extra: "Decis de părinte",
  reward: "Random Reward",
  missionsRequired: 9,
  barcode: true
},

{
  id: "LEG-CAPTAIN",
  type: "LEGENDARY",
  rarity: "Legendary",
  color: "purple",
  emoji: "👑",
  title: "Captain of the Day",
  description: "Mini-control asupra programului",
  extra: "Cu aprobare",
  reward: "Schedule Control",
  missionsRequired: 9,
  dailyLimit: 1,
  barcode: true
}

];
