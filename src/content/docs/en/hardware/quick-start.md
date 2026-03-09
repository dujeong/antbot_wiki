---
title: Quick Start
description: ANTBot hardware preparation and software environment setup
sidebar:
  order: 4
---

## 4.1 Hardware Preparation

1. **Power ON:** Turn on the main switch located at the lower left rear of the robot.
2. **Connect to Robot:**
   - **[Option 1] Network Connection:** Connect your PC to the router's SSID (`ANTBot_XXXX`).
   - **[Option 2] Monitor & Keyboard:** Use the robot's HDMI and USB ports.

## 4.2 Software Environment Setup

Run the following script in the terminal to build the provided source code.

```bash
# ANTBot one-line install script
curl -sSL https://github.com/ROBOTIS-move/antbot/install/main/setting.sh | bash
```

### SSD Mount

```bash
# Initialize SSD partition
sudo /sbin/parted /dev/nvme0n1 mklabel gpt --script
sudo mkfs.ext4 /dev/nvme0n1

# Mount SSD
sudo mount /dev/nvme0n1 {mount_folder_path}
```
