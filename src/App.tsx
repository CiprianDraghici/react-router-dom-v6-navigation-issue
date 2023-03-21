import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./pages/Home";
import {Failure} from "./pages/Failure";
import {NotFound} from "./pages/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <h1>React router v6</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
