import React from 'react';
import styles from './editor.module.css';

const Editor = ({ handleConvert }) => {
  const onChange = (event) => {
    handleConvert(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Editor</h2>
      <textarea
        className={styles.editor}
        placeholder="input your story"
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
