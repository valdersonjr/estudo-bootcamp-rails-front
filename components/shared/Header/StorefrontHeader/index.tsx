import React from 'react';

import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import Logo from "../../Logo/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

const StoreFrontHeader: React.FC = () => {
    return(
        <Row className={styles.background}>
            <Col md={6} className="mt-2">
                <Logo />
            </Col>

            <Col md={6} className="mt-2 text-center">
                <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                        <InputGroup>
                            <FormControl placeholder="Pesquisar Produto" />
                        </InputGroup>
                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon={faSearch as IconProp} color='var(--color-gray-light)' />
                            </Col>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon={faShoppingCart as IconProp} color='var(--color-gray-light)' />
                            </Col>
                            <Col md={4} xs={4}>
                                <Link href="/Auth/Login">
                                    <a>
                                        <FontAwesomeIcon icon={faUserCircle as IconProp} color='var(--color-gray-light)' />
                                    </a>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default StoreFrontHeader;