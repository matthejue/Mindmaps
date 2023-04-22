#!/usr/bin/env bash

for file in *.tex; do
	latexmk -pdf ${file%.tex}.pdf
done
