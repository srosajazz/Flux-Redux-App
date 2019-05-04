const INITIAL_STATE = [
  { id: 1, text: 'Learn Fux & Redux' },
  { id: 2, text: 'Learn DataStructure' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
