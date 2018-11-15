import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { value } = this.props;
    return (
      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          width: '100px',
          borderRadius: '10px',
          background: 'blue',
          margin: '5px'
        }
      }
      >
        {value}
      </div>
    );
  }
}

export default Section;