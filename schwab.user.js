// ==UserScript==
// @name         Schwab
// @namespace    https://github.com/kwongius/
// @homepageURL  https://github.com/kwongius/personal-userscripts
// @version      0.1.0
// @description  Hide brokerage section on the Account summary page.
// @author       Kevin Wong
// @match        https://client.schwab.com/Accounts/Summary/Summary.aspx
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

// TODO: Ensure that the ID always matches the brokerage section
GM_addStyle('#ctl00_wpm_ac_ac_pba { display: none; }');
