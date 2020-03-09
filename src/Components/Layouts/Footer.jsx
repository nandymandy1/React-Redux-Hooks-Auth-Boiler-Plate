import React from "react";

const Footer = () => {
    return (
        <div
            className="bg-primary text-white pt-3"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <p>Codebook Inc.&copy;{new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;