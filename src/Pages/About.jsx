import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        obcaecati, quod cupiditate architecto alias tempora facere totam neque
        doloremque nesciunt autem aspernatur qui repellat incidunt recusandae
        iusto iure culpa maiores itaque? Voluptatem magni, eveniet quisquam ab
        inventore at possimus doloribus minus ducimus, sed aliquam delectus,
        ipsa accusamus quod amet. Non.
      </p>
    </>
  );
};

export default About;
