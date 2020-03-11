#!/bin/sh

set -- $HUSKY_GIT_PARAMS

BRANCH_NAME=$(git symbolic-ref --short HEAD)
MSG="$(echo $BRANCH_NAME | sed -e 's/.*\///g'): "

echo $MSG

MSG_IN_COMMIT=0
if [ -f $1 ]; then
    MSG_IN_COMMIT=$(grep -c "$MSG" $1)
fi

if [ -n "$MSG" ] && ! [[ $MSG_IN_COMMIT -ge 1 ]]; then
  if [ -f $1 ]; then
    MSG="${MSG/\//\/}"
    sed -i.bak -e "1s@^@$MSG@" $1
  else
    echo "$MSG" > "$1"
  fi
fi

exit 0
