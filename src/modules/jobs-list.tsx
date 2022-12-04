import React from "react";
import { MdWorkOutline, MdClose } from "react-icons/md";

export default function JobsList() {
    const [searchText, setSearchText] = React.useState("");
    return (
        <div className="jobs-list">
            <div className="search-container">
                <div className="search-box">
                    <MdWorkOutline
                        size={25}
                        color={"#B9BDCF"}
                        className="search-box__icon"
                    />
                    <input
                        type="text"
                        placeholder="Title, companies, expertise or benefits"
                        className="search-box__input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <MdClose
                            size={20}
                            color={"#B9BDCF"}
                            className="search-box__close-icon"
                            onClick={() => setSearchText("")}
                        />
                    )}
                    <button
                        className="search-box__button"
                        onClick={() => alert("Search for " + searchText)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
