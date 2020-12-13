import React, { Component } from 'react';
import Imagebox from '../../components/Color/Imagebox/Imagebox.jsx';
import Dropbox from '../../components/Color/Dropbox/Dropbox.jsx';
import Colorbox from '../../components/Color/Colorbox/Colorbox.jsx';
import styles from './index.css';
export default function() {


  return (
      <div className={styles.color}>

        <div style={{ display: "flex"}}>
          <Colorbox/>
          <Imagebox/>
        </div>
        <Dropbox/>
      </div>
  );
}