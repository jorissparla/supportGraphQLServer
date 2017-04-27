import { Account, Incident, Kudo } from './model';

const resolvers = {
  Query: {
    account(root_, args) {
      return Account.findAll({ where: args });
    },
    incident(_, args) {
      return Incident.findAll({ where: args });
    },
    kudo(_, args) {
      console.log('Kudo')
      return Kudo.findAll({ where: args });
    }
  },
  Account: {
    incidents(account) {
      console.log('Incident Account');
      return Incident.findAll({
        where: { OwnerID: account.navid }
      });
    },
    kudos(account) {
      return Kudo.findAll({
        where: { ownerrep_name: account.fullname }
      });
    }
  },
  Incident: {
    account(incident) {
      console.log('😠😠😠😠😠 Account');
      return Account.findOne({
        where: {
          navid: incident.OwnerID
        }
      });
    }
  },
  Kudo: {
    account(kudo) {
      return Account.findOne({
        where: {
          fullname: kudo.ownerrep_name
        }
      });
    }
  }
};

export default resolvers;
