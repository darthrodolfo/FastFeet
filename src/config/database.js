module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'posgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscore: true,
    underscoreAll: true,
  },
};
