import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.onInputSearchSubmit("React js");
  }

  onInputSearchSubmit = async (inputSearch) => {
    const response = await youtube.get("/search", {
      params: {
        q: inputSearch,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className=" ui container ">
        <SearchBar onInputSearchSubmit={this.onInputSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className=" twelve wide column ">
              <VideoDetails selectedVideo={this.state.selectedVideo} />
            </div>
            <div className=" four wide column ">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
