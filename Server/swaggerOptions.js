export const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Rental Api",
      version: "1.0.0",
      description: "API documentation for rental application",
    },
  },
  apis: ["./routes/*.js"], // Path to the API routes
};
