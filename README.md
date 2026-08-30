<div align="center">

# ✨ AI Lifestyle Assistant ✨

### Your personal AI for fashion, travel, and everyday planning

<img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=22&pause=1000&color=7C3AED&center=true&vCenter=true&width=520&lines=Fashion+recommendations+that+fit+you;Trip+planning%2C+weather-aware;Smart+scheduling+%26+reminders;All+from+a+WhatsApp+chat" alt="Typing SVG" />

<br/>

![Status](https://img.shields.io/badge/status-in%20development-F59E0B?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-22C55E?style=for-the-badge)
![PRs](https://img.shields.io/badge/PRs-welcome-7C3AED?style=for-the-badge)

<br/>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-FFD21E?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

</div>

---

## 🌟 Overview

An AI-powered personal lifestyle assistant that brings together everything you need to look good and plan smart — in one conversational experience.

<table>
<tr>
<td width="33%" align="center">

### 👗
**Fashion Recommendations**

Outfit ideas tailored to your style, body type, and wardrobe.

</td>
<td width="33%" align="center">

### 🧳
**Trip Planning**

Itineraries, packing lists, and destination picks built around you.

</td>
<td width="33%" align="center">

### 🌦️
**Weather-Aware Planning**

Plans that adapt to the forecast before you step outside.

</td>
</tr>
<tr>
<td width="33%" align="center">

### 🗓️
**Scheduling**

Reminders and calendar-smart suggestions that keep your day flowing.

</td>
<td width="33%" align="center">

### 🎯
**Personalized Recommendations**

Learns your preferences and gets sharper over time.

</td>
<td width="33%" align="center">

### 💬
**WhatsApp Assistant**

Chat with it like a friend — no new app to install.

</td>
</tr>
</table>

---

## 🏗️ Architecture

```mermaid
flowchart LR
    U([👤 User]) -->|chat| WA[💬 WhatsApp Assistant]
    U -->|browser| FE[🖥️ Frontend<br/>Next.js · TS · Tailwind]

    WA --> API[⚙️ Backend API<br/>Node.js · Express · TS]
    FE --> API

    API --> AI[🧠 AI Service<br/>Python · PyTorch · HF]
    API --> DB[(🍃 MongoDB)]
    API --> CACHE[(⚡ Redis)]

    AI -->|vector search| FAISS[(🔎 FAISS Index)]
    AI --> FM[👚 Fashion Models]

    classDef frontend fill:#0EA5E9,stroke:#0369A1,color:#fff
    classDef backend fill:#22C55E,stroke:#15803D,color:#fff
    classDef ai fill:#EE4C2C,stroke:#991B1B,color:#fff
    classDef data fill:#7C3AED,stroke:#5B21B6,color:#fff

    class FE,WA frontend
    class API backend
    class AI,FM,FAISS ai
    class DB,CACHE data
```

<details>
<summary><b>📦 Tech stack breakdown</b></summary>

<br/>

| Layer | Technologies |
|------:|:-------------|
| **Frontend** | Next.js · TypeScript · Tailwind CSS |
| **Backend** | Node.js · Express · TypeScript |
| **AI** | Python · PyTorch · Hugging Face · Fashion models · FAISS |
| **Database** | MongoDB · Redis |

</details>

---

## 📁 Project Structure

```
StyleTrip/
├── frontend/     🖥️  Next.js web client
├── backend/      ⚙️  Express API server
├── ai-service/   🧠  Python ML & recommendation engine
├── workers/      🔄  Background jobs & queues
├── database/     🗄️  Schemas, migrations, seeds
├── shared/       🔗  Shared types & utilities
└── docs/         📚  Documentation
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/<your-org>/StyleTrip.git
cd StyleTrip

# 2. Install dependencies (per service)
cd frontend && npm install
cd ../backend && npm install
cd ../ai-service && pip install -r requirements.txt

# 3. Configure environment
cp .env.example .env

# 4. Run the stack
npm run dev
```

---

## 🗺️ Roadmap

- [ ] Core fashion recommendation engine
- [ ] Weather-aware trip planner
- [ ] WhatsApp assistant integration
- [ ] Personalized preference learning
- [ ] Calendar & scheduling sync
- [ ] Public beta

---

<div align="center">

### Built with 💜 for people who want to plan less and live more

<sub>⭐ Star this repo if the idea excites you</sub>

</div>
