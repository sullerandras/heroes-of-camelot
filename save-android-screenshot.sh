#!/bin/bash
filename=$1
if [ -z "$filename" ]; then
  echo "Missing file name parameter"
  exit 1
fi

ANDROID_SDK=~/android-sdks
# echo "Taking screenshot via adb from connected Android device…"
dateAndTime=$(date +"%Y-%m-%d at %H.%M.%S")
$ANDROID_SDK/platform-tools/adb shell screencap -p | perl -pe 's/\x0D\x0A/\x0A/g' > temp.png
convert -rotate -90 -crop 1400x1050+260+50 -resize 800 temp.png "$filename"

# echo "Successfully saved screenshot to $filename"
exit 0
