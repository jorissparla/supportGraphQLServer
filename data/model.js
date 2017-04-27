import Sequelize from 'sequelize';

const db = new Sequelize('ToolsSupport', 'ps', 'm5Password', {
  dialect: 'mssql',
  host: 'nlbavwtls22',
  port: 1433,
  freezeTableName: true,
});

const Account = db.define(
  'b_accounts',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    login: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    fullname: Sequelize.STRING,
    email: Sequelize.STRING,
    team: Sequelize.STRING,
    location: Sequelize.STRING,
    region: Sequelize.STRING,
    navid: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

Account.removeAttribute('id');

const Incident = db.define('v_incidents', {
  UIC: {
          type: Sequelize.UUID,
          primaryKey: true
      },
  OwnerID: Sequelize.INTEGER,
  OwnerName: Sequelize.STRING,
  OwnerGroupName: Sequelize.STRING,
  nav: Sequelize.STRING,
  IncidentID: Sequelize.INTEGER,
  Severity: Sequelize.STRING,
  CustomerID: Sequelize.INTEGER,
  Customer: Sequelize.STRING,
  IncidentRegion: Sequelize.STRING,
  StatusID: Sequelize.INTEGER,
  LoggedDate: Sequelize.DATE,
  IsEscalated: Sequelize.INTEGER,
  CustomerISA: Sequelize.INTEGER,
  Status: Sequelize.STRING,
  LastUpdated: Sequelize.DATE,
  DaysUpdated: Sequelize.INTEGER,
  DaysOpen: Sequelize.INTEGER,
  wait_time: Sequelize.INTEGER,
  summary: Sequelize.STRING,
  Note: Sequelize.STRING,
  acc_team: Sequelize.STRING,
  acc_region: Sequelize.STRING,
  acc_location: Sequelize.STRING,
  iBacklog: Sequelize.INTEGER,
  isElite: Sequelize.INTEGER,
  iCallback: Sequelize.INTEGER,
  customertype: Sequelize.STRING,
  IncidentType: Sequelize.STRING,
  bl_activity_owner: Sequelize.STRING,
  bl_activity_ownerid: Sequelize.INTEGER,
  newest_bod: Sequelize.INTEGER,
  isaflag: Sequelize.INTEGER
}, {
      timestamps: false,
      freezeTableName: true
});

const Kudo = db.define('b_kudos', {
  incident_id: Sequelize.INTEGER,
  pic: Sequelize.STRING,
  survey_date: Sequelize.DATE,
  customer_name: Sequelize.STRING,
  customer_id: Sequelize.STRING,
  ownerrep_name: Sequelize.STRING,
  product_name: Sequelize.STRING,
}, {
    timestamps: false,
          freezeTableName: true
});
Kudo.removeAttribute('id');

export { Account , Incident, Kudo};
