import styles from './about.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
const About = () => {
  return (
    <>
      <section className={styles.AboutSection}>
        <svg className={styles.arrowicon}>
          <use xlinkHref="/assets/images/svg/icons.svg#arrowicon"></use>
        </svg>
        <svg className={styles.stepicon}>
          <use xlinkHref="/assets/images/svg/icons.svg#stepicon"></use>
        </svg>
        <div className={styles.maindivBox}>
          <Container>
            <div className={styles.AboutBox}>
              <Row className={styles.rowInverse}>
                <Col md={8}>
                  <h2 className={styles.aboutheadingH2}>WHO WE ARE</h2>
                  <p className={styles.aboutP}>
                    Tiny Tribe is more than just a club; it&apos;s a journey
                    into the heart of childhood imagination, envisioned and
                    brought to life by a creative mum of two. Rooted in DHA
                    Lahore, our name reflects our ethos – nurturing young minds
                    in a close-knit community setting. As a parent with a deep
                    love for creativity, I saw the need for a space in Pakistan
                    where children are not only building skills but also forming
                    meaningful connections. Our values center on creativity and
                    joyous learning in a gentle environment. We stand out in
                    Lahore&apos;s landscape of children&apos;s clubs by offering
                    this unique blend of play, learning, and artistic
                    exploration, all enveloped in a nurturing community spirit.
                  </p>
                </Col>
                <Col md={4}>
                  <Image
                    src="/assets/images/about/about-Image01.png"
                    width={298}
                    height={368}
                    alt="Child Image"
                    className={styles.aboutImage}
                  />
                </Col>
              </Row>
              <div className={styles.divider}></div>
              <Row>
                <Col md={4}>
                  <Image
                    src="/assets/images/about/about-Image02.jpg"
                    width={298}
                    height={368}
                    alt="Child Image"
                    className={styles.aboutImage}
                  />
                </Col>
                <Col md={8}>
                  <h2 className={styles.aboutheadingH2}>WHAT WE OFFER</h2>
                  <p className={styles.aboutP}>
                    At Tiny Tribe, it&apos;s more than just attending a class;
                    it&apos;s about embedding love, forging friendships and
                    embracing learning in a truly integrated way. Our classes
                    are a canvas for your child&apos;s dreams.
                  </p>
                  <p className={styles.aboutP}>
                    Tailored for ages 1-10, we emphasise play-based learning and
                    hands-on skills in a socially enriching environment. From
                    colorful art projects to engaging STEAM experiments, each
                    session is a step towards self-expression, exploration and
                    social connection.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <svg className={styles.rocketicon}>
          <use xlinkHref="/assets/images/svg/icons.svg#rocketicon"></use>
        </svg>
      </section>
      
    </>
  )
}

export default About
