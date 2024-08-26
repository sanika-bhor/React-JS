function Delete() {
  const onDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm("data deleting.......");
  };

  const onNotDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm("best choice.......");
  };
  return (
    <div className="Home">
      <div class="body">
        <center>
          <h2>ARE YOU DELETING YOUR DATA...😔</h2>
          <button onClick={onDelete}>yes</button>
          <button onClick={onNotDelete}>No</button>
        </center>
      </div>
    </div>
  );
}

export default Delete;
