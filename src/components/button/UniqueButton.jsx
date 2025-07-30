const UniqueProjectButton = (props) => {
  return (
    <div className="UniqueProjectButton-input-group UniqueProjectButton-input-group-lg w-100 d-flex">
      <div className="UniqueProjectButton-input-wrapper">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="UniqueProjectButton-custom-button px-2"
          style={{
            color: "black",
            fontSize: "14px", // Fixed typo: '14x' to '14px'
            padding: "8px 14px",
          }}
        >
          {props.text}
        </button>
        <button className="UniqueProjectButton-arrow-btn">
          <svg
            style={{ width: "20px", height: "20px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UniqueProjectButton;
