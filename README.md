# child-process-debug-vscode
Wrap child-process from nodejs to allow VSCode debugger to connect properly

## Motivation
Using child-process.fork() module on VSCode in debug (i.e. when debug is connected) spawns a child process with the same port on the --inspect-brk param. This cause the child process to die and not being able to debug.

...
## How it works

Still work in progress
