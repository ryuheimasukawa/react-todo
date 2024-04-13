import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Modal, Todo } from './dashboard.type';

export const modalAtom = atom<Modal>({} as Modal);

export const todosAtom = atomWithStorage<Todo[]>('todos', []);