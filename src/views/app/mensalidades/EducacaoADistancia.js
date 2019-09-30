import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import '../../../assets/css/common/style.css';

import Tabletop from 'tabletop';
import FilterResults from 'react-filter-search';

import { Input } from "reactstrap";

export default class ADistancia extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      value: ''
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1QpPgpAKyZXvwirnHekmSWqYsaT7s0B4Szd0UsYEEPJw',
      orderby: 'Curso',
      reverse: false,
      wanted: ['EAD'],

      callback: googleData => {
        this.setState({
          data: googleData,
        })

      },
      simpleSheet: true
    })
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  }

    render() {
      const { data, value } = this.state
      const ie = "http://portal.metodista.br/ead/"

        return (
            <Fragment>
            <Row>
              <Colxx xxs="6">
                <Breadcrumb heading="Educação a Distância" match={this.props.match} />
              </Colxx>
              <Colxx xxs="6">
              <div className="search" data-search-path="/app/pages/search">
                <Input
                  name="searchKeyword"
                  id="searchKeyword"
                  placeholder="Digite o nome do curso"
                  value={value}
                  onChange={this.handleChange}
                />
                <span
                className="search-icon"
                >
                  <i className="simple-icon-magnifier" />
                </span>
              </div>
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
                        
                        <FilterResults
                        value={value}
                        data={data}
                        renderResults={ data => (
                          <tbody>
                            {data.map(obj => {
                                return (
                                  <tr key={obj.index}>    
                                    <td id={`curso-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Curso}</td>
                                    <td id={`referencia-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Referência}</td>
                                    <td id={`valor-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()}>{obj.Valor}</td>
                                    <td id={`antecipado-${obj.Curso}`.replace(/\s/g, '-').toLowerCase()} className="text-success">{obj.Antecipado}</td>
                                    <td>
                                    <a href={ie+obj.Curso.toLowerCase().replace(/\s/g, '-')} target="_blank"className="btn btn-success btn-sm">Conhecer Curso</a>
                                    </td>
                                  </tr>
                                )
                              })
                              }
                          </tbody>
                        )} />                      
                      </table>
                    </div>
              </Colxx>
              </Row>
          </Fragment>
        )
    }
}