"use strict";

import { HISTORIC_USERL } from "../model/constants.js";

export function desloguear() {
  sessionStorage.removeItem(HISTORIC_USERL);
  window.location.href = "index.html";
}
