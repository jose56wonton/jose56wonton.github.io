import React, { Component } from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Footer from '../components/Footer';
import Experiences from '../components/Experience'
import Projects from '../components/Project';
import Articles from '../components/Article';



class IndexPage extends Component {
  render() {
    const { data } = this.props
    const introData = {
      introHTML: data.contentfulIntro.intro.childMarkdownRemark.html,
    }
    const aboutData = {
      titleHTML: data.contentfulAbout.title.childMarkdownRemark.html,
      bodyHTML: data.contentfulAbout.body.childMarkdownRemark.html,
      images: data.contentfulAbout.images,
      resumeURL: data.contentfulAbout.resume.file.url
    }
    const experienceData = data.allContentfulExperience;
    const projectData = data.allContentfulProject;
    const articleData = data.allMediumPost;    
    const footerdata = data.contentfulLinks;

    return (
      <div>
        <Intro data={introData} />
        <About data={aboutData} />
        <Experiences data={experienceData} />
        <Projects data={projectData} />
        <Articles data={articleData} />
        <Footer data={footerdata}/> 
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    contentfulIntro {
      intro {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulAbout {
      title {
        childMarkdownRemark {
          html
        }
      }
      resume {
        file {
          url
          fileName
          contentType
        }        
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        sizes(maxWidth: 700, quality: 60) {
          ...GatsbyContentfulSizes
        }
      }
    }
    allContentfulExperience(sort:{fields:[dateForSorting],order:DESC}) {
      edges {
        node {
          icon {
            sizes(maxWidth: 200, quality: 40) {
              ...GatsbyContentfulSizes
            }
          }
          title
          location
          date
          dateForSorting
          tools {
            id
            childMarkdownRemark {
              html
            }
          }
          childContentfulExperienceBodyTextNode {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulProject(sort:{fields:[dateForSorting],order:DESC}) {
      edges {
        node {
          title
          dateForSorting
          date
          link
          images{
            sizes {
              src
            }
          }        
          childContentfulProjectBodyTextNode{
            childMarkdownRemark{
              html
            }
          }
          childContentfulProjectToolsTextNode{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    }
    contentfulLinks {
      github
      linkedIn
      medium
    } 
    allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 5) {
      edges {
        node {        
          firstPublishedAt
          id
          previewContent {
            bodyModel{
              paragraphs{
                text
              }
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
