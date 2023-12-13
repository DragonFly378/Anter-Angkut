import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { RotateLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/Index";

const TempatPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulating an asynchronous operation
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 1000);

    return () => clearTimeout(delay);
  }, []); // useEffect runs only once on mount

  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <>
      <div className="tempat-page">
        <Layout>
          {isLoading ? (
            <LoadingSpinner
              Loader={RotateLoader}
              isLoading={isLoading}
              color="#4A90E2"
              size="20"
            />
          ) : (
            <>
              <div className="hello mt-[108px]">
                <h1 className="text-2xl font-semibold">Content Loaded!</h1>
                <div className="text">Jadwal Page</div>
              </div>
            </>
          )}
        </Layout>
      </div>
    </>
  );
};

export default TempatPage;
