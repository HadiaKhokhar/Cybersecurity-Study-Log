# 🚀 Cybersecurity Projects + Research Roadmap

---

## 1️⃣ Account Security & Authentication

### Core Concepts
- Authentication vs Authorization  
- Password attacks:
  - Dictionary attack  
  - Brute-force attack  
- Multi-Factor Authentication (MFA / 2FA):
  - Something you know  
  - Something you have  
  - Something you are  
- NIST password recommendations (length, complexity)  
- Passkeys (passwordless authentication)  
- Single Sign-On (SSO) – security risks  
- Password managers – how they work & how they stay secure  

### Research Topics
- How passkeys work  
- How session hijacking happens  
- Cookies vs Sessions  
- User-Agents (browser identification & tracking)  

### Practical Projects
- Create a 4-digit brute-force Python script  
- Simulate cracking a 4-digit mobile PIN (educational demo only)  
- Apply 2FA to all major accounts  
- Build a Password Complexity Calculator  
- Create a Simple Brute-Force Simulator  

---

## 2️⃣ Cryptography & Encryption

### Core Concepts
- Hashing:
  - What is hashing?
  - Types of hashing algorithms
  - Salting  
- Symmetric vs Asymmetric Encryption:
  - AES  
  - RSA  
- Digital Signatures  
- Encryption Systems  

### Practical Projects
- Implement different hashing algorithms in Python  
- Build your own simple encryption system  
- Create your own digital signature using RSA  

---

## 3️⃣ Network & System Security

### Core Concepts
- HTTP vs HTTPS (TLS)  
- WiFi Protected Access (WPA)  
- Man-in-the-Middle (MITM) attacks  
- Packet sniffing  
- VPN  
- Firewall  
- Proxy  
- Ports (how services communicate)  
- SSH  
- Port scanning  

### Practical Projects
- Build a local port scanner  
- Capture and analyze your own HTTP headers (User-Agent, Referer)  
- Study how to prevent MITM attacks  

---

## 4️⃣ Web Security & Vulnerabilities

### Core Concepts
- OWASP Top 10  
- XSS (Cross-Site Scripting)  
- CSRF (GET vs POST abuse)  
- SQL Injection  
- Arbitrary Code Execution (ACE)  
- Remote Code Execution (RCE)  
- Buffer Overflow & memory safety  

### Practical Projects
- Create a vulnerable SQL login form and secure it  
- Build an XSS demo and implement escaping  
- Demonstrate CSRF attack flow and prevention  
- Study arbitrary code execution mechanics safely  

---

## 5️⃣ Privacy & Tracking

### Core Concepts
- Cookies  
- URL tracking parameters  
- HTTP Referrers  
- Browser fingerprinting  

### Practical Project
- Build a Browser Privacy Auditor that displays:
  - User-Agent  
  - Referer  
  - Request headers  

---

# 🎯 Recommended Learning Order

1. Authentication & Password Security  
2. Hashing & Encryption  
3. Web Vulnerabilities (OWASP)  
4. Network Security  
5. Privacy & Tracking  
