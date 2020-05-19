import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux'
import { fetchAllTodos } from '../actions'

class TodoItemList extends Component {
    componentDidMount() {
        this.props.fetchAllTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { todos } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps,{fetchAllTodos})(TodoItemList);