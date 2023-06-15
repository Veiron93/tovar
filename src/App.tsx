import { RouterProvider } from "react-router-dom";

import router from "@/router/_index";

// Styles
import "@/assets/scss/_vars.scss";
import "@/assets/scss/reset.scss";
import "@/assets/scss/main.scss";

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
