# How to Run This CRM Project (Frontend + Backend)

## 1. Extract the Zip File
Unzip the project to any folder on your computer.

## 2. Install Node.js
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

## 3. Install Dependencies

### A. Backend
1. Open a terminal/command prompt.
2. Navigate to the backend folder:
   ```sh
   cd backend
   ```
3. Install backend dependencies:
   ```sh
   npm install
   ```

### B. Frontend
1. Open a new terminal window (or tab).
2. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
3. Install frontend dependencies:
   ```sh
   npm install
   ```

## 4. Start the Servers

### A. Start the Backend
In the `backend` folder terminal, run:
```sh
npm run dev
```
_or (if you don’t have a `dev` script)_
```sh
node server.js
```
- The backend should start on [http://localhost:5000](http://localhost:5000)

### B. Start the Frontend
In the `frontend` folder terminal, run:
```sh
npm run dev
```
- The frontend should start on [http://localhost:3000](http://localhost:3000)

## 5. Open the App in Your Browser
Go to [http://localhost:3000](http://localhost:3000) to use the CRM.

---

## ⚠️ Troubleshooting
- If you see errors, make sure both servers are running and you have installed all dependencies.
- The backend must be running before the frontend for real data to appear.
- If you see mock data, your backend may not be running or is not reachable.

---

# CRM Frontend

A modern, responsive CRM (Customer Relationship Management) frontend built with Next.js, React, and Material-UI.

## Features

- **Dashboard**: Overview with key metrics, charts, and recent activity
- **Customer Management**: Add, edit, delete, and search customers
- **Campaign Management**: Create and track marketing campaigns
- **Analytics**: Comprehensive analytics with charts and reports
- **Settings**: User profile and system configuration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: Material-UI (MUI) v5
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/
│   ├── (tabs)/
│   │   └── index.tsx          # Dashboard page
│   ├── customers/
│   │   └── page.tsx           # Customers page
│   ├── campaigns/
│   │   └── page.tsx           # Campaigns page
│   ├── analytics/
│   │   └── page.tsx           # Analytics page
│   ├── settings/
│   │   └── page.tsx           # Settings page
│   └── layout.tsx             # Root layout with navigation
├── components/
│   └── CustomerList.tsx       # Customer list component
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Pages

### Dashboard (`/`)
- Key performance metrics
- Sales and leads charts
- Recent activity feed
- Quick statistics cards

### Customers (`/customers`)
- Customer list with search and filtering
- Add, edit, and delete customers
- Customer status management
- Contact information display

### Campaigns (`/campaigns`)
- Campaign creation and management
- Campaign performance tracking
- Budget and conversion metrics
- Campaign type distribution

### Analytics (`/analytics`)
- Comprehensive analytics dashboard
- Sales and leads trends
- Lead source distribution
- Campaign performance charts
- Top customers list
- Conversion funnel

### Settings (`/settings`)
- User profile management
- Notification preferences
- Security settings
- System information

## API Integration

The frontend is designed to work with a backend API. The main API endpoints expected are:

- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create a new customer
- `PUT /api/customers/:id` - Update a customer
- `DELETE /api/customers/:id` - Delete a customer

If the API is not available, the app will fall back to mock data for demonstration purposes.

## Customization

### Theme
The Material-UI theme can be customized in `app/layout.tsx`. The current theme includes:
- Primary color: Blue (#1976d2)
- Secondary color: Pink (#dc004e)
- Background: Light gray (#f5f5f5)

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update the navigation in `app/layout.tsx`

### Adding New Components
1. Create components in the `components/` directory
2. Import and use them in your pages
3. Follow the existing component patterns

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm run start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License. 