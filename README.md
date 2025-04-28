# Study Hub
🔥 A ClickUp for student life — not corporate life.

## Overview

Start date: 16th April 2025
Currently **in progress**. 

**Study Hub** is a productivity platform designed to help users plan, organize, and track their studies effectively.  

Study Hub is designed to help students manage their assignments, organize tasks, plan their academic careers, and discover growth opportunities — all in one place.
Inspired by tools like ClickUp but tailored for agile student life, the Hub aims to transform how students interact with their academic responsibilities. Academic websites and hubs are not up to date with the use of AI, especially chatbots, students use them daily but they are not tailored to their use case.

This project is currently a work in progress, with starting functionality implemented and future features and enhancements in progress.

## MVP Core Goals

✏️ Assignment & Study Assistant:
- Generate outlines, check AI-written texts, and detect study gaps.
- Create assignment working files automatically through extracting their details with a plugin whenever you please.
- Do pre created assignments inside the hub and export ready to submit.
✅ Integrated Task Management:
- Create, categorize, and visualize tasks and deadlines.
📆 Academic Planning:
- Track courses, credits, and long-term goals.
- Goals through percentages realised by using principles like time blocking etc. (10-20-70 / personal, work, uni-time)
🎯 Opportunity Discovery:
- Get curated lists of internships, conferences, and academic growth or events through a plug in automatically extracting info wherever you please (no more 37248 tabs when you plan your life).
📤 Export & Integration:
- Sync assignments and plans to external platforms like Notion and Google Calendar.

## Stack

Layer | Tools
Frontend Extension | Vanilla JavaScript, Chrome Extensions API
Backend | Node.js, Express
Hosting (testing) | ngrok secure tunnel
Future Dashboard | Planned: React.js + TailwindCSS
AI Integration (future) | OpenAI API, custom AI prompts

## Components

- **Front-end:** Streamlit interface
- **Back-end:** Local JSON file for storing tasks and progress
- **Programming Language:** Python


## Current Status

This MVP focuses on the first critical building block:

### Featrue 1: Assignment Extraction

Students often use different tools such as Notion, ClickUp, Asana, Google Drive etc. And move assignments back and forth between file editing and storing platforms. This is a timely and frustrating manual process that repeats with every new task.
This feature aims to function like a plug in, automatically detecting keywords such as "deadline" and "assignment" to then extract tasks from the page and create a new task in the study hub

- Built a Chrome Extension (Vanilla JS + Chrome APIs)
- Developed a Node.js + Express backend

#### The extension:
- Scans university portals (like Brightspace) for assignment-related content
- Cleans and structures the extracted data
- Sends data securely to the backend (via HTTPS tunnel, e.g. here using ngrok)
- Intelligent filters already remove layout noise (menus, buttons, titles) and retain meaningful content (instructions, deadlines, assignments).
- ✅ Current working flow: from live page → plug in activation → extracting structured data → backend capture!


#### Next Steps

💬 Smarter Content Recognition:
- Improve deadline extraction, assignment type recognition, and instruction parsing.
👀 User Preview Before Sending:
- Add a popup UI allowing students to review extracted tasks before saving to hub.
📅 Planning and Calendar Integration:
- Auto-create deadlines in hub and synch with Google Calendar and vice versa
- Develop a **useful** calendar for the hub, not the per usual calendar app, not needed
📚 Study Assistant Module Hub Front End:
- Generate assignment outlines and editable files from extracted json data (using AI APIs).
🔄 Notion / PDF / Zip / CSV Export:
- Allow students to download all completed assignments or ideally insert through plug in directly to academic platforms.
🖥️ Dashboard Design:
- Build a React-based dashboard to manage the user interface elements for assignments deadlines centrally.

## Contributing

Currently a solo project — if you're excited by this feel free to reach out.

## Author

Anna Papanakli
