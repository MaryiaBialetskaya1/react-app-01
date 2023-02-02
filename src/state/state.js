let store = {
  _state: {
    listPage: {
      tasks: [
        { id: 1, task: "Send invitations" },
        { id: 2, task: "Book the clown" },
        { id: 3, task: "Order cupkes" },
      ],
      newTaskText: "Add new task...",
    },
  },
  _callSubscriber() {
    console.log("State has been changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.listPage = listReduser(this._state.listPage, action);
  },
};
export default store;
