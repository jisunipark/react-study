import { FormEventHandler, useId, useState } from 'react';
import TrashcanIcon from '../../assets/TrashcanIcon';
import TodoItem from './TodoItem';
import { StyledContainer } from './TodoListStyle';
import TodoInput from './TodoInput';
import { TDItem, TDList } from '../../types/TodoListTypes';
import { generateId } from '../../util/createId';

/* 중복 ID 생성 방지용 함수 */
function isExistingId(list: TDList, id: number) {
  const idList = list.map((item) => item.id);
  const isExisting = idList.includes(id);
  return isExisting;
}

export default function TodoList() {
  const [todoList, setTodoList] = useState<TDList>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);

  const [newTask, setNewTask] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const itemId = generateId(4);
    const isAvailableId = !isExistingId(todoList, itemId);

    if (!newTask || !isAvailableId) return;

    const nextTodoItem: TDItem = {
      id: itemId,
      content: newTask || '',
      isChecked: false,
      isDeleted: false,
    };
    setTodoList((prev) => [...prev, nextTodoItem]);
    setNewTask('');
  };

  const handleTrashcanClick = () => {
    setIsDeleteMode(!isDeleteMode);
    setDeleteCount(0);
    if (isDeleteMode) {
      const newTodoList = todoList.filter((item) => {
        console.log(item); // false로 안 바뀌는 문제
        return item.isDeleted === false;
      });
      console.log('newTodoList', newTodoList);
      setTodoList(newTodoList);
    }
  };

  return (
    <StyledContainer>
      <div className="header">
        <h1>Todo List</h1>
        <button type="button" onClick={handleTrashcanClick}>
          {isDeleteMode ? (
            <TrashcanIcon fill="#E9000A" deleteCount={deleteCount} />
          ) : (
            <TrashcanIcon />
          )}
        </button>
      </div>
      <div className="todo-list">
        {todoList.map((todo, idx) => (
          <TodoItem
            key={idx}
            item={todo}
            isDeleteMode={isDeleteMode}
            setDeleteCount={setDeleteCount}
          >
            {todo.content}
          </TodoItem>
        ))}
        <TodoInput newTask={newTask || ''} setNewTask={setNewTask} onSubmit={handleSubmit} />
      </div>
    </StyledContainer>
  );
}
