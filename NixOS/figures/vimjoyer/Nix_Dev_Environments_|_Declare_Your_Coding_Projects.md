# Timestamps
- \newcommand{\scriptvimjoyerdevenvironments}[2]{\href{openpdf:///home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Nix_Dev_Environments_|_Declare_Your_Coding_Projects.pdf:#1}{\inlinebox{#2}}}
- \newcommand{\videovimjoyerdevenvironments}[2]{\href{https://youtu.be/yQwW8dkuHqw?feature=shared&t=#1}{\inlineboxtwo{#2}}}
- set_as_timestamps_file "/home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Nix_Dev_Environments_|_Declare_Your_Coding_Projects.md" "" vimjoyerdevenvironments vimjoyerdevenvironments
- 00:00:36 \scriptvimjoyerdevenvironments{1}{shell.nix}
- 00:00:26 \videovimjoyerdevenvironments{26}{nixpkgs either provided when calling then function or taken from systems channel}
- 00:00:44 \scriptvimjoyerdevenvironments{2}{launch empty development shell}
- 00:00:47 \scriptvimjoyerdevenvironments{3}{add to flake.nix file by importing from relative path}
- 00:00:51 \scriptvimjoyerdevenvironments{4}{or by declaring straight in the systems dev shell default key}
- 00:00:56 \scriptvimjoyerdevenvironments{5}{nix develop}, enter dev shell declared in a flake
- 00:01:19 \scriptvimjoyerdevenvironments{6}{nativeBuildInputs}
- 00:01:20 \scriptvimjoyerdevenvironments{7}{with "with syntax"}
- 00:01:24 \videovimjoyerdevenvironments{84}{enter development shell with nix shell or nix develop}
- 00:01:38 \scriptvimjoyerdevenvironments{8}{example nix-shell usage}
- 00:01:47 \scriptvimjoyerdevenvironments{9}{other shell}, first command run when entering the development environment
- 00:01:50 \videovimjoyerdevenvironments{110}{can be shortened to -c zsh when using nix develop}
- 00:01:57 \scriptvimjoyerdevenvironments{10}{example nix develop usage}
- 00:02:26 \scriptvimjoyerdevenvironments{11}{shellHook}
- 00:02:32 \scriptvimjoyerdevenvironments{12}{result of shellHook}
- 00:02:52 \scriptvimjoyerdevenvironments{13}{declare environment variables}
- 00:02:56 \scriptvimjoyerdevenvironments{14}{source password file with only string}
- 00:03:30 \scriptvimjoyerdevenvironments{15}{also define multiple sources from different points in time}
- 00:03:39 \scriptvimjoyerdevenvironments{16}{nixhub.io}
- 00:03:48 \scriptvimjoyerdevenvironments{17}{e.g. package only supported specific old version of python}
- 00:03:56 \scriptvimjoyerdevenvironments{18}{copy commit hash and package name}
- 00:04:07 \scriptvimjoyerdevenvironments{19}{add inputs after outputs parameter}, so can use inputs anywhere in our flake
- 00:04:23 \scriptvimjoyerdevenvironments{20}{include specific python package}
- 00:04:25 \videovimjoyerdevenvironments{265}{every time update this flake main nixpkgs like nodejs will be updated}, while this python package will stay locked in time
- 00:04:52 \videovimjoyerdevenvironments{292}{everyting is checked with nix flakes}, in the flake.lock file
- 00:05:07 \scriptvimjoyerdevenvironments{21}{shell with packages quick}
- 00:05:27 \scriptvimjoyerdevenvironments{22}{flake version}, get packages from nixpkgs, different commits of it and even from github repos
- 00:05:19 \videovimjoyerdevenvironments{319}{syntax same as inputs from a flake}
