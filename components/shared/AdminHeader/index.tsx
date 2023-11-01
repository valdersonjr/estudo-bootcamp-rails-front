import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import User from '../../../dtos/User';
import SignOutService from '../../../util/SignOutService';

interface AdminHeaderProps {
  name: string
}

const AdminHeader: React.FC = () => {
  const router = useRouter();

  const { name }: User = useSelector((state: any) => state.auth.loggedUser);

  return (
    <Row className={styles.background}>
      <Col lg={6} xs={12} className={styles.menu}>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon
              icon={faSignal as IconProp}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/Admin' ? styles.active : ''}`} />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon icon={faUser as IconProp}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/Admin/Users/List' ? styles.active : ''}`} />
          </a>
        </Link>



        <Link href="/Admin/Products/List">
          <a><FontAwesomeIcon
            icon={faGamepad as IconProp}
            color="var(--color-gray-light)"
            className={`ml-3 ${router.pathname === '/Admin/Products/List' ? styles.active : ''}`} />
          </a>
        </Link>
        <Link href="/Admin/Categories/List">
          <a><FontAwesomeIcon
            icon={faCheckSquare as IconProp}
            color="var(--color-gray-light)"
            className={`ml-3 ${router.pathname === '/Admin/Categories/List' ? styles.active : ''}`} />
          </a>
        </Link>
        <Link href="/Admin/SystemRequirements/List">
          <a><FontAwesomeIcon
            icon={faLaptop as IconProp}
            color="var(--color-gray-light)"
            className={`ml-3 ${router.pathname === '/Admin/SystemRequirements/List' ? styles.active : ''}`} />
          </a>
        </Link>
        <Link href="/Admin/Coupons/List">
          <a><FontAwesomeIcon
            icon={faTicketAlt as IconProp}
            color="var(--color-gray-light)"
            className={`ml-3 ${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`} />
          </a>
        </Link>

        <Link href="#">
          <a><FontAwesomeIcon
            icon={faDollarSign as IconProp}
            color="var(--color-gray-light)"
            className="ml-3" />
          </a>
        </Link>

        <Link href="/Auth/Login">
          <a
            onClick={SignOutService.execute}
            onTouchEnd={() => SignOutService.execute()}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt as IconProp}
              color="var(--color-gray-light)"
              className="ml-3" />
          </a>
        </Link>

      </Col>
      <Col lg={6} xs={3} className={styles.profile}>
        <span className={styles.name}>{name}</span>
        <FontAwesomeIcon icon={faUserCircle as IconProp} color="var(--color-gray-light)" />
      </Col>
    </Row>
  )
}

export default AdminHeader;