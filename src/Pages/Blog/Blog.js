import React from "react";

const Blog = () => {
  return (
    <section className="">
      <h2 className="text-3xl md:text-5xl text-center pt-10">Blogs</h2>
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5">
        <div className=" rounded p-5 text-xl ">
          <h2 className="text-3xl text-center py-5">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-xl">
            There are several other ways to manage state​s in React, including
            the use of: Hooks. React Context API. Apollo Link State.
          </p>
        </div>

        <div className="rounded p-5 text-xl ">
          <div className="container text-xl">
            <h3 className="text-3xl text-center">
              How does prototypical inheritance work?
            </h3>
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>

        <div className=" rounded p-5 text-xl ">
          <div className="container text-xl">
            <h2 className="text-3xl text-center">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="rounded p-5 text-xl ">
          <div className="container">
            <h2 className="text-3xl text-center">
              {" "}
              React vs. Angular vs. Vue?
            </h2>
            <p>
              Vue is generally more suited to smaller, less complex apps and is
              easier to learn from scratch compared to React. Vue can be easier
              to integrate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
