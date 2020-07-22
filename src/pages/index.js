import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
            Hi! If you're checking my page it's possible that you're looking
            for someone who can help you or your business with some techonology boost.
            Well, I'm someone who can help you with that! <b>:)</b>

            <br /> <br />

            I'm an experienced fullstack developer which means I can build
            web and mobile apps interfaces as well as logic hosted in servers.
            As a freelancer developer I want to provide reliable solutions to
            my clients as well as infrastructures that will keep in budget
            over time and annually won't become something you should be concerned with.

            <br /> <br />

            Overall I love brainstorming, designing and building apps that can
            boost my client's business. I have a wide range of knowledge in technology
            stacks such as <b>C# .NET, NodeJS, React, React Native, Ionic, JavaScript and
            Angular.</b>
            <br /> <br />
            Oh I almost forgot! I also love building and designing games, trying new tools
            and checking new technology every now and then. Nowadays I'm quite fond of using
            Godot Engine with C#!
            <br /> <br />
            If you have an idea or need a solution for your business, don't feel afraid to get
            in touch! Here's my e-mail: <b><a href="mailto:gayan.justo@gmail.com"><span>gayan.justo@gmail.com</span></a></b>
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Stuff I do</h2>
          </header>
          <p>
            Here's a bit of the variety of things I like to do
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-mobile" />
              <h3>Mobile Development</h3>
            </li>
           
            <li>
              <span className="icon major fa-code" />
              <h3>Web Development</h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3>Writing</h3>
            </li>
            <li>
              <span className="icon major fa-gear" />
              <h3>Building Games</h3>
            </li>
            <li>
              <span className="icon major fa-camera" />
              <h3>Photography</h3>
            </li>
            <li>
              <span className="icon major fa-bicycle" />
              <h3>Cycling</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>One more thing</h2>
          </header>
          <p>
            If you're part of a company or is a tech recruites I'm also open to discuss
            availability to work as a full-time or part-time employee and help your company
            with my skills.
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>

        <h3>gayan.justo@gmail.com</h3>

      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
