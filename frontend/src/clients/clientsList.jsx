import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './clientsActions'

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

class ClientsList extends Component {
    
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(mens => (
            <tr key={mens._id}>
                <td id={`${mens.courseIdentity}-${mens.courseIe}`}>{mens.courseIe}</td>
                <td id={`${mens.courseIdentity}-${mens.courseIe}-name`}>{mens.courseName}</td>
                <td id={`${mens.courseIdentity}-${mens.courseIe}-modality`}>{mens.courseModality}</td>
                <td id={`${mens.courseIdentity}-${mens.courseIe}-price`}>
                    {formatter.format(mens.coursePrice).toLocaleString('pt-BR')}
                </td>
                <td id={`${mens.courseIdentity}-${mens.courseIe}-antecipate`}>
                    {formatter.format(mens.coursePrice*0.985).toLocaleString('pt-BR')}
                </td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(mens)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(mens)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr role='row'>
                            <th>Instituição</th>
                            <th>Nome do Curso</th>
                            <th>Modalidade</th>
                            <th>Valor Real</th>
                            <th>Valor Antecipado</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

window.onload = function(){
    var teste = document.getElementById('publicidade-e-propaganda-UMESP-price').innerText;
    console.log(teste)
}

const mapStateToProps = state => ({list: state.clients.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)