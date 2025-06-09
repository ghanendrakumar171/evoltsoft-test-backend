# ⚡ EV Charging Backend API

A backend API built with **Node.js** and **Express**, connected to a **PostgreSQL** database hosted on **Google Cloud SQL**, and deployed using **Google App Engine**.

---

## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL (Cloud SQL - GCP)
- Google Cloud App Engine
- dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git

2. Install Dependencies
npm install

3. Create Environment Variables
Create a .env file at the root:

PORT=8080
PG_USER=postgres
PG_PASSWORD=Ghannu@1207
PG_DATABASE=postgres
PG_HOST=/cloudsql/evolesoft-test-462207:asia-south1:evolesoft-test
PG_PORT=5432

Note: DB_HOST uses Cloud SQL Unix socket path for App Engine.

4. Start Locally
Ensure you're authenticated with GCP and the SQL instance allows local access.


npm run dev

nodemon index.js
☁️ Deploying to Google App Engine
1. Create app.yaml

runtime: nodejs20
instance_class: F1

env_variables:
  PG_USER: postgres
  PG_PASSWORD: Ghannu@1207
  PG_DATABASE: postgres
  PG_HOST: /cloudsql/evolesoft-test-462207:asia-south1:evolesoft-test
  PG_PORT: 5432
  PORT: 8080

beta_settings:
  cloud_sql_instances: evolesoft-test-462207:asia-south1:evolesoft-test


2. Deploy

gcloud app deploy
