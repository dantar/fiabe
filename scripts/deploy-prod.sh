#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

cd ~/hack/git/fiabe
ng build --base-href=./ --prod

# open master socker tunnel
# ssh -M -S my-ctrl-socket -fnNT -L 8022:173.212.227.89:22 ada-ubuntu-devel
# check master socker
# ssh -S my-ctrl-socket -O check ada-ubuntu-devel

#rsync -varzh -e "ssh -p 8022 -i ~/.ssh/service.rsa" resources fiabe@localhost:
rsync -varzh -e "ssh -i ~/.ssh/service.rsa" ~/hack/git/fiabe/dist/fiabe/* fiabe@web-donatello-prod:/var/www/fiabe

# close master socket
# ssh -S my-ctrl-socket -O exit ada-ubuntu-devel
