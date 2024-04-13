import { atom } from 'jotai'
import { Modal } from './dashboard.type';

export const modalAtom = atom<Modal>({} as Modal);