import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFire, faFolder, faTerminal } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import Toasts from "./Toasts";
import IconFlat from "../Icons/LogoFlat.png";

const commands = {
    help: {
        description: "Lists all of the available commands."
    },
    js: {
        description: "Executes the specified arguments as JavaScript.",
        arguments: "<code>",
        handle: (...args) => eval(args.join(" "))
    }
};

// Import the file system module
const fs = window.require("fs");
// Import the path module
const path = window.require("path");
// Get the child process module
const childProcess = window.require("child_process");

// This is responsible for formatting paths to variable paths
function getPathFromString(value) {
    // Grab the electron process, not the renderer process
    const process = window.require("process");
    // Split the path into directory sections
    const pathSplit = value.split("/");

    // Get the root of the path based on some variables
    // This might be the most incomprehensible line I've written in a while
    const root = {
        appdata: process.env.APPDATA,
        local: process.env.LOCALAPPDATA,
        localappdata: process.env.LOCALAPPDATA,
        home: process.env.HOMEPATH,
        public: process.env.PUBLIC,
        user: process.env.USERPROFILE,
        programfiles86: process.env.ProgramFiles,
        programfiles: process.env.ProgramW6432
    }[pathSplit[0].toLowerCase().replaceAll("%", "")] ?? pathSplit[0];

    // Return the path based on the root directory and the rest of the split path
    return path.join(root, pathSplit.slice(1).join("/")).replaceAll("\\", "/");
}

export default function LauncherModal() {
    // Create the field ref
    const fieldRef = React.useRef();
    // Create our auto complete state
    const [autoCompleteEntries, setAutoCompleteEntries] = React.useState([]);
    
    // Handle the send event
    function handleSend(args) {
        const _arguments = args.match(/[^\s"']+|"([^"]*)"|'([^']*)'/gm);
        
        // Sent arguments was of type command, execute command if valid
        if (args.startsWith("!")) {
            // Get the command object based on the first argument, lowercase, without the !
            const command = commands[args.split(" ")[0].slice(1).toLowerCase()];
            
            // Command exists, execute it
            if (command) {
                // Call the command and get its return value
                const response = command.handle(..._arguments.slice(1));
                
                // Display our data to the user
                response && Toasts.showToast(response.toString());
                console.log(response);
            }
            // Command does not exist, throw an error
            else {
                Toasts.showToast(<span>{arguments[0].slice(1)} is not a valid command</span>, "Failure");
            }
        }
        // TODO check for indexed files
        // If no commands or indexed files were found, try to launch manually
        else {
            // Try catch, in case of errors
            try {
                // Open the file, directory, or URL
                childProcess.exec(`start "" "${getPathFromString(args)}"`);

                // Close the modal
                window.close();
            }
            // An error was caught, throw it to the console and warn the user
            catch (e) {
                console.error(e);
                Toasts.showToast("Error opening file, check console for details", "Failure");
            }
        }
        
        // Clear the field
        fieldRef.current.value = "";
    }
    
    // Handle rendering of auto-complete
    function handleAutoComplete({ currentTarget: { value } }) {
        // If we're typing a command, handle that and return
        if (value.startsWith("!")) {
            // Get the value after the !, in lowercase
            const search = value.slice(1).toLowerCase();
            // Filter all of our commands by search
            const results = Object.keys(commands).filter(cmd => ~cmd.indexOf(search));
            // Create an empty components array
            const components = [];
            
            // Iterate our results and push them to the components array
            for (const result of results) {
                const command = commands[result];
                
                components.push(
                    <div className="Item" key={result} onClick={() => fieldRef.current.value = "!" + result}>
                        <FontAwesomeIcon icon={faTerminal}/>
                        
                        <span><b>!{result}</b><span style={{ opacity: 0.5 }}> - {command.description}</span></span>
                    </div>
                );
                
                setAutoCompleteEntries(components);
            }
            
            return;
        }
        
        // Put our raw path through the variable checks
        const fpRaw = getPathFromString(value);
        // Get the second to last path entry, to exclude what we're searching
        const fpDir = fpRaw.split("/").slice(0, -1).join("/");
        // If the fp doesn't exist, but the dir does, set fp to dir
        const fp = !fs.existsSync(fpRaw) && fs.existsSync(fpDir) ? fpDir : fpRaw;
        
        // dir exists, get its files
        if (value && fs.existsSync(fp)) {
            // Read all files in the directory, filtered by searching the final path entry
            const files = fs.readdirSync(fp).filter(p =>
                ~path.join(fp, p).toLowerCase().indexOf(fpRaw.split("/").slice(-1)[0].toLowerCase()));
            // Map the first 10 files into auto complete entry components
            const components = files.slice(0, 10).map(fn => (
                <div className="Item" key={fn} onClick={() => fieldRef.current.value = path.join(fp, fn)}>
                    <FontAwesomeIcon icon={fs.lstatSync(path.join(fp, fn)).isDirectory()
                        ? faFolder : faFile}/>
                    
                    <span>{fn}</span>
                </div>
            ));
            
            // Set our entries to the components list
            setAutoCompleteEntries(components);
        }
        // If the directory doesn't exist, clear our entries
        else setAutoCompleteEntries([]);
    }
    
    return (
        <div className="LauncherModal">
            <div className="Title">
                <img alt="Icon" src={IconFlat} height={20}/>
                
                Ignis Launcher
            </div>

            <div className="Flex">
                <input className="LauncherModalField" ref={fieldRef}
                       onKeyDown={e => e.key === "Enter" && handleSend(e.currentTarget.value)}
                       onChange={handleAutoComplete}
                       placeholder="Example - !help"/>

                <div className="Button" onClick={() => handleSend(fieldRef.current.value)}>
                    <FontAwesomeIcon icon={faFire}/>
                    
                    <Tooltip>
                        Run Command
                    </Tooltip>
                </div>
            </div>
            
            <div className="AutoComplete">
                {autoCompleteEntries}
            </div>
        </div>
    );
}