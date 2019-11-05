import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { Formik } from 'formik'
import { withNextInputAutoFocusForm } from 'react-native-formik'

import { i18n } from '../../_translate/i18n'

import { getValidations } from '../../utils/form'

import ButtonGradient from '../ButtonGradient'
import FormField from './FormField'
import Row from '../Row'

const StyledForm = withNextInputAutoFocusForm(styled.View``)

const Form = ({ fields, initialValues, onSubmit, submitButtonLabel }) => (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={getValidations(fields)}>
        {({ handleSubmit }) => (
            <StyledForm>
                {fields.map(field => (
                    <Row key={field.name}>
                        <FormField {...field} />
                    </Row>
                ))}
                <Row center>
                    <ButtonGradient onClick={handleSubmit}>{submitButtonLabel}</ButtonGradient>
                </Row>
            </StyledForm>
        )}
    </Formik>
)

Form.defaultProps = {
    initialValues: {},
    submitButtonLabel: i18n.t('buttons.save')
}

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    submitButtonLabel: PropTypes.string
}

export default Form
