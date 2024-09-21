import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../../Redux/gamesDetailsSlice";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";
export default function Details({}) {
  const { id } = useParams<{ id: string }>();

  const dispatch: AppDispatch = useDispatch();
  const { Details, isLoading } = useSelector(
    (state: RootState) => state.Details
  );

  useEffect(() => {
    if (id) {
      dispatch(getDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (!Details) {
    return (
      <div className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center overlay">
        <InfinitySpin width="200" color="white" />
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <>
          <div className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center overlay">
            <InfinitySpin width="200" color="white" />
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>Details</title>
            <meta name="description" content="Details Games Page" />
          </Helmet>
          <div className="container margin-top">
            <div className="row">
              <div className="col-md-4  ">
                <div className="">
                  <img
                    className="w-100 rounded-2"
                    src={Details.thumbnail}
                    alt={Details.title}
                  />
                </div>
              </div>
              <div className="col-md-8 text-color">
                <h2>
                  Title: <span className="text-black h4">{Details.title}</span>{" "}
                </h2>
                <h4>
                  Categories:{" "}
                  <span className="text-black h4">{Details.genre}</span>
                </h4>
                <h4>
                  Platform:{" "}
                  <span className="text-black h4">{Details.platform}</span>
                </h4>
                <h4>
                  Status:{" "}
                  <span className="text-black h4">{Details.status}</span>
                </h4>
                <p className="text-black my-3">{Details.description}</p>
                <Link
                  to={Details.freetogame_profile_url}
                  target="_blank"
                  className=" btn btn-outline-light"
                >
                  {" "}
                  Show Game
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
