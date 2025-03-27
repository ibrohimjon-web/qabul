// HomeCard.jsx
import "./Homecard.css";

const HomeCard = () => {
  return (
    <div className="home-card">
      <h2 className="home-card-h2">Yangiliklar</h2>
      <div className="home-card-wrapper">
        <div className="card1">
          <img
            src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
            alt="News image 1"
          />
          <div>
            <h4>These are short</h4>
            <p>
              But they are all well known in English today, and many of them
              express beautiful thoughts. Of
            </p>
            <a href="/">See more...</a>
          </div>
        </div>

        <div className="card1">
          <img
            src="https://s3-alpha-sig.figma.com/img/67f2/1a19/92a93f1d993b08bed353d4523bfeda69?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jNDb4lxsaRKHfU000~FJesXJoG4dP1zEKcLVt5Z9hriGUKpfujwMxp5RrFUDUcELWE-kfCrRkno~887Mz8XbCbyWtH0RbuQAY4coKRb4EISrYtY5e8zJ982KdiYnU4WA-VL0-JGaL~gwh1ewTRBPe9-fUVCV6pdV51IP4yRWHAwgw3z278M18nr2w-PVc0qrwMqx9J~jW2PZ74lYFMlew5DvzVeRm-T07Zw2hzpECIWxCSwZPZ6naDGSdCf1judhrJ~f1Gv~iNlk~Q0uxWZy1zG1s0DSqonaQGGbYPE1t6z-J71gdrokENWgZtbYcmmhFQK6EkE-K4eCsfrASJ1vlg__"
            alt="News image 2"
          />
          <div>
            <h4>English that we speak today</h4>
            <p>
              English that we speak today is based on what our great, great,
              great, great grandparents spoke before! Of course, not all these
              texts were originally written in English.
            </p>
          </div>
        </div>

        <div className="card1">
          <img
            src="https://s3-alpha-sig.figma.com/img/e59b/07f4/2652d0b9b25c2ece6252ba5aba455c4c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tgSRG0vcPT6cUhmdPMQGWkzuJzQgP3O5vS1IfvuzPisU4m6~atALWQeGeCY4PfvzxHCSUY-jDY1OAwoyQAXNT1uL6Ep~Rw4SPXY6zJINMuZsuHuJAKn4kgZz0IsgISwaKS4Ql5Xzb~fJGFGt7wzqm5OMcFW3fv-lH2bJj3Q7KDHsi72g-ZggpAfgVv8saGgtV0M3ulAUBS-kzvt1KWi7DaCIfgbcv2beo0KAo8sTdH-5V4Xi0XaBHjYgOSLEfARtkIQ2NXPaBMuPwTbYlNydi7ZU0X~CKC7M54fHo8Ny9XCcuwwK1niDrIHVW4e8v8D~bcwoaucmxBxW52XNHeFVRQ__"
            alt="News image 3"
          />
          <div>
            <h4>But they are all well known</h4>
            <p>
              These are short, famous texts in English from classic sources like
              the Shakespeare. Some texts have word definitions and explanations
              to help you. Some of these texts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
