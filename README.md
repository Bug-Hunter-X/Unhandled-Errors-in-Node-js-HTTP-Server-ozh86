# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: improper error handling in HTTP servers. The `bug.js` file shows a server implementation that lacks proper error handling, resulting in crashes without informative error messages. The `bugSolution.js` file provides a corrected version with robust error handling.

## Bug

The original code lacks error handling for potential issues during server creation and listening.  This can lead to unexpected server crashes and makes debugging difficult.

## Solution

The solution demonstrates the correct way to handle errors by using the `error` event listener. The code now logs detailed error information to the console, enabling easier debugging and preventing unexpected crashes.  It also ensures the server shuts down gracefully.