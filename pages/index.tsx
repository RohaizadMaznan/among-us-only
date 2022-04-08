import Head from "next/head";
import useSWR from "swr";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { Messages } from "../components/Messages";
import { server } from "../config";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

interface Search {
  q?: string | any;
}

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const Home: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { q } = router.query;
  const [filters, setFilters] = useState<Search>({
    q: "",
  });
  const { data, error } = useSWR(
    !q ? `${server}/posts` : `${server}/posts?name=${q}`,
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <Search messages={data} filters={filters} setFilters={setFilters} />
      <Messages messages={data} />
    </div>
  );
}

const Index = () => {
  return (
    <>
      <Head>
        <title>Among Us Only | Secret Message for Loved One Stay Secret</title>
        <meta
          name="description"
          content="Among Us Only | Secret Message for Loved One Stay Secret"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Home />
    </>
  );
};

Index.layout = "PUBLIC";
export default Index;
