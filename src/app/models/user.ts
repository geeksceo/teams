import { Team } from "./team";

export interface User {
    email: String;
    username: String;
    firstname: String;
    lastname: String;
    teams: Array<Team>
}
