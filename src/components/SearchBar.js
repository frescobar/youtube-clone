import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onInputSearchSubmit(this.state.searchInput);
  };
  onChangeHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    return (
      <div className=" ui grid centered " style={{ marginTop: "10px" }}>
        <div className="sixteen wide mobile fourteen wide tablet ten wide computer column  search-bar ui segment ">
          <form className="ui form" onSubmit={this.onSubmitHandler}>
            <div className="field">
              <div>
                <input
                  type="search"
                  placeholder="Search here..."
                  value={this.state.searchInput}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
