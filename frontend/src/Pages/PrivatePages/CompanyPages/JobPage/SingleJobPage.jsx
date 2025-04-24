import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../../../Contexts/AuthContext";
import Side from "../../../../PrivateComponents/Side/Side";
import DashNav from "../../../../PrivateComponents/DashNav/DashNav";
import SinglePageContainer from "./SingleJobPageComponents/SinglePageContainer";

const SingleJobPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let { user } = useContext(UserAuthContext);
  const toggleModal = () => setIsOpen(!isOpen);
  const [fileError, setFileError] = useState("");
  let userType = user.userType;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      e.target.value = null; // Reset the input
    } else {
      setFileError("");
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="flex w-full">
      <Side isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <div className="w-full  flex flex-col flex-1  md:ml-[80px] lg:ml-[250px] ">
        <DashNav title={"Dashboard"} onMenuClick={handleSidebarToggle} />
        <div className=" h-full max-w-full w-full mx-auto  bg-gray-100  px-6 py-7">
          <SinglePageContainer toggleModal={toggleModal} />
        </div>
      <div>
          {/* Application popup */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center b p-4">
              <div className="bg-white rounded-lg shadow-lg max-w-xl w-full h-full overflow-y-auto p-6 mx-2 relative">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                  onClick={toggleModal}
                >
                  ✕
                </button>

                <h2 className="text-xl font-semibold mb-1">
                  Social Media Assistant
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Nomad • Paris, France • Full-Time
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
                      placeholder="Enter your fullname"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-700 mt-4">
                    LINKS
                  </h3>
                  <div>
                    <label className="text-sm text-gray-600">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
                      placeholder="Link to your LinkedIn URL"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
                      placeholder="Link to your portfolio URL"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">
                      Attach your resume
                    </label>
                    <div>
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
       file:mr-4 file:py-2 file:px-4
       file:rounded file:border-0
       file:text-sm file:font-semibold
       file:bg-violet-50 file:text-violet-700
       hover:file:bg-violet-100"
                      />
                      {fileError && (
                        <p className="text-red-600 text-sm mt-2">{fileError}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-violet-600 text-white py-2 rounded-md mt-4 hover:bg-violet-700"
                  >
                    Submit Application
                  </button>

                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By sending the request you can confirm that you accept our{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          )}
          {/* Application popup ended */}
        </div>
      </div>
    </div>
  );
};

export default SingleJobPage;
