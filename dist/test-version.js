#!/usr/bin/env node
console.log("🔥🔥🔥 TEMPORARY TEST VERSION RUNNING 🔥🔥🔥");
console.log("📅 Started at:", new Date().toISOString());
console.log("🎯 If you see this, TypingMind is using the NEW repository!");
console.log("🔄 This will log every 5 seconds to prove it's working...");
console.log("⚡ Repository: github:euanlt/openai-image-mcp-v2");
console.log("🆔 Test ID: CACHE-BYPASS-TEST-2025");
let counter = 1;
const interval = setInterval(() => {
    console.log(`⏰ HEARTBEAT ${counter}: ${new Date().toISOString()} - NEW VERSION CONFIRMED!`);
    counter++;
    // Stop after 20 heartbeats to avoid infinite logging
    if (counter > 20) {
        console.log("🏁 Test completed - TypingMind is definitely using the NEW repository!");
        clearInterval(interval);
        process.exit(0);
    }
}, 5000);
// Keep process alive
process.stdin.resume();
