import * as yup from 'yup'

const getValidations = fields =>
    yup.object().shape(
        fields.reduce((schema, field) => {
            schema[field.name] = field.validation
            return schema
        }, {})
    )

export { getValidations }
