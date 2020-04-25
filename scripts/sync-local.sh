#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

rsync -varzh -e "ssh -i ~/.ssh/service.rsa" rodari@web-donatello-prod:/home/rodari/html/assets/*.jpg ~/hack/git/fiabe/src/assets
rsync -varzh -e "ssh -i ~/.ssh/service.rsa" rodari@web-donatello-prod:/home/rodari/html/assets/*.mp3 ~/hack/git/fiabe/src/assets
