import ListItem from 'material-ui/List/ListItem';
import React from 'react';
import JSONDisplayer from '../JSONDisplayer/JSONDisplayer';

class Document extends React.Component {
  render() {
    const { doc } = this.props;
    return (
      <ListItem>
        <JSONDisplayer json={doc} />
      </ListItem>
    );
  }
}

export default Document;
