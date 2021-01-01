//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../../App";
import { REGEX_NUMBER } from "../../../../utils/Constants";
import UserSchema from "../../../../entities/schemas/User";
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
//Our parent block
describe("Users", () => {
  beforeEach((done) => {
    //Before each test we empty the database in your case
    done();
  });
  /*
   * Test the /GET route
   */
  describe("/GET users", () => {
    it("it should GET all the users", (done) => {
      chai
        .request(server)
        .get("/api/v0/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.a("boolean");
          done();
        });
    });
  });
  describe("/GET users with exception", function () {
    let _REGEX_NUMBER_Test;
    beforeEach(function () {
      _REGEX_NUMBER_Test = REGEX_NUMBER.test; //save original function
      REGEX_NUMBER.test = function () {
        throw new Error("for test");
      };
    });
    it("it should catch exception", (done) => {
      chai
        .request(server)
        .get("/api/v0/users")
        .end((err, res) => {
          res.should.have.status(500);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          done();
        });
    });
    afterEach(function () {
      REGEX_NUMBER.test = _REGEX_NUMBER_Test;
    });
  });
  describe("/POST signup", () => {
    it("it should Sign Up success with valid data", (done) => {
      const email = `example${Date.now()}@gmail.com`;
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", email)
        .field("name", "exampleName")
        .field("address", "100 Example Address")
        .field("telephone", "0978956043")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.a("boolean");
          res.body.data.name.should.equal("exampleName");
          res.body.data.address.should.equal("100 Example Address");
          res.body.data.email.should.equal(email);
          done();
        });
    });
  });
  describe("/POST signup validate failed", () => {
    it("it should Sign Up failed with empty email", (done) => {
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", "")
        .field("name", "exampleName")
        .field("address", "100 Example Address")
        .field("telephone", "0978956043")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(400);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          res.body.errors.should.be.a("array");
          const { errors } = res.body;
          let fields = [];
          errors.forEach(function (e) {
            fields.push(e.field);
          });
          expect(fields).to.have.members(["email"]);
          done();
        });
    });
    it("it should Sign Up failed with empty name", (done) => {
      const email = `example${Date.now()}@gmail.com`;
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", email)
        .field("name", "")
        .field("address", "100 Example Address")
        .field("telephone", "0999111222")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(400);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          res.body.errors.should.be.a("array");
          const { errors } = res.body;
          let fields = [];
          errors.forEach(function (e) {
            fields.push(e.field);
          });
          expect(fields).to.have.members(["name"]);
          done();
        });
    });
    it("it should Sign Up failed with invalid email", (done) => {
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", "invalidEmail")
        .field("name", "exampleName")
        .field("address", "100 Example Address")
        .field("telephone", "0999111222")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(400);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          res.body.errors.should.be.a("array");
          const { errors } = res.body;
          let fields = [];
          errors.forEach(function (e) {
            fields.push(e.field);
          });
          expect(fields).to.have.members(["email"]);
          done();
        });
    });
    it("it should Sign Up failed with invalid phone number", (done) => {
      const email = `example${Date.now()}@gmail.com`;
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", email)
        .field("name", "exampleName")
        .field("address", "100 Example Address")
        .field("telephone", "09991122")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(400);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          res.body.errors.should.be.a("array");
          const { errors } = res.body;
          let fields = [];
          errors.forEach(function (e) {
            fields.push(e.field);
          });
          expect(fields).to.have.members(["telephone"]);
          done();
        });
    });
  });
  describe("/POST signup with exception", () => {
    let _createFnc;
    beforeEach(function () {
      _createFnc = UserSchema.create; //save original function
      UserSchema.create = function () {
        throw new Error("for test");
      };
    });
    it("it should Sign Up failed with exception", (done) => {
      const email = `example${Date.now()}@gmail.com`;
      chai
        .request(server)
        .post("/api/v0/signup")
        .field("email", email)
        .field("name", "exampleName")
        .field("address", "100 Example Address")
        .field("telephone", "0978956043")
        .field("password", "")
        .attach("photo", __dirname + "/dataTest/example.jpg", "example.jpg")
        .then((res) => {
          res.should.have.status(500);
          res.body.status.should.be.a("boolean");
          res.body.status.should.equal(false);
          done();
        });
    });
    afterEach(function () {
      UserSchema.create = _createFnc;
    });
  });
});
