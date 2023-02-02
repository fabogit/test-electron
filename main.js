const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	});

	win.loadFile('index.html');
};

// render window when redy
app.whenReady().then(() => {
	createWindow();

	// macOS apps generally continue running even without any windows open
	// activating the app when no windows are available should open a new one.
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// quit if the user is not on macOS
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});