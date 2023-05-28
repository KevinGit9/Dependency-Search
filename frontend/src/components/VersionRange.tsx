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
        <div className="versionRangePanel">
            <label>
                From:
                <input
                    id="fromVersionInput"
                    type="text"
                    placeholder="From version..."
                    onChange={(e) => handleChange(e, props.setFromVersion)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            document.getElementById("toVersionInput")?.focus();
                        }
                    }}
                    value={props.fromVersion}
                />
            </label>
            <label>
                To:
                <input
                    id="toVersionInput"
                    type="text"
                    placeholder="To version..."
                    onChange={(e) => handleChange(e, props.setToVersion)}
                    value={props.toVersion}
                />
            </label>
        </div>
    );
};

export default VersionRange;