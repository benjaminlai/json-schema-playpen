import * as AJV from "ajv";

import parent from './schemas/parent';

const ajv = new AJV({
    allErrors: true
})

console.log(ajv.validate(parent, {
    "name": "Benjamin Lai"
}))

 