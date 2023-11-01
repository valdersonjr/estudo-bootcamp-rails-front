import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AdminHeaderProps {
    name: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
    return (
        <Row className={styles.background}>
            <Col lg={6} xs>
                <Link href="/Admin"><a><FontAwesomeIcon icon={faSignal as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="/Admin/Users/List"><a><FontAwesomeIcon icon={faUser as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="/Admin/Products/List"><a><FontAwesomeIcon icon={faGamepad as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="/Admin/Categories/List"><a><FontAwesomeIcon icon={faCheckSquare as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="/Admin/SystemRequirements/List"><a><FontAwesomeIcon icon={faLaptop as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="/Admin/Coupons/List"><a><FontAwesomeIcon icon={faTicketAlt as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
                <Link href="#"><a><FontAwesomeIcon icon={faDollarSign as IconProp} color="var(--color-gray-light)" className="ml-3" /></a></Link>
            </Col>
            <Col lg={6} xs>
                <div className="float-right">
                    <span className={styles.name}>{name}</span>
                    <FontAwesomeIcon icon={faUserCircle as IconProp} color="var(--color-gray-light)" />
                </div>
            </Col>
        </Row>
    )
}

export default AdminHeader;