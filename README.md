![NPM](https://img.shields.io/npm/l/eyval) [![Build Status](https://travis-ci.com/mamal72/eyval.svg?branch=master)](https://travis-ci.com/mamal72/eyval) [![codecov](https://codecov.io/gh/mamal72/eyval/branch/master/graph/badge.svg)](https://codecov.io/gh/mamal72/eyval) ![David](https://img.shields.io/david/mamal72/eyval) ![npm](https://img.shields.io/npm/v/eyval) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/eyval) ![npm](https://img.shields.io/npm/dm/eyval)

# eyval

Validate anything as you need using a simple higher order function.


## Installation

NPM:

```bash
npm i eyval
```

Yarn:

```bash
yarn add eyval
```

## Usage

 ### Basic usage example:

 ```ts
 import eyval from 'eyval'

 const isOldEnough = (age: number) => age >= 18
 const isYoungEnough = (age: number) => age < 100

 const validateAge = eyval<number>(isOldEnough, isYoungEnough)

 const validAge = 20
 const tooYoung = 14
 const tooOld = 200

 validateAge(validAge) // returns true
 validateAge(tooYoung) // returns false
 validateAge(tooOld) // returns false
 ```

 ### Another Example using `validator` npm package:

 ```ts
 import eyval from 'eyval'
 import isEmail from 'validator/lib/isEmail'

 const validEmailAddress = 'foo@bar.com'
 const invalidEmailAddress = 'foo@bar'

 const validateEmail = eyval<string>(isEmail)

 validateEmail(validEmailAddress) // returns true
 validateEmail(invalidEmailAddress) // returns false
 ```

 ## Contribution

You can report bugs and issues [here](https://github.com/mamal72/eyval/issues/new).

You can also send a PR if you feel like you can improve or fix something. Don't forget to write/update tests for your changes.
