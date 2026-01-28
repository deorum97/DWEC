/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { App } from "./app/app";
import routerConfig from "./app/routes";
bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routerConfig)],
}).catch((err) => console.error(err));
