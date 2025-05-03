import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitWork from './pages/SubmitWork';
import Preview from './pages/Preview';
import Dashboard from './pages/Dashboard';
import GitHubConnect from './pages/GithubConnect';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitWork />} />
        <Route path="/preview/:workId" element={<Preview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/github" element={<GitHubConnect />} />
      </Routes>
    </Router>
  );
}

export default App;
