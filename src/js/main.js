/** @format */

import Highway from "@dogstudio/highway";
// Import Transitions
import Fade from "./transition";

// Call Highway.Core once.
// Relate transitions to pages with the label of the `data-router-view`.
const H = new Highway.Core({
	transitions: {
		default: Fade,
	},
});
