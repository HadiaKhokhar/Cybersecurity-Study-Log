======================
DAY 2: FILE MANAGEMENT
======================


1. SETUP & CONCEPTS
-------------------

* Linux File System: Structure Linux uses to store and manage data.
* Root (`/`): Top-level directory. Everything starts here.
* Home (`~`): Your personal directory (`/home/username`).
* File: Stores data.
* Directory: Stores files and folders.

Linux File System Overview

- Hierarchical tree structure starting from `/`
- Manages storage, organization, and permissions
- Uses layers:
  - LFS → Handles system calls
  - VFS → Supports multiple file systems (EXT4, XFS, NTFS)
  - Physical FS → Communicates with disk

Common File Systems

- EXT4 → Default, fast, reliable
- XFS → Large file performance
- Btrfs → Snapshots, compression
- NTFS/exFAT → Windows compatibility

Mounting

Mounting = Attaching a disk to a directory.
Example: /dev/sdb1 → /mnt/usb


Important Directories

| Directory | Purpose |
|------------|----------|
| /home | User files |
| /etc | Configuration |
| /var | Logs & variable data |
| /boot | Boot files |
| /tmp | Temporary files |
| /dev | Devices |
| /proc | Process info (virtual) |


2. CORE COMMANDS
----------------

* `cp`   - Copy  
* `mv`   - Move/Rename  
* `rm`   - Remove  
* `cat`  - View small files  
* `less` - View large files  
* `head` - First lines  
* `tail` - Last lines  

Examples:
cp file.txt backup.txt
cp -r FolderA FolderB 
mv old.txt new.txt
rm -i file.txt
less file.txt
tail -f /var/log/syslog



3. FILE PERMISSIONS
-------------------

Check:
ls -l

Example:
-rw-r--r-- 
- Owner | Group | Others  
- r = read  
- w = write  
- x = execute  



4. PATH TYPES
-------------

Absolute:
/home/user/file.txt

Relative:
Documents/file.txt
../file.txt


Check location:
pwd



5. PRACTICE (30 MIN)
--------------------

✅ Copy 
cp ~/file.txt ~/Documents/

✅ Move/Rename
mv file.txt newfile.txt

✅ View System File
less /etc/passwd

✅ Safe Delete
rm -i file.txt



6. INDEPENDENT RESEARCH
-----------------------

What is `/etc/passwd`?

- Stores user account info
- Each line = one user
- Passwords stored in `/etc/shadow`

Example:
username:x:1000:1000:User:/home/user:/bin/bash

- Username
- Password placeholder (x)
- User ID (UID)
- Group ID (GID)
- Comment field
- Home directory
- Default shell

Key Directories

- `/home` → User files  
- `/etc` → System configs  
- `/var/log` → System logs  

6. RESOURCES
-----------------------

- Linux Directory
https://www.youtube.com/watch?v=995-SYn6960
https://www.youtube.com/watch?v=42iQKuQodW4

- Linux FileSystem
https://www.youtube.com/watch?v=9LQWhsnmeuY
https://www.youtube.com/watch?v=_h30HBYxtws&t=476s


=========================================

