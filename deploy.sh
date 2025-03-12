#!/bin/sh

cd /var/www/exinearn-website

changed=0
git remote update && git status -uno | grep -q 'Your branch is behind' && changed=1
if [ $changed = 1 ]; then
    git checkout .
    git pull
    sudo chown www-data:www-data -R /var/www/exinearn-website/out
    echo "Updated successfully";
else
    echo "Up-to-date"
fi