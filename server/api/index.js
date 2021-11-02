const router = require("express").Router();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { Villager, Tops } = require("../db/index");

const VillagerType = new GraphQLObjectType({
  name: "Villager",
  description: "This represents a villager",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    imageUrl: { type: GraphQLNonNull(GraphQLString) },
    birthday: { type: GraphQLNonNull(GraphQLString) },
    style_one: { type: GraphQLNonNull(GraphQLString) },
    style_two: { type: GraphQLNonNull(GraphQLString) },
    color_one: { type: GraphQLNonNull(GraphQLString) },
    color_two: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const TopType = new GraphQLObjectType({
  name: "Top",
  description: "This represents a top",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    imageUrl: { type: GraphQLNonNull(GraphQLString) },
    variation: { type: GraphQLNonNull(GraphQLString) },
    style_one: { type: GraphQLNonNull(GraphQLString) },
    style_two: { type: GraphQLNonNull(GraphQLString) },
    color_one: { type: GraphQLNonNull(GraphQLString) },
    color_two: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    villagers: {
      type: new GraphQLList(VillagerType),
      description: "A list of villagers",
      resolve: () => Villager.findAll(),
    },
    tops: {
      type: new GraphQLList(TopType),
      description: "A list of tops",
      resolve: () => Tops.findAll(),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

router.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
