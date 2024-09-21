import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { getGames } from "../../Redux/gamesSlice";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";
export default function Sports() {
  const dispatch: AppDispatch = useDispatch();
  const { Games } = useSelector((state: RootState) => state.Home);

  useEffect(() => {
    dispatch(getGames("sports"));
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Sports</title>
        <meta name="description" content="Sports Games Page" />
      </Helmet>{" "}
      <div className="container margin-top">
        <div className="row gy-5">
          {Games && Games.length > 0 ? (
            <>
              {Games.map((product) => {
                return (
                  <div key={product.id} className="col-md-6 col-lg-4">
                    <div className="rounded-2 product shadow1 overflow-hidden px-3 pb-3">
                      <Link
                        to={`/details/${product.id}`}
                        className="text-color text-decoration-none"
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="my-3 w-100"
                        />

                        <h3 className="h4 ">{product.title}</h3>
                        <div className=" d-flex align-items-center justify-content-between">
                          <p className=" w-50 text-black">
                            {product.short_description
                              .split(" ")
                              .slice(0, 4)
                              .join(" ")}
                          </p>
                          <div>
                            <h3 className="h4">
                              {product.genre.split(" ").slice(0, 1).join(" ")}
                            </h3>
                            <p className="text-center fs-6 m-0 bg-danger rounded-2 p-1">
                              {product.platform}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="position-fixed start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center overlay">
              <InfinitySpin width="200" color="white" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
