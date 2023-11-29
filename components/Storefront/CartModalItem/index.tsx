import styles from './styles.module.css';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const CartModalItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <Row>
                <Col xs={5}>
                    <img src="/assets/product_image.png" alt="Product Image" />
                </Col>

                <Col xs={7}>
                    <p>
                        God of War
                    </p>

                    <div className={styles.badge_container}>
                        <Badge variant="primary ml-1" className={styles.badfe}>
                            Ação
                        </Badge>

                        <Badge variant="primary ml-1" className={styles.badfe}>
                            Ação
                        </Badge>

                        <Badge variant="primary ml-1" className={styles.badfe}>
                            Ação
                        </Badge>
                    </div>

                    <div className={styles.price_container}>
                        <span>R$ 299,99</span>
                        <FontAwesomeIcon icon={faTrash as IconProp} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CartModalItem;