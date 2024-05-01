const Title = () => {
  return <h1>Learn web development</h1>;
};

const MyPara1 = () => {
  return (
    <p>
      Welcome to the MDN learning area. This set of articles aims to provide
      complete beginners to web development with fundamental skills for coding
      websites.
    </p>
  );
};
const MyPara2 = () => {
  return (
    <p>
      The aim is not to take you from "beginner" to "expert" but to take you
      from "beginner" to "comfortable." From there, you should be able to start
      making your way, learning from <a href=""> the rest of MDN</a>, and other
      intermediate to advanced resources that assume a lot of previous
      knowledge.z
    </p>
  );
};
const MyPara3 = () => {
  return (
    <p>
      If you are a complete beginner, web development can be challenging — we
      will hold your hand and provide enough detail for you to feel comfortable
      and learn the topics properly. You should feel at home whether you are a
      student learning web development (on your own or as part of a class), a
      teacher looking for class materials, a hobbyist, or someone who just wants
      to understand more about how web technologies work.
    </p>
  );
};

const MainContainer = () => {
  return (
    <div
      style={{
        // border: "2px solid black",
        maxWidth: "750px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        fontSize: "1.5em",
      }}
    >
      <hr style={{ width: "100%", border: "1px solid #999999" }} />
      <Title />
      <MyPara1 />
      <MyPara2 />
      <MyPara3 />
    </div>
  );
};
ReactDOM.render(<MainContainer />, document.querySelector("#root"));
