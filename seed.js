const { db, Villager, Tops } = require("./server/db/");
const villagers = require("./seed-data/villagers-seed");
const tops = require("./seed-data/tops-seed");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      villagers.map((villager) => {
        return Villager.create(villager);
      })
    );

    await Promise.all(
      tops.map((top) => {
        return Tops.create(top);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Db seeded!");
      db.close();
    })
    .catch((err) => {
      console.error("Something went wrong!");
      console.error(err);
      db.close();
    });
}
