#!/usr/bin/env bash

for file in *.tex; do
	latexmk -pdf $file
	pdftocairo -png -rx 150 -ry 150 -singlefile ${file%.tex}.pdf
done
