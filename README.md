# **Rome Project - Peer-to-Peer Item Exchange Platform**

### **Overview**

Rome is a web-based platform designed to facilitate the exchange of old items between users. Instead of discarding unused items, users can list them for trade, browse available listings, and request exchanges with other users. This system promotes **sustainability** by reducing waste and encouraging a circular economy.

### **Features**

**User Profile Management** – Users have unique profiles containing their listed and traded items.  
 **Item Listings** – Users can list their old items with details like category, condition, and description.  
 **Trade Requests** – Users can request item exchanges, negotiate trades, and track trade statuses.  
 **Item Discovery** – Users can browse and filter available items for trade.  
 **Trade Status Updates** – Trades can be accepted, rejected, or modified.

### ** API Endpoints**

#### **User Management**

- `GET /users/:id` – Retrieve user details.
- `PUT /users/:id` – Update user details.
- `DELETE /users/:id` – Delete a user account.
- `GET /users/:id/items` – Get all items listed by a user.
- `GET /users/:id/trades` – Get all trades involving a user.

#### **Item Management**

- `POST /items` – Create a new item listing.
- `GET /items` – Retrieve all available items.
- `GET /items/:id` – Retrieve details of a specific item.
- `PUT /items/:id` – Update an item listing.
- `DELETE /items/:id` – Remove an item listing.

#### **Trade & Exchange Management**

- `POST /trades` – Create a trade request between users.
- `GET /trades/:id` – Retrieve trade details.
- `PUT /trades/:id/status` – Update trade status (accepted/rejected).

---
