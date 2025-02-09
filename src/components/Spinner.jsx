import SpinnerGif from "../assets/spinner-02.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGif}
        alt="Loading..."
        className="img-fluid m-auto mt-5"
        style={{ width: "110px" }}
      />
    </>
  )
}

export default Spinner;