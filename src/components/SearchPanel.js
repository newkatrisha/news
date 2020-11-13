import React, { useState } from "react";
import { Search } from "semantic-ui-react";
import { connect } from "react-redux";
import { getNewsList } from "../utils/utils";
import { updateFilteredArticles } from "../store/actions/newsActions";

// Поиск производится по заголовку новости

const SearchPanel = (props) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValue(e.target.value);
    const news = getNewsList(props.currentUser, props.news);
    const result = news.filter(
      (el) => el.title.toLowerCase().indexOf(value.toLowerCase()) === 0
    );

    setIsLoading(false);
    setResults(result);
  };

  const onResultSelect = (e, { result }) => {
    setValue(result.title);
    props.updateFilteredArticles(result);
    setValue("");
  };

  return (
    <Search
      loading={isLoading}
      onSearchChange={searchData}
      onResultSelect={onResultSelect}
      results={results}
      value={value}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.articles,
    currentUser: state.users.currentUser,
    filteredArticles: state.news.filteredArticles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilteredArticles: (result) => {
      dispatch(updateFilteredArticles(result));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
