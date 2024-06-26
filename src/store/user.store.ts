import { defineStore } from "pinia";
import { mande } from "mande";

interface State {
  userList: UserInfo[];
  user: UserInfo | null;
  userData: any;
}

interface UserInfo {
  name: string;
  age: number;
}

const api = mande("/api/users");
function showTooltip(msg: string) {}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      userList: [],
      user: null,
      userData: {}
    };
  },
  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password });
        showTooltip(`Welcome back ${this.userData.name}!`);
      } catch (error: any) {
        showTooltip(error);
        // let the form component display the error
        return error;
      }
    }
  }
});
