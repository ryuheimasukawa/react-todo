/** todoオブジェクトの型 */
export interface Todo {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

/** モーダルオブジェクトの型 */
export type Modal = {
    isShow: boolean,
    todoId: number,
}