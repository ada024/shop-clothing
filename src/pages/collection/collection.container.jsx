import React from "react";
// import {useQuery, gql} from '@apollo/client';
import {gql} from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./ccollection.component";



const GET_COLLECTION_BY_TITLE = gql`
query getCollectionsByTittle($title: String!) {
getCollectionsBy(title: $title) {
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

const CollectionPageContainer = ({ match}) => {
    const {loading, error, data  } = useQuery(GET_COLLECTION_BY_TITLE);
    if (loading) return <Spinner/>;
    if (error) return `Error! ${error.message}`;
    console.log({loading});
    console.log({error});
    console.log({data});

    return (<CollectionPage collections={data["getCollectionsByTitle"]}/>);


};

export default CollectionPageContainer;
