import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `
# Merhaba! Bu bir Markdown Önizleyici.
## Tasarım Odaklı React Projesi

Bu proje, bir metin editörünü ve canlı önizlemesini, modern bir UI/UX yaklaşımıyla bir araya getiriyor.

- **Kalın metin**
- *İtalik metin*
- \`inline kod\`

> "İyi tasarım, ürünün anlaşılır olmasını sağlar."
> - Dieter Rams

\`\`\`javascript
// Kod blokları da harika görünüyor!
function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)} />
      <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  );
}
\`\`\`

[Markdown Rehberi](https://www.markdownguide.org)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  const createMarkup = () => {
    const rawMarkup = marked(markdownText, { breaks: true, gfm: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="tablet-mockup">
      <div className="tablet-camera"></div>
      <div className="tablet-screen">
        <div className="app-container">
          <div className="editor-pane">
            <div className="pane-header">
              EDITOR
            </div>
            <textarea 
              className="editor" 
              value={markdownText}
              onChange={(e) => setMarkdownText(e.target.value)}
            />
          </div>
          <div className="preview-pane">
            <div className="pane-header">
              PREVIEW
            </div>
            <div 
              className="preview"
              dangerouslySetInnerHTML={createMarkup()}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

