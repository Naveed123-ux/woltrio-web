const UniqueProjectButtonD = (props) => {
  return (
    <div className="UniqueProjectButtonD-input-group-lg mt-4">
      <div className="UniqueProjectButtonD-input-wrapper">
        <button
          className="UniqueProjectButtonD-custom-button pe-md-5 pe-4 me-md-0 me-3"
          style={{ color: props.color }}
        >
          {props.text}
        </button>
        <button className="UniqueProjectButtonD-arrow-btn">
          <i>
            <svg
              style={{ width: "18px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill={props.fill}
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </i>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default UniqueProjectButtonD;
