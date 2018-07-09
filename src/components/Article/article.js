import React, { Component } from 'react'
import { Box, UnderLay } from '../layout'
import { ArticleElement } from './style'
import { SVGLink, Line } from '../typography'
import Arrow from '../Arrow.svg'
import emojiStrip from 'emoji-strip'

function getLink(title, id) {
  return (
    emojiStrip(title)
      .split(' ')
      .join('-')
      .toLowerCase() +
    '-' +
    id
  )
}

class Article extends Component {
  render() {
    const { title,subtitle, id} = this.props.data   
    
    const url = getLink(title, id)
    return (
      <ArticleElement>
        <Box regular>
          <UnderLay light />
          <Line>
            <h2>{title}</h2>
            <SVGLink href={'https://medium.com/@joshuawootonn/' + url}>
              <img src={Arrow} />
            </SVGLink>
          </Line>
          <h3>{subtitle}</h3>
        </Box>
      </ArticleElement>
    )
  }
}

export default Article
