const INITIAL_STATE = [
  { id: 1, text: 'Learn Fux & Redux' },
  { id: 2, text: 'Learn DataStructure' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
