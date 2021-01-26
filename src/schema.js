import * as yup from 'yup'

const nameRegExp = new RegExp('[A-Za-zА-Яа-яЁёІіЇїЄє]')
const phoneRegExp = new RegExp(/^\+\d\(\d{3}\)\d{3}(-\d{2}){2}$/)

const requiredMessage = 'Поле не должно быть пустым'
const errorMessage = 'Введено некорректное значение'

const schema = yup.object().shape({
  name: yup.string().required(requiredMessage).matches(nameRegExp, errorMessage),
  email: yup.string().required(requiredMessage).email(errorMessage),
  phone: yup.string().required(requiredMessage).matches(phoneRegExp, errorMessage)
}) 

export default schema