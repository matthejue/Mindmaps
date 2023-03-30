#!/usr/bin/env bash

for file in *.tex ; do
  make ${file%.tex}.pdf
done
