const CaseChange = require("../utils/caseChange.js");

class Agent {
  static getAgentName(url) {
    const filteredUrl = url.match(/agent-profile\/(.*)(-\d+)/)[1];
    const name = CaseChange.toUpperCase(filteredUrl);
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
    const nameSlug = CaseChange.toLowerCase(agentName);
    return `${baseUrl}${nameSlug}-${agentId}/`;
  }
}

module.exports = Agent;
