import React ,{Component} from 'react'
import TodoItem from './TodoItem'
import {Consumer} from '../context'

//  控制item渲染的次数

class TodoContent extends Component {
 
    render(){
        let {title,type,id} = this.props.type
        return(
            <div className="todo-content">
                <h3>{title} <span className="label label-primary pull-right">{this.props.todos.length}</span> </h3>

                <ul className="list-group">

                    {this.renderChild()}
                    
                </ul>
            </div>
        )
    }
    renderChild(){
        // map会返回一个新数组
        return this.props.todos.map(item => <Consumer key={item.id}>
                                            {(value) => 
                                            <TodoItem 
                                            // {...value}  //也可以直接解构出来
                                            deleteTodo = {value.deleteTodo}
                                            changeFinished = {value.changeFinished}
                                            changeTitle = {value.changeTitle}
                                            todo = {item} 
                                            // deleteTodo = {this.props.deleteTodo}
                                            // changeFinished = {this.props.changeFinished}
                                            // changeTitle = {this.props.changeTitle}
                                            />}</Consumer> )
    }
}

export default TodoContent