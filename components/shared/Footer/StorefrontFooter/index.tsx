import React from 'react';
import styles from './styles.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Logo';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

const StorefrontFooter: React.FC = () => {
    return (
        <footer className={styles.background}>
            <Col md={{ span: 8, offset: 2 }}>
                <Row>
                    <Col lg={7} md={12}>
                        <Row>
                            <Col lg={5} md={12} className="mb-4 mb-lg-0">
                                Acompanhe-nos
                            </Col>

                            <Col lg={7} md={12} className="mb-4 mb-lg-0">
                                <Row className={styles.social_medias}>
                                    <Col lg={1} xs={2}>
                                        <Link href="www.facebook.com">
                                            <a target='_blank'>
                                                <FontAwesomeIcon icon={faFacebookF as IconProp} />
                                            </a>
                                        </Link>
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.instagram.com/">
                                            <a target='_blank'>
                                                <FontAwesomeIcon icon={faInstagram as IconProp} />
                                            </a>
                                        </Link>

                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://youtube.com/">
                                            <a target='_blank'>
                                                <FontAwesomeIcon icon={faYoutube as IconProp} />
                                            </a>
                                        </Link>

                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://twitter.com/">
                                            <a target='_blank'>
                                                <FontAwesomeIcon icon={faTwitter as IconProp} />
                                            </a>
                                        </Link>

                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.linkedin.com/">
                                            <a target='_blank'>
                                                <FontAwesomeIcon icon={faLinkedin as IconProp} />
                                            </a>
                                        </Link>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
                        <Row>
                            <Col>
                                Contato
                            </Col>

                            <Col>
                                Sobre
                            </Col>

                            <Col>
                                Blog
                            </Col>

                            <Col>
                                FAQ
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className={styles.line} />

                <Row>
                    <Col className={styles.logo} lg={{ span: 2, offset: 0 }} xs={{ span: 8, offset: 2 }}>
                        <Logo />
                    </Col>

                    <Col className='text-center' lg={{ span: 6, offset: 1 }} xs={12}>
                        <p style={{ 'color': 'var(--color-gray-light)' }}>onebitcode.com • contato@onebitcode.com</p>
                    </Col>

                    <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
                        <Link href="www.onebitcode.com">
                            <a target='_blank'>
                                <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Col>
        </footer>
    )
}

export default StorefrontFooter;