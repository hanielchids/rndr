const USER_STATE = {
  email: "darryn@randrtechsa.com",
  password: "P@55w0rd@1",
};

const Reducer = (state = USER_STATE, action) => {
  console.info("dispatching", action);
  return state;
};

export default Reducer;
