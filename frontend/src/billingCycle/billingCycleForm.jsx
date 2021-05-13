import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { init } from './billingCycleActions';

import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
  
  render(){
    const { handleSubmit, readOnly } = this.props;

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field 
          name='name' 
          component={labelAndInput} 
          label='Nome' 
          cols='12 4' 
          placeholder='Informe o nome'
          readOnly={readOnly}
          />
          <Field 
          name='month' 
          component={labelAndInput}
          type='number'
          label='Mês'
          cols='12 4'
          placeholder='Informe o mês'
          readOnly={readOnly} />
          <Field 
          name='year' 
          component={labelAndInput}
          type='number'
          label='Ano'
          cols='12 4'
          placeholder='Informe o ano'
          readOnly={true} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' onClick={this.props.init} className='btn btn-warning'>Cancelar</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init
}, dispatch)

export default connect(null,mapDispatchToProps)(reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm));