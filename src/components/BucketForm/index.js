import React from "react";

function BucketForm(props) {

  //set bucket as typing
  const handleChange = (e) => {
    props.setBucket(e.target.value);
  };

  // adds bucket to list when clicking submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setBucketList((bucketList) => [...bucketList, props.bucket]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add to your bucket list"
        name="text"
        value={props.bucket}
        onChange={handleChange}
      ></input>
      <button>add bucket list item</button>
    </form>
  );
}

export default BucketForm;

