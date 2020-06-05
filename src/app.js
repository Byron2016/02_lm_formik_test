import React from "react";

function MyForm(props) {
  return (
    <form>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
