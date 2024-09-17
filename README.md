# **EventSphere**

**EventSphere** is a location-based event discovery app designed to help users find nearby events, join them, and participate in real-time chatrooms with other attendees. The app focuses on simplicity and ease of use, making it ideal for discovering events quickly and interacting with event participants.

## **Features**

- **User Authentication**: Secure sign-up and login system using Convex authentication.
- **Filter Events with Tags**: Easily filter events by category tags (e.g., music, tech, food).
- **Find Nearest and Latest Events**: Events are automatically sorted to show the nearest and most recent ones at the top.
- **Location-Based Event Listings**: Displays nearby events based on your current location or manually entered city.
- **Event Details**: Detailed view for each event, showing essential information like venue, date, and time.
- **Join Event & Chatroom**: Once an event is joined, users can access a chatroom to interact with other attendees.
- **Bookmarks**: Users can bookmark events they are interested in for future reference.

## **Installation**

To run **EventSphere** on your local machine, follow these steps:

### **Prerequisites**

- **Node.js** (version 16 or above)
- **npm** (version 7 or above)

### **Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/prajeshElEvEn/eventsphere.git
   cd eventsphere
   ```

2. **Install Dependencies**:
   Install all required npm packages:

   ```bash
   npm install
   ```

3. **Set Up Convex Backend**:
   Login to Convex and configure the app, read more from [here](https://docs.convex.dev/quickstart/react):

   ```bash
   npx convex dev
   ```

4. **Setting up database**:
   Populate database with sample data from `eventsData.jsonl` file:

   ```bash
   npx convex import --table tasks sampleData.jsonl
   ```

5. **Run the App**:
   Start the app in development mode:

   ```bash
   npm run dev
   ```

6. **Access the App**:
   Open your browser and go to:
   ```
   http://localhost:5173
   ```

## **Usage**

- **Sign Up / Log In**: Create an account or log in using your credentials.
- **Find Events**: Browse through the list of events based on your location.
- **Join Events**: Click on an event to view details, and join the event to participate in the chatroom.
- **Chat**: Engage in real-time conversations with other event attendees.
- **Bookmark Events**: Save interesting events for easy access later.
