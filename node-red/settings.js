/**
 * Node-RED settings for the Render container.
 * Runtime data (flows, credentials and context) is stored in /data.
 * Before exposing the editor publicly, configure adminAuth and HTTPS/access
 * restrictions. Do not commit credentials or secrets to this file.
 */
module.exports = {
    uiPort: process.env.PORT || 1880,
    userDir: "/data",
    flowFile: process.env.FLOWS || "flows.json",
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || false,
    editorTheme: {
        projects: { enabled: false }
    },
    logging: {
        console: {
            level: process.env.NODE_RED_LOG_LEVEL || "info",
            metrics: false,
            audit: false
        }
    },
    functionExternalModules: true,
    exportGlobalContextKeys: false
};
