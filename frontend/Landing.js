import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <Link
              to="/recipe"
              className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-600"
            >
              Recipes
            </Link>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >

              </svg>
              <span className="relative">Welcome</span>
            </span>{" "}
            to Recipe Reduxx.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Love to cook? Want an easy way to store your favorite recipes?
            Let's start your cooking journey here!
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="0,50 25,10 25,37 50,0"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Create a Recipe
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Find a recipe you like? Store it! List all the ingredients for your
              fabulous meal and recreate it anytime you want!
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="0,50 25,10 25,37 50,0"
                />
              </svg>
            </div>
            
            {/* <h6 className="mb-3 text-xl font-bold leading-5">
              Get other people's recipes
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Food for us comes from our relatives, whether they have wings or
              fins or roots. That is how we consider food. Food has a culture.
              It has a history. It has a story. It has relationships. Discover
              now!
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div> */}

            <h6 className="mb-3 text-xl font-bold leading-5">Like a recipe</h6>
            <p className="mb-3 text-sm text-gray-900">
              Tried something you liked? Give props to the chef!
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="0,50 25,10 25,37 50,0"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Save a recipe</h6>
            <p className="mb-3 text-sm text-gray-900">
              Save your favorite recipes. Inspired by someone else's creation? Save it to your dashboard and make it later!.
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}
