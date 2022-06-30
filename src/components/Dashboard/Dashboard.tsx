import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Notes from "../Notes/Notes";
import "./Dashboard.css";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { INotes, NotesType } from "../../models/Notes";
import Cookies from "js-cookie";
import { Constants } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signOut } from "firebase/auth";
import { IUser } from "../../models/User";


function Dashboard(setIsLoggedIn: any) {
  const [data, setData] = useState<Array<INotes>>([]);
  const [searchData, setSearchData] = useState<Array<INotes>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {

    const userFromLocalStorage: IUser = JSON.parse(localStorage.getItem(Constants.NOTO_USER)!);

    setUser({
      name: userFromLocalStorage.name.substring(0, userFromLocalStorage.name.indexOf(" ")),
      avatar: userFromLocalStorage.avatar
    })

    setLoading(true);

    const noto_cookies = Cookies.get(Constants.COOKIE_NAME);

    if (noto_cookies) {
      setLoading(false);
      setData(JSON.parse(noto_cookies));
      setSearchData(JSON.parse(noto_cookies));

      toast.success(`Fetched ${JSON.parse(noto_cookies).length} results!`, {
        duration: 3000,
        position: "top-center",
      });
    } else {
      Cookies.remove(Constants.COOKIE_NAME);

      axios
        .get(Constants.SHEET_URL)
        .then((response) => {
          setLoading(false);

          Cookies.set(Constants.COOKIE_NAME, JSON.stringify(response.data), {
            expires: 5,
            secure: true,
            sameSite: "strict",
            path: "/",
          });

          setData(response.data);
          setSearchData(response.data);

          toast.success(`Fetched ${data.length} results!`, {
            duration: 3000,
            position: "top-center",
          });
        })
        .catch((err) => {
          toast.error("Something went wrong!", {
            duration: 3000,
            position: "top-center",
          });
          console.log(err);
        });
    }
  }, []);

  const handleSearch = (name: string) => {
    setSearchData(
      data.filter((item) => item.title.toLowerCase().includes(name))
    );
  };

  const handleFilter = (filterItem: string) => {
    switch (filterItem) {
      case NotesType.NOTES:
        setSearchData(data.filter((item) => item.type === NotesType.NOTES));
        toast.success(`Fetched ${data.filter((item) => item.type === NotesType.NOTES).length} results!`, {
          duration: 3000,
          position: "top-center",
        });
        break;
      case NotesType.BOOK:
        setSearchData(data.filter((item) => item.type === NotesType.BOOK));
        toast.success(`Fetched ${data.filter((item) => item.type === NotesType.BOOK).length} results!`, {
          duration: 3000,
          position: "top-center",
        });
        break;
      case NotesType.FIRST_YEAR:
        setSearchData(data.filter((item) => item.fresher === "1"));
        toast.success(`Fetched ${data.filter((item) => item.fresher === "1").length} results!`, {
          duration: 3000,
          position: "top-center",
        });
        break;
      default:
        setSearchData(data);
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        localStorage.removeItem(Constants.NOTO_USER);
        setIsLoggedIn(false);
        toast.success(`Logged out successfully!`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong!", {
          duration: 3000,
          position: "top-center",
        });
        console.log(err);
      });
  };

  return (
    <div className="dashboard-page p-1">
      <div className="card">
        <div className="card-body">
          <div className="user-area col-lg-6 mx-auto">
            <p className="user-name">
              Hey! {user?.name}{" "}
              <FaSignOutAlt className="logout" onClick={handleLogout} />
            </p>
            <img
              className="user-avatar"
              src={user?.avatar}
              alt="avatar"
            />
          </div>
          <br />
          <div className="search-area col-lg-6 mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search notes..."
                aria-label="Seach"
                aria-describedby="basic-addon1"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="filter">
            <select
              className="custom-select"
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option defaultValue={"All"}>All</option>
              <option value="Book">Books</option>
              <option value="Notes">Notes</option>
              <option value="FirstYear">First Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="notes-area col-lg-8 mx-auto mt-4">
        {loading ? (
          <div className="loading">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          <div className="row m-1">
            {searchData.length ? (
              searchData.map((item) => {
                return <Notes {...item} key={item.id} />;
              })
            ) : (
              <p className="no-notes">No items available...</p>
            )}
          </div>
        )}
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default Dashboard;
