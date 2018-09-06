# child-process-debug-vscode
Wrap child-process from nodejs to allow VSCode debugger to connect properly

## Motivation
Using child-process.fork() module on VSCode in debug (i.e. when debug is connected) spawns a child process with the same port on the --inspect-brk param. This cause the child process to die and not being able to debug.

...
## How it works

The main idea is to process spawn parameters for child and replace the inspect port with a different one (i.e. debugPort + 1). In this way the debugger of VSCode is able to attach the new child process.

## Note from me

While I have several years in C++ and few in C#, I'm a very new to JS and NodeJS. I will appreciate very much comment and suggestion for improving. Thanks
