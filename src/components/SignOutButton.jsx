import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri:
                    process.env.NODE_ENV === "production" ? "/part-aad/" : "/",
                mainWindowRedirectUri:
                    process.env.NODE_ENV === "production" ? "/part-aad/" : "/",
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri:
                    process.env.NODE_ENV === "production" ? "/part-aad/" : "/",
            });
        }
    };

    return (
        <DropdownButton
            variant="secondary"
            className="ml-auto"
            drop="start"
            title="Sign Out"
        >
            <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>
                Sign out using Popup
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogout("redirect")}>
                Sign out using Redirect
            </Dropdown.Item>
        </DropdownButton>
    );
};
