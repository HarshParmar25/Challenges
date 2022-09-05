const CaseChange = require("../modules/caseChange.js");

class Agent {
  static getAgentName(url) {
    const filteredUrl = url.match(/agent-profile\/(.*)(-\d+)/)[1];
    const name = filteredUrl
      .split("-")
      .map((name) => name[0].toUpperCase() + name.slice(1))
      .join(" ");
    return name;
  }
  static getAgentId(url) {
    return parseInt(url.match(/-(\d+)\//)[1]);
  }

  static getAgentData(url) {
    const agentName = this.getAgentName(url);
    const agentId = this.getAgentId(url);
    return { agentName, agentId };
  }

  static getAgentUrl({ agentName, agentId }) {
    const baseUrl = `https://www.realestateview.com.au/agent-profile/`;
    const nameSlug = agentName.replace(" ", "-").toLowerCase();
    return `${baseUrl}${nameSlug}-${agentId}/`;
  }
}

module.exports = Agent;

const url0 = `https://www.realestateview.com.au/agent-profile/andrew-mccann-33501/`;
const data = {
  agentName: "Andrew Mccann",
  agentId: 33501,
};

const res = Agent.getAgentData(url0);
res;

const r = Agent.getAgentUrl(data);
r;
