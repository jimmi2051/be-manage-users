//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../../App";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("HealthCheck", () => {
  beforeEach((done) => {
    //Before each test we empty the database in your case
    done();
  });
  /*
   * Test the /GET route
   */
  describe("/GET healthCheck", () => {
    it("it should GET healthCheck is ok", (done) => {
      chai
        .request(server)
        .get("/api/v0/healthCheck")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal(true);
          res.body.description.should.equal("Server is alive!");
          done();
        });
    });
  });
});
