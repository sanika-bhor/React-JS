const Flowers = ({id,title,description,unitprice,like}) => {
    return (
        <div>
            <hr></hr>
            <p>Id:{id}</p>
            <p>Title:{title}</p>
            <p>description:{description}</p>
            <p>unit Price:{unitprice}</p>
            <p>Likes:{like}</p>
            <hr/>
            </div>
    );
}

export default Flowers;