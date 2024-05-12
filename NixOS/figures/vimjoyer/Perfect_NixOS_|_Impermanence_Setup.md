# Timestamps
- \newcommand{\scriptvimjoyerperfectnixos}[2]{\href{openpdf:///home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Perfect_NixOS_|_Impermanence_Setup.pdf:#1}{\inlinebox{#2}}}
- \newcommand{\videovimjoyerperfectnixos}[2]{\href{https://youtu.be/YPKwkWtK7l0?si=vwBpEMuMT4Vd_OMa&t=#1}{\inlineboxtwo{#2}}}
- set_as_timestamps_file "/home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Perfect_NixOS_|_Impermanence_Setup.md" "" vimjoyerperfectnixos vimjoyerperfectnixos
- 00:01:27 \scriptvimjoyerperfectnixos{1}{}
- 00:01:29 \scriptvimjoyerperfectnixos{1}{}
- 00:01:30 \scriptvimjoyerperfectnixos{2}{}
- 00:01:40 \scriptvimjoyerperfectnixos{3}{}
- 00:01:57 \scriptvimjoyerperfectnixos{4}{}
- 00:01:58 \scriptvimjoyerperfectnixos{4}{root partition managed with lvm (logical valume manager) and it references a volume group called root_vg}
- 00:02:06 \scriptvimjoyerperfectnixos{5}{defined here}
- 00:02:27 \scriptvimjoyerperfectnixos{6}{mounted at root and wiped at every startup}
- 00:02:33 \scriptvimjoyerperfectnixos{7}{mounted at nix stores location}
- 00:02:35 \videovimjoyerperfectnixos{155}{nixos only needs /nix and /boot directory to succesfully construct a working Linux system}
- 00:02:55 \scriptvimjoyerperfectnixos{8}{}
- 00:03:00 \scriptvimjoyerperfectnixos{9}{}
- 00:03:21 \scriptvimjoyerperfectnixos{10}{--no-filesystem flag disko.nix can also be imported in the configuration as module}
- 00:03:26 \scriptvimjoyerperfectnixos{11}{}
- 00:03:35 \scriptvimjoyerperfectnixos{12}{problem none of the options from it exist in the regular nix os configuration}
- 00:03:42 \scriptvimjoyerperfectnixos{13}{could fetch it from github, but there are better way}, or use flake
- 00:03:50 \scriptvimjoyerperfectnixos{14}{initialise flake template for this purpose}
- 00:04:05 \scriptvimjoyerperfectnixos{15}{config file either here or in configuration.nix}
- 00:04:10 \scriptvimjoyerperfectnixos{16}{include code for wiping device}
- 00:04:14 \scriptvimjoyerperfectnixos{17}{}
- 00:04:23 \scriptvimjoyerperfectnixos{18}{mounting btrfs fs in this directory}
- 00:04:27 \scriptvimjoyerperfectnixos{19}{get sure mounted correctly}
- 00:04:28 \scriptvimjoyerperfectnixos{20}{moving root subvolume into old roots with it's new name being current time}, backing up old roots here
- 00:04:42 \scriptvimjoyerperfectnixos{21}{function such that old roots don't clutter drive}, deletes subvolumes recursively
- 00:04:46 \scriptvimjoyerperfectnixos{22}{running this function on all root copies that are older than 30 days}
- 00:04:49 \scriptvimjoyerperfectnixos{23}{after that creating new root subvolume in place of the one just moved}
- 00:05:04 \scriptvimjoyerperfectnixos{24}{create user with initial password so it won't get deleted with the rest of the system}
- 00:05:10 \videovimjoyerperfectnixos{310}{not implemented impermanance yet, so /etc/nixos also gets deleted}, atm back up in /persist
- 00:05:31 \scriptvimjoyerperfectnixos{25}{}
- 00:06:04 \scriptvimjoyerperfectnixos{26}{}
- 00:06:07 \scriptvimjoyerperfectnixos{27}{don't set up wifi networks or bluetooth devices every time one turns one one's pc}, provides with nixos and home-manager modules that let choose what files and directories one wants to keep between reboots, specifically requires to have root fs that gets wiped out on every reboot
- 00:06:34 \scriptvimjoyerperfectnixos{28}{}
- 00:06:46 \scriptvimjoyerperfectnixos{29}{persistend directory where state will be backed up}
- 00:06:58 \scriptvimjoyerperfectnixos{30}{neededForBoot, for persistent subvolume, because in permanance won't let boot without being able to mount all of it's files and directories}
- 00:07:12 \scriptvimjoyerperfectnixos{31}{rebuild and restart system, copy nixos config to /etc/nixos and reboot again and see that it stays there even after root gets wiped}
- 00:07:16 \scriptvimjoyerperfectnixos{32}{optional: enable home-manager impermanence module}
- 00:07:29 \scriptvimjoyerperfectnixos{33}{enable home-manager for user}, enalbe userAllowOther, because home-manager impermanence won't be able to mount it's directories without it
- 00:07:43 \scriptvimjoyerperfectnixos{34}{different backup directory, so two impermanences don't colide with each other}
- 00:07:47 \scriptvimjoyerperfectnixos{35}{}

# Hello. There are a few documentation errors in this video.
# - At 1:25 the curl command should use a lowercase "-o" for its output argument, not an uppercase "-O" like:
# curl <url> -o /tmp/disko.nix
# 
# - At 3:46 your nix command copies the flake.nix it to the current working directory.. we need to move it into "mnt/etc/nixos" like:
# mv flake.nix /mnt/etc/nixos
# 
# - At 5:10 the cp command should copy "/mnt/etc/nixos" to "/mnt/etc/persist", NOT "/etc/nixos" to "/etc/persist" like:
# cp /mnt/etc/nixos /mnt/etc/persist
# 
# - At 7:03 on reboot, I had this error on boot "waiting for device /mnt-root/persist/system/var/lib/nixos to appear..." This happened because I copied /persist/nixos to /etc/nixos before reboot; to prevent this, delete any contents of "/etc/nixos" and then rebuild & reboot like:
# sudo rm -r /etc/nixos/*
# sudo nixos-rebuild boot --flake /persist/nixos#default
# reboot
# 
# - At 7:27 you must add "inputs" to the argument for the configuration.nix function like:
# { config, lib, pkgs, inputs, ... }: {
#   imports = [
#     ./hardware-configuration.nix
#   ];
#   # ...
# }
# 
# - At 7:47 on reboot, I got "[FAILED] Failed to start Home Manager environment for <user>", so I ran:
# systemctl status home-manager-mboyea.service
# which reported:
# <date> <time> <hostname> hm-activate-<user>[<lognum>]: mkdir: cannot create directory "/persist/home": Permission denied
# The solution is to declare the /persist directories and their owners inside your nixos config.
# To do so, add the following to configuration.nix:
# systemd.tmpfiles.rules = {
#   "d /persist/home/ 1777 root root -" # /persist/home created, owned by root
#   "d /persist/home/<user> 0770 <user> users -" # /persist/home/<user> created, owned by that user
# }
# Then, modify home.nix to target "/persist/home/<user>":
# { pkgs, inputs, ... }: {
#   # ...
#   home.persistence."/persist/home/<user>" = {
#     # ...
#   };
#   # ...
# }
# Make sure to replace <user> with your username.
# 
# Now, we finally have a working declarative NixOS config!
# 
# Uh oh! I made an error in this post and now I cannot edit to fix it..
# The 7:47 configuration.nix fix should use square brackets & have correct chmod permissions like:
# systemd.tmpfiles.rules = [
#   "d /persist/home/ 0777 root root -" # create /persist/home owned by root
