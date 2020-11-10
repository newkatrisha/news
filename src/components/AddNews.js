import React, { useState } from "react";
import { connect } from "react-redux";

const AddNews = () => {
  const [article, setArticle] = useState({
    title: "",
    text: "",
    data: "",
  });

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  console.log(article);

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Text</label>
          <textarea
            name="text"
            placeholder="Add your text here"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (news) => {
      dispatch({ type: "ADD", news });
    },
  };
};

export default connect(mapDispatchToProps)(AddNews);
