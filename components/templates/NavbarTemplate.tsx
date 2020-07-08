import React, { FunctionComponent } from 'react';
import { Container, Row, Col} from 'react-grid-system';

interface OwnProps {}

type Props = OwnProps;

const NavbarTemplate: FunctionComponent<Props> = ({children}) => {
  return (
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarTemplate;
