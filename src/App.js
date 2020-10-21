import React, {Component, Fragment} from 'react';
//import './App.css';
import TodoItem from './todoItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  
  addItem() {
    // this.state.list.push('hello react!');
    this.setState({  //不要直接调用this.state.list，而是借用this.setState
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // handleItem(index) {
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({list})
  // }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleChange} />
          {/* this指向的是当前组件 */}
          <button className="red-btn" onClick={this.addItem}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (<TodoItem delete={this.handleDelete} key={index} content={item} index={index} />)
            //return <li key={index} onClick={this.handleItem.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default App;
