import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render() {
        const {content} = this.props;
        return(
        <div onClick={this.handleDelete.bind(this, this.props.index)}>{content}</div>
        )
    }

    handleDelete(index) {
      this.props.delete(index);
    }
}

export default TodoItem;