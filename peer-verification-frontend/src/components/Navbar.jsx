import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">PeerVerify</h1>
    <div className="space-x-4">
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/submit" className="text-gray-700 hover:text-blue-600">Submit</Link>
      <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
      <Link to="/github" className="text-gray-700 hover:text-blue-600">GitHub</Link>
    </div>
  </nav>
);
export default Navbar;
