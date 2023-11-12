import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    categoryDescription: Yup.string().max(100, 'Max 100 characters')
})

const todoSchema = Yup.object().shape ({
    name: Yup.string().max(100, 'Max 100 characters').required('Name is required'),
    categoryId: Yup.number().required('Please select a category!'),
})

export { catSchema, todoSchema }