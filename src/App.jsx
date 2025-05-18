import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DataAnalytics from './pages/dataAnalytics';
import DifferentialExpression from './pages/differentialExpression';
import MachineLearning from './pages/machineLearning';
import WebDevelopment from './pages/webDevelopment';
import BioinformaticApis from './pages/bioinformaticApis'; // lowercase "A" to match filename

function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <header>
        <h1>Welcome to Quin Lamothe's Personal Bioinformatic Project Page</h1>
        <p>Full-Stack Bioinformatic Engineer • Genomics • Data Science</p>
      </header>

      <hr />

      <section>
        <h2>About Me:</h2>
        <p>
          Professional Full-Stack Bioinformatic Engineer with a passion for therapeutic discovery, genomics,
          machine learning and API development.

          This is my personal site, which is designed to showcase some of my work and tools I've developed.
        </p>
      </section>

      <section>
        <h2>Education:</h2>
        <ul>
          <li>
            UC Santa Cruz,&nbsp;
            <a href="https://bme.ucsc.edu/" target="_blank" rel="noopener noreferrer">
              Biomolecular Engineering and Bioinformatics BS '22
            </a>
          </li>
          <li>
            UC Santa Cruz,&nbsp;
            <a href="https://www.math.ucsc.edu/" target="_blank" rel="noopener noreferrer">
              Mathematics BA '22
            </a>
          </li>
          <li>
            UC Berkeley,&nbsp;
            <a href="https://bioeng.berkeley.edu/meng" target="_blank" rel="noopener noreferrer">
              Bioengineering – Bioinformatics MEng '25
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills:</h2>
        <ul>
          <li><Link to="/data-analytics">Bioinformatic Data Analytics</Link></li>
          <li><Link to="/differential-expression">RNA-seq Differential Expression</Link></li>
          <li><Link to="/machine-learning">Machine Learning</Link></li>
          <li><Link to="/web-development">Web Development and Server Design</Link></li>
          <li><Link to="/bioinformatic-apis">Bioinformatic APIs</Link></li>
        </ul>
      </section>

      <footer style={{ marginTop: "2rem" }}>
        <p>© 2025 Quin Lamothe</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/bioinformatics-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/differential-expression" element={<DifferentialExpression />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/bioinformatic-apis" element={<BioinformaticApis />} />
      </Routes>
    </Router>
  );
}
