////////////////
var neo4j = require("neo4j-driver");
(async () => {
  let driver;

  try {
    driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );
    const serverInfo = await driver.getServerInfo();
    console.log("Connection established");
    console.log(serverInfo);

    // Get the name of all 42 year-olds
    const { records, summary, keys } = await driver.executeQuery(
      "MATCH (t:Team {isActive: true}) RETURN t.name AS name",
      { database: "neo4j" }
    );

    // Summary information
    console.log(
      `>> The query ${summary.query.text} ` +
        `returned ${records.length} records ` +
        `in ${summary.resultAvailableAfter} ms.`
    );

    // console.log(records);
    // Loop through results and do something with them
    console.log(">> Results");
    for (let record of records) {
      console.log(record.get("name"));
    }
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
  } finally {
    driver.close();
  }
})();
/////////////////////
