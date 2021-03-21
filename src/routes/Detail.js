import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    if (state !== undefined) {
      const year = state.year;
      const title = state.title;
      const summary = state.summary;
      const poster = state.poster;
      const genres = state.genres;
      return (
        <div className="detail">
          <img src={poster} alt={title} title={title}></img>
          <div className="detail__data">
            <h3 className="detail__title">{title}</h3>
            <h5 className="detail__year">{year}</h5>
            <ul className="detail__genres">
              {genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
            <p className="movie__summary">{summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
