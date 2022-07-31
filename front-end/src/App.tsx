import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage, ThankYouPage} from "pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
