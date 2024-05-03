import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";

import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";

type responseItemType = {
    id: string;
    name: string;
};

const NamesSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
            return (
                <li key={`name-${idx}`}>
                    {item.id} : {item.name}
                </li>
            );
        });

    return (
        <ul>
        {output}
        </ul>
    );
}; // props에 있는 names를 이용해 Page 생성하기

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];

    try {
        names = await fetchNames();
    } catch(err) {}
    return {
        props: {
        names
        }
    };

    // return {
    //     props: {
    //     names,
    //     revalidate: 30
    //     }
    // };

}; //request시마다 names를 받아 Page 반환하기

export default NamesSSR;