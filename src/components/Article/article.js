import React, { Component } from 'react'

import emojiStrip from 'emoji-strip'

function getLink(title,id){
  return emojiStrip(title).split(" ").join("-").toLowerCase()+ "-" +id; 
};


class Article extends Component {
  render () {
    const {title,datePublished,id,author,subtitle,body} = this.props.data;
     const url = getLink(title,id);
    return (
      <div>
        <h2>{title}</h2>
        <a href={"https://medium.com/@joshuawootonn/"+ url}>Link</a>
        <h3>{subtitle}</h3>
        <p>{body}</p>
      </div>
    )
  }
}

export default Article