// react imports
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
//styles
import styles from './join.module.css'
const JoinTribe = () => {
  return (
    <div className={styles.containerBg}>
      <Container>
        <div className={`${styles.sectionContainer}`}>
        <div className="row align-self-center">
          <div className="col-lg-3 col mx-auto d-flex justify-content-center  align-items-center   ">
            <Image
              src={'/assets/images/join-tribe/arts-girl.png'}
              width={192}
              height={200}
              alt="art-girl"
              className={styles['art-girl']}
            />
          </div>
          <div className="col-lg-9">
          <div className={`${styles.joinOurTribeBox}`}>
            <h2
              className={`text-uppercase text-center text-lg-start   ${styles.bannerHeading}`}
            >
              Join Our Tribe
            </h2>
            <p className={`${styles.bannerBodyText}`}>
              Ready to be part of the Tiny Tribe family? Click below to connect
              with us and join our exclusive WhatsApp group. Stay updated with
              class details, dates, and a world of creative fun. Let your
              child&apos;s journey with Tiny Tribe begin today.
            </p>
            <div className="d-flex justify-content-center  justify-content-lg-start align-items-center ">
              <a href=" https://wa.me/03064041221" target='_blank' className={`${styles.contactBtn}`}>Contact Us</a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}

//exporting default
export default JoinTribe
