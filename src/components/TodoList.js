import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selector';
import { Todo } from './Todo';
import { VisibilityFilter } from './VisibilityFilter';

export const TodoList = () => {
    const { todos } = useSelector(state => state);
    const filterTodos = getTodosByVisibilityFilter(todos, VisibilityFilter)
    
    return (
        <Box my={3}>
            {filterTodos.length ? filterTodos.map(todo => (
<Todo key={`todo-${todo.id }`} todo={todo}/>
            )):   <Box textAlign="center" my="4">
            No Todos YAY!
        </Box>}
        </Box>
  
    )
}
