import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl);
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );
      console.log("User registered successfully");
      if (userAccount) {
        return this.login(email, password);
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  async login(email, password) {
    try {
      const userSession = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("User logged in successfully");
      if (userSession) {
        return this.login(email, password);
      } else {
        console.error("Error logging user");
      }
    } catch (error) {
      console.error("Error loggin user:", error);
    }
  }

  async getCurrentUser() {
    try{
        await this.account.get();
    }
    catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
}

    async logout(){
        try{
            await this.account.deleteSessions();
            console.log("User logged out successfully");
        }
        catch (error) {
            console.error("Error logging user out:", error);
        }
    }
    
}

const authservice = new AuthService();

export default authservice;
