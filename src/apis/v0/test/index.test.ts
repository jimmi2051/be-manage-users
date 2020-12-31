//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../App";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Pets", () => {
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
          res.body.data.should.be.a("array");
          res.body.status.should.be.a("boolean");
          done();
        });
    });
  });
});
