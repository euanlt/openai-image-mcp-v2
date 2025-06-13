#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// STEP 1: Immediate logging
console.log("STEP 1: Script started");
// STEP 2: Basic Node.js functionality
console.log("STEP 2: Basic logging works");
console.log("STEP 3: Process info:", process.version, process.platform);
// STEP 3: Import built-in modules
console.log("STEP 4: Importing fs...");
console.log("STEP 5: fs imported successfully");
// STEP 4: Import external modules one by one
console.log("STEP 6: Importing zod...");
console.log("STEP 7: zod imported successfully");
console.log("STEP 8: Importing MCP SDK...");
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
console.log("STEP 9: MCP SDK imported successfully");
console.log("STEP 10: Importing OpenAI...");
console.log("STEP 11: OpenAI imported successfully");
// STEP 5: Main execution
(async () => {
    try {
        console.log("STEP 12: Creating MCP server...");
        const server = new mcp_js_1.McpServer({
            name: "minimal-test",
            version: "1.0.0"
        }, {
            capabilities: {
                tools: { listChanged: false }
            }
        });
        console.log("STEP 13: MCP server created successfully");
        console.log("STEP 14: All imports and basic setup successful!");
        console.log("STEP 15: Exiting gracefully");
    }
    catch (error) {
        console.error("ERROR at step:", error);
        console.error("Stack:", error.stack);
        process.exit(1);
    }
})();
