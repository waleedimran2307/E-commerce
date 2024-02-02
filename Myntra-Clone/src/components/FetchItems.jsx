import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { fetchActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  // fetching data from backend
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchActions.fetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.fetchingEnded());
        dispatch(itemsActions.addItem(items[0]));
      })

      .catch((error) => {
        dispatch(fetchActions.fetchFailedStarted());
        dispatch(fetchActions.fetchFailedEnded());
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
