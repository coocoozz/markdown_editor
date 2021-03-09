import { useState } from 'react';
import styles from './app.module.css';
import Editor from './componets/editor/editor';
import Preview from './componets/preview/preview';

function App() {
  const [content, setContent] = useState();

  const handleConvert = (text) => {
    setContent(text);
  };

  return (
    <div className={styles.container}>
      <Editor handleConvert={handleConvert} />
      <Preview content={content} />
    </div>
  );
}

export default App;
