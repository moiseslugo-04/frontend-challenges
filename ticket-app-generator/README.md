# Frontend Mentor - Conference ticket generator

![Design preview for the Conference ticket generator coding challenge](./preview.jpg)

## Welcome! 👋

A small React app that lets users upload a photo, enter their details, and generate a personalized event ticket for “Coding Conf 2025.”

## 🚀 Features

- **Photo upload** (JPG/PNG ,max 500 KB) with live preview
- **Form Validation** powered by zod
- **Local Storage**:Saves Ticket data in `localStorage` so users can revisit on regenerate
- **Ticket Preview**: Displays a nicely styled ticket with avatar, fullname, email, github handle, and event info
- **Responsive Design** :Mobile-first layout with decorative SVG/CSS patterns

---

# Tech Stack

- **React** (hooks,functional components)
- **ZOD** from schemas validation
- **Custom hooks**: `useForm` ,`useStorage` ,`useTempUrl`, `useDragAndDrop`
- **CSS Module** for scoped styling
- **Utility**: `convertBase64` helper for file→Base64 conversion

## Installation

1. **Clone** the repo
   ```bash
   git clone https://github.com/your-username/coding-conf-ticket-generator.git
   cd coding-conf-ticket-generator
   ```
2. **Install dependencies** (using pnpm)
   pnpm install
3. **Start the dev server**
   pnpm start
4. **Build for production**
   pnpm build

## PROJECT STRUCTURE

src/
├── components/
│ ├── AvatarPreview/
│ ├── InputField/
│ ├── Patterns/
│ ├── UploadAvatar/
│ |── ErrorWarningAlert.jsx
| └── Icons.jsx
├── hooks/
| |-- useDragAndDrop.js
│ ├── useForm.js
│ ├── useStorage.js
│ └── useTempUrl.js
├── pages/
│ ├── TicketGenerator/
│ └── TicketPreview/
├── schemas/
│ └── user.js # Zod schema for validation
├── utils/
│ ├── constants.js
│ └── convertBase64.js
└── App.js
