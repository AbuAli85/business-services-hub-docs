import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from 'react-router-dom';
import { navigation } from './navigation';
import { docsContent } from './docs_content'; // Import the embedded content
import './App.css';
import falconEyeLogo from '/assets/falcon_eye_logo.jpg'; // Import the logo
import mermaid from 'mermaid'; // Import mermaid

function SearchResults({ searchTerm, onClose }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    const results = [];
    const searchTermLower = searchTerm.toLowerCase();

    // Search through all documents
    Object.keys(docsContent).forEach(key => {
      const doc = docsContent[key];
      const contentText = doc.content.replace(/<[^>]*>/g, ''); // Strip HTML tags
      
      if (doc.title.toLowerCase().includes(searchTermLower) || 
          contentText.toLowerCase().includes(searchTermLower)) {
        
        // Find relevant snippets
        const sentences = contentText.split(/[.!?]+/);
        const relevantSentences = sentences.filter(sentence => 
          sentence.toLowerCase().includes(searchTermLower)
        ).slice(0, 3);

        results.push({
          title: doc.title,
          key: key,
          href: `/docs/${key}`,
          snippets: relevantSentences.length > 0 ? relevantSentences : [contentText.substring(0, 200) + '...']
        });
      }
    });

    setSearchResults(results);
    setLoading(false);
  }, [searchTerm]);

  if (!searchTerm || searchTerm.length < 2) {
    return null;
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-results-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-results-header">
          <h3>Search Results for "{searchTerm}"</h3>
          <button className="close-search" onClick={onClose}>✕</button>
        </div>
        
        {loading ? (
          <div className="search-loading">Searching...</div>
        ) : searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result-item">
                <h4>
                  <NavLink to={result.href} onClick={onClose}>
                    {result.title}
                  </NavLink>
                </h4>
                <div className="search-snippets">
                  {result.snippets.map((snippet, snippetIndex) => (
                    <p key={snippetIndex} className="search-snippet">
                      {snippet.trim()}...
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            No results found for "{searchTerm}". Try different keywords.
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Business Services Hub Documentation</h1>
        <p className="subtitle">Everything you need: architecture, setup, features, and business strategy</p>
        <p className="mission">Empowering Omani businesses with SmartPRO digital solutions</p>
        <p className="description">Welcome to the official documentation portal for Business Services Hub — your source for technical setup, feature guides, and business strategy.</p>
        
        <div className="metrics">
          <div className="metric">
            <span className="metric-number">5,000+</span>
            <span className="metric-label">Clients</span>
          </div>
          <div className="metric">
            <span className="metric-number">800+</span>
            <span className="metric-label">Providers</span>
          </div>
          <div className="metric">
            <span className="metric-number">15,000+</span>
            <span className="metric-label">Projects Completed</span>
          </div>
        </div>
        <div className="hero-buttons">
          <NavLink to="/docs/setup_deployment_guide" className="hero-button developer-button">
            <span className="button-icon">🚀</span>
            <span className="button-content">
              <span className="button-title">For Developers</span>
              <span className="button-subtitle">Setup Guide & Technical Docs</span>
            </span>
          </NavLink>
          <NavLink to="/docs/business_plan" className="hero-button stakeholder-button">
            <span className="button-icon">📊</span>
            <span className="button-content">
              <span className="button-title">For Stakeholders</span>
              <span className="button-subtitle">Business Plan & Strategy</span>
            </span>
          </NavLink>
          <NavLink to="/docs/security_guide" className="hero-button admin-button">
            <span className="button-icon">🛠️</span>
            <span className="button-content">
              <span className="button-title">For Admins</span>
              <span className="button-subtitle">Security & Deployment</span>
            </span>
          </NavLink>
        </div>
      </div>
      
      <div className="quick-links">
        <h2>Quick Access</h2>
        <div className="cards-grid">
          <div className="card stakeholder-card">
            <h3>📊 For Stakeholders & Investors</h3>
            <p>Executive summaries, business plans, and strategic insights</p>
            <div className="card-links">
              <NavLink to="/docs/executive_summary">Executive Summary</NavLink>
              <NavLink to="/docs/business_plan">Business Plan</NavLink>
              <NavLink to="/docs/roadmap">Development Roadmap</NavLink>
            </div>
          </div>
          
          <div className="card developer-card">
            <h3>🛠️ For Developers & Technical Teams</h3>
            <p>Architecture, setup guides, and technical documentation</p>
            <div className="card-links">
              <NavLink to="/docs/architecture_diagrams">Architecture Diagrams</NavLink>
              <NavLink to="/docs/setup_deployment_guide">Setup & Deployment</NavLink>
              <NavLink to="/docs/features_detailed">Features Documentation</NavLink>
            </div>
          </div>
          
          <div className="card admin-card">
            <h3>🔒 For Administrators</h3>
            <p>Security guides, deployment, and platform management</p>
            <div className="card-links">
              <NavLink to="/docs/security_guide">Security Guide</NavLink>
              <NavLink to="/docs/setup_deployment_guide">Deployment Guide</NavLink>
              <NavLink to="/docs/contributing">Contributing Guide</NavLink>
            </div>
          </div>
        </div>
      </div>
      
      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <p>Last updated: September 2025</p>
        <p>Latest changes: Enhanced documentation portal with professional branding and improved navigation</p>
      </div>
    </div>
  );
}

function DocViewer() {
  const { docName } = useParams();
  const [docData, setDocData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contentRef = useRef(null); // Ref to the content div

  useEffect(() => {
    setLoading(true);
    setError(null);
    setDocData({ title: '', content: '' });

    if (docName) {
      const contentKey = docName.replace(".html", ""); // Remove .html extension for key lookup
      const content = docsContent[contentKey];

      if (content) {
        setDocData(content);
        setError(null);
      } else {
        setError("Document not found.");
        setDocData({ title: '', content: '' });
      }
    }
    setLoading(false);
  }, [docName]);

  useEffect(() => {
    // Initialize Mermaid and render diagrams after content is rendered
    if (docData.content && contentRef.current) {
      const isDarkMode = document.documentElement.classList.contains('dark-mode');
      
      mermaid.initialize({ 
        startOnLoad: false,
        theme: isDarkMode ? 'dark' : 'base',
        themeVariables: isDarkMode ? {
          primaryColor: '#00afaa',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#00afaa',
          lineColor: '#00afaa',
          secondaryColor: '#343a40',
          tertiaryColor: '#495057',
          background: '#212529',
          mainBkg: '#343a40',
          secondBkg: '#495057',
          tertiaryBkg: '#6c757d'
        } : {
          primaryColor: '#212529',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#00afaa',
          lineColor: '#00afaa',
          secondaryColor: '#e9ecef',
          tertiaryColor: '#f8f9fa'
        }
      }); // Disable startOnLoad and set custom theme
      // Find all elements with class 'language-mermaid' and render them
      const mermaidElements = contentRef.current.querySelectorAll('pre code.language-mermaid');
      mermaidElements.forEach(async (element, index) => {
        const graphDefinition = element.textContent;
        try {
          const { svg } = await mermaid.render(`mermaid-svg-${docName}-${index}`, graphDefinition);
          element.innerHTML = svg;
          element.classList.remove('language-mermaid'); // Remove class to prevent re-rendering
          element.parentElement.classList.remove('language-mermaid'); // Remove from parent pre tag
        } catch (e) {
          console.error('Mermaid rendering failed:', e);
          element.innerHTML = `<div style="color: red;">Error rendering diagram: ${e.message}</div><pre>${graphDefinition}</pre>`;
        }
      });

      // Add branded callout boxes
      const processCallouts = () => {
        const content = contentRef.current;
        if (!content) return;

        // Process blockquotes and convert them to callout boxes
        const blockquotes = content.querySelectorAll('blockquote');
        blockquotes.forEach(blockquote => {
          const text = blockquote.textContent.trim();
          let calloutType = 'info';
          let icon = 'ℹ️';
          
          if (text.toLowerCase().includes('tip') || text.toLowerCase().includes('note')) {
            calloutType = 'tip';
            icon = '✅';
          } else if (text.toLowerCase().includes('warning') || text.toLowerCase().includes('caution')) {
            calloutType = 'warning';
            icon = '⚠️';
          }
          
          blockquote.className = `callout callout-${calloutType}`;
          blockquote.innerHTML = `<div class="callout-icon">${icon}</div><div class="callout-content">${blockquote.innerHTML}</div>`;
        });
      };

      processCallouts();
    }
  }, [docData.content]);

  if (loading) {
    return <div className="doc-message">Loading document...</div>;
  }

  if (error) {
    return <div className="doc-error">{error}</div>;
  }

  if (!docData.content) {
    return <div className="doc-message">No content available for this document.</div>;
  }

  return (
    <div className="doc-viewer-container">
      <div className="breadcrumb">
        <NavLink to="/">Documentation</NavLink> &gt; <span>{docData.title}</span>
      </div>
      <h1>{docData.title}</h1>
      <div ref={contentRef} dangerouslySetInnerHTML={{ __html: docData.content }} />
    </div>
  );
}

function Sidebar({ darkMode, toggleDarkMode, onSearch }) {
  const [collapsedSections, setCollapsedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (sectionName) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const filteredNavigation = navigation.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sections = [
    {
      name: 'Business Docs',
      icon: '📊',
      items: filteredNavigation.filter(item => 
        ['Executive Summary', 'Business Plan', 'Development Roadmap'].includes(item.name)
      )
    },
    {
      name: 'Technical Docs',
      icon: '🛠️',
      items: filteredNavigation.filter(item => 
        ['Project Documentation', 'Architecture Diagrams', 'Features Detailed', 'Setup & Deployment', 'Security Guide'].includes(item.name)
      )
    },
    {
      name: 'Community',
      icon: '🤝',
      items: filteredNavigation.filter(item => 
        ['Contributing Guide', 'Changelog'].includes(item.name)
      )
    }
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <img src={falconEyeLogo} alt="Falcon Eye Group Logo" className="logo" />
        <h2>Documentation</h2>
        <button 
          className="dark-mode-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search documentation..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <div className="nav-section">
        <h3>🏠 Overview</h3>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      
      {sections.map(section => (
        <div key={section.name} className="nav-section">
          <h3 
            onClick={() => toggleSection(section.name)}
            className="collapsible-header"
          >
            {section.icon} {section.name}
            <span className={`arrow ${collapsedSections[section.name] ? 'collapsed' : ''}`}>▼</span>
          </h3>
          {!collapsedSections[section.name] && (
            <ul>
              {section.items.map(item => (
                <li key={item.name}>
                  <NavLink to={item.href} className={({ isActive }) => isActive ? 'active-link' : ''}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to false (light mode)
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document element
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowSearchResults(term.length >= 2);
  };

  const closeSearch = () => {
    setShowSearchResults(false);
    setSearchTerm('');
  };

  return (
    <Router basename="/">
      <div className="app-layout">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearch={handleSearch} />
        
        <main className="content">
          {showSearchResults && (
            <SearchResults searchTerm={searchTerm} onClose={closeSearch} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/:docName" element={<DocViewer />} />
          </Routes>
        </main>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Falcon Eye Group</h4>
            <p>© 2025 Falcon Eye Group. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>SmartPRO Hub</h4>
            <p>One-Station Business Solutions</p>
            <a href="#" className="hub-link">Visit SmartPRO Hub →</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@abuali.com</p>
            <p>Business: business@abuali.com</p>
          </div>
          <div className="footer-section">
            <h4>Documentation</h4>
            <p>Docs v2.0 — Updated Sept 13, 2025</p>
            <p>Built with ❤️ by the Business Services Hub Team</p>
            <div className="version-info">
              <small>Last deployment: {new Date().toLocaleDateString()}</small>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;

