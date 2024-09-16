import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { getGames } from "../../Redux/gamesSlice";
import { Link, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";
export default function Zombie() {
  const dispatch: AppDispatch = useDispatch();
  const { Games } = useSelector((state: RootState) => state.Home);

  useEffect(() => {
    dispatch(getGames("zombie"));
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Zombie</title>
        <meta name="description" content="Zombie Games Page" />
      </Helmet>{" "}
      <div className="container  margin-top">
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
                          <p className=" text-black">
                            {product.short_description
                              .split(" ")
                              .slice(0, 15)
                              .join(" ")}
                          </p>
                          <div>
                            <h5 className=" mx-3">{product.genre}</h5>
                            <h6 className=" text-center fs-6 bg-danger rounded-2 p-1">
                              {product.platform}
                            </h6>
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
