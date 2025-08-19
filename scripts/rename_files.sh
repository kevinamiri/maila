#!/bin/bash

# Directory containing the files
DIR="/home/kevin/maila/src/pages/legal"

# Check if directory exists
if [ ! -d "$DIR" ]; then
    echo "Error: Directory $DIR does not exist"
    exit 1
fi

# Find and rename files
for file in "$DIR"/term-of-use.*.md; do
    if [ -f "$file" ]; then
        # Get the filename
        filename=$(basename "$file")
        # Get the language code
        lang_ext="${filename#term-of-use.}"
        # Create new filename
        new_file="$DIR/terms-of-use.$lang_ext"
        # Rename the file
        mv "$file" "$new_file"
        echo "Renamed: $file → $new_file"
    fi
done

echo "File renaming completed." 