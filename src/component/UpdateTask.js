import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updaateTODO } from '../redux/actions/productActions';

class UpdateTask extends Component {
    updateTask = () => {
        const data = {
            index:0,
            title:"Title updated"
        }
        this.props.updatetask(data)
    }
    
  render() {
    return (
      
      <button onClick={()=>this.updateTask()}>Update Task</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatetask: (data) => dispatch(updaateTODO(data))
    }
}
export default connect(null,mapDispatchToProps)(UpdateTask)