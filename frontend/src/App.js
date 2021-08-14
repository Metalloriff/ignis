import React from "react";
import "./App.scss";
import LauncherModal from "./Components/LauncherModal";
import Toasts from "./Components/Toasts";

export default function App() {
	// Create a ref
	const ref = React.useRef();
	const [opacity, setOpacity] = React.useState(0);
	
	// Create some events
	const events = {
		onMouseUp: e => {
			// Ensure we're clicking the backdrop
			if (e.target !== e.currentTarget) return;
			
			// Transition out
			setOpacity(0);
			// Close the window after the transition ends
			setTimeout(window.close.bind(window), 250);
		}
	};
	
	// On component mount
	React.useEffect(() => {
		// Create a focus listener callback to set the opacity to 1
		const focusListener = () => setOpacity(1);
		
		// Add the event listener on mount, remove on unmount
		window.addEventListener("focus", focusListener);
		return () => window.removeEventListener("focus", focusListener);
	}, []);
	
	return (
		<div className="App" {...events} ref={ref} style={{ opacity }}>
			<LauncherModal/>
			
			<Toasts/>
		</div>
	);
}