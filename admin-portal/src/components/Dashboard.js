import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getDataFromFirebase = [];
        const details = db
            .collection("contacts")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getDataFromFirebase.push({ ...doc.data(), key: doc.id });
                    setData(getDataFromFirebase);
                    setLoading(false);
                });
            });

        return () => details();
    }, []);

    async function handleLogout() {
        setError("");

        try {
            navigate("/login");
            await logout();
        } catch {
            setError("Failed to Log Out");
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center p-4 signUp-font">
                <span>Fetching Requests</span>
            </div>
        );
    }

    return (
        <div>
            {error && <div className="">{error}</div>}
            <div className="flex justify-center  font-bold text-xl shadow py-4">
                {" "}
                M E D I C W I S E
            </div>
            <div className="flex justify-between p-4 text-sm shadow poppins">
                <div>{currentUser.email}</div>
                <button
                    variant="link"
                    onClick={handleLogout}
                    className="bg-red-500 text-white hover:bg-red-600 px-2 rounded"
                >
                    Log Out
                </button>
            </div>
            <div className="flex justify-center p-4 signUp-font">
                <span>Pending Requests</span>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1">
                    {data.map((post) => (
                        <div
                            key={post.id}
                            className="shadow-xl p-4 mb-4 "
                            style={{ width: "350px" }}
                        >
                            <div className="signUp-font font-bold">
                                {post.name}
                                <span
                                    className=""
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "14px",
                                    }}
                                >
                                    &nbsp;&nbsp;|&nbsp;&nbsp;{post.age}
                                </span>
                            </div>
                            <div
                                style={{ fontSize: "13px" }}
                                className="text-gray-800"
                            >
                                {post.email}
                            </div>
                            <div
                                style={{ fontSize: "13px" }}
                                className="text-gray-800"
                            >
                                +91&nbsp;&nbsp;{post.telephone}
                            </div>
                            <div className="flex justify-between mx-16 my-4">
                                <span>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full h-8 py-2 pt-1 px-4  rounded focus:outline-none focus:shadow-outline signUp-font"
                                        type="submit"
                                    >
                                        Details
                                    </button>
                                </span>
                                <span>
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold w-full h-8 py-2 pt-1 px-4  rounded focus:outline-none focus:shadow-outline signUp-font"
                                        type="submit"
                                    >
                                        Schedule
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
