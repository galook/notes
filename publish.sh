#!/bin/sh

jupyter-book build ./ --toc _toc.yml
ghp-import -n -p -f _build/html