module.exports = {
  port: 3000,
  jwtSecret: "!!SDEAssignment@!!",
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: "GUEST",
    ADMIN: "admin",
  },
};
