import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import axiosInstance from "../utils/axiosInstance";
import { setAllNotes, setFavouriteNotes } from "../store/reducers/note.slice";

const useGetNotes = () => {
  const [loading, setLoading] = useState(false);

  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();

  const handler = async (noteType) => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(`/note/${noteType}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res && res.data && res.data.success) {
        if (noteType === "all") {
          dispatch(setAllNotes(res?.data?.notes));
        } else {
          dispatch(setFavouriteNotes(res?.data?.notes));
        }
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        return toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useGetNotes;
