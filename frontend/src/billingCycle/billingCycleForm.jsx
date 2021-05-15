import React, {Component} from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreditList from './creditList';

import { init } from './billingCycleActions';

import LabelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
  
  render(){
    const { handleSubmit, readOnly, credits } = this.props;

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field 
          name='name' 
          component={LabelAndInput} 
          label='Nome' 
          cols='12 4' 
          placeholder='Informe o nome'
          readOnly={readOnly}
          />
          <Field 
          name='month' 
          component={LabelAndInput}
          type='number'
          label='Mês'
          cols='12 4'
          placeholder='Informe o mês'
          readOnly={readOnly} />
          <Field 
          name='year' 
          component={LabelAndInput}
          type='number'
          label='Ano'
          cols='12 4'
          placeholder='Informe o ano'
          readOnly={true} />
          <CreditList cols='12 6' readOnly={readOnly}
          list={credits}
          />
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

const selector = formValueSelector('billingCycleForm')
console.log(selector)

const mapStateToProps = state => ({credits : selector(state, 'credits')})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm));