function ListItem(props) {
    return <li>{props.animal}</li>;
}

function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>;
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>;
    }

    return (
        <ul>
            {props.animals.map(animal => {
                return <ListItem key={animal} animal={animal} />;
            })}
        </ul>
    );
}

function Animals(props) {
    return (
        <div>
            <h1>Animals:</h1>
            <List animals={props.animals} />
        </div>
    );
}

export default Animals;
