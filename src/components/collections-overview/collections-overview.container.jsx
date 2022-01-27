import CollectionsOverview from "./collections-overview.component";
import React from "react";
// import {useQuery, gql} from '@apollo/client';
import {gql} from "apollo-boost";
import Spinner from "../spinner/spinner.component";


const GET_COLLECTIONS = gql`
{
collections {
id
title
items {
id
name
price
imageUrl
}
}
}
`;

const CollectionsOverviewContainer = () => {
    const {loading, error, data} = useQuery(GET_COLLECTIONS);

    if (loading) return <Spinner/>;
    if (error) return `Error! ${error.message}`;
    console.log({loading});
    console.log({error});
    console.log({data});

    return (<CollectionsOverview collections={data.collections}/>);

};

export default CollectionsOverviewContainer;
