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
    const aboutData = {
      titleHTML: data.contentfulAbout.title.childMarkdownRemark.html,
      bodyHTML: data.contentfulAbout.body.childMarkdownRemark.html,
      images: data.contentfulAbout.images
    }
    console.log(this.props.data);
    return (
      <div>
      <Intro data={introData} /> 
      <About data={aboutData}/>
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
    contentfulAbout {
      title{
        childMarkdownRemark{
          html
        }
      }
      body{
        childMarkdownRemark{
          html
        }
      }
      images{
        sizes(maxWidth: 1240, quality: 90 ) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;