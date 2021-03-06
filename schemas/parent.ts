export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "number"
      },
      "gender": {
        "enum": [
          "female",
          "male"
        ],
        "type": "string"
      }
    },
    "required": [
      "name",
      "age"
    ]
}