'use client'
import React from 'react'
import styles from './banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
const Banner = () => {
  return (
    <>
      <section className={styles.bannerSection}>
        <div className={styles.banner}>
          <Container>
            <Row className={styles.rowInverse}>
              <Col md={6}>
              <div className={styles.bannerTextBox}>
                <h1 className={styles.bannerH1}>
                  <span className={styles.bannerheadingh1}>
                    Nurture Your Child’s Inner
                  </span>
                  <span className={styles.bannerh1yellowtext}>
                    <Swiper
                      direction="vertical"
                      loop={true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      className="textslider"
                    >
                      <SwiperSlide>Creativity.</SwiperSlide>
                      <SwiperSlide>Artist.</SwiperSlide>
                      <SwiperSlide>Baker.</SwiperSlide>
                      <SwiperSlide>Scientist.</SwiperSlide>
                      <SwiperSlide>Explorer.</SwiperSlide>
                      <SwiperSlide>Dreamer.</SwiperSlide>
                    </Swiper>
                  </span>
                </h1>
                <p className={styles.bannerP}>
                  Welcome to Tiny Tribe – a vibrant world where your child&apos;s
                  creativity blossoms! Nestled in the heart of Lahore, we
                  believe every child holds a universe of potential. Join us in
                  nurturing this boundless imagination and watch as they
                  explore, create, and grow.
                </p>
               </div>
              </Col>
              <Col md={6}>
                <div className={styles.bannerImagesBox}>
                  <div className={`${styles.planeIcon} ${styles.moveIconBox}`}>
                    <div className={styles.square}>
                      <svg className={styles.planeicon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#planicon"></use>
                      </svg>
                    </div>
                  </div>
                  <div className={`${styles.ringIcon} ${styles.moveIconBox}`}>
                    <div className={styles.squareStatic}>
                      <svg className={styles.ringicon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#ringicon"></use>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className={styles.swiperImageBox}>
                      <Swiper
                        slidesPerView={1}
                        effect={'fade'}
                        loop={true}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectFade]}
                        className="imageslider"
                      >
                        <SwiperSlide>
                          <Image
                            src="/assets/images/banner/image01.png"
                            width={298}
                            height={368}
                            alt="Child Image"
                            className={styles.bannerImage}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src="/assets/images/banner/image02.png"
                            width={298}
                            height={368}
                            alt="Child Image"
                            className={styles.bannerImage}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src="/assets/images/banner/image03.png"
                            width={298}
                            height={368}
                            alt="Child Image"
                            className={styles.bannerImage}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src="/assets/images/banner/image04.png"
                            width={298}
                            height={368}
                            alt="Child Image"
                            className={styles.bannerImage}
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                 
                  <div className={`${styles.starIcon} ${styles.moveIconBox}`}>
                    <div className={styles.square}>
                      <svg className={styles.staricon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#staricon"></use>
                      </svg>
                    </div>
                  </div>
                  <div className={`${styles.flowerIcon} ${styles.moveIconBox}`}>
                    <div className={styles.squareStatic}>
                      <svg className={styles.flowericon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#flowericon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Image
            src="/assets/images/svg/banner-curve.svg"
            width={1200}
            height={160}
            alt=""
            className={styles.curveImage}
          />
        </div>
      </section>
    </>
  )
}

export default Banner
