import React from 'react';
import ReactJson from 'react-json-view';

class JSONDisplayer extends React.Component {
  render() {
    const { json } = this.props;
    return (
      <ReactJson src={json} name={false} displayObjectSize={false} displayDataTypes={false} />
    );
  }
}

export default JSONDisplayer;
