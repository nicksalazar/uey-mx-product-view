// mock-server/index.js
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type SimpleProduct {
    id: ID!
    name: String!
    seller: String!
    image: String!
    price: Float!
    inventory: Int!
  }

  type RentableProduct {
    id: ID!
    name: String!
    seller: String!
    image: String!
    price: Float!
    rentalType: String!
    availability: String!
  }

  type Space {
    id: ID!
    name: String!
    seller: String!
    image: String!
    price: Float!
    rentalType: String!
    availability: String!
    location: String!
  }

  union Product = SimpleProduct | RentableProduct | Space

  type Query {
    product(id: ID!): Product
    simpleProduct(id: ID!): SimpleProduct
  }
`;

const mockProductData = [
  {
    id: "1",
    name: "Soft Drink",
    seller: "Test Seller",
    image: "https://via.placeholder.com/150",
    price: 2,
    inventory: 100,
  },
  {
    id: "2",
    name: "Party Table",
    seller: "Test Seller",
    image: "https://via.placeholder.com/150",
    price: 10,
    rentalType: "perNight",
    availability: "2023-05-10",
  },
  {
    id: "3",
    name: "Conference Room",
    seller: "Test Venue",
    image: "https://via.placeholder.com/150",
    price: 320,
    rentalType: "perHour",
    availability: "2023-05-11",
    location: '{"latitude": 40.7128, "longitude": -74.0060}',
  },
];

const resolvers = {
  Product: {
    __resolveType(obj, context, info) {
      if (obj.inventory) {
        return "SimpleProduct";
      }
      if (obj.rentalType && !obj.location) {
        return "RentableProduct";
      }
      if (obj.location) {
        return "Space";
      }
    },
  },
  Query: {
    product(parent, args, context, info) {
      const { id } = args;
      return mockProductData.find((product) => product.id === id);
    },
    simpleProduct(parent, args, context, info) {
      const { id } = args;
      return mockProductData.find(
        (product) => product.id === id && product.inventory !== undefined
      );
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
