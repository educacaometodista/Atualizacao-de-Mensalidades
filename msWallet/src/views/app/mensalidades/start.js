import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import Breadcrumb from "../../../containers/navs/Breadcrumb";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import IconCard from "../../../components/cards/IconCard";

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
                      Visando facilitar para nossos colaboradores e concentrar as informações referente a preços de mensalidades dos cursos da Educação Metodista, criamos este sistema. Navegue no menu abaixo ou na lateral para escolher a instituição de ensino superior que você está procurando.
                      </span>
                    </p>
                    <p className="lead mb-0">
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Universidade Metodista de São Paulo
                        </span>
                      </button>
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Universidade Metodista de Piracicaba
                        </span>
                      </button>
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Faculdade Metodista Centenário
                        </span>
                      </button>
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Izabela Hendrix
                        </span>
                      </button>
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          Faculdade Metodista Granbery
                        </span>
                      </button>
                      <button className="btn btn-primary btn-sm mr-1 mt-1">
                        <span>
                          IPA
                        </span>
                      </button>
                      <button className="btn btn-info btn-sm mr-1 mt-1">
                        <span>
                          Educação a Distância
                        </span>
                      </button>
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