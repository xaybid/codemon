// import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { CssBaseline } from "@mui/material";
// import Editor from "./Editor";
// import useLocalStorage from "../hooks/useLocalStorage";
// import { initialCssContent, initialHtmlContent, initialJsContent } from "../constants";
// import { imageSources } from "../assets/images";
// import ImagePreloader from "../utilities/ImagePreloader";
// import Login from "./login";
// import Signup from "./signup";

// function App() {
//     const [authenticated, setAuthenticated] = useState(false);

//     const [html, setHtml] = useLocalStorage("html", initialHtmlContent);
//     const [css, setCss] = useLocalStorage("css", initialCssContent);
//     const [js, setJs] = useLocalStorage("js", initialJsContent);
//     const [srcDoc, setSrcDoc] = useState("");
//     const [showIframe, setShowIframe] = useState(false);
//     const timerRef = useRef(null);
//     const iframeRef = useRef(null);

//     const handleIframeLoad = () => {
//         const iframe = iframeRef.current;
//         if (iframe) {
//             const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//             iframeDocument.body.style.height = "100vh";
//         }
//     };

//     useEffect(() => {
//         timerRef.current = setTimeout(() => {
//             setSrcDoc(`
//                 <html>
//                     <body>${html}</body>
//                     <style>${css}</style>
//                     <script>${js}</script>
//                 </html>
//             `);
//         }, 250);

//         return () => clearTimeout(timerRef.current);
//     }, [html, css, js]);

//     const handleTopPaneAnimationEnd = () => setShowIframe(true);

//     const addChatbotScript = () => {
//         const script1 = document.createElement("script");
//         script1.innerHTML = `
//             window.embeddedChatbotConfig = {
//                 chatbotId: "RRyso6AYQSTTe2EBMuIac",
//                 domain: "www.chatbase.co"
//             };
//         `;
//         document.head.appendChild(script1);

//         const script2 = document.createElement("script");
//         script2.src = "https://www.chatbase.co/embed.min.js";
//         script2.setAttribute("chatbotId", "RRyso6AYQSTTe2EBMuIac");
//         script2.setAttribute("domain", "www.chatbase.co");
//         script2.defer = true;

//         script2.onload = () => {
//             console.log('Chatbot script loaded successfully');
//         };

//         script2.onerror = () => {
//             console.error('Error loading chatbot script');
//         };

//         document.head.appendChild(script2);

//         return () => {
//             document.head.removeChild(script1);
//             document.head.removeChild(script2);
//         };
//     };

//     useEffect(() => {
//         if (authenticated) {
//             addChatbotScript();
//         }
//     }, [authenticated]);

//     return (
//         <Router>
//             <CssBaseline />
//             <Routes>
//                 <Route path="/login" element={<Login setIsAuthenticated={setAuthenticated} />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/" element={
//                     authenticated ? (
//                         <ImagePreloader images={imageSources}>
//                             <div className="container primary-container" onAnimationEnd={handleTopPaneAnimationEnd}>
//                                 <Editor language="html" displayName="HTML" value={html} onChange={setHtml} animationQueue={0.6} />
//                                 <Editor language="css" displayName="CSS" value={css} onChange={setCss} animationQueue={0.55} />
//                                 <Editor language="javascript" displayName="JS" value={js} onChange={setJs} animationQueue={0.5} />
//                             </div>
//                             {showIframe && (
//                                 <div className="container iframe-container">
//                                     <iframe
//                                         width="100%"
//                                         height="100%"
//                                         srcDoc={srcDoc}
//                                         title="sandbox output"
//                                         sandbox="allow-same-origin allow-scripts"
//                                         ref={iframeRef}
//                                         onLoad={handleIframeLoad}
//                                     />
//                                 </div>
//                             )}
//                         </ImagePreloader>
//                     ) : (
//                         <Navigate to="/login" />
//                     )
//                 } />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


// import React, { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { CssBaseline } from "@mui/material";
// import Editor from "./Editor";
// import useLocalStorage from "../hooks/useLocalStorage";
// import { initialCssContent, initialHtmlContent, initialJsContent } from "../constants";
// import { imageSources } from "../assets/images";
// import ImagePreloader from "../utilities/ImagePreloader";
// import Login from "./login";
// import Signup from "./signup";
// import HomePage from "./HomePage";  // Import the HomePage component
// import AdminDashboard from './AdminDashboard'; // Import AdminDashboard component

// function App() {
//     const [authenticated, setAuthenticated] = useState(false);

//     const [html, setHtml] = useLocalStorage("html", initialHtmlContent);
//     const [css, setCss] = useLocalStorage("css", initialCssContent);
//     const [js, setJs] = useLocalStorage("js", initialJsContent);
//     const [srcDoc, setSrcDoc] = useState("");
//     const [showIframe, setShowIframe] = useState(false);
//     const timerRef = useRef(null);
//     const iframeRef = useRef(null);

//     const handleIframeLoad = () => {
//         const iframe = iframeRef.current;
//         if (iframe) {
//             const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//             iframeDocument.body.style.height = "100vh";
//         }
//     };

//     useEffect(() => {
//         timerRef.current = setTimeout(() => {
//             setSrcDoc(`
//                 <html>
//                     <body>${html}</body>
//                     <style>${css}</style>
//                     <script>${js}</script>
//                 </html>
//             `);
//         }, 250);

//         return () => clearTimeout(timerRef.current);
//     }, [html, css, js]);

//     const handleTopPaneAnimationEnd = () => setShowIframe(true);

//     const addChatbotScript = () => {
//         const script1 = document.createElement("script");
//         script1.innerHTML = `
//             window.embeddedChatbotConfig = {
//                 chatbotId: "RRyso6AYQSTTe2EBMuIac",
//                 domain: "www.chatbase.co"
//             };
//         `;
//         document.head.appendChild(script1);

//         const script2 = document.createElement("script");
//         script2.src = "https://www.chatbase.co/embed.min.js";
//         script2.setAttribute("chatbotId", "RRyso6AYQSTTe2EBMuIac");
//         script2.setAttribute("domain", "www.chatbase.co");
//         script2.defer = true;

//         script2.onload = () => {
//             console.log('Chatbot script loaded successfully');
//         };

//         script2.onerror = () => {
//             console.error('Error loading chatbot script');
//         };

//         document.head.appendChild(script2);

//         return () => {
//             document.head.removeChild(script1);
//             document.head.removeChild(script2);
//         };
//     };

//     useEffect(() => {
//         if (authenticated) {
//             addChatbotScript();
//         }
//     }, [authenticated]);

//     return (
//         <Router>
//             <CssBaseline />
//             <Routes>
//                 <Route path="/login" element={<Login setIsAuthenticated={setAuthenticated} />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<HomePage />} /> {/* Add the HomePage route */}
//                 <Route path="/admin" element={<AdminDashboard />} /> {/* Define route for AdminDashboard */}
//                 <Route path="/" element={
//                     authenticated ? (
//                         <ImagePreloader images={imageSources}>
//                             <div className="container primary-container" onAnimationEnd={handleTopPaneAnimationEnd}>
//                                 <Editor language="html" displayName="HTML" value={html} onChange={setHtml} animationQueue={0.6} />
//                                 <Editor language="css" displayName="CSS" value={css} onChange={setCss} animationQueue={0.55} />
//                                 <Editor language="javascript" displayName="JS" value={js} onChange={setJs} animationQueue={0.5} />
//                             </div>
//                             {showIframe && (
//                                 <div className="container iframe-container">
//                                     <iframe
//                                         width="100%"
//                                         height="100%"
//                                         srcDoc={srcDoc}
//                                         title="sandbox output"
//                                         sandbox="allow-same-origin allow-scripts"
//                                         ref={iframeRef}
//                                         onLoad={handleIframeLoad}
//                                     />
//                                 </div>
//                             )}
//                         </ImagePreloader>
//                     ) : (
//                         <Navigate to="/login" />
//                     )
//                 } />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


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
import HomePage from "./HomePage";
import AdminDashboard from './AdminDashboard';
import AdminLoginPage from './AdminLoginPage'; // Import AdminLoginPage component

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    const [html, setHtml] = useLocalStorage("html", initialHtmlContent);
    const [css, setCss] = useLocalStorage("css", initialCssContent);
    const [js, setJs] = useLocalStorage("js", initialJsContent);
    const [srcDoc, setSrcDoc] = useState("");
    const [showIframe, setShowIframe] = useState(false);
    const timerRef = useRef(null);
    const iframeRef = useRef(null);

    const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.style.height = "100vh";
        }
    };

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

    const handleTopPaneAnimationEnd = () => setShowIframe(true);

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
                <Route path="/home" element={<HomePage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/adminlogin" element={<AdminLoginPage onAdminLogin={() => setAuthenticated(true)} />} /> {/* Route for AdminLoginPage */}
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
