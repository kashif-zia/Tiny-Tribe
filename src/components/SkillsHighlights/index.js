'use client'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import Skills1 from '../../../public/assets/images/skillshighlights/steam.svg'
import Skills2 from '../../../public/assets/images/skillshighlights/cognitive.svg'
import Skills3 from '../../../public/assets/images/skillshighlights/playspeed.svg'
import Skills4 from '../../../public/assets/images/skillshighlights/meaningful.svg'
import Skills5 from '../../../public/assets/images/skillshighlights/handon.svg'
import Skills6 from '../../../public/assets/images/skillshighlights/patience.svg'
import Skills7 from '../../../public/assets/images/skillshighlights/confidence.svg'

const SkillsHighlights = () => {
  return (
    <section className={styles['skillhights-wrapper']}>
      <section className={styles['layer-bg']}>
        <UpperLayter />
      </section>
      <section className={styles['content-wrapper']}>
        <h2>SKILLS & HIGHLIGHTS</h2>
        <Container>
          <svg className={styles.planticon}>
            <use xlinkHref="/assets/images/svg/icons.svg#planticon"></use>
          </svg>
          <svg className={styles.skillreversering}>
            <use xlinkHref="/assets/images/svg/icons.svg#skillreversering"></use>
          </svg>
          <svg className={styles.melonicon}>
            <use xlinkHref="/assets/images/svg/icons.svg#melonicon"></use>
          </svg>
          <svg className={styles.skillringup}>
            <use xlinkHref="/assets/images/svg/icons.svg#skillringup"></use>
          </svg>

          <Row>
            <Col>
              <section>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={24}
                  loop={true}
                  speed={2500}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 24,
                    },
                    556: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                    2100: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills1}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Steam Activities
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills2}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Cognitive Growth
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills3}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Play-based Sensory Learning
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills4}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Meaningful Social Connections
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills5}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Hands-on Life Skills
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills6}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Patience and Focus
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card className={styles['skills-card']}>
                      <Image
                        className={styles['skill-img']}
                        src={Skills7}
                        alt="skill"
                      />
                      <Card.Body className="p-0">
                        <Card.Text className={styles['skill-heading']}>
                          Confidence Building
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default SkillsHighlights

const UpperLayter = () => {
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
        fill="#FE9AB2"
      />
    </svg>
  )
}
