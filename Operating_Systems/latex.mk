# https://github.com/tueda/makefile4latex/wiki#externalizing-tikz-graphics-to-speed-up-typesetting
LATEX_OPT += -shell-escape

# https://tex.stackexchange.com/questions/629846/is-it-normal-for-minted-to-run-slow
$hash_calc_ignore_pattern{aux} = 'minted@oldcachelist|default\.pygstyle|\.pygtex';
