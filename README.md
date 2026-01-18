# Zero-Trust Document Verification & Digital Asset Custody Platform (Z-VAULT)

**A secure, enterprise-grade document custody system with blockchain-based verification and zero-trust security.**  
Built as a portfolio project to demonstrate full-stack development, security engineering, and DevOps skills.

---

## 🚀 Project Overview

This platform allows organizations to securely upload, store, verify, and manage sensitive documents using:

- **Zero-Trust access control**
- **Encrypted document storage**
- **Blockchain-based proof of authenticity**
- **Multi-party approval workflow**
- **Audit & compliance logging**
- **Secure download with one-time access**

---

## 🎯 Key Features

### 🔐 Zero-Trust Security
- Continuous authentication (JWT + refresh token rotation)
- Context-aware authorization (device + IP + time)
- Least privilege access via RBAC

### 📁 Document Custody Vault
- Encrypted storage (AES-256)
- Secure upload/download
- Per-document access policies

### ⛓️ Blockchain Proof of Authenticity
- SHA-256 hashing of documents
- Hash stored on Polygon Mumbai testnet
- Verification portal for integrity check

### 🧾 Audit & Compliance
- Immutable audit logs
- Downloadable audit reports (PDF/CSV)

### 🤝 Multi-Party Approval
- 2-of-3 approval workflow
- Real-time notifications (Socket.io)

---

## 🧰 Tech Stack

### Backend
- Node.js, Express.js
- MongoDB (Atlas)
- JWT, bcrypt
- AES-256 encryption
- Redis (cache & token tracking)

### Frontend
- React + TypeScript
- Tailwind CSS
- Redux Toolkit
- Axios

### Blockchain
- Solidity (Smart Contracts)
- Hardhat
- Ethers.js
- Polygon Mumbai Testnet

### DevOps & Infrastructure
- Docker, Docker Compose
- GitHub Actions (CI/CD)
- NGINX reverse proxy
- Cloudflare WAF & CDN
- MongoDB Atlas + S3 backup

---

## 📁 Project Structure (High-Level)

```
/client        (React + TypeScript)
/server        (Node.js + Express)
/contracts     (Solidity + Hardhat)
/infra         (Docker, CI/CD, deployment scripts)
```

---

## 🔧 Setup & Run (Local)

> **Backend**
```bash
cd server
npm install
npm run dev
```

> **Frontend**
```bash
cd client
npm install
npm run dev
```

> **Smart Contracts**
```bash
cd contracts
npm install
npx hardhat test
```

---

## 🧭 Future Enhancements (Roadmap)

- Add **desktop agent** for OS-level document locking (Rust + Qt)
- Integrate **multi-factor device-based contract signing** using QR
- Implement **multi-org isolation** and secure cross-organization policies
- Add **end-to-end encrypted collaboration**
- Add **production-grade deployment (Kubernetes)**

---

## 📌 Demo / Screenshots

(Insert demo GIFs or screenshots here)

---

## 🧑‍💻 About Me

I'm a full-stack developer focused on security, blockchain, and scalable architectures.  
This project showcases my ability to build enterprise-level systems from scratch.

---

## 📫 Contact

Feel free to connect:  
📧 mmsa155j3@gmail.com 
🔗 LinkedIn: https://www.linkedin.com/in/muhammad-salman-amir-4a2656254/