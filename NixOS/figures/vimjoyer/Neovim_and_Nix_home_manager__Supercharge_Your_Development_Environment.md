# Timestamps
- \newcommand{\scriptvimjoyerneovimandhomemanager}[2]{\href{openpdf:///home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Neovim_and_Nix_home_manager:_Supercharge_Your_Development_Environment.pdf:#1}{\inlinebox{#2}}}
- \newcommand{\videovimjoyerneovimandhomemanager}[2]{\href{https://youtu.be/YZAnJ0rwREA?si=eeHcEyGeqam_NQi7&t=#1}{\inlineboxtwo{#2}}}
- set_as_timestamps_file "/home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Neovim_and_Nix_home_manager__Supercharge_Your_Development_Environment.md" "" vimjoyerneovimandhomemanager vimjoyerneovimandhomemanager
- 00:00:45 \scriptvimjoyerneovimandhomemanager{1}{enable and aliases}
- 00:00:55 \scriptvimjoyerneovimandhomemanager{2}{new directory structure}
- 00:01:14 \scriptvimjoyerneovimandhomemanager{3}{extraLuaConfig option}, string interpolation
- 00:01:35 \scriptvimjoyerneovimandhomemanager{4}{plugins option}
- 00:01:41 \scriptvimjoyerneovimandhomemanager{5}{plugins option 2}
- 00:01:42 \scriptvimjoyerneovimandhomemanager{6}{plugins option 3}
- 00:01:50 \scriptvimjoyerneovimandhomemanager{7}{use with at the top}
- 00:01:53 \scriptvimjoyerneovimandhomemanager{8}{treesitter grammers}
- 00:02:00 \scriptvimjoyerneovimandhomemanager{9}{either dump all plugins under extraLuaConfig}
- 00:02:28 \scriptvimjoyerneovimandhomemanager{10}{}
- 00:02:53 \scriptvimjoyerneovimandhomemanager{11}{}
- 00:03:24 \scriptvimjoyerneovimandhomemanager{12}{}
- 00:03:47 \scriptvimjoyerneovimandhomemanager{13}{just achieved the same thing that could get by using fetchFromGitHub function}, but with flake doing all of the work
- 00:03:56 \scriptvimjoyerneovimandhomemanager{14}{}
- 00:03:56 \videovimjoyerneovimandhomemanager{236}{this part (rev) generated in flake.lock file automatically}, and it will also update on it's own each time we update the flake
- 00:04:06 \scriptvimjoyerneovimandhomemanager{15}{}
- 00:04:07 \scriptvimjoyerneovimandhomemanager{16}{}
- 00:04:11 \scriptvimjoyerneovimandhomemanager{17}{}
- 00:04:31 \videovimjoyerneovimandhomemanager{271}{overleays}, function that accepts 2 arguments, final is the nixpkgs that get after modifying the previous nixpkgs, what doing: extending the vimplugin set in nixpkgs with our plugins by taking the previous version of it and using an update operator that is going to put missing elements from the next set into the previous one and inside this set we are just going to list all of our plugins
- 00:05:09 \videovimjoyerneovimandhomemanager{309}{onedark is created with the nixpkgs buildVimPlugin function}
- 00:05:27 \scriptvimjoyerneovimandhomemanager{18}{it is required, so nix understands that this random repo that we are trying to shove into plugins is actually a vim plugin}
- 00:05:31 \scriptvimjoyerneovimandhomemanager{19}{}
- 00:06:07 \scriptvimjoyerneovimandhomemanager{20}{}
- 00:05:13 \videovimjoyerneovimandhomemanager{313}{}
# neovim plugin has an option called type you can use to define the config type. so you can do 
# { 
#   plugin
#   type = “lua”
#   config = “lua code”
# } 
# You can also set the default for neovim to lua and only change to viml when needed.
# When a flake input has flake=false, it indicates that the input is not a full Nix flake with a flake.nix file, but rather just a regular source repository that can be used as a dependency
