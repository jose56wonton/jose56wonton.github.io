import React, { Component } from 'react'
import { SectionTitle } from '../typography';
import { Container } from '../layout'
import {ArticleWrapper} from './style';
import Article from './article';
class Articles extends Component {
  render () {
    const articles = this.props.data.edges.map((article, i)=> {
      console.log(article.node);
      const data = {
        id: article.node.id,
        author: article.node.author.name,
        datePublish: article.node.firstPublishedAt,
        title: article.node.previewContent.bodyModel.paragraphs[0].text,
        subtitle: article.node.previewContent.bodyModel.paragraphs[1].text,
        body: article.node.previewContent.bodyModel.paragraphs[2].text
      }
      return <Article key={i} data={data} />
    })

    return (
      <Container>
        <SectionTitle>Articles</SectionTitle>
        <ArticleWrapper> 
          {articles}
        </ArticleWrapper>
      </Container>
    )
  }
}

export default Articles