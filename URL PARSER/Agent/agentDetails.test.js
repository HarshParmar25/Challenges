const Agent = require("./agentDetails.js");

describe("Get agent data from Url", () => {
  test(`https://www.realestateview.com.au/agent-profile/andrew-mccann-33501/`, () => {
    expect(Agent.getAgentData(`https://www.realestateview.com.au/agent-profile/andrew-mccann-33501/`)).toEqual({
      agentName: "Andrew Mccann",
      agentId: 33501,
    });
  });

  test(`https://www.realestateview.com.au/agent-profile/mark-imbesi-98524/`, () => {
    expect(Agent.getAgentData(`https://www.realestateview.com.au/agent-profile/mark-imbesi-98524/`)).toEqual({
      agentName: "Mark Imbesi",
      agentId: 98524,
    });
  });
});

/////////////////////////////////////////////////////

describe("Get agent Url from Data", () => {
  test(`{
      agentName: "Mark Imbesi",
      agentId: 98524,
    }`, () => {
    expect(
      Agent.getAgentUrl({
        agentName: "Mark Imbesi",
        agentId: 98524,
      })
    ).toEqual(`https://www.realestateview.com.au/agent-profile/mark-imbesi-98524/`);
  });

  test(`{
      agentName: "Andrew Mccann",
      agentId: 33501,
    }`, () => {
    expect(
      Agent.getAgentUrl({
        agentName: "Andrew Mccann",
        agentId: 33501,
      })
    ).toEqual(`https://www.realestateview.com.au/agent-profile/andrew-mccann-33501/`);
  });
});
