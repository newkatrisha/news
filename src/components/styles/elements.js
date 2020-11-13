export const loginForm = (onChange, handleLogin) => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Login</label>
        <input type="text" name="id" placeholder="login" onChange={onChange} />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={onChange}
        />
      </div>
      <button className="ui button" type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export const addNews = (onChange, onSubmit) => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={onChange}
        />
      </div>
      <div className="field">
        <label>Text</label>
        <textarea
          name="content"
          placeholder="Add your text here"
          cols="30"
          rows="10"
          onChange={onChange}
        ></textarea>
      </div>

      <button className="ui button" type="submit" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};
