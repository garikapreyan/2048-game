import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Section from "../Section";
import styles from './styles';

const arr = [[0,0,0,0],[0,0,2,0],[0,0,0,0],[0,2,0,0]];

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          {arr.map((arr2, i) => arr2.map((item, j) => <Section value={item} key={(i+1)*(j+1)}/>))}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Main);