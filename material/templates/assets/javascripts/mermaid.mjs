import mermaid from '../mermaid/mermaid.esm.min.mjs';

mermaid.initialize({
    startOnLoad: true,
    securityLevel: "loose",
    theme: 'neutral',
});

// Important: necessary to make it visible to Material for MkDocs
window.mermaid = mermaid;
