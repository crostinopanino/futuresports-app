import React from 'react';

const withBackground = (WrappedComponent, backgroundColor = '#fff') => {
  return class extends React.Component {
    render() {
      const style = {
        backgroundColor: backgroundColor, 
        textAlign: 'center', 
        margin: '20px 0', 
        padding: '10px', 
        borderRadius: '10px', 
        boxShadow: '0 2px 4px #0000001a', 
        // Shared styling for sections
      };

      return (
        <div style={style}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withBackground;