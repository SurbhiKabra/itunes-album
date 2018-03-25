import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

// Stateful Component to display the list of albums
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/in/rss/topalbums/limit=100/json')
      .then(response => {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error('Failed to load'));
        }
      })
      .then(response => response.json()) // parse response as JSON
      .then(data => {
        let finalData = this.formatData(data);
        this.setState({
          data: finalData.feed
        })
      })
  }

/*
* formatData() accepts data as a param and slice top 100
*/
  formatData(data) {
    if(data && data.feed.entry) {
      data.feed.entry = data.feed.entry.slice(0,100);
    }
    return data;
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {(this.state.data && this.state.data.entry) ?
          (  this.state.data.entry
            .map((show, index) => <ShowCard key={show.id.attributes['im:id']} {...show} />)) : ''}
        </div>
      </div>
    );
  }
}

export default List;
