import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Todo } from './dashboard.type';

// TODO追加モーダル制御用
export const addTodoModalAtom = atom<boolean>(false);

// TODO編集モーダル制御用
export const editTodoModalAtom = atom<boolean>(false);

export const todosAtom = atomWithStorage<Todo[]>('todos', []);

export const selectedTodoIdAtom = atom<number | undefined>(undefined);