const swaggerDocuments = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Petstore",
    description: "API for a petstore",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  basePath: "/dogs",
  tags: [
    {
      name: "Dogs",
      description: "API for dogs in the petstore",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/": {
      get: {
        tags: ["Dogs"],
        summary: "Get all dogs",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
      post: {
        tags: ["Dogs"],
        summary: "Add a new dog",
        parameters: [
          {
            name: "dog",
            in: "body",
            description: "Dog to be added",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
    },
    "/{id}": {
      get: {
        tags: ["Dogs"],
        summary: "Get a dog by id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "id of the dog to be searched for",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
    },
    "/{name}": {
      get: {
        tags: ["Dogs"],
        summary: "Get a dog by name",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "name of the dog to be searched for",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
    },
    definitions: {
      Dog: {
        required: ["name", "sex", "race"],
        properties: {
          name: {
            type: "string",
          },
          age: {
            type: "integer",
          },
          sex: {
            type: "string",
          },
          race: {
            type: "string",
          },
        },
      },
    },
  },
};

export default swaggerDocuments;
