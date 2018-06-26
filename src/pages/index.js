import React,{Component} from 'react'
import Intro from '../components/intro';
import About from '../components/about';
import Experience from '../components/experience';

class IndexPage extends Component {
  render () {
    const {data} = this.props
    const introData ={
      introHTML: data.contentfulIntro.intro.childMarkdownRemark.html
    }
    return (
      <div>
      <Intro data={introData} /> 
      <About/>
      <Experience/>
      
      </div>
    )
  }
}

export default IndexPage


export const query = graphql`
  query IndexQuery {
    contentfulIntro{
      intro {     
        childMarkdownRemark {        
          html
        }
      }   
    }
  }
`;