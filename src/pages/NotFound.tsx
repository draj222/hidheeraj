
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Terminal, AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-terminal-dark p-4">
      <div className="terminal-window w-full max-w-md">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-xs font-mono text-terminal-text/60">error.sh</span>
        </div>
        
        <div className="terminal-content p-6">
          <div className="flex items-center justify-center text-terminal-orange mb-6">
            <AlertTriangle className="h-16 w-16" />
          </div>
          
          <div className="code-block">
            <div className="text-terminal-orange">$ find "{location.pathname}"</div>
            <div className="text-terminal-text mt-2">
              <span className="text-red-500">ERROR 404:</span> Path not found
            </div>
            <div className="text-terminal-text mt-2">
              The requested resource "{location.pathname}" does not exist on this server.
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="terminal-button inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Terminal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
