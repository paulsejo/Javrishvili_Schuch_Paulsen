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
  basePath: "/pets",
  tags: [
    {
      name: "Pets",
      description: "All the pets in the petstore",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  //paths: {
  // "/dogs": {
  //   tags: [
  //     {
  //       name: "Dogs",
  //       description: "Dogs in the petstore",
  //     },
  //   ],
  //   consumes: ["application/json"],
  //   produces: ["application/json"],
  paths: {
    "/dogs/": {
      get: {
        tags: ["Dogs"],
        summary: "Get all dogs",
        responses: {
          200: {
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
    "/dogs/{id}": {
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
      put: {
        tags: ["Dogs"],
        summary: "Update a dog",
        parameters: [
          {
            name: "age",
            in: "body",
            description: "new age of the dog to be updated",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        ],
        responses: {
          200: {
            description: "Dog updated",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
      delete: {
        tags: ["Dogs"],
        summary: "Delete a dog",
        parameters: [],
        responses: {
          200: {
            description: "Dog deleted",
            schema: {
              $ref: "#/definitions/Dog",
            },
          },
        },
      },
    },
    "/dogs/search": {
      get: {
        tags: ["Dogs"],
        summary: "Get a dog by name",
        parameters: [
          {
            name: "name",
            in: "body",
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
    // "/birds": {
    //   tags: [
    //     {
    //       name: "Birds",
    //       description: "Birds in the petstore",
    //     },
    //   ],
    //   consumes: ["application/json"],
    //   produces: ["application/json"],
    //   paths: {
    "/birds/": {
      get: {
        tags: ["Birds"],
        summary: "Get all birds",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
      post: {
        tags: ["Birds"],
        summary: "Add a new bird",
        parameters: [
          {
            name: "bird",
            in: "body",
            description: "Bird to be added",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
    },
    "/birds/{id}": {
      get: {
        tags: ["Birds"],
        summary: "Get a bird by id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "id of the bird to be searched for",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
      put: {
        tags: ["Birds"],
        summary: "Update a bird",
        parameters: [
          {
            name: "age",
            in: "body",
            description: "new age of the bird to be updated",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        ],
        responses: {
          200: {
            description: "Bird updated",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
      delete: {
        tags: ["Birds"],
        summary: "Delete a bird",
        parameters: [],
        responses: {
          200: {
            description: "Bird deleted",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
    },
    "/birds/search": {
      get: {
        tags: ["Birds"],
        summary: "Get a bird by name",
        parameters: [
          {
            name: "name",
            in: "body",
            description: "name of the bird to be searched for",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Bird",
            },
          },
        },
      },
    },
    //},
    // "/snakes": {
    //   tags: [
    //     {
    //       name: "Snakes",
    //       description: "Snakes in the petstore",
    //     },
    //   ],
    //   consumes: ["application/json"],
    //   produces: ["application/json"],
    //   paths: {
    "/snakes/": {
      get: {
        tags: ["Snakes"],
        summary: "Get all snakes",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        },
      },
      post: {
        tags: ["Snakes"],
        summary: "Add a new snake",
        parameters: [
          {
            name: "snake",
            in: "body",
            description: "Snake to be added",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        },
      },
    },
    "/snakes/{id}": {
      get: {
        tags: ["Snakes"],
        summary: "Get a snake by id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "id of the snake to be searched for",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        },
      },
      put: {
        tags: ["Snakes"],
        summary: "Update a snake",
        parameters: [
          {
            name: "age",
            in: "body",
            description: "new age of the snake to be updated",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        ],
        responses: {
          200: {
            description: "Snake updated",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        },
      },
      delete: {
        tags: ["Snakes"],
        summary: "Delete a snake",
        parameters: [],
        responses: {
          200: {
            description: "Snake deleted",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        },
      },
    },
    "/snakes/search": {
      get: {
        tags: ["Snakes"],
        summary: "Get a snake by name",
        parameters: [
          {
            name: "name",
            in: "body",
            description: "name of the snake to be searched for",
            schema: {
              $ref: "#/definitions/Snake",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Snake",
            },
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
    Bird: {
      required: ["name", "sex", "class", "colour"],
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
        class: {
          type: "string",
        },
        colour: {
          type: "string",
        },
      },
    },
    Snake: {
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
};

export default swaggerDocuments;
