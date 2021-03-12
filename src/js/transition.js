/** @format */

// Import Highway
import Highway from "@dogstudio/highway";
// Import Gsap
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
	// Built-in methods
	in({ from, to, done }) {
		var tl = new TimelineLite();

		tl.fromTo(to, 0.5, { top: "-100%", left: "50%" }, { top: "0" })
			.fromTo(
				to,
				0.5,
				{ width: "2%" },
				{
					width: "100%",
					left: "-0%",
					top: "10vh",
					onComplete: function () {
						from.remove();
						done();
					},
				}
			)
			.fromTo(to.children[0], 1, { opacity: "0" }, { opacity: "1" });
	}

	out({ from, done }) {
		done();
	}
}

export default Fade;
