'use client'
import React from 'react'
import styles from './classes.module.css'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Link from 'next/link'

const Classes = () => {
  return (
    <section className={styles['classes-wrapper']}>
      <div className={styles['layer-bg']}>
        <UpperLayerBG />
      </div>
      <div className={styles.classes}>
        <Container className={styles.classContainer}>
          <h1 className={styles.classesHeading}>OUR CLASSES</h1>
          <section className={styles['desktop-tab-container']}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="ArtCraft">
              <Row>
                <Col sm={3}>
                  <Nav
                    // variant="pills"
                    className="flex-column"
                  >
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        eventKey="ArtCraft"
                        className={styles.upperLink}
                      >
                        Arts & Crafts{' '}
                        <div className={styles.arrowDiv}>
                          <ArrowSVG />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        eventKey="SteamExperiments"
                        className={styles.upperLink}
                      >
                        STEAM Experiments
                        <div className={styles.arrowDiv}>
                          <ArrowSVG />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link eventKey="Baking" className={styles.upperLink}>
                        Baking
                        <div className={styles.arrowDiv}>
                          <ArrowSVG />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        eventKey="ExpertWorkshops"
                        className={styles.upperLink}
                      >
                        Expert Workshops
                        <div className={styles.arrowDiv}>
                          <ArrowSVG />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.navItem}>
                      <Nav.Link
                        eventKey="BabySensory"
                        className={styles.upperLink}
                      >
                        Baby Sensory
                        <div className={styles.arrowDiv}>
                          <ArrowSVG />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className={styles.contentSection}>
                  <Tab.Content>
                    <Tab.Pane
                      className={styles.tabContainer}
                      eventKey="ArtCraft"
                    >
                      <div className={styles.artTab}>
                        <h2 className={styles.tabHeading}>Art & Craft</h2>
                        <p className={styles.description}>
                          Unleash the artist within! Our arts and crafts classes
                          are a creative playground, where kids dive into a
                          world of colors and textures. They&apos;ll learn
                          techniques in painting, collage-making, and sculpture,
                          developing fine motor skills and artistic expression.
                          Each session is a new adventure, from crafting
                          nature-inspired art to exploring different cultural
                          art forms, ensuring a rich and diverse creative
                          experience.
                        </p>
                        <Link
                          href=" https://wa.me/03064041221"
                          target="_blank"
                          className={styles.contactBtn}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <Image
                        src="/assets/images/classes/classes.png"
                        width={257}
                        height={484}
                        className={styles.image}
                        alt="class"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className={styles.tabContainer}
                      eventKey="SteamExperiments"
                    >
                      <div className={styles.artTab}>
                        <h2 className={styles.tabHeading}>STEAM Experiments</h2>
                        <p className={styles.description}>
                          Where science meets imagination! Our STEAM classes
                          blend science, technology, engineering, art, and math
                          to ignite curiosity and foster innovative thinking.
                          Children engage in hands-on experiments, from building
                          simple machines to conducting safe chemical reactions.
                          These activities not only teach scientific concepts
                          but also encourage problem-solving and critical
                          thinking, preparing young minds for a tech-savvy
                          world.
                        </p>
                        <Link
                          href=" https://wa.me/03064041221"
                          target="_blank"
                          className={styles.contactBtn}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <Image
                        src="/assets/images/classes/classes.png"
                        width={257}
                        height={484}
                        className={styles.image}
                        alt="class"
                      />
                    </Tab.Pane>
                    <Tab.Pane className={styles.tabContainer} eventKey="Baking">
                      <div className={styles.artTab}>
                        <h2 className={styles.tabHeading}>Baking</h2>
                        <p className={styles.description}>
                          Step into our Tiny Tribe kitchen where little hands
                          create big wonders! Our baking classes blend fun and
                          learning, as children measure, mix, and knead.
                          They&apos;ll learn the basics of baking, from cupcakes
                          to pizzas, understanding the science behind cooking.
                          These sessions are more than just recipes; they
                          instill life skills like precision and patience, all
                          while enjoying the delicious fruits of their labor.
                        </p>
                        <Link
                          href=" https://wa.me/03064041221"
                          target="_blank"
                          className={styles.contactBtn}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <Image
                        src="/assets/images/classes/classes.png"
                        width={257}
                        height={484}
                        className={styles.image}
                        alt="class"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className={styles.tabContainer}
                      eventKey="ExpertWorkshops"
                    >
                      <div className={styles.artTab}>
                        <h2 className={styles.tabHeading}>Expert Workshops</h2>
                        <p className={styles.description}>
                          Dive deeper into unique skills with our Expert
                          Workshops. These special sessions, led by specialists
                          in fields like pottery, storytelling, and music, offer
                          children a chance to explore new hobbies and talents.
                          Whether molding clay into pottery, weaving tales in a
                          storytelling circle, or learning self-regulation
                          through body movement, these workshops provide
                          enriching experiences that go beyond the everyday
                          curriculum.
                        </p>
                        <Link
                          href=" https://wa.me/03064041221"
                          target="_blank"
                          className={styles.contactBtn}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <Image
                        src="/assets/images/classes/classes.png"
                        width={257}
                        height={484}
                        className={styles.image}
                        alt="class"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className={styles.tabContainer}
                      eventKey="BabySensory"
                    >
                      <div className={styles.artTab}>
                        <h2 className={styles.tabHeading}>Baby Sensory</h2>
                        <p className={styles.description}>
                          Tailored for our youngest learners, these classes are
                          a sensory delight. They combine music, textures, and
                          gentle movement to stimulate your baby&apos;s
                          development. Activities like soft play, musical light
                          shows, and tactile experiences support cognitive
                          growth and sensory awareness. In these classes, your
                          baby&apos;s first educational steps are filled with
                          joy, bonding, and discovery.
                        </p>
                        <Link
                          href=" https://wa.me/03064041221"
                          target="_blank"
                          className={styles.contactBtn}
                        >
                          Contact Us
                        </Link>
                      </div>
                      <Image
                        src="/assets/images/classes/classes.png"
                        width={257}
                        height={484}
                        className={styles.image}
                        alt="class"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                {/* <Col sm={3} className={styles.imageSection}>
                  <Image
                    src="/assets/images/classes/classes.png"
                    width={257}
                    height={484}
                    className={styles.image}
                    alt="class"
                  />
                </Col> */}
              </Row>
            </Tab.Container>
          </section>
          <section className={styles['mobile-tab-container']}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.upperMBLink}>
                  Arts & Crafts
                  <div className={styles.arrowDiv}>
                    <ArrowSVG />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.artTab}>
                    <h2 className={styles.tabHeading}>Art & Craft</h2>
                    <p className={styles.description}>
                      Unleash the artist within! Our arts and crafts classes are
                      a creative playground, where kids dive into a world of
                      colors and textures. They&apos;ll learn techniques in
                      painting, collage-making, and sculpture, developing fine
                      motor skills and artistic expression. Each session is a
                      new adventure, from crafting nature-inspired art to
                      exploring different cultural art forms, ensuring a rich
                      and diverse creative experience.
                    </p>
                    <Link
                      href=" https://wa.me/03064041221"
                      target="_blank"
                      className={styles.contactBtn}
                    >
                      Contact Us
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={styles.upperMBLink}>
                  STEAM Experiments
                  <div className={styles.arrowDiv}>
                    <ArrowSVG />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.artTab}>
                    <h2 className={styles.tabHeading}>STEAM Experiments</h2>
                    <p className={styles.description}>
                      Where science meets imagination! Our STEAM classes blend
                      science, technology, engineering, art, and math to ignite
                      curiosity and foster innovative thinking. Children engage
                      in hands-on experiments, from building simple machines to
                      conducting safe chemical reactions. These activities not
                      only teach scientific concepts but also encourage
                      problem-solving and critical thinking, preparing young
                      minds for a tech-savvy world.
                    </p>
                    <Link
                      href=" https://wa.me/03064041221"
                      target="_blank"
                      className={styles.contactBtn}
                    >
                      Contact Us
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={styles.upperMBLink}>
                  Baking
                  <div className={styles.arrowDiv}>
                    <ArrowSVG />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.artTab}>
                    <h2 className={styles.tabHeading}>Baking</h2>
                    <p className={styles.description}>
                      Step into our Tiny Tribe kitchen where little hands create
                      big wonders! Our baking classes blend fun and learning, as
                      children measure, mix, and knead. They&apos;ll learn the
                      basics of baking, from cupcakes to pizzas, understanding
                      the science behind cooking. These sessions are more than
                      just recipes; they instill life skills like precision and
                      patience, all while enjoying the delicious fruits of their
                      labor.
                    </p>
                    <Link
                      href=" https://wa.me/03064041221"
                      target="_blank"
                      className={styles.contactBtn}
                    >
                      Contact Us
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={styles.upperMBLink}>
                  Expert Workshops
                  <div className={styles.arrowDiv}>
                    <ArrowSVG />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.artTab}>
                    <h2 className={styles.tabHeading}>Expert Workshops</h2>
                    <p className={styles.description}>
                      Dive deeper into unique skills with our Expert Workshops.
                      These special sessions, led by specialists in fields like
                      pottery, storytelling, and music, offer children a chance
                      to explore new hobbies and talents. Whether molding clay
                      into pottery, weaving tales in a storytelling circle, or
                      learning self-regulation through body movement, these
                      workshops provide enriching experiences that go beyond the
                      everyday curriculum.
                    </p>
                    <Link
                      href=" https://wa.me/03064041221"
                      target="_blank"
                      className={styles.contactBtn}
                    >
                      Contact Us
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className={styles.upperMBLink}>
                  Baby Sensory
                  <div className={styles.arrowDiv}>
                    <ArrowSVG />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className={styles.artTab}>
                    <h2 className={styles.tabHeading}>Baby Sensory</h2>
                    <p className={styles.description}>
                      Tailored for our youngest learners, these classes are a
                      sensory delight. They combine music, textures, and gentle
                      movement to stimulate your baby&apos;s development.
                      Activities like soft play, musical light shows, and
                      tactile experiences support cognitive growth and sensory
                      awareness. In these classes, your baby&apos;s first
                      educational steps are filled with joy, bonding, and
                      discovery.
                    </p>
                    <Link
                      href=" https://wa.me/03064041221"
                      target="_blank"
                      className={styles.contactBtn}
                    >
                      Contact Us
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </Container>
      </div>
    </section>
  )
}

const ArrowSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <mask
        id="mask0_180_2697"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_180_2697)">
        <path
          d="M7.53332 12.8666C7.4111 12.7444 7.34721 12.5888 7.34166 12.4C7.3361 12.2111 7.39443 12.0555 7.51666 11.9333L10.7833 8.66662H3.33332C3.14443 8.66662 2.9861 8.60273 2.85832 8.47495C2.73055 8.34717 2.66666 8.18884 2.66666 7.99995C2.66666 7.81106 2.73055 7.65273 2.85832 7.52495C2.9861 7.39717 3.14443 7.33328 3.33332 7.33328H10.7833L7.51666 4.06662C7.39443 3.9444 7.3361 3.78884 7.34166 3.59995C7.34721 3.41106 7.4111 3.25551 7.53332 3.13328C7.65555 3.01106 7.8111 2.94995 7.99999 2.94995C8.18888 2.94995 8.34443 3.01106 8.46666 3.13328L12.8667 7.53328C12.9333 7.58884 12.9805 7.65828 13.0083 7.74162C13.0361 7.82495 13.05 7.91106 13.05 7.99995C13.05 8.08884 13.0361 8.17217 13.0083 8.24995C12.9805 8.32773 12.9333 8.39995 12.8667 8.46662L8.46666 12.8666C8.34443 12.9888 8.18888 13.05 7.99999 13.05C7.8111 13.05 7.65555 12.9888 7.53332 12.8666Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

const UpperLayerBG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="120"
      viewBox="0 0 1440 120"
      fill="none"
    >
      <path
        d="M232.148 112.148C145.217 117.083 41.4136 85.8299 -0.0378494 65.2962L-107 159H1547C1398.3 89.5902 1227.85 44.8918 1046.1 9.76868C853.05 -27.5391 551.072 52.3332 445.203 76.5756C339.11 100.869 339.11 106.075 232.148 112.148Z"
        fill="#FEC85A"
      />
    </svg>
  )
}
export default Classes
