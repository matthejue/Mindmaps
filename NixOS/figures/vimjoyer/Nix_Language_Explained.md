# Timestamps
- \newcommand{\scriptvimjoyernixlanguage}[2]{\href{openpdf:///home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Nix_Language_Explained.pdf:#1}{\inlinebox{#2}}}
- \newcommand{\videovimjoyernixlanguage}[2]{\href{https://youtu.be/UgrwoAGSPOQ?feature=shared&t=#1}{\inlineboxtwo{#2}}}
- set_as_timestamps_file "/home/areo/Documents/Studium/Summaries/NixOS/figures/vimjoyer/Nix_Language_Explained.md" "" vimjoyernixlanguage vimjoyernixlanguage
- 00:00:37 \scriptvimjoyernixlanguage{1}{}
- 00:00:45 \videovimjoyernixlanguage{45}{nix is like lua for neovim}
- 00:00:55 \scriptvimjoyernixlanguage{2}{nixos rebuild evaluates expression in configuration.nix and uses resulting value to build the system}
- 00:01:21 \scriptvimjoyernixlanguage{3}{don't care about indentation, amount of spaces, newlines}
- 00:01:33 \scriptvimjoyernixlanguage{4}{nix code evaluated as one line}
- 00:01:35 \videovimjoyernixlanguage{95}{everything put in nix file is called an expression}
- 00:01:55 \scriptvimjoyernixlanguage{5}{}
- 00:02:29 \scriptvimjoyernixlanguage{6}{}
- 00:02:41 \scriptvimjoyernixlanguage{7}{}
- 00:03:10 \scriptvimjoyernixlanguage{8}{attribute set}
- 00:03:13 \scriptvimjoyernixlanguage{9}{also this way}
- 00:03:14 \scriptvimjoyernixlanguage{10}{or this way}
- 00:03:17 \scriptvimjoyernixlanguage{11}{or this}
- 00:03:31 \scriptvimjoyernixlanguage{12}{dot key syntax}
- 00:03:37 \scriptvimjoyernixlanguage{13}{assign set to variable and then extract the attribute from it in next expression}, not possible in regular nix files, because every nix file can only contain one expression
- 00:03:57 \scriptvimjoyernixlanguage{14}{define variables before evaluating something}, let expression or let-in syntax
- 00:04:22 \scriptvimjoyernixlanguage{15}{}
- 00:04:18 \scriptvimjoyernixlanguage{15}{}
- 00:04:24 \scriptvimjoyernixlanguage{16}{parsed recursively until all variables are evaluated}
- 00:04:30 \scriptvimjoyernixlanguage{17}{use variables in expressions of other variables}
- 00:04:34 \scriptvimjoyernixlanguage{18}{dollar sign only needed so nix used the variable and not the literal system key}
- 00:04:49 \scriptvimjoyernixlanguage{19}{same recursive evaluation mechanism directly in sets with rec}
- 00:05:08 \scriptvimjoyernixlanguage{20}{list}, separated by at least one space
- 00:05:24 \scriptvimjoyernixlanguage{21}{with}, brings values from a set to a scope of any expression as if they were variables defined in a let in syntax
- 00:05:27 \scriptvimjoyernixlanguage{22}{used to define packages for nixos, home-manager and dev shells}
- 00:05:40 \scriptvimjoyernixlanguage{23}{can be used with any other expressions not just lists}
- 00:06:01 \scriptvimjoyernixlanguage{24}{takes expression as argument and adds 1 to it}
- 00:06:07 \scriptvimjoyernixlanguage{25}{let in syntax to have everything in single expression}
- 00:06:28 \scriptvimjoyernixlanguage{26}{}
- 00:06:37 \scriptvimjoyernixlanguage{27}{}
- 00:06:54 \scriptvimjoyernixlanguage{28}{}
- 00:07:07 \scriptvimjoyernixlanguage{29}{default value for any attribute}, used in case the set passed to the function does not contain an attribute with the same name
- 00:07:20 \scriptvimjoyernixlanguage{30}{function that takes any set as long as it has two specific attributes}, any additional arguments will by ignored
- 00:07:40 \scriptvimjoyernixlanguage{31}{ignored unless include @name, also assign the input set to a variable with that name that comes after @}, attributes then can either be taken the regular way or from the set without having to explicitly write all of them down
- 00:07:44 \scriptvimjoyernixlanguage{32}{pass all nix flake inputs to home-manager or nix os modules}
- 00:07:46 \scriptvimjoyernixlanguage{33}{inherit keyword is shorthand}, for bringing values in from the scope
- 00:07:50 \scriptvimjoyernixlanguage{34}{}
- 00:07:58 \scriptvimjoyernixlanguage{35}{if then else expression}
# Referring to the flake's own source directory: The self parameter allows the flake to refer to its own source directory, which is often a Git repository. This allows the flake to access its own files and resources without relying on external or implicit dependencies
# Accessing the flake's own metadata: The self parameter provides access to metadata about the flake itself, such as self.lastModifiedDate, which can be used to generate version information
# Composability and reusability: By accepting self as an argument, the outputs function makes the flake more composable and reusable. Other flakes can then use this flake as an input and access its outputs through the self parameter
