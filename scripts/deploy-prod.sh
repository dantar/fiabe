#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

cd ~/hack/git/fiabe
ng build --base-href=./
scp -r ~/hack/git/fiabe/dist/fiabe ada-ubuntu-devel:/tmp/fiabe-$TODAY
ssh ada-ubuntu-devel ssh -i /home/hyperborea/.ssh/service.rsa fiabe@173.212.227.89 mv html html-$TODAY
ssh ada-ubuntu-devel scp -i /home/hyperborea/.ssh/service.rsa -r /tmp/fiabe-$TODAY fiabe@173.212.227.89:html

