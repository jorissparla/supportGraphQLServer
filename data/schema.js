import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'

const schema = `
type Account {
  id: Int
  firstname: String
  lastname: String
  fullname: String
  team: String
  navid: String
  location: String
  region: String
  incidents: [Incident]
  kudos: [Kudo]
}

type Incident {
   IncidentID: Int,
  Severity: String,
  OwnerName: String,
  OwnerGroupName: String,
  OwnerID: String,
  CustomerID: Int,
  Customer: String,
  IncidentRegion: String,
  StatusID: Int,
  LoggedDate: String,
  IsEscalated: Int,
  CustomerISA: Int,
  Status: String,
  summary: String,
  account: Account
}

type Kudo {
  incident_id: Int,
  pic: String,
  survey_date: String,
  customer_name: String,
  customer_id: String,
  ownerrep_name: String,
  product_name: String,
  incident: Incident,
  account: Account

}

type Query {
  account(navid: String, team:String, firstname: String, location: String, region: String): [Account]
  incident(OwnerID: String, Customer: String, OwnerName: String) : [Incident]
  kudo(ownerrep_name: String): [Kudo]
  getFortuneCookie: String
}
schema {
  query: Query
}
`;

export default makeExecutableSchema({
  typeDefs: schema, resolvers
});
