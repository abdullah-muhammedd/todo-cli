
const process = require( 'process' );
const fs = require( 'fs' );
//! Create the file that will store the tasks if it is not exists  
if ( !fs.existsSync( process.env.HOME +"/todo-cli/todo.json" ) )
{
    fs.writeFileSync( process.env.HOME +"/todo-cli/todo.json", `{"todos":[] , "lastId" : 0}` );
    process.stdout._write( "Initialization Done\n" );
    process.exit( 0 );
}

// !Define different colors for different tastks priorites 
const colors = {
    "r": '\x1b[0m',
    "h": '\x1b[31m',
    "m": '\x1b[32m',
    "l": '\x1b[33m'
};

//! Check the case of no commands 
checkForErrors( process.argv.length < 3, "Invalid arguments. Please provide a valid command or type 'todo --help or -h' for usage information." );

//! Extract the command 
const command = process.argv[ 2 ];

switch ( command )
{
    case "--add": case "-a": {
        checkForErrors( !process.argv[ 3 ], `
Usage: todo --add or -a <task> [-p <priority>]

Options:
-p, --priority    Priority of the task (h, m, l, r)\n\n`);

        let priority;

        if ( !process.argv[ 4 ] )
        {
            priority = "r";
        }
        else
        {
            checkForErrors( !process.argv[ 5 ], `
Usage: todo --add or -a <task> [-p <priority>]

Options:
-p, --priority    Priority of the task (h, m, l, r)\n\n`);

            priority = process.argv[ 5 ].toLowerCase();

            checkForErrors( !( priority === 'r' || priority === 'h' || priority === 'l' || priority === 'm' ), `
Usage: todo --add or -a <task> [-p <priority>]

Options:
-p, --priority    Priority of the task (h, m, l, r)\n\n`);
        }

        const fileData = JSON.parse( fs.readFileSync( process.env.HOME +"/todo-cli/todo.json" ) );
        fileData.lastId = fileData.lastId + 1;
        const id = fileData.lastId;
        const task = { id: id, task: process.argv[ 3 ], priority: priority };
        fileData.todos.push( task );
        fs.writeFileSync( process.env.HOME +"/todo-cli/todo.json", JSON.stringify( fileData ) );
        break;
    }
    case "--done": case "-d": {

        checkForErrors( !process.argv[ 3 ], "Usage: todo --done or -d <taskId>" );

        const fileData = JSON.parse( fs.readFileSync( process.env.HOME +"/todo-cli/todo.json" ) );
        const id = process.argv[ 3 ];
        const taskIndex = fileData.todos.findIndex( ele => ele.id == id );

        checkForErrors( taskIndex === -1, "Validation Error : Task not found" );

        fileData.todos.splice( taskIndex, 1 );
        fs.writeFileSync( process.env.HOME +"/todo-cli/todo.json", JSON.stringify( fileData ) );
        break;

    }

    case "--list": case "-ls": {

        const fileData = JSON.parse( fs.readFileSync( process.env.HOME +"/todo-cli/todo.json" ) );
        for ( let ele of fileData.todos )
        {
            process.stdout._write( `${ colors[ ele.priority ] ?? colors[ "r" ] }Task ${ ele.id } : ${ ele.task }${ colors[ "r" ] }\n` );
        }
        break;

    }

    case "--help": case "-h": {
        process.stdout._write( `
Usage: todo <command>

Commands:
--add, -a      Add a new task with an optional priority
--done, -d     Mark a task as done
--list, -ls    List all tasks
--help, -h     Show usage information and available options

Options (only for --add):
-p, --priority    Priority of the task (h, m, l, r)
\n\n`);
        break;
    }

    default: {
        checkForErrors( true, "Invalid command. Please provide a valid command or type 'todo --help or -h' for usage information." );
    }
}


function checkForErrors ( Expression, errMessage )
{
    if ( Expression )
    {
        process.stderr._write( errMessage );
        process.exit( 1 );
    }
};