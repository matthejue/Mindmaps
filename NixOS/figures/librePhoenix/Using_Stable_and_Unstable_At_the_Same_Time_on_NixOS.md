# Timestamps
- \newcommand{\scriptlibrephoenixstableandunstable}[2]{\href{openpdf:///home/areo/Documents/Studium/Summaries/NixOS/figures/librePhoenix/Using_Stable_and_Unstable_At_the_Same_Time_on_NixOS.pdf:#1}{\inlinebox{#2}}}
- \newcommand{\videolibrephoenixstableandunstable}[2]{\href{https://youtu.be/hlytf6Uxf4E?si=c7vVqdeMtTMtEgjx&t=#1}{\inlineboxtwo{#2}}}
- set_as_timestamps_file "/home/areo/Documents/Studium/Summaries/NixOS/figures/librePhoenix/Using_Stable_and_Unstable_At_the_Same_Time_on_NixOS.md" "" librephoenixstableandunstable librephoenixstableandunstable
- 00:04:06 \scriptlibrephoenixstableandunstable{1}{add untable branch as input}
- 00:05:16 \scriptlibrephoenixstableandunstable{2}{let binding that uses new input}
- 00:05:27 \scriptlibrephoenixstableandunstable{3}{inhertig pkgs-unstable in specialArgs}
- 00:05:34 \scriptlibrephoenixstableandunstable{4}{and in extraSpecialArgs}
- 00:05:45 \scriptlibrephoenixstableandunstable{5}{overview}
- 00:06:42 \scriptlibrephoenixstableandunstable{6}{add argument pkgs-unstable and concatenate two lists}
- 00:06:51 \scriptlibrephoenixstableandunstable{7}{can't install 2 versions of the same package}, only way it works if there's no difference between stable and unstable version
- 00:07:40 \videolibrephoenixstableandunstable{460}{what does depend on what}, lib depends on stable-nixpkgs
- 00:08:12 \scriptlibrephoenixstableandunstable{8}{nixos system is build with lib from stable}, stable builder function used to install unstable package
- 00:08:25 \scriptlibrephoenixstableandunstable{9}{home-mangager.lib...}
- 00:08:37 \scriptlibrephoenixstableandunstable{10}{home-manager inputs are following stable nixpkgs}
- 00:08:44 \scriptlibrephoenixstableandunstable{11}{home-manager builder function is from stable}, but one is building both stable and unstable packages
- 00:08:56 \videolibrephoenixstableandunstable{536}{there's potential from breakages to happen}, if there are deprecation between the two branches, could lead to packages not installing from package with version builder function is not using
- 00:09:55 \videolibrephoenixstableandunstable{595}{first reason}
- 00:10:42 \videolibrephoenixstableandunstable{642}{other reason}
