import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import '../../../assets/css/common/style.css';

import Tabletop from 'tabletop';

export default class Umesp extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1QpPgpAKyZXvwirnHekmSWqYsaT7s0B4Szd0UsYEEPJw',
      orderby: 'Curso',
      reverse: false,
      wanted: ['UMESP'],

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
      const ie = "https://metodista.br/"
      // const weg = data[0]
      // console.log(weg)

        return (
            <Fragment>
            <Row>
              <Colxx xxs="6">
                <Breadcrumb heading="Universidade Metodista de São Paulo" match={this.props.match} />
              </Colxx>
              <Colxx xxs="12">
                <Separator className="mb-5" />
              </Colxx>
            </Row>

            <Row>
              <Colxx xs="12">
              <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="bg-dark">
                          <tr>
                            <th>Nome do Curso</th>
                            <th>Referência</th>
                            <th>Valor Real</th>
                            <th>Valor com Desconto</th>
                            <th>Página do Curso</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          data.map(obj => {
                            return (
                              <tr key={obj._id}>    
                                <td id={`curso-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Curso}</td>
                                <td id={`referencia-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Referência}</td>
                                <td id={`valor-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Valor}</td>
                                <td id={`antecipado-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()} className="text-success"><strong>{obj.Antecipado}</strong></td>
                                <td>
                                <a 
                                href={ie+obj.Curso.toLowerCase().replace(/\s/g, '-')} 
                                target="_blank"
                                className="btn btn-success btn-sm">
                                  Conhecer Curso
                                </a>
                                </td>
                              </tr>
                            )
                          })
                        }
                        </tbody>
                      </table>
                    </div>
              </Colxx>
              </Row>
            

          </Fragment>
        )
    }
}