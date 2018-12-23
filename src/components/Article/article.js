import React, { Component } from 'react'
import { UnderLay, DarkBox } from '../layout'
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
    const { title, subtitle, id } = this.props.data

    const url = getLink(title, id)
    return (
      <ArticleElement>
        <DarkBox regular>
          <UnderLay regular />
          <Line>
            <h3>{title}</h3>
            <SVGLink href={'https://medium.com/@joshuawootonn/' + url}>
              <img src={Arrow} />
            </SVGLink>
          </Line>
          <p>{subtitle}</p>
        </DarkBox>
      </ArticleElement>
    )
  }
}

export default Article
