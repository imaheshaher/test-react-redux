import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTODOItem, deleteTask } from '../redux/actions/productActions';
import UpdateTask from './UpdateTask';

class ReduxContain extends Component {

    updateTask = () => {
        const task = {
            title:"new task"
        }
        this.props.addTask(task)
    }
    componentDidMount(){
        console.log(this.props.todoData,"product rerender")
    }
    deleteTask =(data) =>{
        this.props.removeTask(data)
    }
  render() {
    return (<>
    
    <div>ReduxContain</div>
      <h2>Todo</h2>
      {this.props.todoData.map((todo) => (
          <div>
          <div>{todo.title}</div> 
          <button onClick={()=>this.deleteTask(todo)}>Delete</button>
          </div>
      ))}
      <button onClick={()=> this.updateTask()}>ADd</button>

      <h3>
          <UpdateTask />
      </h3>
      </>
    )
  }
}
const mapStateToProps = (state) => ({

  todoData:state.todoReducer
  });
  const mapDispatchToProps = (dispatch) => {
    return {
        addTask:(data) => dispatch(addTODOItem(data)),
        removeTask :(data) =>dispatch(deleteTask(data))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContain);

