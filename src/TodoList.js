import React, { Component } from 'react'

export class TodoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
<div>
    <br/><br/>
    <div className="todo_item">
    {
        
        this.props.list.map((item , index) => (
            <p key={index}>
            {item.description}
          
           
            <span  className='' 
                          onClick={ 
                                () =>  
                                {  
                                  if(window.confirm('Are you sure you have to Remove this Todo ?'))
                                  {
                                  this.props._DeleteTodo(index) 
                                  }
                                }
                              }
                          >
                          <i className="fa fa-times" aria-hidden="true"></i>
            </span>
           
            </p>
        ))
    }
    </div>
</div> // end of Main Div

        )
    }
}

export default TodoList

