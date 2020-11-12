import React, { useState } from "react";
import { Search } from "semantic-ui-react";
import { connect } from "react-redux";

// Поиск производится по заголовку новости

const SearchPanel = (props) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValue(e.target.value);
    const result = props.news.filter(
      (el) => el.title.toLowerCase().indexOf(value.toLowerCase()) === 0
    );

    setIsLoading(false);
    setResults(result);
  };

  const onResultSelect = (e, { result }) => {
    setValue(result.title);
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
  };
};

export default connect(mapStateToProps)(SearchPanel);
