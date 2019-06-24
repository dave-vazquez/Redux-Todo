import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { showAll, showCompleted, showIncomplete } from "../actions/filters";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  width: 100%;
  height: 50px;

  padding: 0 10px;

  border-top: 1px solid black;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 30px;

  border: 1px solid black;
`;

class TodoFilters extends React.Component {
  render() {
    const { showAll, showCompleted, showIncomplete } = this.props;
    return (
      <FiltersContainer>
        <Filter onClick={showAll}>All</Filter>
        <Filter onClick={showCompleted}>Completed</Filter>
        <Filter onClick={showIncomplete}>Todo</Filter>
      </FiltersContainer>
    );
  }
}

export default connect(
  null,
  { showAll, showCompleted, showIncomplete }
)(TodoFilters);
