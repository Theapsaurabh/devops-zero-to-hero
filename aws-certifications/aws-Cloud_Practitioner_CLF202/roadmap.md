# 🗺️ AWS Certified Cloud Practitioner (CLF-C02) – Complete Roadmap

> *Your one‑stop guide to mastering the AWS Cloud Practitioner exam – from zero to certified in 4 weeks.*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername)

---

## 📚 Table of Contents

1. [Exam Overview](#exam-overview)
2. [Domain Breakdown & Weightage](#domain-breakdown--weightage)
3. [The 4‑Week Study Plan](#the-4week-study-plan)
   - Week 1: Foundations & Cloud Concepts
   - Week 2: Security & Compliance
   - Week 3: Core AWS Services (The 'How')
   - Week 4: Billing, Pricing & Final Review
4. [Key Services to Know](#key-services-to-know)
5. [Recommended Resources](#recommended-resources)
6. [Hands‑On Labs](#handson-labs)
7. [Practice Exams & Dumps](#practice-exams--dumps)
8. [Tips for Success](#tips-for-success)
9. [Final Checklist](#final-checklist)

---

## 🎯 Exam Overview

The **AWS Certified Cloud Practitioner (CLF‑C02)** is the foundational certification that validates your overall understanding of the AWS Cloud, its services, security, pricing, and support. It’s the perfect starting point for anyone beginning their cloud journey.

| Aspect | Details |
| :--- | :--- |
| **Exam Code** | CLF‑C02 |
| **Format** | 65 questions (multiple‑choice & multiple‑response) |
| **Duration** | 90 minutes |
| **Passing Score** | 700 out of 1000 (scaled) |
| **Cost** | ~100 USD |
| **Validity** | 3 years |
| **Prerequisites** | None (6 months of AWS exposure recommended) |

---

## 📊 Domain Breakdown & Weightage

The exam is divided into **four domains**. Allocate your study time proportionally.

| # | Domain | Weight | Priority |
| :--- | :--- | :--- | :--- |
| 1 | **Cloud Concepts** | 24% | High |
| 2 | **Security and Compliance** | 30% | **Critical** |
| 3 | **Cloud Technology and Services** | 34% | **Critical** |
| 4 | **Billing, Pricing and Support** | 12% | Medium |

> ⚡ **Tip**: Domains 2 & 3 together cover **~64%** of the exam – prioritise them accordingly.

---

## 🗓️ The 4‑Week Study Plan

This plan assumes **1–3 hours of focused study per day**. Adjust the pace based on your availability.

### Week 1: Foundations & Cloud Concepts

**Goal**: Understand the *why* of cloud computing and the global AWS infrastructure.

| Day | Topics | Resources |
| :--- | :--- | :--- |
| **1** | What is Cloud Computing?<br>– On‑demand delivery, pay‑as‑you‑go | AWS Whitepaper: *Overview of AWS* |
| **2** | Cloud Value Proposition<br>– CAPEX → OPEX, economies of scale, agility | AWS Skill Builder – Module 1 |
| **3** | Cloud Deployment Models<br>– Public, Private, Hybrid, Multi‑cloud | Read blog posts / AWS documentation |
| **4** | Cloud Service Models<br>– IaaS, PaaS, SaaS – definitions & examples | Compare with real‑world scenarios |
| **5** | AWS Global Infrastructure<br>– Regions, Availability Zones, Edge Locations | AWS Global Infrastructure Map |
| **6** | Design Principles<br>– Scalability, elasticity, fault tolerance, HA | AWS Well‑Architected Framework |
| **7** | **Review & Quiz** – Test your understanding with practice questions | Use built‑in quizzes in courses |

> ✅ **Checkpoint**: You should be able to explain the difference between a Region and an Availability Zone, and list the three service models.

---

### Week 2: Security & Compliance

**Goal**: Master the AWS security model – the heaviest domain on the exam.

| Day | Topics | Resources |
| :--- | :--- | :--- |
| **1** | AWS Shared Responsibility Model<br>– *Security of the cloud* vs *security in the cloud* | AWS Whitepaper: *Shared Responsibility* |
| **2** | IAM (Identity & Access Management)<br>– Users, Groups, Roles, Policies, Least Privilege | Hands‑on: Create an IAM user with restricted permissions |
| **3** | Security Best Practices<br>– MFA, encryption at rest & in transit, password policies | Read AWS Security Best Practices whitepaper |
| **4** | Security Services (High‑level)<br>– Shield, WAF, GuardDuty, Inspector, Macie, Artifact | Compare services with use cases |
| **5** | Network Security<br>– Security Groups (instance‑level) vs NACLs (subnet‑level) | Hands‑on: Configure a security group |
| **6** | Compliance Frameworks<br>– AWS Artifact, GDPR, HIPAA, PCI‑DSS | AWS Compliance Center |
| **7** | **Review & Quiz** – Practice scenario‑based questions on security | Mock exam questions |

> ✅ **Checkpoint**: You should be able to explain who is responsible for patching the OS (you) vs the hypervisor (AWS). Know the difference between Shield and WAF.

---

### Week 3: Core AWS Services (The "How")

**Goal**: Build a broad understanding of the most popular services. You don’t need deep configuration knowledge – just know *what* they do and *when* to use them.

| Day | Category | Services to Know | Hands‑on Activity |
| :--- | :--- | :--- | :--- |
| **1** | **Compute** | EC2 (instance types, pricing: On‑Demand, Reserved, Spot)<br>Lambda (serverless)<br>ECS, EKS, Fargate (containers) | Launch an EC2 instance (free tier) |
| **2** | **Storage** | S3 (object storage, storage classes: Standard, IA, Glacier)<br>EBS (block storage for EC2)<br>EFS (file storage) | Create an S3 bucket and upload a file |
| **3** | **Databases** | RDS (managed SQL)<br>DynamoDB (NoSQL, key‑value)<br>Redshift (data warehousing) | Launch an RDS instance (or read documentation) |
| **4** | **Networking & CDN** | VPC (subnets, route tables, internet gateways)<br>Route 53 (DNS)<br>CloudFront (CDN) | Explore the VPC console, understand default VPC |
| **5** | **Application Integration** | SQS (queues – decoupling)<br>SNS (pub/sub)<br>Step Functions (orchestration) | Read use‑case scenarios |
| **6** | **Management & Governance** | CloudWatch (monitoring)<br>CloudTrail (audit logging)<br>Config (compliance) | Explore CloudWatch dashboards |
| **7** | **Review & Quiz** – Service identification and scenario‑based | | Take a domain‑3 practice test |

> ✅ **Checkpoint**: You should be able to choose the right service for a given scenario (e.g., "Which service is best for serverless compute?" → Lambda). Know the difference between S3 and EBS.

---

### Week 4: Billing, Pricing & Final Review

**Goal**: Understand pricing models, cost management, and consolidate all knowledge with full‑length practice exams.

| Day | Topics | Resources |
| :--- | :--- | :--- |
| **1** | AWS Pricing Models<br>– On‑Demand, Reserved Instances, Spot Instances, Savings Plans | AWS Pricing Calculator |
| **2** | AWS Free Tier – what’s included, limitations | AWS Free Tier page |
| **3** | Cost Management Tools<br>– AWS Pricing Calculator, Cost Explorer, Budgets | Try estimating a sample architecture |
| **4** | AWS Support Plans<br>– Basic, Developer, Business, Enterprise – features & response times | AWS Support Plans |
| **5** | AWS Organizations<br>– Consolidated billing, multi‑account governance | Read documentation |
| **6** | **Full Mock Exam** – Timed (90 min) | Use a practice test from `mock-exams/` |
| **7** | Review weak areas, revisit notes, final confidence boost | Use `prep-tracker.md` to check off topics |

> ✅ **Checkpoint**: You should be able to recommend a pricing model for a workload with steady usage (Reserved Instances) vs one with intermittent usage (Spot/On‑Demand).

---

## ☁️ Key Services to Know (Quick Reference)

Here’s a **curated list** of AWS services you **must** be familiar with for the exam. Focus on their primary use cases, not deep technical details.

| Category | Service | What it does |
| :--- | :--- | :--- |
| **Compute** | EC2 | Virtual machines (IaaS) |
| | Lambda | Serverless, event‑driven compute |
| | ECS / EKS | Container orchestration |
| | Fargate | Serverless containers |
| **Storage** | S3 | Object storage – static assets, backups |
| | EBS | Block storage for EC2 |
| | EFS | File storage for Linux EC2 |
| | S3 Glacier | Low‑cost archival storage |
| **Databases** | RDS | Relational database (managed MySQL, PostgreSQL, etc.) |
| | DynamoDB | NoSQL key‑value / document database |
| | Redshift | Data warehousing for analytics |
| **Networking** | VPC | Private network in the cloud |
| | Route 53 | DNS service |
| | CloudFront | Content Delivery Network (CDN) |
| **Security** | IAM | Identity & Access Management |
| | Shield | DDoS protection |
| | WAF | Web Application Firewall |
| | GuardDuty | Threat detection |
| | Inspector | Vulnerability scanning |
| **Monitoring** | CloudWatch | Metrics, logs, alarms |
| | CloudTrail | API activity logging |
| **Integration** | SQS | Message queuing |
| | SNS | Pub/sub messaging |
| **Cost** | Cost Explorer | Visualise and analyse spending |
| | Budgets | Set spending alerts |
| **Support** | Trusted Advisor | Best practices recommendations |
| **Governance** | Organizations | Multi‑account management & consolidated billing |

---

## 📚 Recommended Resources

| Type | Resource | Why |
| :--- | :--- | :--- |
| **Official Course** | [AWS Skill Builder – Cloud Practitioner Essentials](https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/) | Free, foundational, covers all domains |
| **Whitepapers** | *Overview of Amazon Web Services* | Core concepts |
| | *Security Pillar – Well‑Architected Framework* | Shared responsibility, IAM, security services |
| | *AWS Pricing Overview* | Understand pricing models |
| **YouTube** | [freeCodeCamp – AWS Cloud Practitioner Crash Course](https://www.youtube.com/watch?v=3hLmDS179YE) | Excellent visual explanation |
| | [Tutorials Dojo – Exam Tips](https://www.youtube.com/c/TutorialsDojo) | Scenario‑based walkthroughs |
| **Books** | *AWS Certified Cloud Practitioner Study Guide* (Sybex) | Comprehensive coverage |
| **Practice Exams** | [Tutorials Dojo Practice Exams](https://portal.tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/) | Highly recommended, realistic questions |
| | Udemy (Maarek) | Good variety of questions |

---

## 🧪 Hands‑On Labs (Free Tier)

Practical experience is essential. Use the **AWS Free Tier** to complete these labs (they cost $0 or minimal charges).

| Lab | What You'll Learn |
| :--- | :--- |
| **Launch an EC2 Instance** | Connect via SSH, install a web server, see security groups in action |
| **Create an S3 Bucket** | Upload/download, enable versioning, set bucket policies |
| **Set Up IAM Users & Groups** | Apply policies, test permissions, enable MFA |
| **Create a VPC** | Understand subnets, route tables, internet gateway |
| **Monitor with CloudWatch** | Set an alarm on EC2 CPU usage |
| **Use the Pricing Calculator** | Estimate cost for a multi‑tier architecture |

---

## 🧠 Practice Exams & Dumps

**Practice is non‑negotiable.** Aim for at least **4–6 full‑length mock exams** before the real test.

- **What to look for** in a good practice exam:
  - Scenario‑based questions (“A company wants to... Which service should they use?”)
  - Clear explanations for each answer (why correct and why others are wrong)
  - Timed mode to simulate the real exam

> ⚠️ **Important**: Avoid using “brain dumps” (actual exam questions from memory). They are against AWS policies and often outdated. Use reputable platforms like Tutorials Dojo, Whizlabs, or official AWS practice tests.

---

## 💡 Tips for Success

1. **Hands‑On > Reading** – Even 10 minutes of clicking around the AWS console reinforces concepts far better than reading alone.
2. **Use the Free Tier** – Stay within limits to avoid unexpected charges. Set a budget alarm.
3. **Learn by Scenarios** – The exam tests your ability to map business needs to AWS services. For each service, ask: *“When would I use this?”*
4. **Know the 'Why'** – Understand the *Shared Responsibility Model* inside out – it often appears in multiple questions.
5. **Time Management** – You have ~1.4 minutes per question. If you’re stuck, flag it and move on; come back if time permits.
6. **Eliminate Wrong Answers** – In many questions, two options are obviously wrong; focus on the remaining two.
7. **Review the Official Exam Guide** – AWS publishes a free guide that lists all topics – use it as a checklist.

---

## ✅ Final Checklist

Use this checklist to ensure you're fully prepared before booking the exam.

- [ ] I can explain the six advantages of cloud computing.
- [ ] I understand the difference between IaaS, PaaS, SaaS.
- [ ] I know the difference between a Region, AZ, and Edge Location.
- [ ] I can describe the Shared Responsibility Model.
- [ ] I understand IAM: Users, Groups, Roles, Policies, and Least Privilege.
- [ ] I know the primary use cases for EC2, Lambda, S3, RDS, DynamoDB, VPC, Route 53, CloudFront.
- [ ] I can differentiate between Security Groups and NACLs.
- [ ] I know what AWS Shield, WAF, GuardDuty, and Inspector do.
- [ ] I understand the pricing models: On‑Demand, RI, Spot, Savings Plans.
- [ ] I can use AWS Pricing Calculator and Cost Explorer.
- [ ] I know the features of each AWS Support Plan.
- [ ] I have completed at least 3 full practice exams scoring > 75%.
- [ ] I have reviewed all incorrect answers and filled knowledge gaps.
- [ ] I am familiar with the AWS Free Tier limitations.
- [ ] I have read the AWS Well‑Architected Framework – Security Pillar.

---

## 🚀 Final Words

The Cloud Practitioner exam is the perfect starting point. It validates your foundational knowledge and opens the door to more advanced certifications (Solutions Architect, Developer, SysOps). Follow this roadmap, stay consistent, and you'll pass with confidence.

**Best of luck!** 🎉

---

*Happy cloud learning! ☁️*