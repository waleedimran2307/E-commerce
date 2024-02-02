import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import MessageFail from "./MessageFail";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : fetchStatus.fetchFailed ? (
        <MessageFail />
      ) : (
        <Outlet />
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
