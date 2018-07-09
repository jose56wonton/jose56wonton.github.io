import React, { Component } from 'react'
import { SectionTitle } from '../typography'
import { Container } from '../layout'
import { ArticleWrapper } from './style'
import Article from './article'
class Articles extends Component {
  render() {
    const articles = this.props.data.edges.map((article, i) => {

      const data = {
        id: article.node.id,
        datePublish: article.node.firstPublishedAt,
        title: article.node.title,
        subtitle: article.node.virtuals.subtitle
      }
      return <Article key={i} data={data} />
    })

    return (
      <Container>
        <SectionTitle>
          Articles<span />
        </SectionTitle>
        <ArticleWrapper>{articles}</ArticleWrapper>
      </Container>
    )
  }
}

export default Articles
