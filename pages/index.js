import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import axios from "axios";
import AddButton from "@/components/AddButton";
import { useState } from "react";
import Add from "@/components/Add";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className="styles.container">
      <Head>
        <title>EatNow</title>
        <meta name="description" content="Best Pizza shop in Bangalore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
export const getServerSideProps = async (context) => {
  let admin = false;
  const myCookie = context.req?.cookies || "";
  if (myCookie.token == process.env.TOKEN) {
    admin = true;
  }
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        pizzaList: res.data,
        admin,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pizzaList: [],
        admin,
      },
    };
  }
};
