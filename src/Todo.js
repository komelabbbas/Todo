import React, { Component } from 'react'
import TodoList from './TodoList';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

export class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todo_text : '' ,
             LoadingShow : false ,
             item :[
                {
                  "description": "Start Learning React JS .",
                },
                {
                  "description": "Handling Project which has been Assign .",
                },
                {
                  "description": "Follow the Structure of Javascript ES6 .",
                },
                
               ]
        }
    }

    _FormSubmit = (e) => {

        e.preventDefault() ;
        let new_todo = this.state.item ;

        this.setState({ LoadingShow: true })
        if(this.state.todo_text === '')
        {
             NotificationManager.error('Please Fill Todo' , '' , 1000) ;
           
        }
        else{
          new_todo.push({
            // description : this.state.todo_text ,
            description : this.state.todo_text.charAt(0).toUpperCase() +  this.state.todo_text.slice(1),
          })
          this.setState({
            item : new_todo ,
            todo_text : '' ,
          })

          NotificationManager.success('Todo Add Successfully' , '' , 1000);
        }
       
        setTimeout(() => {
          this.setState({ LoadingShow: false })
        }, 300);
        
    }

    _DeleteTodo = (id) => {
        
        let item = this.state.item ;
        item.splice(id , 1)
        
        this.setState({
          item 
        })
    }
 
  

    render() {
        return (
            
<div className='main_section'>
      <Loading
          show={this.state.LoadingShow}
          color="green"
        />
        
<div className='row'>
    <div className='col-sm-12'>
        {/* <h3 style={{ paddingBottom : '10px' }}>Todos <span style={{ color:'#868e96'}}> Built with React JS</span> </h3>
        <h4 style={{ color:'#868e96'}}>Home <span>/</span> Todos</h4> */}
        <br/>
    </div>

    <div className='col-sm-12 todo_border'>

    <div className='col-sm-3'></div>
    <div className='col-sm-6' id="todo_body">
        <div className="center_heading">
        <h4>TODOS APP</h4>
        <p>This Demo showcases a simple workflow with React Js.</p>
        </div>
        <div>
            <br/>
            <form onSubmit={this._FormSubmit}>
                <input 
                type="text" 
                name="todo_text" 
                value={this.state.todo_text}  
                onChange={ (e) => ( this.setState({  todo_text : e.target.value }) ) } 
                className="form-control"
                placeholder="New Todo"
                />
            </form>
        </div>

        <div>
            <TodoList list = {this.state.item} _DeleteTodo={this._DeleteTodo}/>
        </div>


    </div>  {/* end of todo_body */}
   
    <div className='col-sm-3'></div>
    </div>

</div> {/* end of main row */}
<NotificationContainer/>
</div> 
// end of main div main_section
        )
    }
}

export default Todo
