
process.on("message", text => {
    console.log("Received: " + text);
    if(text === "exit")
    {
        process.exit();
    }
    else
    {
        process.send("answer")
    }
}
);

process.on("exit", () => { console.log("Leaving child");});