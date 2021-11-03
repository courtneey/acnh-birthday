const router = require("express").Router();
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
const { Op } = require("sequelize");

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
    price: { type: GraphQLNonNull(GraphQLInt) },
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
    singleVillager: {
      type: VillagerType,
      description: "A single villager retrieved by ID",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        return await Villager.findByPk(args.id);
      },
    },
    villagers: {
      type: new GraphQLList(VillagerType),
      description: "A list of villagers",
      resolve: async () => await Villager.findAll(),
    },
    villagersByMonth: {
      type: new GraphQLList(VillagerType),
      description: "A list of villagers by birth month",
      args: {
        month: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const villagers = await Villager.findAll({
          where: {
            birthday: {
              [Op.substring]: args.month,
            },
          },
        });
        return villagers;
      },
    },
    topsByStyle: {
      type: new GraphQLList(TopType),
      description: "A list of tops matching a villager's style preferences",
      args: {
        style_one: { type: GraphQLString },
        style_two: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const tops = await Tops.findAll({
          where: {
            [Op.and]: [
              {
                style_one: {
                  [Op.eq]: args.style_one,
                },
              },
              {
                style_two: {
                  [Op.eq]: args.style_two,
                },
              },
            ],
          },
        });

        return tops;
      },
    },
    topsByColor: {
      type: new GraphQLList(TopType),
      description: "A list of tops matching a villager's color preferences",
      args: {
        color_one: { type: GraphQLString },
        color_two: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const tops = await Tops.findAll({
          where: {
            [Op.and]: [
              {
                color_one: {
                  [Op.eq]: args.color_one,
                },
              },
              {
                color_two: {
                  [Op.eq]: args.color_two,
                },
              },
            ],
          },
        });

        return tops;
      },
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
