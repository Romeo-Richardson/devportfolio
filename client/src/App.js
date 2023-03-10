// React
import { useState, useRef } from 'react';
// React Router DOM
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Styled Components
import { Global } from './styles/Global';
import { Navbar } from './styles/Navbar';
import { NavbarButton } from './styles/NavbarButton';
import { NavbarButtonContainer } from './styles/NavbarButtonContainer';
import { Welcome } from './styles/Welcome';
import { Spacer } from './styles/Spacer';
import { SectionTextContainer } from './styles/SectionTextContainer';
import { SkillsContainer } from './styles/SkillsContainer';
import { SkillRow } from './styles/SkillRow';
import { SkillIconContainer } from './styles/SkillIconContainer';
import { SkillIcon } from './styles/SkillIcon';
import { CustomHeader } from './styles/CustomHeader';
import { ContactInputContainer } from './styles/ContactInputContainer';
import { ContactInput } from './styles/ContactInput';
import { ContactField } from './styles/ContactField';
import { ContactSubmit } from './styles/ContactSubmit';
import { Footer } from './styles/Footer';
import { Hover } from './styles/Hover';
import { HomePicContainer } from './styles/HomePicContainer';
import { ResponsiveImage } from './styles/ResponsiveImage';
import { AboutSection } from './styles/AboutSection';
import { ResponsiveText } from './styles/ResponsiveText';
import { ContactSection } from './styles/ContactSection';
import { SkillsSection } from './styles/SkillsSection';
import { ProjectEntry } from './styles/ProjectEntry';
import { ProjectPicContainer } from './styles/ProjectPicContainer';
import { ProjectTextContainer } from './styles/ProjectTextContainer';
import { ProjectButtonsContainer } from './styles/ProjectButtonsContainer';
import { ProjectButton } from './styles/ProjectButton';
import { ProjectHeader } from './styles/ProjectHeader';
import { CustomLink } from './styles/CustomLink';

// Images
import expressIcon from './images/expressjs.svg'
import reactIcon from './images/reactIcon.png'
import reduxIcon from './images/reduxIcon.png'
import mongoDBIcon from './images/mongoDB.png'
import NodeIcon from './images/NodeJS.png'
import SCIcon from './images/styled-components.png'
import macbook from './images/macbook.png'
import alist from './images/alist1.png'
import giphy from './images/giphy.png'


function App() {

  // State
  const [nameInput, setNameInput] = useState('')
  const [inquiryInput, setInquiryInput] = useState('')

  // Ref
  const inputRef = useRef()
  const inquiryRef = useRef()

  // React Router DOM 
  const navigate = useNavigate()

  // Logic

  const postInquiry = async () => {
    if (nameInput === '') {
      alert('Please enter a valid name')
    } else if (inquiryInput === '') {
      alert('Please enter a valude inquiry')
    } else {
      inputRef.current.value = ''
      inquiryRef.current.value = ''
      await fetch('/postInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameInput,
          inquiry: inquiryInput
        })
      })
      alert(`Message sent! I'll get back to you as soon as I can.`)
    }
  }

  const projectData = [
    {
      projectName: 'A-List',
      projectDetails: 'Fullstack Todo App, featuring a Custom API, Database, Nightmode, Login/Logout, Optimistic Updates, and CRUD functionality',
      projectLink: 'https://alistportfolio.herokuapp.com/',
      projectSourceCode: 'https://github.com/Romeo-Richardson/alist/blob/main/client/src/components/Main.js',
      projectImage: 'https://i.imgur.com/5TiNQpw.png'
    },
    {
      projectName: 'Primitive',
      projectDetails: 'Minimal Styling, Fully responsive, Fullstack eCommerce site featuring a Custom API to handle all Product Data, real world purchases using the Stripe API, blazing flast load speeds thanks to React Router DOM and React Query, fully functioning comments and a cart system using Redux.',
      projectLink: 'https://primitive-ecommerce.herokuapp.com/',
      projectSourceCode: 'https://github.com/Romeo-Richardson/primitive/blob/main/client/src/components/ProductDetails.js',
      projectImage: 'https://i.imgur.com/WtqUBFN.png'
    },
    {
      projectName: 'Giphy',
      projectDetails: 'A simple app that searches and displays GIFs using the GIPHY API, and React. This was my first React Project.',
      projectLink: 'https://romeo-test-e2958.web.app/',
      projectSourceCode: 'https://github.com/Romeo-Richardson/API-Example',
      projectImage: 'https://i.imgur.com/Awpns7n.png'
    },
    {
      projectName: 'Expense Tracker',
      projectDetails: 'An expense tracker that takes a weeks expenses, a weekly budget, then calcuates averages and accurately displays a graph based on expense relative to budget. Made with Vanilla JS, CSS and HTML.',
      projectLink: 'https://test-portfolio-4e563.web.app/Expense-Tracker/expense.html',
      projectSourceCode: 'https://github.com/Romeo-Richardson/Expense-Tracker',
      projectImage: 'https://i.imgur.com/3EQp5tv.png'
    },
    {
      projectName: 'Tip Calculator',
      projectDetails: 'An app that takes in a price, a tip percantage, and the amount of people to split the final cost amongst and returns both the total cost and amount spent in tip per person. Made with Vanilla JS, CSS and HTML.',
      projectLink: 'https://test-portfolio-4e563.web.app/Tip-Calculator/calc.html',
      projectSourceCode: 'https://github.com/Romeo-Richardson/Tip-Calculator',
      projectImage: 'https://i.imgur.com/YeyTd5G.png'
    },
    {
      projectName: 'Survey',
      projectDetails: 'A simple survey page that takes in a rating and displays it on the following page. Made with Vanilla JS, CSS and HTML.',
      projectLink: 'https://test-portfolio-4e563.web.app/Survey-Example/Survey.html',
      projectSourceCode: 'https://github.com/Romeo-Richardson/Survey-Example',
      projectImage: 'https://i.imgur.com/cce0uZu.png'
    },
    {
      projectName: 'My First Project!',
      projectDetails: `It's not much but man did it feel great creating something for the first time :)`,
      projectLink: 'https://test-portfolio-4e563.web.app/Product%20Preview%20Card/product-preview-card.html',
      projectSourceCode: 'https://github.com/Romeo-Richardson?tab=repositories',
      projectImage: 'https://i.imgur.com/rKZuYfw.png'
    }
  ]

  return (
    <>
      <Global />
      <Navbar>
        <Welcome>Romeo Richardson</Welcome>
        <NavbarButtonContainer>
          <NavbarButton onClick={() => { navigate('/') }}>Home</NavbarButton>
          <NavbarButton onClick={() => { navigate('/projects') }}>Projects</NavbarButton>
          <NavbarButton><CustomLink href='https://1drv.ms/w/s!AteB6oDGc_2mgZoULDo0BIdQZat-9g?e=bUTG87'>Resume</CustomLink></NavbarButton>
        </NavbarButtonContainer>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <AboutSection top={'50px'}>
              <CustomHeader>ABOUT</CustomHeader>
              <Spacer></Spacer>
              <SectionTextContainer>
                <ResponsiveText>Hello, my name is Romeo and I'm a Fullstack Software Developer based out of California. I've had a passion for Software Developement since Highschool, after two years of Project Exection I've decided to make a career doing what I love.</ResponsiveText>
              </SectionTextContainer>
              <HomePicContainer>
                <img src={macbook} alt='Computer on a Tabletop'></img>
              </HomePicContainer>
            </AboutSection>
            <SkillsSection ai={'flex-end'} top={'100px'}>
              <CustomHeader>SKILLS</CustomHeader>
              <Spacer></Spacer>
              <SectionTextContainer>
                <ResponsiveText>As a Fullstack developer I have the necessary skills to carry out front and back end operations. For Front End I use React alongside Styled Components as my CSS Framework and Redux/React Query for client and server state management respectively. For Back End operations I use the MERN stack.</ResponsiveText>
              </SectionTextContainer>
              <SkillsContainer>
                <SkillRow bg={'purple'}>
                  <SkillIconContainer>
                    <SkillIcon src={reactIcon}></SkillIcon>
                  </SkillIconContainer>
                  <SkillIconContainer>
                    <SkillIcon src={reduxIcon}></SkillIcon>
                  </SkillIconContainer>
                  <SkillIconContainer>
                    <SkillIcon src={SCIcon}></SkillIcon>
                  </SkillIconContainer>
                </SkillRow>
                <SkillRow bg={'yellow'}>
                  <SkillIconContainer>
                    <SkillIcon src={mongoDBIcon}></SkillIcon>
                  </SkillIconContainer>
                  <SkillIconContainer>
                    <SkillIcon src={expressIcon}></SkillIcon>
                  </SkillIconContainer>
                  <SkillIconContainer>
                    <SkillIcon src={NodeIcon}></SkillIcon>
                  </SkillIconContainer>
                </SkillRow>
              </SkillsContainer>
            </SkillsSection>
            <ContactSection top={'150px'}>
              <CustomHeader>CONTACT ME</CustomHeader>
              <Spacer></Spacer>
              <SectionTextContainer>
                <ResponsiveText>Messages sent here will be sent directly to my Database through a custom API, you can also email me at mrculatr101@outlook.com or call me at 209-621-4322. I look forward to working with you!</ResponsiveText>
              </SectionTextContainer>
              <ContactInputContainer>
                <ContactInput placeholder='Name or Company' ref={inputRef} onChange={(e) => { setNameInput(e.target.value) }}></ContactInput>
                <ContactField placeholder='Make sure to include contact info.' ref={inquiryRef} onChange={(e) => { setInquiryInput(e.target.value) }}></ContactField>
                <ContactSubmit onClick={postInquiry}>Submit</ContactSubmit>
              </ContactInputContainer>
            </ContactSection>
          </>
        }>
        </Route>
        <Route path='/projects' element={
          <>
            {projectData.map((project) => {
              return (
                <ProjectEntry top={'50px'}>
                  <ProjectHeader>{project.projectName}</ProjectHeader>
                  <Spacer></Spacer>
                  <ProjectTextContainer>
                    <ResponsiveText top={'30px'}>{project.projectDetails}</ResponsiveText>
                  </ProjectTextContainer>
                  <ProjectPicContainer>
                    <ResponsiveImage src={project.projectImage} alt='Unable to display image'></ResponsiveImage>
                  </ProjectPicContainer>
                  <ProjectButtonsContainer>
                    <ProjectButton>
                      <a href={project.projectLink}>View Project</a>
                    </ProjectButton>
                    <ProjectButton>
                      <a href={project.projectSourceCode}>View Source Code</a>
                    </ProjectButton>
                  </ProjectButtonsContainer>
                </ProjectEntry>
              )
            })}
          </>
        }>
        </Route>
      </Routes>
      <Footer>
        <Hover onClick={() => { navigate('/') }}>Home</Hover>
        <Hover onClick={() => { navigate('/projects') }}>My Work</Hover>
        <CustomLink color={'purple'} href='https://1drv.ms/w/s!AteB6oDGc_2mgZoOjqqeqWwGbYNTKQ?e=7LbyB1'>Resume</CustomLink>
        <CustomLink color={'purple'} href='https://github.com/Romeo-Richardson/devportfolio/blob/main/client/src/App.js'>Source Code</CustomLink>
      </Footer>
    </>
  );
}

export default App;
