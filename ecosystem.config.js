module.exports = {
  apps: [{
    name: "nodejs-on-ec2",
    script: "index.js",
    watch: true,
    ignore_watch: ["node_modules"],
  }],
};
