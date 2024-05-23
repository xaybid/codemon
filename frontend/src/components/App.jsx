import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import { initialCssContent, initialHtmlContent, initialJsContent } from "../constants";
import { imageSources } from "../assets/images";
import ImagePreloader from "../utilities/ImagePreloader";
import Login from "./login";
import Signup from "./signup";

function App() {
    // State to track authentication status
    const [authenticated, setAuthenticated] = useState(false);

    // State for editor content
    const [html, setHtml] = useLocalStorage("html", initialHtmlContent);
    const [css, setCss] = useLocalStorage("css", initialCssContent);
    const [js, setJs] = useLocalStorage("js", initialJsContent);
    const [srcDoc, setSrcDoc] = useState("");
    const [showIframe, setShowIframe] = useState(false);
    const timerRef = useRef(null);
    const iframeRef = useRef(null);

    // Handle iframe load
    const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.style.height = "100vh";
        }
    };

    // Refresh iframe content
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timerRef.current);
    }, [html, css, js]);

    // Handle top pane animation end
    const handleTopPaneAnimationEnd = () => setShowIframe(true);

    // Function to dynamically add the chatbot script
    const addChatbotScript = () => {
        const script1 = document.createElement("script");
        script1.innerHTML = `
            window.embeddedChatbotConfig = {
                chatbotId: "RRyso6AYQSTTe2EBMuIac",
                domain: "www.chatbase.co"
            };
        `;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://www.chatbase.co/embed.min.js";
        script2.setAttribute("chatbotId", "RRyso6AYQSTTe2EBMuIac");
        script2.setAttribute("domain", "www.chatbase.co");
        script2.defer = true;

        script2.onload = () => {
            console.log('Chatbot script loaded successfully');
        };

        script2.onerror = () => {
            console.error('Error loading chatbot script');
        };

        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    };

    // Effect to add the chatbot script after authentication
    useEffect(() => {
        if (authenticated) {
            addChatbotScript();
        }
    }, [authenticated]);

    return (
        <Router>
            <CssBaseline />
            <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setAuthenticated} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={
                    authenticated ? (
                        <ImagePreloader images={imageSources}>
                            <div className="container primary-container" onAnimationEnd={handleTopPaneAnimationEnd}>
                                <Editor language="html" displayName="HTML" value={html} onChange={setHtml} animationQueue={0.6} />
                                <Editor language="css" displayName="CSS" value={css} onChange={setCss} animationQueue={0.55} />
                                <Editor language="javascript" displayName="JS" value={js} onChange={setJs} animationQueue={0.5} />
                            </div>
                            {showIframe && (
                                <div className="container iframe-container">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        srcDoc={srcDoc}
                                        title="sandbox output"
                                        sandbox="allow-same-origin allow-scripts"
                                        ref={iframeRef}
                                        onLoad={handleIframeLoad}
                                    />
                                </div>
                            )}
                        </ImagePreloader>
                    ) : (
                        <Navigate to="/login" />
                    )
                } />
            </Routes>
        </Router>
    );
}

export default App;
