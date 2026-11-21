# ☁️ AWS EC2 – Elastic Compute Cloud

> **A Complete Guide to EC2, from Your First Instance to Production-Ready Architecture**

---

## 📚 Table of Contents

1. [What is EC2?](#-what-is-ec2)
2. [Core Concepts](#-core-concepts)
3. [Instance Types](#-instance-types)
4. [AMI – Amazon Machine Image](#-ami--amazon-machine-image)
5. [Pricing Models](#-pricing-models)
6. [Instance Lifecycle](#-instance-lifecycle)
7. [Storage – EBS, Instance Store, EFS](#-storage--ebs-instance-store-efs)
8. [Networking – VPC, Subnets, IPs, ENI](#-networking--vpc-subnets-ips-eni)
9. [Security Groups & Key Pairs](#-security-groups--key-pairs)
10. [Hands-On: Launch Your First EC2 Instance](#-hands-on-launch-your-first-ec2-instance)
11. [Connecting to EC2](#-connecting-to-ec2)
12. [User Data & Instance Metadata](#-user-data--instance-metadata)
13. [IAM Roles for EC2](#-iam-roles-for-ec2)
14. [Placement Groups](#-placement-groups)
15. [Load Balancers (ELB)](#-load-balancers-elb)
16. [Auto Scaling Groups (ASG)](#-auto-scaling-groups-asg)
17. [Monitoring with CloudWatch](#-monitoring-with-cloudwatch)
18. [EC2 with AWS CLI](#-ec2-with-aws-cli)
19. [EC2 with Terraform](#-ec2-with-terraform)
20. [Hands-On Projects](#-hands-on-projects)
21. [Best Practices](#-best-practices)
22. [Troubleshooting](#-troubleshooting)
23. [Interview Questions](#-interview-questions)
24. [Cheat Sheet](#-cheat-sheet)

---

## 🤔 What is EC2?

**Amazon EC2 (Elastic Compute Cloud)** is an AWS service that gives you **resizable virtual servers (instances)** in the cloud. Instead of buying physical hardware, you rent compute capacity and pay only for what you use.

### 🏠 Real-World Analogy

| Traditional Server | EC2 |
|--------------------|-----|
| Buy a physical machine | Launch an instance in minutes |
| Pay upfront, even if idle | Pay per second / hour |
| Upgrading = buy new hardware | Change instance type with a stop/start |
| You manage power, cooling, racks | AWS manages the physical layer |

### ✅ Why EC2?

- **Elastic** – scale up or down on demand
- **Flexible** – choose OS, CPU, memory, storage, networking
- **Cost-effective** – multiple pricing models (On-Demand, Spot, Reserved, Savings Plans)
- **Secure** – runs inside your own VPC with firewalls (Security Groups)
- **Integrated** – works with ELB, Auto Scaling, CloudWatch, IAM, S3, RDS and more

### 🧩 Where EC2 Fits (Service Models)

| Model | Example | You Manage |
|-------|---------|------------|
| **IaaS** | **EC2** | OS, runtime, app, data |
| **PaaS** | Elastic Beanstalk | App, data |
| **Serverless** | Lambda | Only code |
| **SaaS** | Gmail | Nothing |

> EC2 is **IaaS** – AWS manages hardware and virtualization; **you** manage everything from the OS upward.

---

## 📋 Core Concepts

| Term | Description |
|------|-------------|
| **Instance** | A virtual server running in AWS |
| **AMI** | Template (OS + software) used to launch an instance |
| **Instance Type** | Hardware profile: vCPU, memory, network, storage |
| **EBS Volume** | Network-attached block storage (like a hard disk) |
| **Security Group** | Virtual stateful firewall for instances |
| **Key Pair** | Public/private key used for SSH login |
| **Region** | Geographic area (e.g. `ap-south-1` Mumbai, `us-east-1` N. Virginia) |
| **Availability Zone (AZ)** | Isolated data center(s) inside a region (e.g. `ap-south-1a`) |
| **VPC** | Your private, isolated network in AWS |
| **Elastic IP** | Static public IPv4 address you can attach/detach |
| **User Data** | Script that runs at first boot |
| **Tags** | Key-value labels for organizing and billing (e.g. `Env=dev`) |

### 🗺️ Shared Responsibility Model

| AWS is Responsible For | You are Responsible For |
|------------------------|--------------------------|
| Physical data centers & hardware | OS patches & updates |
| Hypervisor & virtualization | Security Group rules |
| Global network infrastructure | IAM users, roles, keys |
| | Application code & data encryption |

---

## 🖥️ Instance Types

Instance type names follow a pattern:

```
  m  7  g  .  2xlarge
  │  │  │      └── Size (nano, micro, small, medium, large, xlarge, 2xlarge ... metal)
  │  │  └───────── Extra attributes (g = Graviton/ARM, a = AMD, i = Intel, d = local NVMe, n = network optimized)
  │  └──────────── Generation (higher = newer, cheaper per performance)
  └─────────────── Family (what it's optimized for)
```

### 📊 Instance Families

| Family | Optimized For | Examples | Use Cases |
|--------|---------------|----------|-----------|
| **General Purpose** | Balanced CPU/memory | `t3`, `t4g`, `m6i`, `m7g` | Web servers, dev/test, small DBs |
| **Compute Optimized** | High CPU | `c6i`, `c7g` | Batch processing, gaming servers, ML inference, HPC |
| **Memory Optimized** | High RAM | `r6i`, `r7g`, `x2idn` | In-memory DBs (Redis), big data, SAP HANA |
| **Storage Optimized** | High disk I/O | `i4i`, `d3`, `im4gn` | NoSQL DBs, data warehousing, Elasticsearch |
| **Accelerated Computing** | GPUs / custom chips | `p5`, `g5`, `inf2`, `trn1` | ML training, video rendering, inference |
| **HPC Optimized** | Tightly coupled HPC | `hpc7g` | Scientific simulations |

### ⚡ Burstable Instances (T-family)

`t2`, `t3`, `t3a`, `t4g` instances earn **CPU credits** when idle and spend them during spikes.

| Mode | Behavior |
|------|----------|
| **Standard** | When credits run out, CPU is throttled to baseline |
| **Unlimited** | Can burst beyond credits; you pay extra for surplus usage |

> 💡 `t2.micro` / `t3.micro` are **Free Tier eligible** (750 hrs/month for 12 months on older accounts; check current Free Tier terms for new accounts).

---

## 💿 AMI – Amazon Machine Image

An **AMI** is a template containing the OS, application server and applications needed to launch an instance.

### Types of AMIs

| Type | Description |
|------|-------------|
| **AWS-provided** | Amazon Linux 2023, Ubuntu, Windows, RHEL, etc. |
| **AWS Marketplace** | Pre-configured by vendors (may have license costs) |
| **Community AMIs** | Shared publicly by users – use with caution |
| **Custom (your own)** | Created from your configured instance – "golden image" |

### 🔧 Create a Custom AMI

```bash
aws ec2 create-image \
  --instance-id i-0123456789abcdef0 \
  --name "my-webserver-v1" \
  --description "Nginx + app preinstalled" \
  --no-reboot
```

### Key Points

- AMIs are **region-specific** – copy them to use in another region (`aws ec2 copy-image`)
- Backed by **EBS snapshots** (EBS-backed) or S3 (instance store-backed)
- Use custom AMIs to make Auto Scaling launches faster (no long install scripts)
- Tools like **Packer** automate AMI creation

---

## 💰 Pricing Models

| Model | Discount vs On-Demand | Commitment | Best For |
|-------|----------------------|------------|----------|
| **On-Demand** | 0% | None | Short-term, unpredictable workloads, learning |
| **Reserved Instances (RI)** | Up to ~72% | 1 or 3 years | Steady-state workloads (databases) |
| **Savings Plans** | Up to ~72% | $/hour for 1 or 3 years | Flexible across instance families/regions |
| **Spot Instances** | Up to ~90% | None (can be interrupted with 2-min notice) | Batch jobs, CI runners, fault-tolerant workloads |
| **Dedicated Hosts** | – | Optional | BYOL licensing, compliance (whole physical server) |
| **Dedicated Instances** | – | None | Hardware isolation from other customers |
| **Capacity Reservations** | 0% | None | Guarantee capacity in a specific AZ |

### 🏨 Hotel Analogy

| Model | Hotel Equivalent |
|-------|------------------|
| On-Demand | Walk in, pay full price per night |
| Reserved | Book a room for a full year at a discount |
| Savings Plan | Commit to spending $X/night at any hotel in the chain |
| Spot | Bid on empty rooms – cheap, but you can be kicked out |
| Dedicated Host | Rent the entire building |

> 💡 **Billing:** Linux/Windows instances are billed **per second** (60-second minimum). You pay for EBS volumes even when an instance is stopped.

---

## 🔄 Instance Lifecycle

```
             launch
               │
               ▼
          ┌─────────┐
          │ pending │
          └────┬────┘
               ▼
          ┌─────────┐   reboot    ┌───────────┐
          │ running │ ──────────► │ rebooting │
          └────┬────┘ ◄────────── └───────────┘
       stop    │    terminate
   ┌───────────┴──────────────┐
   ▼                          ▼
┌──────────┐            ┌───────────────┐
│ stopping │            │ shutting-down │
└────┬─────┘            └───────┬───────┘
     ▼                          ▼
┌─────────┐  terminate   ┌────────────┐
│ stopped │ ───────────► │ terminated │
└────┬────┘              └────────────┘
     │ start
     └──────► pending
```

| Action | Data on EBS root | Public IP | Billing (compute) |
|--------|------------------|-----------|-------------------|
| **Reboot** | Kept | Kept | Continues |
| **Stop** | Kept | **Changes** (unless Elastic IP) | Stops |
| **Hibernate** | Kept + RAM saved to EBS | Changes | Stops |
| **Terminate** | Deleted (by default) | Released | Stops |

> ⚠️ Enable **Termination Protection** on important instances to prevent accidental deletion.

---

## 💾 Storage – EBS, Instance Store, EFS

### 📦 Comparison

| Feature | EBS | Instance Store | EFS |
|---------|-----|----------------|-----|
| Type | Network block storage | Physical disk on host | Network file system (NFS) |
| Persistence | ✅ Survives stop/start | ❌ Lost on stop/terminate | ✅ Persistent |
| Attach to multiple instances | ❌ (except io1/io2 Multi-Attach) | ❌ | ✅ Thousands |
| Scope | Single AZ | Single host | Multi-AZ (regional) |
| Performance | Good to very high | Highest (local NVMe) | Scales with usage |
| Use Case | Root disks, databases | Cache, temp data, buffers | Shared content, home dirs |

### 💽 EBS Volume Types

| Type | Category | Max IOPS | Use Case |
|------|----------|----------|----------|
| **gp3** | General Purpose SSD | 16,000 | Default choice – boot volumes, most apps |
| **gp2** | General Purpose SSD (older) | 16,000 | Legacy – prefer gp3 (cheaper, IOPS independent of size) |
| **io2 Block Express** | Provisioned IOPS SSD | 256,000 | Critical DBs needing consistent latency |
| **io1** | Provisioned IOPS SSD | 64,000 | High-performance DBs |
| **st1** | Throughput Optimized HDD | 500 | Big data, log processing |
| **sc1** | Cold HDD | 250 | Infrequently accessed data, lowest cost |

> Only SSD types (gp2/gp3/io1/io2) can be **boot volumes**.

### 📸 EBS Snapshots

- Point-in-time **incremental backups** stored in S3 (managed by AWS)
- Can copy snapshots across regions → disaster recovery
- Use **Amazon Data Lifecycle Manager** to automate snapshot schedules
- **Recycle Bin** protects snapshots from accidental deletion

```bash
# Create a snapshot
aws ec2 create-snapshot --volume-id vol-0abc123 --description "Daily backup"

# Create a volume from a snapshot
aws ec2 create-volume --snapshot-id snap-0abc123 --availability-zone ap-south-1a --volume-type gp3
```

### 🔧 Attach & Mount a New EBS Volume (Linux)

```bash
lsblk                                 # find the new device, e.g. /dev/nvme1n1
sudo file -s /dev/nvme1n1             # "data" means no filesystem yet
sudo mkfs -t xfs /dev/nvme1n1         # create filesystem (ONLY on new empty volumes!)
sudo mkdir /data
sudo mount /dev/nvme1n1 /data
df -h

# Persist across reboots
sudo blkid /dev/nvme1n1               # copy the UUID
echo 'UUID=<your-uuid>  /data  xfs  defaults,nofail  0  2' | sudo tee -a /etc/fstab
sudo mount -a                         # test fstab – no errors = good
```

### 📈 Resize an EBS Volume (No Downtime)

```bash
# 1. Increase size in console or CLI
aws ec2 modify-volume --volume-id vol-0abc123 --size 50

# 2. On the instance, grow the partition and filesystem
sudo growpart /dev/nvme0n1 1
sudo xfs_growfs -d /          # for XFS
# sudo resize2fs /dev/nvme0n1p1   # for ext4
```

### 🔐 Encryption

- EBS encryption uses **AWS KMS** keys
- Encrypts data at rest, in transit between instance and volume, and all snapshots
- Turn on **"EBS encryption by default"** per region in EC2 settings

---

## 🌐 Networking – VPC, Subnets, IPs, ENI

### 🏗️ Basic Architecture

```
┌──────────────────────────── Region: ap-south-1 ────────────────────────────┐
│ ┌────────────────────────────── VPC 10.0.0.0/16 ─────────────────────────┐ │
│ │                                                                         │ │
│ │  ┌──── AZ: ap-south-1a ────┐        ┌──── AZ: ap-south-1b ────┐        │ │
│ │  │ Public Subnet 10.0.1.0/24│        │ Public Subnet 10.0.2.0/24│        │ │
│ │  │   [EC2 Web] [NAT GW]     │        │   [EC2 Web]              │        │ │
│ │  ├──────────────────────────┤        ├──────────────────────────┤        │ │
│ │  │ Private Subnet 10.0.11.0 │        │ Private Subnet 10.0.12.0 │        │ │
│ │  │   [EC2 App] [RDS]        │        │   [EC2 App] [RDS standby]│        │ │
│ │  └──────────────────────────┘        └──────────────────────────┘        │ │
│ │                         ▲                                                │ │
│ └─────────────────────────┼────────────────────────────────────────────────┘ │
│                   Internet Gateway                                           │
└──────────────────────────────────────────────────────────────────────────────┘
```

| Component | Purpose |
|-----------|---------|
| **VPC** | Isolated virtual network with your own CIDR range |
| **Subnet** | Slice of the VPC in one AZ – **public** (route to IGW) or **private** |
| **Internet Gateway (IGW)** | Allows public subnets to reach the internet |
| **NAT Gateway** | Lets private instances reach the internet (outbound only) |
| **Route Table** | Rules deciding where network traffic goes |
| **NACL** | Stateless firewall at the subnet level |

### 🔢 IP Addresses

| Type | Description |
|------|-------------|
| **Private IP** | Assigned from subnet CIDR; stays for instance lifetime |
| **Public IP** | Auto-assigned; **changes on stop/start** |
| **Elastic IP** | Static public IPv4; charged hourly (AWS charges for all public IPv4 addresses) |
| **IPv6** | Globally unique, free, optional |

### 🔌 ENI – Elastic Network Interface

- A virtual network card attached to an instance
- Holds private IPs, Elastic IP, MAC address, Security Groups
- Can be **detached and moved** to another instance in the same AZ (useful for failover)

### 🚀 Enhanced Networking

| Feature | Description |
|---------|-------------|
| **ENA** (Elastic Network Adapter) | Up to 100+ Gbps, low latency – enabled on modern instances |
| **EFA** (Elastic Fabric Adapter) | For HPC / ML with OS-bypass networking |

---

## 🔒 Security Groups & Key Pairs

### 🛡️ Security Groups (SG)

A **Security Group** is a **stateful** virtual firewall attached to an ENI.

- **Only ALLOW rules** – everything not allowed is denied
- **Stateful** – if inbound is allowed, response traffic is automatically allowed out
- Default: all **inbound denied**, all **outbound allowed**
- Can reference **other Security Groups** as a source (e.g. "allow DB traffic only from App SG")

#### Example Rules for a Web Server

| Type | Protocol | Port | Source | Purpose |
|------|----------|------|--------|---------|
| SSH | TCP | 22 | `My IP/32` | Admin access (never `0.0.0.0/0`!) |
| HTTP | TCP | 80 | `0.0.0.0/0` | Web traffic |
| HTTPS | TCP | 443 | `0.0.0.0/0` | Secure web traffic |
| Custom | TCP | 3000 | `sg-alb-xxxx` | App port only from Load Balancer |

### ⚖️ Security Group vs NACL

| Feature | Security Group | Network ACL |
|---------|----------------|-------------|
| Level | Instance (ENI) | Subnet |
| State | **Stateful** | **Stateless** (must allow return traffic) |
| Rules | Allow only | Allow **and** Deny |
| Evaluation | All rules evaluated | Rules processed in number order |
| Default | Deny all inbound | Default NACL allows all |

### 🔑 Common Ports to Remember

| Port | Service |
|------|---------|
| 22 | SSH (Linux) |
| 3389 | RDP (Windows) |
| 80 / 443 | HTTP / HTTPS |
| 3306 | MySQL / MariaDB / Aurora |
| 5432 | PostgreSQL |
| 1433 | MS SQL Server |
| 6379 | Redis |
| 27017 | MongoDB |
| 2049 | NFS (EFS) |

### 🗝️ Key Pairs

- AWS stores the **public key**; you download the **private key** (`.pem` / `.ppk`) **only once**
- Types: **RSA** or **ED25519**
- Lost the key? You can't download it again – use EC2 Instance Connect / SSM, or detach the root volume and add a new key

```bash
chmod 400 my-key.pem       # required – SSH refuses keys with open permissions
```

---

## 🛠️ Hands-On: Launch Your First EC2 Instance

### Step-by-Step (AWS Console)

1. **Login** to AWS Console → search **EC2** → click **Launch instance**
2. **Name and tags:** `my-first-server`
3. **AMI:** Amazon Linux 2023 or Ubuntu 24.04 LTS (Free Tier eligible)
4. **Instance type:** `t2.micro` or `t3.micro`
5. **Key pair:** Create new → name `devops-key` → type RSA → format `.pem` → download
6. **Network settings:**
   - VPC: default
   - Auto-assign public IP: **Enable**
   - Security group: create new → allow **SSH from My IP**, **HTTP from Anywhere**
7. **Storage:** 8 GiB gp3 (Free Tier allows up to 30 GiB)
8. **Advanced details → User data** (optional – installs Nginx on boot):

   ```bash
   #!/bin/bash
   dnf update -y
   dnf install -y nginx
   systemctl enable --now nginx
   echo "<h1>Hello from $(hostname -f)</h1>" > /usr/share/nginx/html/index.html
   ```

9. Click **Launch instance** → wait until **Instance state = Running** and **Status checks = 2/2 passed**
10. Copy the **Public IPv4 address** and open `http://<public-ip>` in your browser 🎉

> ⚠️ **Always terminate or stop** practice instances when done to avoid charges. Also delete unused EBS volumes, snapshots and Elastic IPs.

---

## 🔗 Connecting to EC2

### 1️⃣ SSH (Linux / macOS / WSL)

```bash
chmod 400 devops-key.pem
ssh -i devops-key.pem ec2-user@<public-ip>      # Amazon Linux
ssh -i devops-key.pem ubuntu@<public-ip>        # Ubuntu
```

### 👤 Default Usernames by AMI

| AMI | Username |
|-----|----------|
| Amazon Linux | `ec2-user` |
| Ubuntu | `ubuntu` |
| Debian | `admin` |
| RHEL | `ec2-user` |
| CentOS | `centos` / `ec2-user` |
| SUSE | `ec2-user` |
| Fedora | `fedora` |

### 2️⃣ SSH Config Shortcut (`~/.ssh/config`)

```
Host devops-ec2
    HostName <public-ip>
    User ec2-user
    IdentityFile ~/keys/devops-key.pem
```

Now connect with just: `ssh devops-ec2`

### 3️⃣ Copy Files with SCP

```bash
scp -i devops-key.pem app.zip ec2-user@<public-ip>:/home/ec2-user/      # upload
scp -i devops-key.pem ec2-user@<public-ip>:/var/log/app.log .            # download
```

### 4️⃣ EC2 Instance Connect

Browser-based SSH from the console – no key needed locally. Works on Amazon Linux & Ubuntu; requires port 22 open to the EC2 Instance Connect IP range (or use an **EC2 Instance Connect Endpoint** for private instances).

### 5️⃣ AWS Systems Manager (SSM) Session Manager ⭐ Recommended

- **No port 22, no SSH keys, no bastion host** needed
- Access is controlled by IAM and every session can be logged
- Requirements: SSM Agent (preinstalled on Amazon Linux/Ubuntu AMIs) + IAM role with `AmazonSSMManagedInstanceCore`

```bash
aws ssm start-session --target i-0123456789abcdef0
```

### 6️⃣ Windows Instances (RDP)

1. Select instance → **Connect** → **RDP client**
2. **Get password** → upload your `.pem` key to decrypt the Administrator password
3. Open the downloaded `.rdp` file and log in (port **3389** must be allowed)

### 7️⃣ Bastion Host (Jump Server)

Used to reach instances in **private subnets**:

```bash
ssh -J ec2-user@<bastion-public-ip> ec2-user@<private-ip>
```

> 💡 SSM Session Manager is the modern replacement for bastion hosts.

---

## 📜 User Data & Instance Metadata

### 🚀 User Data

- Script passed at launch; runs **once at first boot** as **root**
- Max size: **16 KB**
- Logs: `/var/log/cloud-init-output.log`

```bash
#!/bin/bash
# Install Docker on Amazon Linux 2023
dnf update -y
dnf install -y docker git
systemctl enable --now docker
usermod -aG docker ec2-user
```

```bash
#!/bin/bash
# Install Nginx on Ubuntu
apt-get update -y
apt-get install -y nginx
systemctl enable --now nginx
```

### 🔍 Instance Metadata Service (IMDS)

Lets an instance learn about itself from `http://169.254.169.254`.

**IMDSv2** (token-based, more secure – always prefer this):

```bash
TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/instance-id
curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4
curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/placement/availability-zone
curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/iam/security-credentials/
curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/user-data
```

> 🔐 Set **IMDSv2 = Required** on all instances – it protects against SSRF attacks that steal IAM credentials.

---

## 👮 IAM Roles for EC2

**Never store AWS access keys on an EC2 instance.** Attach an **IAM Role** (via an **Instance Profile**) instead – AWS provides temporary, auto-rotating credentials.

### Example: Allow EC2 to Read from S3

1. IAM → **Roles** → Create role → Trusted entity: **AWS service → EC2**
2. Attach policy `AmazonS3ReadOnlyAccess` (or a custom least-privilege policy)
3. EC2 → select instance → **Actions → Security → Modify IAM role** → attach it
4. Test from the instance:

```bash
aws s3 ls          # works without 'aws configure'!
```

### Least-Privilege Custom Policy Example

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::my-app-bucket",
        "arn:aws:s3:::my-app-bucket/*"
      ]
    }
  ]
}
```

---

## 📍 Placement Groups

Control how instances are placed on underlying hardware.

| Strategy | Description | Pros | Cons | Use Case |
|----------|-------------|------|------|----------|
| **Cluster** | All instances close together in one AZ | Lowest latency, 10–100 Gbps | Single point of failure (one rack) | HPC, big data jobs |
| **Spread** | Each instance on distinct hardware | Max availability; up to 7 instances per AZ | Size limit | Critical small apps |
| **Partition** | Instances grouped into partitions (separate racks) | Up to 7 partitions/AZ, hundreds of instances | – | Hadoop, Cassandra, Kafka |

---

## ⚖️ Load Balancers (ELB)

**Elastic Load Balancing** distributes incoming traffic across multiple EC2 instances in multiple AZs.

| Type | OSI Layer | Protocols | Best For |
|------|-----------|-----------|----------|
| **ALB** – Application LB | 7 | HTTP, HTTPS, gRPC, WebSocket | Web apps, microservices, path/host-based routing |
| **NLB** – Network LB | 4 | TCP, UDP, TLS | Ultra-low latency, millions of req/sec, static IP |
| **GWLB** – Gateway LB | 3 | GENEVE | Third-party firewalls / inspection appliances |
| **CLB** – Classic LB | 4 & 7 | – | Legacy – don't use for new projects |

### 🔑 Key Concepts

| Term | Meaning |
|------|---------|
| **Listener** | Port/protocol the LB listens on (e.g. HTTPS:443) |
| **Target Group** | Set of instances/IPs/Lambdas receiving traffic |
| **Health Check** | LB pings targets (e.g. `/health`) and stops routing to unhealthy ones |
| **Sticky Sessions** | Send the same user to the same instance (cookie-based) |
| **Cross-Zone LB** | Spread traffic evenly across all AZs |
| **SSL Termination** | LB handles HTTPS using a certificate from **ACM** |
| **Connection Draining** | Finish in-flight requests before removing an instance |

### 🏗️ Typical Architecture

```
            Users
              │
         ┌────▼────┐
         │   ALB   │   (public subnets, SG: 80/443 from 0.0.0.0/0)
         └────┬────┘
      ┌───────┴────────┐
 ┌────▼────┐      ┌────▼────┐
 │ EC2 (a) │      │ EC2 (b) │   (private subnets, SG: app port from ALB SG only)
 └─────────┘      └─────────┘
      └──── Auto Scaling Group ────┘
```

---

## 📈 Auto Scaling Groups (ASG)

An **ASG** automatically adds or removes EC2 instances based on demand and replaces unhealthy instances.

### Core Settings

| Setting | Description |
|---------|-------------|
| **Launch Template** | Defines AMI, instance type, SG, key, user data, IAM role |
| **Min capacity** | Never go below this many instances |
| **Desired capacity** | Number of instances ASG tries to maintain |
| **Max capacity** | Never go above this |
| **Health check type** | `EC2` (instance status) or `ELB` (app health check) |

### 📊 Scaling Policies

| Policy | How it Works | Example |
|--------|--------------|---------|
| **Target Tracking** ⭐ | Keep a metric at a target value | Keep average CPU at 50% |
| **Step Scaling** | Scale by different amounts based on alarm breach size | CPU > 70% → +1, CPU > 90% → +3 |
| **Simple Scaling** | One adjustment per alarm, then cooldown | CPU > 80% → +1 |
| **Scheduled** | Scale at known times | Scale to 10 at 9 AM on weekdays |
| **Predictive** | ML forecasts load and scales ahead of time | Daily traffic patterns |

### 🔁 Other Features

- **Cooldown / Warmup** – wait time before further scaling actions
- **Instance Refresh** – rolling replacement of instances with a new launch template version
- **Lifecycle Hooks** – run custom actions when instances launch or terminate
- **Mixed Instances Policy** – combine On-Demand + Spot across multiple instance types
- **Warm Pools** – keep pre-initialized instances ready for fast scale-out

### Launch Template vs Launch Configuration

| Launch Template ✅ | Launch Configuration ❌ |
|--------------------|-------------------------|
| Versioned | Immutable, no versions |
| Supports Spot + On-Demand mix | Limited |
| Supports latest features | Deprecated |

---

## 📊 Monitoring with CloudWatch

### Default EC2 Metrics

| Metric | Description |
|--------|-------------|
| `CPUUtilization` | % of CPU used |
| `NetworkIn` / `NetworkOut` | Bytes in/out |
| `DiskReadOps` / `DiskWriteOps` | Instance store I/O |
| `StatusCheckFailed_System` | AWS hardware/host problem |
| `StatusCheckFailed_Instance` | OS-level problem (your side) |
| `CPUCreditBalance` | Remaining credits (T-family) |

> ❗ **Memory and disk usage are NOT collected by default** – install the **CloudWatch Agent** to collect them along with application logs.

| Monitoring | Interval | Cost |
|------------|----------|------|
| Basic | 5 minutes | Free |
| Detailed | 1 minute | Paid |

### Status Checks

| Check | Meaning | Fix |
|-------|---------|-----|
| **System status check** | Problem with AWS host | Stop & start (moves to new host) |
| **Instance status check** | Problem inside your instance (OS, network config) | Reboot, fix config |
| **Attached EBS status check** | EBS volume unreachable/impaired | Check volume, restore from snapshot |

### 🚨 Example: CPU Alarm via CLI

```bash
aws cloudwatch put-metric-alarm \
  --alarm-name high-cpu-web \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --statistic Average \
  --period 300 \
  --threshold 80 \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 2 \
  --dimensions Name=InstanceId,Value=i-0123456789abcdef0 \
  --alarm-actions arn:aws:sns:ap-south-1:123456789012:alerts
```

> 💡 CloudWatch alarms can also **auto-recover**, **reboot**, **stop** or **terminate** an instance.

---

## 💻 EC2 with AWS CLI

### Setup

```bash
aws configure          # Access Key, Secret Key, Region (e.g. ap-south-1), Output (json)
aws sts get-caller-identity
```

### Common Commands

```bash
# Create key pair
aws ec2 create-key-pair --key-name devops-key --query 'KeyMaterial' --output text > devops-key.pem
chmod 400 devops-key.pem

# Create security group & rules
aws ec2 create-security-group --group-name web-sg --description "Web SG" --vpc-id vpc-0abc123
aws ec2 authorize-security-group-ingress --group-id sg-0abc123 --protocol tcp --port 22 --cidr $(curl -s https://checkip.amazonaws.com)/32
aws ec2 authorize-security-group-ingress --group-id sg-0abc123 --protocol tcp --port 80 --cidr 0.0.0.0/0

# Find latest Amazon Linux 2023 AMI (via public SSM parameter)
aws ssm get-parameters \
  --names /aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64 \
  --query 'Parameters[0].Value' --output text

# Launch an instance
aws ec2 run-instances \
  --image-id ami-0abc123 \
  --instance-type t3.micro \
  --key-name devops-key \
  --security-group-ids sg-0abc123 \
  --subnet-id subnet-0abc123 \
  --user-data file://userdata.sh \
  --metadata-options HttpTokens=required \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=cli-server}]'

# List instances (nice table)
aws ec2 describe-instances \
  --query 'Reservations[].Instances[].[InstanceId,State.Name,InstanceType,PublicIpAddress,Tags[?Key==`Name`]|[0].Value]' \
  --output table

# Filter running instances
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"

# Start / Stop / Reboot / Terminate
aws ec2 start-instances     --instance-ids i-0123456789abcdef0
aws ec2 stop-instances      --instance-ids i-0123456789abcdef0
aws ec2 reboot-instances    --instance-ids i-0123456789abcdef0
aws ec2 terminate-instances --instance-ids i-0123456789abcdef0

# Wait until running
aws ec2 wait instance-running --instance-ids i-0123456789abcdef0

# Change instance type (instance must be stopped)
aws ec2 modify-instance-attribute --instance-id i-0123456789abcdef0 --instance-type "{\"Value\": \"t3.small\"}"

# Elastic IP
aws ec2 allocate-address
aws ec2 associate-address --instance-id i-0123456789abcdef0 --allocation-id eipalloc-0abc123
aws ec2 release-address --allocation-id eipalloc-0abc123

# Get console output (debug boot issues)
aws ec2 get-console-output --instance-id i-0123456789abcdef0 --output text
```

---

## 🏗️ EC2 with Terraform

Infrastructure as Code – the DevOps way to create EC2.

### `main.tf`

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  default = "ap-south-1"
}

variable "my_ip" {
  description = "Your public IP in CIDR form, e.g. 1.2.3.4/32"
  type        = string
}

data "aws_ami" "al2023" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

resource "aws_security_group" "web_sg" {
  name        = "web-sg"
  description = "Allow SSH and HTTP"

  ingress {
    description = "SSH from my IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.my_ip]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami                    = data.aws_ami.al2023.id
  instance_type          = "t3.micro"
  key_name               = "devops-key"
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  user_data = <<-EOF
    #!/bin/bash
    dnf install -y nginx
    systemctl enable --now nginx
  EOF

  metadata_options {
    http_tokens = "required"   # enforce IMDSv2
  }

  root_block_device {
    volume_size = 8
    volume_type = "gp3"
    encrypted   = true
  }

  tags = {
    Name = "terraform-web"
    Env  = "dev"
  }
}

output "public_ip" {
  value = aws_instance.web.public_ip
}
```

### Run It

```bash
terraform init
terraform plan -var="my_ip=$(curl -s https://checkip.amazonaws.com)/32"
terraform apply -var="my_ip=$(curl -s https://checkip.amazonaws.com)/32"
terraform destroy      # clean up when done!
```

---

## 🧪 Hands-On Projects

| # | Project | Skills Practiced |
|---|---------|------------------|
| 1 | **Static website on Nginx** – launch EC2, install Nginx via user data, serve an HTML page | EC2 basics, SG, user data |
| 2 | **Deploy a Node.js app with Docker** – install Docker, run the app from [Week_04_Docker](../../Week_04_Docker/) | Docker on EC2, ports, SG |
| 3 | **Attach & mount EBS** – add a 10 GiB volume, format, mount, persist in `/etc/fstab`, snapshot it | EBS, snapshots, Linux |
| 4 | **EC2 + S3 via IAM Role** – upload files to S3 from EC2 without access keys | IAM roles, instance profile |
| 5 | **Highly available web app** – Launch Template + ASG (2–4 instances) + ALB across 2 AZs, test by terminating an instance | ALB, ASG, health checks |
| 6 | **Custom AMI pipeline** – configure an instance, create an AMI, launch ASG from it | AMI, golden images |
| 7 | **CPU alarm & auto scaling** – stress CPU with `stress-ng`, watch ASG scale out, get SNS email | CloudWatch, SNS, scaling policies |
| 8 | **Private instance via SSM** – instance in a private subnet with no SSH, access via Session Manager | VPC, SSM, security |
| 9 | **Terraform EC2 stack** – recreate project 5 entirely in Terraform | IaC |
| 10 | **Jenkins/GitHub Actions runner on Spot** – self-hosted CI runner on a Spot instance | Spot, CI/CD, cost savings |

---

## ✅ Best Practices

### 🔐 Security
- Never open SSH (22) / RDP (3389) to `0.0.0.0/0` – restrict to your IP or use **SSM Session Manager**
- Use **IAM Roles**, never hardcode access keys on instances
- Enforce **IMDSv2**
- Encrypt EBS volumes and snapshots (enable encryption by default)
- Keep application/database servers in **private subnets**
- Patch regularly – **SSM Patch Manager** automates this
- Follow **least privilege** for Security Groups and IAM policies

### 💸 Cost Optimization
- **Right-size** instances using **AWS Compute Optimizer**
- Use **Spot** for fault-tolerant workloads, **Savings Plans** for steady usage
- Prefer **Graviton (ARM)** instances (`t4g`, `m7g`, `c7g`) – up to ~40% better price/performance
- Migrate **gp2 → gp3** volumes
- Stop dev/test instances outside working hours (Instance Scheduler / Lambda)
- Delete unattached EBS volumes, old snapshots, unused Elastic IPs
- Set up **AWS Budgets** alerts

### 🏛️ Reliability
- Spread instances across **multiple AZs**
- Use **ASG + ELB** instead of single instances
- Treat servers as **cattle, not pets** – rebuild from AMI/IaC instead of hand-fixing
- Automate backups with **Data Lifecycle Manager** or **AWS Backup**
- Enable **termination protection** on critical instances

### 🏷️ Operations
- Tag everything: `Name`, `Env`, `Owner`, `Project`, `CostCenter`
- Manage infrastructure with **Terraform / CloudFormation**, not console clicks
- Ship logs and metrics with the **CloudWatch Agent**

---

## 🩺 Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| `Connection timed out` on SSH | SG doesn't allow port 22 from your IP; no public IP; subnet has no IGW route; NACL blocking | Check SG inbound, public IP, route table, NACL |
| `Permission denied (publickey)` | Wrong username, wrong key, or key permissions | Use correct user (`ec2-user`/`ubuntu`), `chmod 400 key.pem`, verify key pair |
| `UNPROTECTED PRIVATE KEY FILE` | Key file permissions too open | `chmod 400 key.pem` |
| Website not loading | SG missing port 80/443; service not running; app listening on `127.0.0.1` | Open port, `systemctl status nginx`, bind to `0.0.0.0` |
| Public IP changed | Instance was stopped/started | Use an **Elastic IP** or a DNS name / Load Balancer |
| Instance stuck at `pending` / failing status checks | Capacity issue, bad AMI, kernel/fstab error | Check `get-console-output`, stop/start, fix fstab via rescue instance |
| `InsufficientInstanceCapacity` | AZ out of that type | Try another AZ or instance type |
| `InstanceLimitExceeded` / vCPU limit | Account quota reached | Request increase in **Service Quotas** |
| User data didn't run | Missing `#!/bin/bash`, script error | Check `/var/log/cloud-init-output.log` |
| Disk full | Logs or Docker images filling root volume | `df -h`, `du -sh /*`, clean up, or resize EBS |
| T-instance very slow | CPU credits exhausted | Check `CPUCreditBalance`, enable Unlimited or move to a bigger/non-burstable type |
| `aws` CLI on EC2: Unable to locate credentials | No IAM role attached | Attach an IAM role / instance profile |

---

## 🎤 Interview Questions

<details>
<summary><b>1. What is EC2 and what service model does it belong to?</b></summary>

EC2 provides resizable virtual servers in the cloud. It is **IaaS** – AWS manages the hardware and hypervisor; you manage the OS and everything above.
</details>

<details>
<summary><b>2. Difference between stopping and terminating an instance?</b></summary>

**Stop:** instance shuts down, EBS root volume is kept, compute billing stops, public IP is released. **Terminate:** instance is deleted permanently and the root EBS volume is deleted by default (`DeleteOnTermination=true`).
</details>

<details>
<summary><b>3. Security Group vs NACL?</b></summary>

SG is stateful, instance-level, allow-only rules. NACL is stateless, subnet-level, supports allow and deny rules evaluated in numeric order.
</details>

<details>
<summary><b>4. EBS vs Instance Store?</b></summary>

EBS is persistent network storage that survives stop/start and supports snapshots. Instance Store is physical disk on the host – very fast, but data is lost when the instance stops or terminates.
</details>

<details>
<summary><b>5. How do you give an EC2 instance access to S3 securely?</b></summary>

Attach an **IAM Role** through an instance profile. The instance gets temporary credentials via the metadata service – no access keys are stored on disk.
</details>

<details>
<summary><b>6. What happens when a Spot Instance is interrupted?</b></summary>

AWS gives a **2-minute warning** (via metadata and EventBridge), then stops, hibernates or terminates the instance depending on configuration.
</details>

<details>
<summary><b>7. How do you recover access if you lose your SSH key?</b></summary>

Options: use **SSM Session Manager** or **EC2 Instance Connect** if configured; or stop the instance, detach the root volume, attach it to a rescue instance, add a new public key to `~/.ssh/authorized_keys`, reattach and start.
</details>

<details>
<summary><b>8. What is the difference between ALB and NLB?</b></summary>

ALB works at Layer 7 (HTTP/HTTPS) with path/host-based routing. NLB works at Layer 4 (TCP/UDP), offers ultra-low latency, very high throughput and static IPs.
</details>

<details>
<summary><b>9. How does an Auto Scaling Group decide to replace an instance?</b></summary>

Based on health checks – EC2 status checks by default, or ELB health checks if enabled. Unhealthy instances are terminated and replaced to maintain desired capacity.
</details>

<details>
<summary><b>10. What is IMDSv2 and why use it?</b></summary>

A session/token-based version of the Instance Metadata Service. It requires a PUT request to get a token first, which protects against SSRF attacks and open-proxy misconfigurations that could leak IAM credentials.
</details>

<details>
<summary><b>11. How can you change the instance type of a running instance?</b></summary>

Stop the instance (EBS-backed), change the instance type, start it again. Make sure the new type supports the AMI's architecture and virtualization (e.g. ARM vs x86).
</details>

<details>
<summary><b>12. What are placement groups?</b></summary>

Strategies for placing instances on hardware: **Cluster** (low latency, one AZ), **Spread** (distinct hardware, max 7 per AZ), **Partition** (separate racks, for distributed systems like Kafka/HDFS).
</details>

<details>
<summary><b>13. How would you design a highly available web application on EC2?</b></summary>

Launch Template → Auto Scaling Group across ≥2 AZs in private subnets → ALB in public subnets with health checks → RDS Multi-AZ for the database → CloudWatch alarms + target tracking scaling → Route 53 pointing to the ALB → ACM certificate for HTTPS.
</details>

<details>
<summary><b>14. What is the difference between a System and an Instance status check?</b></summary>

System check failures are AWS-side (host hardware, power, network) – fix with stop/start to move hosts. Instance check failures are your side (OS boot, kernel, network config) – fix by reboot or correcting the configuration.
</details>

<details>
<summary><b>15. Reserved Instances vs Savings Plans?</b></summary>

RIs commit to a specific instance configuration (type/region). Savings Plans commit to a $/hour spend and are more flexible – Compute Savings Plans apply across families, sizes, regions, and even Fargate/Lambda.
</details>

---

## 📝 Cheat Sheet

```text
┌──────────────────────── EC2 QUICK REFERENCE ────────────────────────┐
│ Connect          ssh -i key.pem ec2-user@<ip>                       │
│ Key perms        chmod 400 key.pem                                  │
│ Metadata         169.254.169.254  (use IMDSv2 tokens)               │
│ User data logs   /var/log/cloud-init-output.log                     │
│ Free tier        t2.micro / t3.micro, 30 GiB EBS                    │
│ Default EBS      gp3                                                │
│ Stop             EBS kept, public IP changes, compute billing stops │
│ Terminate        Root EBS deleted (default)                         │
│ Static IP        Elastic IP                                         │
│ Private access   SSM Session Manager (no port 22)                   │
│ Credentials      IAM Role – never access keys on the box            │
│ Memory metrics   Need CloudWatch Agent                              │
│ Spot warning     2 minutes                                          │
│ Spread PG limit  7 instances per AZ                                 │
│ HA pattern       ALB + ASG across multiple AZs                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📖 Further Reading

- [Amazon EC2 User Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/)
- [EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 Pricing](https://aws.amazon.com/ec2/pricing/)
- [AWS CLI EC2 Reference](https://docs.aws.amazon.com/cli/latest/reference/ec2/)
- [Terraform aws_instance](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

---

<p align="center">
  ⭐ If these notes helped you, star the repo and share it with fellow learners! ⭐<br>
  <b>Happy Learning – Keep Building! 🚀</b>
</p>
