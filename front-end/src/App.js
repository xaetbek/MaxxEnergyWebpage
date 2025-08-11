import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to My Website</h1>
        <p>This is the homepage content.</p>
      </main>
    </div>
  );
}

export default App;
