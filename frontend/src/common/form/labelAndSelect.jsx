import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select {...props.input} className='form-control' readOnly={props.readOnly} type={props.type}>
                {props.children}
            </select>
        </div>
    </Grid>
)