import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './clientsActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndSelect from '../common/form/labelAndSelect'
import LabelAndAddonInput from '../common/form/labelAndAddonInput'
 
class ClientsForm extends Component {

    render() {
        const { handleSubmit, readOnly, equipamentos } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body '>
                    <Field name='courseIdentity' cols='12 2' label='ID' placeholder='Informe o ID do Curso' component={LabelAndInput} readOnly={readOnly} />

                    <Field name='courseName' component={LabelAndInput} label='Curso' cols='12 3' placeholder='Informe o Nome do Curso' readOnly={readOnly} />

                    <Field name='courseModality' component={LabelAndSelect} label='Modalidade' cols='12 2'  readOnly={readOnly}>
                        <option>Selecione</option>
                        <option>Presencial</option>
                        <option>A distância</option>
                    </Field>

                    <Field name='courseIe' component={LabelAndSelect} label='Instituição' cols='12 2'  readOnly={readOnly}>
                        <option>Selecione</option>
                        <option>EAD</option>
                        <option>UMESP</option>
                        <option>UNIMEP</option>
                        <option>Izabela</option>
                        <option>Centenario</option>
                        <option>IPA</option>
                        <option>Granbery</option>
                    </Field>
                    
                    <Field name='coursePrice' addon='R$ ' cols='6 3' label='Mensalidade Real' placeholder='Informe o Preço' component={LabelAndAddonInput} readOnly={readOnly} />
                        <div className="box-footer align-right">
                            Valores decimais devem estar com <b>pontos</b> ao invés de vírgulas.
                        </div>

                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


ClientsForm = reduxForm({form: 'clientsForm', destroyOnUnmount: false})(ClientsForm)
const selector = formValueSelector('clientsForm')
const mapStateToProps = state => ({equipamentos: selector(state, 'equipamentos')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientsForm)