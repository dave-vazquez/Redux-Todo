/*********************************************************************************
 *                                    ACTIONS                                     *
 **********************************************************************************/

export const SHOW_ALL = "FILTER_ALL";
export const SHOW_COMPLETED = "FILTER_COMPLETED";
export const SHOW_INCOMPLETE = "FILTER_INCOMPLETE";

export const showAll = () => ({ type: SHOW_ALL });

export const showCompleted = () => ({ type: SHOW_COMPLETED });

export const showIncomplete = () => ({ type: SHOW_INCOMPLETE });
