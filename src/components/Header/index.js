'use client';
import { useState } from 'react'
import styles from './header.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleButtonClick = (e) => {
    e.preventDefault()
    setIsOverlayOpen(!isOverlayOpen)
    setIsHamburgerOpen(!isHamburgerOpen)
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={styles.mainHeader}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.MainNavBar}>
                <div className={styles.mainLogo}>
                  <Link href="/">
                  <Image
                    src="/assets/images/logo/mainLogo.png"
                    width={153}
                    height={30}
                    alt="Tiny Tribe Logo"
                  />
                  </Link>
                </div>
                <div className={styles.butttonGroup}>
                  <Link
                    href=" https://wa.me/03064041221"
                    className={styles.contactBtn}
                    target="_blank"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="https://www.instagram.com/tinytribe.pk/"
                    className={styles.followBtn}
                    target="_blank"
                  >
                    Follow Us
                  </Link>
                </div>
              
              
                <div className='mbl-toggle' onClick={handleButtonClick}>
                  <div className={`menu btn15 ${isOpen ? 'open' : ''}`} onClick={toggleMenu} data-menu='15'>
                    <div className='icon'></div>
                  </div>
                </div>
                <div
                  id="myNav"
                  className={isOverlayOpen ? 'overlay overlay-open' : 'overlay'}
                >
                  <div className="overlay-content">
                    <div className={styles.mblbutttonGroup}>
                      <Link
                        href=" https://wa.me/03064041221"
                        className={styles.contactBtn}
                        target="_blank"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="https://www.instagram.com/tinytribe.pk/"
                        className={styles.followBtn}
                        target="_blank"
                      >
                        Follow Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
