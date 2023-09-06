


# Todo-CLI Documentation

## Introduction
TodoWave is a command-line tool designed to help you manage your tasks and priorities effectively. Whether you have a simple to-do list or a complex project, TodoWave provides a streamlined way to keep track of your tasks.

***Comming Soon to Windows***


## Installation
1. Ensure you have Node.js installed on your system.
2. Download the comprissed pacjage using the next command 
```bash
curl -LO https://github.com/abdullah-muhammedd/todo-cli/archive/refs/tags/V1.0.0.tar.gz
```
3-run the installation script using the next command 
```bash
curl -sL https://github.com/abdullah-muhammedd/todo-cli/raw/master/install.sh | bash
```
***For security reasons you may not run the installation script directly to your bash instead you can save it to a file and then run it after check it***


## Usage
### Adding a Task
```shell
todo --add "Task description" [-p <priority>]
```
- Use the `--add` or `-a` flag to add a new task.
- Provide the task description in quotes.
- Use the optional `-p` or `--priority` flag to set the task priority (h, m, l, r).
  
### Marking a Task as Done
```shell
todo --done <taskId>
```
- Use the `--done` or `-d` flag to mark a task as done.
- Replace `<taskId>` with the ID of the task you want to mark as done.

### Listing Tasks
```shell
todo --list
```
- Use the `--list` or `-ls` flag to list all tasks.
- Tasks are displayed with their priorities using color codes.

### Help
```shell
todo --help
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
  todo --add "Urgent task" -p h
  ```
- Marking a task as done:
  ```shell
  todo --done 2
  ```

## Exit Codes
- `0`: Successful operation
- Non-zero: Error or invalid command

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
TodoWave is released under the [MIT License](LICENSE).
