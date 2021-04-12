const app = require("../../../app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach((done) => {
  mongoose.connect("mongodb://localhost:27017/JestDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

test("GET /api/users", async () => {
  const user = { id: 1, name: "ahmed" };

  await supertest(app).get("/api/users")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBeGreaterThan(1);

      // Check data
      expect(response.body[0].id).toBe(user.id);
      expect(response.body[0].name).toBe(user.name);
    });
});