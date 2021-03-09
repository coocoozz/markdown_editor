import styles from './preview.module.css';
import React from 'react';
import marked from 'marked';

const Preview = ({ content }) => {
  const convToHtml = (text) => {
    if (text !== undefined && text !== null && text.length > 0) {
      const convText = marked(text);
      return {
        __html: convText,
      };
    }

    return {
      __html: '',
    };
  };

  return (
    <div className={styles.container}>
      <h2>Preview</h2>
      <div
        className={styles.preview}
        dangerouslySetInnerHTML={convToHtml(content)}
      />
    </div>
  );
};

export default Preview;
