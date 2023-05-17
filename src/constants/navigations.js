/**
 * navigations
 *
 * @package constants
 */

/**
 * ベースpath
 * @type {string}
 */
export const BASE_PATH = "/react-router-dom";

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{TOP:string, DETAIL:string, EDIT:string, CREATE:string}}
 */
export const NAVIGATION_LIST = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/:id`,
  EDIT: `${BASE_PATH}/edit/:id`,
  CREATE: `${BASE_PATH}/create`,
};

/**
 * パス一覧
 * 画面遷移時に使用
 * @type {{TOP:string, DETAIL:string, EDIT:string, CREATE:string}}
 */
export const NAVIGATION_PATH = {
  TOP: `${BASE_PATH}`,
  DETAIL: `${BASE_PATH}/detail/`,
  EDIT: `${BASE_PATH}/edit/`,
  CREATE: `${BASE_PATH}/create`,
};
