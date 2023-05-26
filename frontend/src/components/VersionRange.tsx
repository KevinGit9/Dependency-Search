import React, { useState } from "react";

interface VersionRangeProps {
    fromVersion: string;
    toVersion: string;
    setFromVersion: (value: string) => void;
    setToVersion: (value: string) => void;
}

function VersionRange(props: VersionRangeProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    return (
        <div>
            <label>
                From:
                <input
                    type = "text"
                    placeholder="Version"
                    onChange={(e) => handleChange(e, props.setFromVersion)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")     
                            console.log("hello")
                        }
                    }
                    value={props.fromVersion}
                />
            </label>
            <label>
                To:
                <input
                    type = "text"
                    placeholder="Version"
                    onChange={(e) => handleChange(e, props.setToVersion)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")     
                            console.log("hello")
                        }
                    }
                    value={props.toVersion}
                />
            </label>
        </div>
    );
};

export default VersionRange;