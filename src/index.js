const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");

const App = new class {
    // A one-time boolean to ensure we don't initialize more than once
    hasInitialized = false;
    
    // The app tray instance
    tray = null;
    // The window instance variable
    windowInstance = null;
    
    init() {
        // Ensure init doesn't somehow call multiple times
        if (this.hasInitialized) return;
        this.hasInitialized = true;
        
        // Build our components
        this.buildTray();
        this.buildWindow().catch(console.error.bind("Failed to build window!"));
    }
    
    buildTray() {
        // Create the tray
        // TODO add an icon
        this.tray = new Tray(path.join(__dirname, "trayicon.png"));
        
        // Build the tray context menu
        const contextMenu = Menu.buildFromTemplate([
            { label: "Open Launcher", click: this.openLauncher.bind(this) },
            { type: "separator" },
            { label: "Settings" },
            { label: "Exit", click: app.exit.bind(app, 1) }
        ]);
        
        // Set the tooltip
        this.tray.setToolTip("Ignis Launcher");
        // Set the context menu
        this.tray.setContextMenu(contextMenu);
        
        // Create a double click event listener to open the launcher
        this.tray.on("double-click", this.openLauncher.bind(this));
    }
    
    async buildWindow() {
        // If a window instance already exists, return
        if (this.windowInstance) return;

        // Create the window
        this.windowInstance = new BrowserWindow({
            fullscreen: true,
            autoHideMenuBar: true,
            frame: false,
            transparent: true,
            show: false,
            alwaysOnTop: true,
            modal: true,
            icon: path.join(__dirname, "trayicon.png"),
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false,
                webSecurity: false
            }
        });
        
        // Create an event override callback
        const eventOverride = e => (e.preventDefault(), this.windowInstance.hide());
        
        // Override the minimize and close. Hide instead
        this.windowInstance.on("minimize", eventOverride);
        this.windowInstance.on("close", eventOverride);

        // Load the relevant file or URL
        if (~process.argv.indexOf("--dev"))
            await this.windowInstance.loadURL("http://localhost:3000");
        else
            await this.windowInstance.loadFile(path.join(__dirname, "frontend/build/index.html"));
    }
    
    openLauncher() {
        this.windowInstance.show();
    }
}

app.disableHardwareAcceleration();
app.whenReady().then(App.init.bind(App));