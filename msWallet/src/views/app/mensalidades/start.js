import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import Breadcrumb from "../../../containers/navs/Breadcrumb";

import Tabletop from 'tabletop';

export default class Start extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8',
      orderby: 'Rentabilidade',
      reverse: false,
      wanted: ['Consolidado'],

      callback: googleData => {
        this.setState({
          data: googleData,
        })

      },
      simpleSheet: true
    })
  }

    render() {
      const { data } = this.state
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.start" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12">
              <div className="card">
                <div className="card-body">
                  <div className="jumbotron">
                    <h1 className="display-4">
                      <span>Olá, seja bem-vindo(a)!</span>
                    </h1>
                    <p className="lead">
                      <span>
                        Aqui você encontrará o preço das mensalidades de todos os cursos da Educação Metodista
                      </span>
                    </p>
                    <Separator className="mb-5" />
                    <p>
                      <span>
                      Visando facilitar para nossos colaboradores e concentrar as informações referente a preços de mensalidades dos cursos da Educação Metodista, criamos este sistema. Navegue no menu lateral para escolher a instituição de ensino superior que você está procurando.
                      </span>
                    </p>

                    <p>
                      <h3>
                      Para visitar os portais individuais de cada instituição, use os menus abaixo.
                      </h3>
                    </p>

                    <p className="lead mb-0">
                      <a href="umesp" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Universidade Metodista de São Paulo
                        </span>
                      </a>
                      <a href="unimep" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Universidade Metodista de Piracicaba
                        </span>
                      </a>
                      <a href="centenario" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Faculdade Metodista Centenário
                        </span>
                      </a>
                      <a href="izabela" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Izabela Hendrix
                        </span>
                      </a>
                      <a href="granbery" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Faculdade Metodista Granbery
                        </span>
                      </a>
                      <a href="ipa" className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          IPA
                        </span>
                      </a>
                      <a href="EducacaoADistancia" className="btn btn-info btn-sm mr-1 mt-1">
                        <span>
                          Educação a Distância
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              </Colxx>
            </Row>
              <Row>
              
              </Row>
          </Fragment>
        )
    }
}