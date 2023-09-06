#!/bin/bash

if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

target_directory="$HOME/todo-cli"

# Create the target directory if it doesn't exist
if [ ! -d "$target_directory" ]; then
    sudo mkdir -p "$target_directory" && sudo chown -R $USER "$target_directory"
fi

# Check if the tar file exists
if [ ! -f "V1.0.0.tar.gz" ]; then
    echo "Error: The tar file 'V1.0.0.tar.gz' does not exist. Please download it first."
    exit 1
fi

# Extract the tar file
tar -xzf V1.0.0.tar.gz -C "$target_directory"

if [ $? -eq 0 ]; then
    echo "Repository extracted successfully to $target_directory"
else
    echo "Error: Failed to extract the repository."
    exit 1
fi

# Add the todo-cli directory to the PATH environment variable
printf "\nexport PATH=\"$target_directory/todo-cli-1.0.0:\$PATH\"\n" >> "$HOME/.bashrc"

# Source the .bashrc file to make the changes take effect
source "$HOME/.bashrc"

echo "The 'todo-cli' directory has been added to your PATH."
echo -e "\033[32mInstallation Done\033[0m"
