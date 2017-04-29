import { Account, Incident, Kudo } from './model';

//⚠️

const resolvers = {
  Query: {
    account(root_, args) {
      return Account.findAll({ where: args });
    },
    incident(_, args) {
      return Incident.findAll({ where: args });
    },
    kudo(_, args) {
      console.log('Kudo');
      return Kudo.findAll({ where: args });
    }
  },
  Mutation: {
    addaccount: (root, args) => {
      const newaccount = {
        firstname: args.firstname,
        lastname: args.lastname,
        team: args.team || 'TLS',
        fullname: args.firstname + ' ' + args.lastname,
        navid: args.navid || '1234567',
        login: args.navid || 'infor\\test',
        email: `${args.firstname}.${args.lastname}@infor.com`
      };
      return Account.create(newaccount);
    },
    addChannel: (root, args) => {
      const newChannel = { id: 2, name: args.name };
      return 'newChannel';
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
      return Account.findOne({
        where: {
          navid: incident.OwnerID
        }
      });
    },
    kudo(incident) {
      return Kudo.findOne({
        where: {
          incident_id: incident.incidentID
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
console.log(`resolvers loaded`);
export default resolvers;
