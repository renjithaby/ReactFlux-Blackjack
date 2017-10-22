/**
 * created by rabby
 * Defines the Actions of the flux architecture needed for this game
 * The core communicator.
 */
import Dispatcher from "../Dispatcher/Dispatcher.js";

/**
 *  New Game Action  triggered by bet button click
 */
export function startNewGame() {
    Dispatcher.dispatch({
        type: "START_NEW_GAME"
    });
}

/**
 *   Handle Player Stick Action triggered by stick button click
 */
export function handlePlayerStick() {
    Dispatcher.dispatch({
        type: "HANDLE_PLAYER_STICK"
    });
}
/**
 * Handle Player Hit Action triggered by hit button click
 */
export function handlePlayerHit() {
    Dispatcher.dispatch({
        type: "HANDLE_PLAYER_HIT"
    });
}
/**
 * RESET GAME Action to triggered in the beginning of every game
 */
export function resetGame() {
    Dispatcher.dispatch({
        type: "RESET_GAME"
    });
}




