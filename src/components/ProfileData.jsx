import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p>
                <strong>User Name: </strong> {props.graphData.displayName}
            </p>
            <p>
                <strong>Custom Security Attributes: </strong>
                {`${Object.keys(props.graphData.customSecurityAttributes)}`}
            </p>
        </div>
    );
};
