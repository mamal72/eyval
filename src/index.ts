/**
 * Generic validator function type, a function receiving a T and returning a boolean
 */
type Validator<T> = (input: T) => boolean

/**
 * A higher order function to be called as needed with passed validators
 *
 * ### Basic usage example:
 * ```ts
 * import eyval from 'eyval'
 *
 * const isOldEnough = (age: number) => age >= 18
 * const isYoungEnough = (age: number) => age < 100
 *
 * const validateAge = eyval<number>(isOldEnough, isYoungEnough)
 *
 * const validAge = 20
 * const tooYoung = 14
 * const tooOld = 200
 *
 * validateAge(validAge) // returns true
 * validateAge(tooYoung) // returns false
 * validateAge(tooOld) // returns false
 * ```
 *
 * ### Another Example using `validator` npm package:
 * ```ts
 * import eyval from 'eyval'
 * import isEmail from 'validator/lib/isEmail'
 *
 * const validEmailAddress = 'foo@bar.com'
 * const invalidEmailAddress = 'foo@bar'
 *
 * const validateEmail = eyval<string>(isEmail)
 *
 * validateEmail(validEmailAddress) // returns true
 * validateEmail(invalidEmailAddress) // returns false
 * ```
 */
export default function eyval<T>(
  ...validators: readonly Validator<T>[]
): (input: T) => boolean {
  return (input: T) => validators.every((validate) => validate(input) === true)
}
