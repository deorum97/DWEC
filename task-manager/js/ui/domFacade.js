import { HISTORIC_KEY } from "../models/constants.JS";

class domFacade {
  renderTask() {
    const taskList = JSON.parse(localStorage.getItem(HISTORIC_KEY));
  }
}
