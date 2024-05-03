import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const firstPage: NextPage = () =>{
  return(
    <div className="flex flex-col items-center justify-center h-screen">
    <Head>
        <title>My First Page</title>
        <meta property="og:title" key="title"></meta>  
    </Head>
    <Link href='/counters/counter1' className="mb-20 inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
      To Counter Example
    </Link>

    <Image
        src='/nextjs.png'
        alt=''
        width={400}
        height={600}
    />
</div>



  );
}

export default firstPage;