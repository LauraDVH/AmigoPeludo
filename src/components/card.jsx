import "/src/targetas.css"
export const Cards = ({data}) => {
  return (
      <div className="maincontainer">
          <div className="back">
              <h2>Copywriting</h2>
              <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
          </div>
          <div className="front">
              <div className="image">
              <img src= {data.url} alt="Copywriting" className="rounded-lg" />
                  <h2>Copywriting</h2>
              </div>
          </div>
      </div>
  );
};