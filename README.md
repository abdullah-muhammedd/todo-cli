


# TodoWave Documentation

## Introduction
TodoWave is a command-line tool designed to help you manage your tasks and priorities effectively. Whether you have a simple to-do list or a complex project, TodoWave provides a streamlined way to keep track of your tasks.


## Installation
1. Ensure you have Node.js installed on your system.
2. Download or clone the TodoWave repository.
3. Navigate to the repository directory in your terminal.

## Adding to PATH
For convenient usage, you can add the directory of the TodoWave script to your system's PATH environment variable. This allows you to run `todo.js` from any directory without specifying the full path only using   `todo`  command

### Windows
1. Find the directory path of the TodoWave script (`todo.js`).
2. Search for "Environment Variables" in the Windows search bar and select "Edit the system environment variables."
3. Click the "Environment Variables" button.
4. In the "System Variables" section, select the "Path" variable and click "Edit."
5. Click "New" and add the directory path of the TodoWave script.
6. Click "OK" to close the windows.

### Linux
1. Open a terminal.
2. Find the directory path of the TodoWave script (`todo.js`).
3. Open your shell profile configuration file using a text editor (e.g., `~/.bashrc`, `~/.zshrc`, etc.).
4. Add the following line at the end of the file, replacing `/path/to/todo/script` with the actual path:
  ```  shell
   export PATH=$PATH:/path/to/todo/script
```

## Usage
### Adding a Task
```shell
node todo.js --add "Task description" [-p <priority>]
```
- Use the `--add` or `-a` flag to add a new task.
- Provide the task description in quotes.
- Use the optional `-p` or `--priority` flag to set the task priority (h, m, l, r).
  
### Marking a Task as Done
```shell
node todo.js --done <taskId>
```
- Use the `--done` or `-d` flag to mark a task as done.
- Replace `<taskId>` with the ID of the task you want to mark as done.

### Listing Tasks
```shell
node todo.js --list
```
- Use the `--list` or `-ls` flag to list all tasks.
- Tasks are displayed with their priorities using color codes.

### Help
```shell
node todo.js --help
```
- Use the `--help` or `-h` flag to display usage information and available options.

## Priorities
- Use the following priority codes when adding tasks:
  - `h`: High priority
  - `m`: Medium priority
  - `l`: Low priority
  - `r`: Regular priority (default)

## Examples
- Adding a high-priority task:
  ```shell
  node todo.js --add "Urgent task" -p h
  ```
- Marking a task as done:
  ```shell
  node todo.js --done 2
  ```

## Exit Codes
- `0`: Successful operation
- Non-zero: Error or invalid command

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
TodoWave is released under the [MIT License](LICENSE).