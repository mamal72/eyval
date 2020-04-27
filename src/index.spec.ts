// tslint:disable:no-expression-statement
import test from 'ava'
import eyval from '.'

const dummyEmailValidator = (email: string) => email.includes('@')
const dummyTrueValidator = (_: any) => true
const dummyFalseValidator = (_: any) => false

test('works', (t) => {
  const validateTrue = eyval(dummyTrueValidator)
  const validateFalse = eyval(dummyFalseValidator)
  const validateTrueAndFalse = eyval(dummyTrueValidator, dummyFalseValidator)
  const validateEmail = eyval<string>(dummyEmailValidator)

  t.truthy(validateTrue(1))
  t.falsy(validateFalse(1))
  t.falsy(validateTrueAndFalse(1))
  t.truthy(validateEmail('a@b.com'))
  t.falsy(validateEmail('a.com'))
  t.truthy(eyval<number>((age) => age >= 18)(18))
  t.falsy(eyval<number>((age) => age >= 18)(15))
})
