import React, { useState } from 'react';
import './MyWork.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowDetails = (index) => {
    setSelectedWork(selectedWork === index ? null : index);
  };

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleProjects((prev) => (prev - 3 > 0 ? prev - 3 : 3));
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        {/* <img src={theme_pattern} alt="Pattern" className="mywork-pattern" /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleProjects).map((work, index) => (
          <div key={index} className="work-card">
            <img
              src={work.w_img} alt="Project" className="work-card-img" />
            <div className="work-card-info">
              <button
                className="show-details-btn" onClick={() => handleShowDetails(index)} >
                {selectedWork === index ? 'Hide Details' : 'Show Details'}
              </button>
              {selectedWork === index && (
                <div className="work-card-details">
                  <p>
                    <strong>Project :</strong> {work.w_name}
                  </p>
                  <p>
                    <a
                      href={work.w_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </p>
                  <p>
                    <strong>Technology Used:</strong> {work.w_additional_info}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        {visibleProjects < mywork_data.length ? (
          <div onClick={handleShowMore} className="show-more-btn">
            <p>Show more</p>
            <img src={arrow_icon} alt="Show more" />
          </div>
        ) : (
          <div onClick={handleShowLess} className="show-less-btn">
            <p>Show less</p>
            <img src={arrow_icon} alt="Show less" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
