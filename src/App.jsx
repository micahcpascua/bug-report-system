import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import BugsPage from "./pages/BugsPage/BugsPage";
import HomePage from "./pages/HomePage/HomePage";
import StatsPage from "./pages/StatsPage/StatsPage";
import backgroundImage from "./please 15.png"

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
     <div style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: "100%", minHeight: "100vh" }}>
      <Routes>
        {/* Use to only allow authenticated users to view webiste

        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/bugs" element={<BugsPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;