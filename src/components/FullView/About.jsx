import React from "react";
import Head from "../Common/Head";
import Button from "../Common/Button";

const About = ({head}) => {
  return (
    <div>
      <div className={`${!head ?"hidden":"block"}`}>
        <Head
          text={"About"}
          className={` text-xl my-2 inline-block font-semibold text-[#212529] `}
        />
        <p className="border-b-[4px] border-[#D93800] mb-3 w-[8%]"></p>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          iste maiores aut earum similique, dolor deserunt et fugiat minus
          repellendus provident, debitis distinctio officiis eligendi tempore
          quos. Numquam nobis cumque nihil magni impedit repellat illum, nulla
          unde placeat consectetur sed sint eligendi officia hic a reiciendis,
          doloremque soluta reprehenderit eum voluptatem. Quasi natus nostrum
          omnis delectus rerum laborum error voluptatem, blanditiis ex impedit
          fugit eligendi, quaerat quo placeat a accusantium nobis incidunt!
          Facere similique totam consequatur nostrum. Fugiat praesentium
          voluptates nesciunt aut magni laborum, porro iure dolor quo. Suscipit
          quae neque aspernatur explicabo dolore? Optio tempora veniam vitae
          dolorem enim.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          tempora ullam enim, a eligendi nisi, quis molestiae dolorum sit
          cupiditate natus inventore fugiat, maiores atque! Reprehenderit
          numquam enim tempora blanditiis.
        </p>
        <div className="mt-[2%]">
          <Button text={"Order Now"} className="text-white px-4 py-2 text-center bg-[#D93800] rounded-3xl hover:bg-black" />
        </div>
      </div>
    </div>
  );
};

export default About;
