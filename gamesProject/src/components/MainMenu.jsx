import { MenuOption } from "./MenuOption";

export function MainMenu () {
    return (
        <form id="MainMenu">
            <MenuOption text="New Game"></MenuOption>
            <MenuOption text="Instructions"></MenuOption>
            <MenuOption text="Quit"></MenuOption>
        </form>
    )
}