import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './clientsActions'

import List from './clientsList'
import Form from './clientsForm'

class Clients extends Component {

    componentWillMount(){
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Mensalidades' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listagem' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            {/* <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' /> */}
                        </TabsHeader>
                        <TabsContent>
                                <TabContent id='tabList'>
                                    <List />
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <Form submitLabel='Incluir' submitClass='primary' onSubmit={this.props.create} />
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    <Form submitLabel='Alterar' submitClass='info' onSubmit={this.props.update} />
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    <Form submitLabel='Excluir' submitClass='danger' onSubmit={this.props.remove} readOnly={true} />
                                </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Clients)