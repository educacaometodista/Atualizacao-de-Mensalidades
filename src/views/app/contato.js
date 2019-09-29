import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import '../../assets/css/common/style.css';
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";


export default class Contato extends Component {
  constructor() {
    super()
  }

    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.contato" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12">
              <div className="rounded alert alert-danger fade show" role="alert">
                <span>
                  Essa página ainda está em processo de desenvolvimento, pedimos desculpa pelo transtorno. :-(
                </span>
              </div>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
