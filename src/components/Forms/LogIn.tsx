
const LogIn = () => {
    return(
    <form>
    <input
      type="email"
      name="email"
      id="email"
      className="form-control"
      placeholder="Email"
    />
    <input
      type="password"
      name="password"
      id="password"
      className="form-control"
      placeholder="Password"
    />
    <input
      type="submit"
      className="btn btn-success mt-2"
      value="Submit"
    />
  </form>
    );
} 

export default LogIn;